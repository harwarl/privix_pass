// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract PassByPrivix {
    struct User {
        bytes32 ipfsHash; //IPFS hash for encrypoted password data
        bool exists; // Check if user exists
    }

    mapping (address => User) private s_users;
    mapping (address => uint256) private s_lastUpdateTime;
    
}