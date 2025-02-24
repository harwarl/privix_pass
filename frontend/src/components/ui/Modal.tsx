"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import {
  X,
  Eye,
  EyeOff,
  Lock,
  RefreshCw,
  Check,
  ChevronDown,
  Globe,
  Building,
  Mail,
  Shield,
} from "lucide-react";

interface ModalProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  trigger: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, children, trigger }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Content
              asChild
              className="w-full max-w-md bg-slate-800 p-6 rounded-lg shadow-lg"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                  <Dialog.Title className="text-gray-200 font-medium">
                    {title}
                  </Dialog.Title>
                  <Dialog.Close className="text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded">
                    <X size={20} />
                  </Dialog.Close>
                </div>
                <div className="mt-4 text-gray-300">{children}</div>
              </motion.div>
            </Dialog.Content>
          </div>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
