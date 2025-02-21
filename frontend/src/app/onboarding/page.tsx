import { Box, Card } from "@radix-ui/themes";
import { Shield, Lock, Database } from "lucide-react";
import React from "react";

const Onboarding = () => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-4">
      <div
        style={{
          background: `linear-gradient(to bottom right, rgba(69, 172, 171, 0.1), rgba(71, 136, 172, 0.1))`,
        }}
        className="absolute inset-0"
      />
      <Box maxWidth="480px">
        <Card className="bg-card relative z-10 max-w-md w-full p-8 text-center border-0 rounded-md">
          <div className="flex justify-center mb-6">
            <div className="bg-secondary p-3 rounded-full">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-foreground text-3xl font-bold mb-3">
            Pass By Privix
          </h1>
          <p className="text-textPrimary mb-6">
            Your decentralized gateway to true digital sovereignty
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-2 text-sm">
              <Lock className="text-primary h-4 w-4" />
              <span className="text-textSecondary">
                No central point of failure
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Database className="text-primary h-4 w-4" />
              <span className="text-textSecondary">
                Your data, your control
              </span>
            </div>
          </div>
          <button className="bg-btnPrimary text-foreground w-full py-3 px-6 rounded-2xl font-medium border border-primary transition-colors duration-300 hover:bg-primary">
            Get Started
          </button>
          <p className="text-textSecondary text-xs mt-4">
            Fully decentralized. Forever private.
          </p>
        </Card>
      </Box>
    </div>
  );
};

export default Onboarding;
