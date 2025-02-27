"use client";
import React, { useState } from "react";
import { Box, Card } from "@radix-ui/themes";
import { CheckCircle, Eye, EyeOff, Info, Shield } from "lucide-react";
import { APP_NAME } from "@/data/constants";

const CreatePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Box maxWidth="480px" width="440px">
        <Card className="relative z-10 max-w-md w-full bg-slate-900/50 backdrop-blur border border-slate-700 p-8 rounded-lg ">
          <div className="flex justify-center">
            <div className="bg-secondary px-3 rounded-full">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-foreground text-xl font-bold my-3 text-center">
            {APP_NAME} By Privix
          </h1>

          <div className="bg-teal-500/10 rounded-lg p-4 mb-6">
            <h3 className="text-teal-500 text-base font-medium flex items-center gap-2 mb-2">
              <Info className="w-5 h-5" />
              Create a strong master password
            </h3>
            <ul className="text-slate-300 text-xs pl-5 list-disc text-left">
              <li className="mb-1">Use at least 12 characters</li>
              <li className="mb-1">Include numbers, symbols, and mixed case</li>
              <li className="mb-1">Avoid personal information</li>
              <li>This password cannot be recovered if forgotten</li>
            </ul>
          </div>

          <div className="mb-5">
            <label
              className="block text-slate-400 text-sm mb-2"
              htmlFor="new-password"
            >
              New Master Password
            </label>
            <div className="relative">
              <input
                id="new-password"
                type={showNewPassword ? "text" : "password"}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-3 text-white focus:outline-none focus:border-teal-500"
                placeholder="Create your master password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                className="absolute right-3 top-3 text-slate-400"
                onClick={() => setShowNewPassword(!showNewPassword)}
                type="button"
              >
                {showNewPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            <div className="mt-2 text-xs">
              <span className="text-slate-400">
                Password strength:{" "}
                <strong className="text-teal-500">Strong</strong>
              </span>
              <div className="h-1 bg-slate-700 rounded mt-1 overflow-hidden">
                <div className="h-full w-2/3 bg-teal-500 rounded"></div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label
              className="block text-slate-400 text-sm mb-2"
              htmlFor="confirm-password"
            >
              Confirm Master Password
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                type={showNewPassword ? "text" : "password"}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-3 text-white focus:outline-none focus:border-teal-500"
                placeholder="Confirm your master password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                className="absolute right-3 top-3 text-slate-400"
                onClick={() => setShowNewPassword(!showNewPassword)}
                type="button"
              >
                {showNewPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <button className="w-full bg-teal-500 text-slate-900 font-semibold py-3 x-4 rounded-lg flex justify-center items-center gap-2 hover:bg-teal-400 mb-5">
            <CheckCircle className="w-5 h-5" />
            Create Vault
          </button>
        </Card>
      </Box>
    </div>
  );
};

export default CreatePassword;
