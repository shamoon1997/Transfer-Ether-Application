import { React, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
function Transaction() {
	const { transactions } = useContext(TransactionContext);
	return (
		<div>
			<div className="div-transactionHeading">
				<h3>List of Transactions</h3>
			</div>
			<div className="div-listTransactions">
				{transactions != undefined ? (
					transactions?.map((item, index) => {
						return (
							<div className="transactionListContainer" key={index}>
								<span>Amount: {item.amount}</span>
								<span>Keyword: {item.keyword}</span>
								<span>message: {item.message}</span>
								<span>Receiver: {item.receiver}</span>
								<span>
									timeStamp:{' '}
									{new Date(item.timestamp * 1000).toLocaleDateString('en-US') +
										' ' +
										new Date(item.timestamp * 1000).toLocaleTimeString('en-US')}
								</span>
							</div>
						);
					})
				) : (
					<> </>
				)}
			</div>
		</div>
	);
}

export default Transaction;
