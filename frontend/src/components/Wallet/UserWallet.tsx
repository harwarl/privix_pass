"use client";
import { truncateAddress } from "@/utils/functions";
import { Check, CircleX, Clock, Copy, LogOut } from "lucide-react";
import React, { useState } from "react";
import { useActiveAccount } from "thirdweb/react";
import { useActiveWallet, useDisconnect } from "thirdweb/react";

const UserProfile = () => {
  const account = useActiveAccount();
  const [copied, setCopied] = useState<boolean>(false);
  const wallet = useActiveWallet();
  const { disconnect } = useDisconnect();

  const handleCopy = async () => {
    if (account?.address) {
      await navigator.clipboard.writeText(account.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDisconnect = () => {
    if (wallet) {
      disconnect(wallet);
    }
  };

  return (
    <div>
      <div className="py-2 space-y-2 flex flex-col items-center">
        <div className="h-16 w-16 rounded-full bg-green-500 mb-4 flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-600 to-green-600"></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 mb-1">
            <p className="text-sm font-mono text-slate-300">
              {truncateAddress(account?.address! || "")}
            </p>
            <button onClick={handleCopy} className="p-1 rounded">
              {copied ? (
                <Check size={14} className="text-green-400" />
              ) : (
                <Copy size={14} className="text-slate-400" />
              )}
            </button>
          </div>

          <p className="text-md font-semibold text-white mb-2">0.000 ETH</p>
        </div>

        <div className="flex items-center justify-between w-full p-3 rounded-2xl bg-slate-950">
          <span className="text-xs font-semibold flex items-center justify-center">
            <div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center mr-1">
              <Clock size={14} className="text-slate-300" />
            </div>
            Network
          </span>
          <span className="text-xs text-green-500">Ethereum</span>
        </div>

        <div className="flex items-center justify-center w-full p-3 rounded-2xl bg-yellow-600">
          <span className="text-xs font-semibold flex items-center justify-center">
            <div className="h-6 w-6 rounded-full bg-yellow-800 flex items-center justify-center mr-2">
              <CircleX size={14} className="text-slate-300" />
            </div>
            Wrong Network
          </span>
        </div>

        {/* Disconnect */}
        <button className="flex items-center justify-center w-full p-3 rounded-2xl bg-slate-900 hover:bg-red-500 hover:text-white transition-colors  ">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center">
              <LogOut size={14} className="text-white" />
            </div>
            <span
              className="text-xs font-medium text-red-500"
              onClick={handleDisconnect}
            >
              Disconnect
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
