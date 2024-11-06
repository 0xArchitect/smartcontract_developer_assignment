require("dotenv").config();
const { ethers } = require("hardhat");
const { Token } = require("@uniswap/sdk-core");
const { Pool, Position } = require("@uniswap/v3-sdk");

async function main() {
  const [signer] = await ethers.getSigners();

  // Load deployment info
  const deployInfo = require("../deployment.json");
  const tokenAddress = deployInfo.token;

  // Connect to contracts
  const token = await ethers.getContractAt("MyToken", tokenAddress);
  const router = new ethers.Contract(
    process.env.UNISWAP_ROUTER,
    [
      "function createAndInitializePoolIfNecessary(address token0, address token1, uint24 fee, uint160 sqrtPriceX96) external returns (address pool)",
      "function mint((address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint256 amount0Desired, uint256 amount1Desired, uint256 amount0Min, uint256 amount1Min, address recipient, uint256 deadline)) external returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)",
    ],
    signer
  );

  // Approve router
  const approvalAmount = ethers.parseEther(process.env.INITIAL_TOKEN_LIQUIDITY);
  console.log("Approving router...");
  await token.approve(process.env.UNISWAP_ROUTER, approvalAmount);

  // Create pool parameters
  const poolParams = {
    token0: tokenAddress,
    token1: process.env.WETH_ADDRESS,
    fee: parseInt(process.env.POOL_FEE),
    tickLower: parseInt(process.env.MIN_TICK),
    tickUpper: parseInt(process.env.MAX_TICK),
    amount0Desired: ethers.parseEther(process.env.INITIAL_TOKEN_LIQUIDITY),
    amount1Desired: ethers.parseEther(process.env.INITIAL_ETH_LIQUIDITY),
    amount0Min: 0,
    amount1Min: 0,
    recipient: signer.address,
    deadline: Math.floor(Date.now() / 1000) + 3600,
  };

  console.log("Adding liquidity...");
  const tx = await router.mint(poolParams, {
    value: ethers.parseEther(process.env.INITIAL_ETH_LIQUIDITY),
  });

  await tx.wait();
  console.log("Liquidity added successfully");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
