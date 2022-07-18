import React, { useState, useEffect } from 'react';
import { contractABI, contractAddress } from '../Utils/Constants';
import Web3 from 'web3';
const web3 = new Web3(window.ethereum);
export const TransactionContext = React.createContext();

const { ethereum } = window;

export const TransactionProvider = ({ children }) => {
	const [connectedAccount, setConnectedAccount] = useState('');
	const [transactions, settransactions] = useState([]);
	const [loader, setloader] = useState(false);
	const [formData, setformData] = useState({
		addressTo: '',
		amount: '',
		keyword: '',
		message: '',
	});
	const handleChange = (e, name) => {
		console.log(formData);
		setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
	};
	const getContract = async () => {
		const contract = await new web3.eth.Contract(contractABI, contractAddress);
		console.log(contract);
		return contract;
	};
	const checkIfWalletIsConnected = async () => {
		if (!ethereum) {
			return alert('Please install Metamask! ');
		} else {
			const accounts = await ethereum.request({
				method: 'eth_requestAccounts',
			});
			if (accounts.length) {
				setConnectedAccount(accounts[0]);
			}
		}
	};
	const connectWallet = async () => {
		try {
			if (!ethereum) {
				return alert('Please install Metamask! ');
			} else {
				const accounts = window.ethereum.request({
					method: 'eth_requestAccounts',
				});
				if (accounts.length) {
					setConnectedAccount(accounts[0]);
				}
			}
		} catch (error) {
			throw new Error('No ethereum object');
		}
	};
	const sendTransaction = async () => {
		try {
			if (!ethereum) {
				return alert('Please install Metamask! ');
			}
			setloader(true);
			const contract = await getContract();
			console.log('contract', contract.methods);
			const reciept = await contract.methods
				.addToBlockChain(
					formData.addressTo,
					web3.utils.toWei(formData.amount, 'ether'),
					formData.message,
					formData.keyword
				)
				.send({
					from: connectedAccount,
					value: web3.utils.toWei(formData.amount, 'ether'),
				});
			console.log(reciept);
			if (reciept.status) {
				console.log('set loader turned false');
				setloader(false);
				setformData({
					addressTo: '',
					amount: '',
					keyword: '',
					message: '',
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
	const getTransactionList = async () => {
		const contract = await getContract();
		const transactions = await contract.methods.getAllTransactions().call();
		console.log('transactions', transactions[0].amount);
		let filteredTransactions = [];
		for (let i = 0; i < transactions.length; i++) {
			filteredTransactions.push({
				amount: web3.utils.fromWei(transactions[i].amount, 'ether'),
				keyword: transactions[i].keyword,
				message: transactions[i].message,
				receiver: transactions[i].receiver,
				timestamp: transactions[i].timeStamp,
			});
		}
		console.log(filteredTransactions);
		settransactions(filteredTransactions);
	};
	useEffect(() => {
		getTransactionList();
		checkIfWalletIsConnected();
	}, []);
	return (
		<TransactionContext.Provider
			value={{
				connectWallet,
				connectedAccount,
				formData,
				setformData,
				handleChange,
				sendTransaction,
				loader,
				transactions,
			}}
		>
			{children}
		</TransactionContext.Provider>
	);
};
