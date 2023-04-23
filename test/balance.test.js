const UpgradeableToken = artifacts.require("UpgradeableToken");
const { assert } = require('chai');
const { BN, ether, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

const { web3 } = UpgradeableToken;

const networkId = web3.eth.net.getId();
const deployedAddresses = UpgradeableToken.networks[5777];

contract('UpgradeableToken', async (accounts) => {
    const owner = accounts[0];
    const userA = accounts[1];
    const userB = accounts[2];
    let upgradeableToken;
    const initialSupply = web3.utils.toWei('1000000', 'ether');

    beforeEach(async () => {
        upgradeableToken = await UpgradeableToken.deployed();
    });

    it('should check totalSupply and balances of first three test addresses', async () => {
        // Get totalSupply
        const totalSupply = await upgradeableToken.totalSupply();
        console.log("Total supply:", totalSupply.toString());

        // Get balance of owner
        const ownerBalance = await upgradeableToken.balanceOf(owner);
        console.log("Owner balance:", ownerBalance.toString());

        await upgradeableToken.transfer(userA, 100, { from: owner });
        await upgradeableToken.transfer(userB, 100, { from: owner });

        // Get balance of userA
        const userABalance = await upgradeableToken.balanceOf(userA);
        console.log("User A balance:", userABalance.toString());

        // Get balance of userB
        const userBBalance = await upgradeableToken.balanceOf(userB);
        console.log("User B balance:", userBBalance.toString());
    });
});
