// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import { Script } from 'forge-std/Script.sol';
import { Pass } from "../src/Pass.sol";
import { DevOpsTools } from "../lib/foundry-devops/src/DevOpsTools.sol";
import { console} from "forge-std/console.sol";

contract SetUserIPFSHash  is Script {
    function run () external {
        address mostRecentlyDeployedPass = DevOpsTools.get_most_recent_deployment("Pass", block.chainid);
        setIPFSOnContract(mostRecentlyDeployedPass);
    }

    function setIPFSOnContract (address pass) public {
        vm.startBroadcast();
        Pass(pass).setUserIPFSHash(bytes32(0x8e370808017db73e417b416a5cf34480183b60f7c142ee4bfbe23cd6f28a4416));
        vm.stopBroadcast();
    }
}

contract GetUserIPFSHash  is Script {
    function run () external {
        address mostRecentlyDeployedPass = DevOpsTools.get_most_recent_deployment("Pass", block.chainid);
        getIPFSOnContract(mostRecentlyDeployedPass);
    }

    function getIPFSOnContract (address pass) public view returns (bytes32) {
        return Pass(pass).getUserIpfsHash();
    }
}