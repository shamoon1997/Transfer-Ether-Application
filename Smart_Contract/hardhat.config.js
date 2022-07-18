require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.9',
	networks: {
		ropstan: {
			url: 'https://ropsten.infura.io/v3/a3b23a55e0f04ba6bb97420b6bdd284c',
			accounts: [
				'ac6245e8516e5dd8f6edce46ce6938315ae5a115fbba30e30c5bec5c3a2f9a56',
			],
		},
	},
};
