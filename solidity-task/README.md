Here's a quick-start guide for running the project:


# Quick Start Guide - ERC-20 Token with Uniswap V3

## 1. Initial Setup (One Time)

```markdown
# Clone and install
git clone 
npm install
```

## 2. Configure Environment

Create `.env` file:

```env
GOERLI_RPC_URL=your_alchemy_or_infura_url
PRIVATE_KEY=your_wallet_private_key
ETHERSCAN_API_KEY=your_etherscan_key

TOKEN_NAME=MyToken
TOKEN_SYMBOL=MTK
TOKEN_CAP=1000000
INITIAL_MINT=500000

UNISWAP_ROUTER=0xE592427A0AEce92De3Edee1F18E0157C05861564
WETH_ADDRESS=0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6
```

## 3. Test Locally

```bash
# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test
```

## 4. Deploy & Add Liquidity

```bash
# Deploy token
npx hardhat run scripts/deploy.js --network goerli

# Add Uniswap liquidity
npx hardhat run scripts/addLiquidity.js --network goerli
```

## Requirements

- Node.js v14+
- Goerli ETH in wallet
- Alchemy/Infura API key

## Common Issues

- **Error: Invalid RPC URL** → Check GOERLI_RPC_URL in .env
- **Error: Insufficient funds** → Get Goerli ETH from faucet
- **Dependency errors** → Run `npm install --force`
