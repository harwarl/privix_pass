"use client";
import { THIRDWEB_CLIENT } from "@/services/web3";
import { Box, Card, Code } from "@radix-ui/themes";
import {
  Shield,
  Lock,
  Database,
  LogOut,
  Copy,
  CircleArrowRight,
} from "lucide-react";
import { NextPage } from "next";
import React, { useState } from "react";
import {
  ConnectButton,
  useActiveAccount,
  useActiveWallet,
  useDisconnect,
} from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const account = useActiveAccount();
  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();

  const handleDisconnect = () => {
    if (wallet) {
      disconnect(wallet);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center p-4 font-[family-name:var(--font-tomorrow)]">
      <Box maxWidth="480px">
        <Card className="relative z-10 max-w-md w-full bg-slate-900/50 backdrop-blur border border-slate-700 p-8 text-center rounded-lg">
          <div className="flex justify-center mb-6">
            <div className="bg-secondary p-3 rounded-full">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-foreground text-3xl font-bold my-4">
            Pass By Privix
          </h1>
          <p className="text-textPrimary mb-6">
            Your decentralized gateway to true digital sovereignty
          </p>
          <div className="space-y-4 mb-8 text-sm">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
              <Lock className="text-primary h-4 w-4" />
              <span className="text-textSecondary">
                No central point of failure
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
              <Database className="text-primary h-4 w-4" />
              <span className="text-textSecondary">
                Your data, your control
              </span>
            </div>
          </div>
          {account ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                <Code className="font-mono text-primary">
                  {account.address.slice(0, 6)}...{account.address.slice(-6)}
                </Code>
                <div className="flex gap-2">
                  {/* <button className="p-2 rounded-lg ">
                    <Copy className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                  </button> */}
                  <button
                    onClick={handleDisconnect}
                    className="p-2 rounded-lg "
                  >
                    <LogOut className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <ConnectButton
              client={THIRDWEB_CLIENT}
              wallets={[
                createWallet("io.metamask"),
                createWallet("com.coinbase.wallet"),
                createWallet("me.rainbow"),
              ]}
              showAllWallets={false}
              connectButton={{
                label: "Connect Wallet",
                style: {
                  fontSize: "16px",
                  backgroundColor: "var(--btnPrimary)",
                  color: "var(--foreground)",
                  width: "100%",
                  padding: "10px 24px",
                  borderRadius: "10px",
                  fontWeight: "500",
                  border: "1px solid var(--primary)",
                  transition: "background-color 0.3s ease-in-out",
                },
              }}
            />
          )}

          {account ? (
            <div className="my-3">
              <motion.button
                initial={{ y: 0 }}
                animate={isHovered ? { y: 0 } : { y: [0, -5, 0] }}
                transition={{
                  repeat: isHovered ? 0 : Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => console.log("Clicked")}
              >
                <CircleArrowRight className="h-10 w-10 text-primary" />
              </motion.button>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-xs text-primary"
              >
                Click to go to dashboard
              </motion.p>
            </div>
          ) : null}

          <p className="text-textSecondary text-xs mt-4">
            Fully decentralized. Forever private.
          </p>
        </Card>
      </Box>
    </div>
  );
};

export default Home;
