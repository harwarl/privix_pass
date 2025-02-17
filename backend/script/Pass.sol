// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract PassByPrivix {
    /*Errors*/
    error PassByPrivix__UserDoesNotExist();

    /*Type Declarations*/
    struct User {
        bytes32 ipfsHash; //IPFS hash for encrypoted password data
        bool exists; // Check if user exists
    }

    mapping (address => User) private s_users;
    mapping (address => uint256) private s_lastTimeStamp;

    uint256 private i_interval;

    /*Events*/
    event UserRegistered(address indexed user, bytes32 ipfsHash);
    event IPFSHashUpdated(address indexed user, bytes32 oldHash, bytes32 newHash);


}