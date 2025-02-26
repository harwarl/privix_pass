"use client";

import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

interface AccountModalProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
}

const AccountModal: React.FC<AccountModalProps> = ({ children, trigger }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40" />
        <Dialog.Content
          asChild
          className="fixed right-12 top-16 w-56 max-w-sm bg-slate-800 rounded-xl shadow-xl z-50 p-4"
          // className="w-full max-w-md bg-slate-900 p-6 rounded-lg shadow-lg"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center pb-3">
              <Dialog.Title></Dialog.Title>
              <Dialog.Close className="text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded">
                <X size={20} />
              </Dialog.Close>
            </div>
            <div className="mt-2 text-gray-300">{children}</div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AccountModal;
