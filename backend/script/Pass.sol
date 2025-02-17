// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract PassByPrivix is ReentrancyGuard {
    /*Errors*/
    error PassByPrivix__UserDoesNotExist();
    error PassByPrivix__HashCannotBeEmpty();
    error PassByPrivix__UpdateCantBeDoneNow();

    /*Type Declarations*/
    struct User {
        bytes32 ipfsHash; //IPFS hash for encrypted password data
        bool exists; // Check if user exists
    }

    mapping (address => User) private s_users; 
    mapping (address => uint256) private s_lastTimeStamp;

    uint256 private i_interval;

    /*Events*/
    event UserRegistered(address indexed user, bytes32 ipfsHash);
    event IPFSHashUpdated(address indexed user, bytes32 oldHash, bytes32 newHash);

    constructor(
        uint256 interval
    ){
        i_interval = interval;
    }

    /**
     * @param _ipfsHash The Hash from the saved Password on IPFS
     */
    function setUserIPFSHash(bytes32 _ipfsHash) public nonReentrant {
        if(_ipfsHash == bytes32(0)){
            revert PassByPrivix__HashCannotBeEmpty();
        }
        if( block.timestamp < s_lastTimeStamp[msg.sender] + i_interval){
            revert PassByPrivix__UpdateCantBeDoneNow();
        }
        bytes32 oldHash = s_users[msg.sender].ipfsHash;
        s_users[msg.sender] = User({
            ipfsHash: _ipfsHash,
            exists: true
        });
        s_lastTimeStamp[msg.sender] = block.timestamp;
        emit IPFSHashUpdated(msg.sender, oldHash, _ipfsHash);
    }

    function getUserIpfsHash(address _user) public view returns (bytes32) {
        if(!s_users[_user].exists) {
            revert PassByPrivix__UserDoesNotExist();
        }
        return s_users[_user].ipfsHash;
    }

    function getInterval() external view returns (uint256) {
        return i_interval;
    }

    function getUser() external view returns (User memory) {
        if(!s_users[msg.sender].exists){
            revert PassByPrivix__UserDoesNotExist();
        }
        return s_users[msg.sender];
    }

    function getLastTimeStamp() external view returns (uint256) {
        return s_lastTimeStamp[msg.sender];
    }
}