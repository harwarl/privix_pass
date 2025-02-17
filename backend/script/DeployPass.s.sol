// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import { Pass } from '../src/Pass.sol';
import { Script } from 'forge-std/Script.sol';

contract DeployPass is Script {
    Pass pass;
    function run() external returns (Pass) {
        vm.startBroadcast();
        pass = new Pass(15 minutes);
        vm.stopBroadcast();
        return pass;
    }
}