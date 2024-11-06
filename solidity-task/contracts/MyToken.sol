// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20Capped, Ownable {
    constructor(
        string memory name,
        string memory symbol,
        uint256 cap
    ) ERC20(name, symbol) ERC20Capped(cap) Ownable(msg.sender) {
        // Mint initial supply to deployer
        _mint(msg.sender, cap / 2);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}