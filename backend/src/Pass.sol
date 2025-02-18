// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import { console} from "forge-std/console.sol";

contract Pass is ReentrancyGuard {
    /*Errors*/
    error Pass__UserDoesNotExist();
    error Pass__HashCannotBeEmpty();
    error Pass__UpdateCantBeDoneNow();
	error Pass__NotAuthorized();

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
    event UserRemoved(address indexed user);

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
    function setUserIPFSHash(bytes32 _ipfsHash, address _user) public onlyAdmin nonReentrant {
        if(_ipfsHash == bytes32(0)){
            revert Pass__HashCannotBeEmpty();
        }
        if (s_lastTimeStamp[_user] != 0 && block.timestamp < (s_lastTimeStamp[_user] + i_interval)) {
            revert Pass__UpdateCantBeDoneNow();
        }
        bool isNewUser = !s_users[_user].exists;
        bytes32 oldHash = s_users[_user].ipfsHash;
        s_users[_user].ipfsHash = _ipfsHash;
        s_users[_user].exists = true;
        s_lastTimeStamp[_user] = block.timestamp;

        if(isNewUser){
            emit UserRegistered(_user, _ipfsHash);
        }else {
            emit IPFSHashUpdated(_user, oldHash, _ipfsHash);
        }
    }

    /**
     * @param _user This is the users address
     */
    function getUserIpfsHash(address _user) public view returns (bytes32) {
        if(msg.sender != _user){
            revert Pass__NotAuthorized();
        }
        if(!s_users[_user].exists){
            revert Pass__UserDoesNotExist();
        }
        return s_users[_user].ipfsHash;
    }

    function removeUsers(address _user) external onlyAdmin {
        if(!s_users[_user].exists) {
            revert Pass__UserDoesNotExist();
        }
        
        delete s_users[_user];
        delete s_lastTimeStamp[_user];

        emit UserRemoved(_user);
    }

    function updateInterval(uint256 _newInterval) external onlyAdmin {
        require(_newInterval > 0 && _newInterval <= 365 days, "Invalid Interval");
        i_interval = _newInterval;
    }

    /* GETTER FUNCTIONS */
    function getInterval() external view returns (uint256) {
        return i_interval;
    }

    function getUser() external view returns (bytes32) {
        if(!s_users[msg.sender].exists){
            revert Pass__UserDoesNotExist();
        }
        return s_users[msg.sender].ipfsHash;
    }

    function getLastTimeStamp() external view returns (uint256) {
        return s_lastTimeStamp[msg.sender];
    }

    function getAdmin() external  onlyAdmin view returns (address) {
        return s_admin;
    }
}