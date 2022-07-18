//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transaction {
    uint256 transactionCounter;
    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timeStamp;
        string keyword;
    }
    TransferStruct[] transactions;
    event Transfer(
        address _from,
        address _to,
        uint256 _amount,
        string message,
        uint256 timeStamp,
        string keyword
    );

    function addToBlockChain(
        address payable _receiver,
        uint256 _amount,
        string memory _message,
        string memory _keyword
    ) public payable {
        _receiver.transfer(_amount);
        transactionCounter += 1;
        transactions.push(
            TransferStruct(
                msg.sender,
                _receiver,
                _amount,
                _message,
                block.timestamp,
                _keyword
            )
        );
        emit Transfer(
            msg.sender,
            _receiver,
            _amount,
            _message,
            block.timestamp,
            _keyword
        );
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCounter;
    }
}
