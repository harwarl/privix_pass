// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract PassByPrivix is ReentrancyGuard {
    /*Errors*/
    error PassByPrivix__UserDoesNotExist();
    error PassByPrivix__HashCannotBeEmpty();
    error PassByPrivix__UpdateCantBeDoneNow();

    /*Owner */
    address private s_admin;
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
        require(interval > 0 && interval <= 365 days, "Invalid interval");
        i_interval = interval;
        s_admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == s_admin, "Only Admin can call this function");
        _;
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
        bool isNewUser = !s_users[msg.sender].exists;
        bytes32 oldHash = s_users[msg.sender].ipfsHash;
        s_users[msg.sender].ipfsHash = _ipfsHash;
        s_users[msg.sender].exists = true;
        s_lastTimeStamp[msg.sender] = block.timestamp;
        if(isNewUser){
            emit UserRegistered(msg.sender, _ipfsHash);
        }else {
            emit IPFSHashUpdated(msg.sender, oldHash, _ipfsHash);
        }
    }

    /**
     * @param _user This is the users address
     */
    function getUserIpfsHash(address _user) public view returns (bytes32) {
        if(!s_users[_user].exists) {
            revert PassByPrivix__UserDoesNotExist();
        }
        return s_users[_user].ipfsHash;
    }

    function updateInterval(uint256 _newInterval) external onlyAdmin {
        require(_newInterval > 0 && _newInterval <= 365 days, "Invalid Interval");
        i_interval = _newInterval;
    }

    /* GETTER FUNCTIONS */
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