const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
    let MyToken, token, owner, addr1;
    const CAP = ethers.parseEther("1000000");

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();
        MyToken = await ethers.getContractFactory("MyToken");
        token = await MyToken.deploy("MyToken", "MTK", CAP);
    });

    it("Should set the correct token name and symbol", async function () {
        expect(await token.name()).to.equal("MyToken");
        expect(await token.symbol()).to.equal("MTK");
    });

    it("Should respect the cap when minting", async function () {
        await expect(
            token.mint(addr1.address, CAP.add(1))
        ).to.be.revertedWith("ERC20Capped: cap exceeded");
    });
});