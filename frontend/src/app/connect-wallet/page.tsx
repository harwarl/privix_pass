import { Box, Card } from "@radix-ui/themes";
import React from "react";

const ConnectWallet = () => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-4">
      <div
        style={{
          background: `linear-gradient(to bottom right, rgba(69, 172, 171, 0.1), rgba(71, 136, 172, 0.1))`,
        }}
        className="absolute inset-0"
      />
      <Box maxWidth="480px">
        <Card className="bg-card relative z-10 max-w-md w-full text-center border-0">
          <button className="btn btn-primary">Connect Wallet</button>
          {/* <button className="btn btn-primary">Sign Message</button> */}
        </Card>

        <Card className="bg-card relative z-10 max-w-sm w-full text-center border-0 rounded-lg space-y-2 mt-4 p-4">
          <div className="flex align-center justify-between mb-4 gap-8 font-bold">
            <span>Wallet Connected</span>
            <button className="text-primary">Disconnect</button>
          </div>
          <div className="flex align-center justify-between mb-2 gap-8 text-sm">
            <span>Address</span>
            <span className="font-bold">{"0x1234....8978"}</span>
          </div>
          <div className="flex align-center justify-between mb-2 gap-8 text-sm">
            <span>Balance</span>
            <span className="font-bold">0.0045 ETH</span>
          </div>
          <div className="text-sm bg-secondary border border-secondary rounded-lg py-2 px-3 font-bold ">
            <div className="flex justify-between">
              <span>Network</span>
              <span className="text-primary">Ethereum Mainnet</span>
            </div>
          </div>
        </Card>
      </Box>
    </div>
  );
};

export default ConnectWallet;
