require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  // Deploy Token
  const MyToken = await ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy(
    process.env.TOKEN_NAME,
    process.env.TOKEN_SYMBOL,
    ethers.parseEther(process.env.TOKEN_CAP)
  );

  await token.deployed();
  console.log("Token deployed to:", token.address);

  // Save deployment info
  const deployInfo = {
    token: token.address,
    network: network.name,
    timestamp: new Date().toISOString(),
  };

  // Write deployment info to file
  const fs = require("fs");
  fs.writeFileSync("deployment.json", JSON.stringify(deployInfo, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
