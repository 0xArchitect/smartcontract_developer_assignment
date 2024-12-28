# Blockchain Developer Technical Test

Welcome to the technical test for the Blockchain Developer role. This test is designed to assess your proficiency in **Solidity** and **Rust**, your ability to design and implement smart contracts, and your understanding of blockchain development best practices. Please follow the instructions below to complete the test.

---

## **Part 1: Solidity Task**
### **Objective:** Create a simple staking smart contract on Ethereum.

### **Requirements:**
1. **Write a Solidity smart contract** that:
   - Allows users to stake ERC20 tokens.
   - Rewards stakers with additional tokens proportional to the staking duration.
   - Implements the following functions:
     - `stake(uint256 amount)`: Allows users to stake a specified amount of ERC20 tokens.
     - `withdraw()`: Lets users withdraw their staked tokens and rewards.
     - `getReward(address user)`: Returns the reward amount for a specific user.
   - Adds a modifier to ensure rewards can only be claimed after a staking period of at least 7 days.

2. **Use OpenZeppelin's ERC20** standard for token handling.

3. **Ensure the contract:**
   - Is secure against common vulnerabilities like reentrancy and overflows.
   - Has clear error messages using `require`.

### **Deliverables:**
- Solidity contract code (`StakingContract.sol`).
- Test cases written in JavaScript/TypeScript using Hardhat or Truffle.

---

## **Part 2: Rust Task**
### **Objective:** Implement a basic NFT minting smart contract on Solana.

### **Requirements:**
1. **Write a Rust smart contract** that:
   - Allows users to mint unique NFTs.
   - Ensures each NFT has a unique ID and metadata (e.g., title, description, URI).
   - Implements the following functions:
     - `mint_nft(owner: Pubkey, metadata: String)`: Mints an NFT for the specified owner with given metadata.
     - `get_nft(id: u64)`: Retrieves NFT details by ID.
     - `transfer_nft(id: u64, new_owner: Pubkey)`: Transfers ownership of an NFT.

2. **Use the Anchor framework** for contract development.

3. **Ensure:**
   - Ownership validation before transfer.
   - Unique IDs for each minted NFT.

### **Deliverables:**
- Rust contract code (`nft_minting.rs`).
- Test cases written in Rust using the Anchor framework.

---

## **Evaluation Criteria**
1. **Code Quality:** Clean, readable, and follows best practices.
2. **Functionality:** The contract fulfills all requirements.
3. **Security:** Proper handling of edge cases and vulnerabilities.
4. **Testing:** Comprehensive test coverage for all functions.
5. **Documentation:** Brief explanation of your design choices, contract workflow, and how to run tests.

---

## **Submission Instructions**
1. Zip the project files for each part (`solidity_task` and `rust_task`) along with a `README.md` for instructions.
2. Submit via email or upload to a GitHub repository and share the link.

### **Deadline:**
[Specify the Deadline Here]

Good luck! 🚀
