"use client";
import { THIRDWEB_CLIENT } from "@/services/web3";
import { Box, Card, Code } from "@radix-ui/themes";
import { Shield, Lock, Database, LogOut, CircleArrowRight } from "lucide-react";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { truncateAddress } from "@/utils/functions";
import {
  ConnectButton,
  useActiveAccount,
  useActiveWallet,
  useDisconnect,
} from "thirdweb/react";

import { createWallet } from "thirdweb/wallets";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { APP_NAME } from "@/data/constants";
import { ethereum, sepolia } from "thirdweb/chains";

const Home: NextPage = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [signature, setSignature] = useState<string | null>(null);
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  const { disconnect } = useDisconnect();
  const router = useRouter();

  const handleDisconnect = () => {
    if (wallet) {
      disconnect(wallet);
    }
  };

  const handleSignMessage = async () => {
    try {
      const message = `Welcome to My dApp! Sign this message to verify your wallet.\n\nTimestamp: ${new Date()}`;
      const sign = await wallet?.getAccount()?.signMessage({ message });
      if (sign) {
        setSignature(sign);
      }
    } catch (error) {
      console.log(error);
      setSignature(null);
    }
  };

  useEffect(() => {
    const switchChainIfNeeded = async () => {
      if (account?.address && wallet) {
        try {
          const chain = wallet.getChain();
          console.log({ name: chain?.name });
          if (chain?.id !== ethereum.id) {
            await wallet.switchChain(ethereum);
          }
        } catch (error) {
          console.error("Error switching chain:", error);
        }
      }
    };

    switchChainIfNeeded();
    handleSignMessage();
  }, [account?.address, wallet]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <Box maxWidth="480px">
        <Card className="relative z-10 max-w-md w-full bg-slate-900/50 backdrop-blur border border-slate-700 p-8 text-center rounded-lg">
          <div className="flex justify-center mb-6">
            <div className="bg-secondary p-3 rounded-full">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-foreground text-3xl font-bold my-4">
            {APP_NAME} By Privix
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
                  {truncateAddress(account?.address!)}
                </Code>
                <div className="flex gap-2">
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
              connectModal={{
                showThirdwebBranding: false,
              }}
              chains={[ethereum, sepolia]}
              connectButton={{
                label: "Connect Wallet",
                style: {
                  fontSize: "16px",
                  backgroundColor: "var(--primary)",
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
            signature ? (
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
                  onClick={() => router.push("/dashboard")}
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
            ) : (
              <button
                className="my-3 px-4 py-3 w-full bg-teal-500 border-0 rounded-lg text-white font-semibold hover:bg-teal-600 transition-colors"
                onClick={handleSignMessage}
              >
                Sign Wallet
              </button>
            )
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
