// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import { Test} from "forge-std/Test.sol";
import { DeployPass } from '../script/DeployPass.s.sol';
import { Pass } from '../src/Pass.sol';
import { console} from "forge-std/console.sol";

contract PassTest is Test {
    DeployPass public deployer;
    Pass public pass;

    address public USER1 = makeAddr("USER1");
    address public USER2 = makeAddr("USER2");

    uint256 public constant INTERVAL = 2 minutes;
    uint256 public constant IPFSHASH1 = 0x8e370808017db73e417b416a5cf34480183b60f7c142ee4bfbe23cd6f28a4416;
    uint256 public constant IPFSHASH2 = 0xfb40449f5746ca7a2c53777f38c1f0177ca695b60c9eb060974ef828f08388ca;

    /*Events*/
    event UserRegistered(address indexed user, bytes32 ipfsHash);
    event IPFSHashUpdated(address indexed user, bytes32 oldHash, bytes32 newHash);
    event UserRemoved(address indexed user);

    function setUp() external {
        deployer = new DeployPass();
        pass = deployer.run();
    }

    function test_DeployedWithCorrectInterval() public view {
        assertEq(pass.getInterval(), INTERVAL);
    }

    /*//////////////////////////////////////////////////////////////
                             SET IPFS HASH
    //////////////////////////////////////////////////////////////*/
    function test_EmitsUserRegisteredWhenNewUserSetsIPFSHash() public {
        // vm.warp(block.timestamp + pass.getInterval() + 1);
        vm.expectEmit(true, false, false, true);

        bytes32 hash = keccak256(abi.encodePacked(IPFSHASH1));
        vm.prank(USER1);
        emit UserRegistered(USER1, hash);
        pass.setUserIPFSHash(hash);
    }

    function test_EmitsIPFShashUpdatedWhenAnExistingUserUpdatesHash() public {
        vm.prank(USER1);
        bytes32 hash = keccak256(abi.encodePacked(IPFSHASH1));
        pass.setUserIPFSHash(hash);

        vm.warp(block.timestamp + pass.getInterval() + 1);
        bytes32 hash2 = keccak256(abi.encodePacked(IPFSHASH2));
        
        vm.prank(USER1);
        vm.expectEmit(true, false, false, true);
        emit IPFSHashUpdated(USER1, hash, hash2);
        pass.setUserIPFSHash(hash2);
    }

    function test_PassRevertsWhenIPFSHashIsEmpty() public {
        vm.prank(USER1);

        vm.expectRevert(Pass.Pass__HashCannotBeEmpty.selector);
        pass.setUserIPFSHash(bytes32(0));
    }

    function test_PassRevertsWhenTheIntervalHasNotBeCompleted()  public {
        vm.prank(USER1);
        bytes32 hash = keccak256(abi.encodePacked(IPFSHASH1));
        pass.setUserIPFSHash(hash);

        bytes32 hash2 = keccak256(abi.encodePacked(IPFSHASH2));
        vm.expectRevert(Pass.Pass__UpdateCantBeDoneNow.selector);
        vm.prank(USER1);
        pass.setUserIPFSHash(hash2);
    }

    /*//////////////////////////////////////////////////////////////
                             GET IPFS HASH
    //////////////////////////////////////////////////////////////*/
    function test_GetUserIPFSHash() public {
        bytes32 expectedHash = keccak256(abi.encodePacked(IPFSHASH1));
        vm.prank(USER1);
        pass.setUserIPFSHash(expectedHash);
        vm.stopPrank();

        vm.prank(USER1);
        bytes32 actualHash = pass.getUserIpfsHash();
        assertEq(expectedHash, actualHash);
    }

    function test_RevertWhenUserDoesNotExist() public {
        vm.prank(USER2);
        vm.expectRevert(Pass.Pass__UserDoesNotExist.selector);
        pass.getUserIpfsHash();
    }

     /*//////////////////////////////////////////////////////////////
                        ONLY ADMIN FUNCTIONS
    //////////////////////////////////////////////////////////////*/
    function test_RevertWhenNonAdminUsersUpdateInterval() public {
        vm.prank(USER1);
        vm.expectRevert();
        pass.updateInterval(5 minutes);
    }

    function test_RevertWhenIntervalIsTooLow() public {
        vm.expectRevert();
        pass.updateInterval(456 days);
    }

    function test_UpdatesIntervalWhenCalledByAdmin() public {
        uint256 new_interval = 1 minutes;
        vm.prank(address(msg.sender));
        pass.updateInterval(new_interval);
        assertEq(new_interval, pass.getInterval());
    }   

    function test_GetUserRevertsIfUserDoesNotExist() public {
        vm.prank(USER1);
        vm.expectRevert(Pass.Pass__UserDoesNotExist.selector);
        pass.getUser();
    }

    function test_GetUserIfUserExists() public {
        
        bytes32 expectedHash = keccak256(abi.encodePacked(IPFSHASH1));
        vm.prank(USER1);
        pass.setUserIPFSHash(expectedHash);
        vm.stopPrank();
        
        vm.prank(USER1);
        bytes32 existingUserIPFSHash =  pass.getUser();
        assertEq(expectedHash, existingUserIPFSHash);
    }
    
    function test_RevertsWhenNonAdminCallsGetAdmin() public {
        vm.prank(USER1);

        vm.expectRevert();
        pass.getAdmin();
    }

    function test_ReturnsAdminWhenAdminCallsGetAdmin() public {
        vm.prank(msg.sender);
        pass.getAdmin();
    }

    function test_ReturnsLastTimeStampForUser() public {
        vm.prank(USER1);
    
        bytes32 expectedHash = keccak256(abi.encodePacked(IPFSHASH1));
        pass.setUserIPFSHash(expectedHash);

        vm.prank(USER1);
        assertNotEq(0, pass.getLastTimeStamp());
    }

    /*//////////////////////////////////////////////////////////////
                              REMOVE USERS
    //////////////////////////////////////////////////////////////*/
    function test_ShouldAllowUsersToDeleteDetails() public {
        vm.prank(USER1);
        pass.setUserIPFSHash(keccak256(abi.encodePacked(IPFSHASH1)));

        vm.expectEmit(true, false, false, false);
        emit UserRemoved(USER1);
        vm.prank(USER1);
        pass.removeUser();
    }
}