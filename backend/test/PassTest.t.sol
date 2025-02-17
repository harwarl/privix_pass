// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import { Test} from "forge-std/Test.sol";
import { DeployPass } from '../script/DeployPass.s.sol';
import { Pass } from '../src/Pass.sol';

contract PassTest is Test {
    DeployPass public deployer;
    Pass public pass;

    address public USER1 = makeAddr("USER1");
    address public USER2 = makeAddr("USER2");

    function setUp() external {
        deployer = new DeployPass();
        pass = deployer.run();
    }
}