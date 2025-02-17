// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import { Pass } from '../src/Pass.sol';
import { Script } from 'forge-std/Script.sol';

contract DeployPass is Script {
    Pass pass;
    uint256 public constant INTERVAL = 2 minutes;

    function run() external returns (Pass) {
        vm.startBroadcast();
        pass = new Pass(INTERVAL);
        vm.stopBroadcast();
        return pass;
    }

}