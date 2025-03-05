"use client";
import { navData } from "@/data/data";
import { Shield, Menu, X, LogOut } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { APP_NAME } from "@/data/constants";
import { useActiveAccount } from "thirdweb/react";
import useClickOutside from "@/utils/hooks/useClickOutside";
import { truncateAddress } from "@/utils/functions";
import AccountModal from "@/components/UI/AccountModal";
import UserProfile from "@/components/Wallet/UserProfile";
import { useRouter, usePathname } from "next/navigation";
import WalletConnectButton from "@/components/ThirdWeb/ConnectButton";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const account = useActiveAccount();
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setMenuOpen(false));

  // useEffect(() => {
  //   if (!account || !account?.address) {
  //     router.push("/");
  //   }
  // }, [account, router]);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 bg-slate-800 border-b border-slate-700 p-4 z-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-teal-500" />
            <span className="text-lg font-bold text-white">{APP_NAME}</span>
          </div>
          <div className="flex gap-3">
            {account ? (
              <AccountModal
                trigger={
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-700 rounded-full">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-green-500"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <span className="text-xs text-slate-300">
                      {truncateAddress(account?.address || "")}
                    </span>
                    <LogOut size={16} className="text-slate-300" />
                  </div>
                }
              >
                <UserProfile />
              </AccountModal>
            ) : (
              <WalletConnectButton
                styles={{
                  display: "flex",
                  alignItems: "center",
                  padding: "3px 8px",
                  backgroundColor: "rgb(51 65 85)",
                  color: "rgb(203 213 225)",
                  borderRadius: "9999px",
                  fontWeight: "500",
                  fontSize: "14px",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease-in-out",
                }}
              />
            )}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-slate-300 hover:text-slate-100 ml-auto transition-all duration-200"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 bg-slate-900/80 z-10 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={menuRef}
          className={`fixed top-16 left-0 z-40 w-64 h-screen bg-slate-800 border-r border-slate-700 p-4 transform transition-transform duration-400 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="space-y-2">
            {navData.map((item, i) => {
              const isActive = pathname === item.url;
              return (
                <Link
                  key={i}
                  href={item.url}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-slate-700 text-white"
                      : "text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {React.cloneElement(item.icon, { size: 20 })}
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-8 mt-16 mx-auto max-w-[1600px] ">{children}</main>
    </div>
  );
};

export default Layout;
