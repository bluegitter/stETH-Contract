// migrations/2_deploy_upgradeable_token.js

const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const Web3 = require('web3');
const web3 = new Web3();

const UpgradeableToken = artifacts.require('UpgradeableToken');

module.exports = async function (deployer) {
    const initialSupply = web3.utils.toWei('1000000', 'ether');
    const instance = await deployProxy(UpgradeableToken, ['Stake ETH', 'stETH', initialSupply], { deployer, initializer: 'initialize' });
    console.log('Deployed', instance.address);
};
