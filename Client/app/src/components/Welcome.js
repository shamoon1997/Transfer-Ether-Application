import { React, useContext, useState } from 'react';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import TakeInput from './TakeInput';
import Loader from './Loader';
import { TransactionContext } from '../context/TransactionContext';

function Welcome() {
	const {
		connectWallet,
		connectedAccount,
		formData,
		setformData,
		handleChange,
		sendTransaction,
		loader,
	} = useContext(TransactionContext);
	const handleSubmit = (e) => {
		const { addressTo, amount, keyword, message } = formData;
		e.preventDefault();
		if (addressTo && amount && keyword && message) {
			sendTransaction();
		}
	};
	return (
		<div className="welcome-container">
			<h1>Send Crypto Across the World</h1>
			<p>
				Explore the Crypto world. Buy and sell cryptocurriencies easily on
				Krypto.
			</p>
			{!connectedAccount ? (
				<button className="btn-connect-wallet" onClick={connectWallet}>
					Connect Wallet
				</button>
			) : (
				<></>
			)}

			<div className="features">
				<div className="features-1">Reliability</div>
				<div className="features-2">Security</div>
				<div className="features-3">Ethereum</div>
				<div className="features-below-1">Web 3.0</div>
				<div className="features-below-2">Low fees</div>
				<div className="features-below-3">Blockchain</div>
			</div>
			<div className="ethereum-container">
				<div className="ethereum-logo">
					<SiEthereum />
				</div>
				<div className="info-logo">
					<BsInfoCircle />
				</div>
				<div className="lower-address">
					<p>{connectedAccount}</p>
					<h2>Ethereum</h2>
				</div>
			</div>
			<div className="form-input">
				<TakeInput
					placeholder={'Address To'}
					name={'Address to'}
					type={'text'}
					handleChange={(e) => handleChange(e, 'addressTo')}
				/>

				<TakeInput
					placeholder={'Amount (ETH)'}
					name={'amount'}
					type={'number'}
					handleChange={(e) => handleChange(e, 'amount')}
				/>

				<TakeInput
					placeholder={'Keyword (GIF)'}
					name={'keyword'}
					type={'text'}
					handleChange={(e) => handleChange(e, 'keyword')}
				/>

				<TakeInput
					placeholder={'Message'}
					name={'message'}
					type={'text'}
					handleChange={(e) => handleChange(e, 'message')}
				/>
				{loader ? (
					<Loader />
				) : (
					<button
						className="btn-connect-wallet btn-send"
						onClick={handleSubmit}
					>
						Send Now
					</button>
				)}
			</div>
		</div>
	);
}

export default Welcome;
