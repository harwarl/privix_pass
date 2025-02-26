"use client";
import { truncateAddress } from "@/utils/functions";
import { Check, CircleX, Clock, Copy, LogOut } from "lucide-react";
import React, { useState } from "react";
import { useActiveAccount } from "thirdweb/react";

const UserProfile = () => {
  const account = useActiveAccount();
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    if (account?.address) {
      await navigator.clipboard.writeText(account.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
            <span className="text-xs font-medium text-red-500">Disconnect</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;

// import React, { useState, useRef, useEffect } from "react";
// import { User, LogOut, Clock, Copy, X, ChevronRight } from "lucide-react";

// const WalletPage = () => {
//   const [profileOpen, setProfileOpen] = useState(false);

//   // Truncate wallet address for display
//   const truncateAddress = (address: string) => {
//     return `${address.substring(0, 6)}...${address.substring(
//       address.length - 4
//     )}`;
//   };

//   return (
//     <div className="min-h-screen bg-slate-900">
//       {/* Sidebar code remains the same */}
//       <div className="fixed left-0 top-0 h-screen w-64 bg-slate-800 border-r border-slate-700 p-4">
//         {/* Existing sidebar code... */}
//       </div>

//       {/* Main Content */}
//       <div className="ml-64 p-8">
//         {/* Header with User Profile */}
//         <div className="flex items-center justify-between mb-8">
//           <h1 className="text-2xl font-bold text-white">Secure Wallet</h1>
//           <div className="flex items-center gap-4">
//             {/* Search and Add Card buttons remain the same */}

//             {/* Crypto-Style User Profile Dropdown */}
//             <div className="relative">
//               <button
//                 className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-800 border border-slate-700 hover:border-teal-500 transition-all"
//                 onClick={() => setProfileOpen(!profileOpen)}
//               >
//                 <User className="h-5 w-5 text-teal-500" />
//               </button>

//               {/* New Crypto-Style Profile Popup */}
//               {profileOpen && (
//                 <div className="absolute right-0 top-12 w-72 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden z-10">
//                   {/* Network indicator and Close button */}
//                   <div className="flex items-center justify-between p-3 border-b border-slate-800">
//                     <div className="flex items-center gap-2">
//                       <div className="h-6 w-6 rounded-full bg-teal-500 flex items-center justify-center">
//                         <span className="text-xs font-bold text-white">P</span>
//                       </div>
//                       <span className="text-xs text-slate-400">
//                         Privix Network
//                       </span>
//                     </div>
//                     <button
//                       onClick={() => setProfileOpen(false)}
//                       className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-slate-800 transition-colors"
//                     >
//                       <X size={16} className="text-slate-400" />
//                     </button>
//                   </div>

//                   {/* Profile Info */}
//                   <div className="p-6 flex flex-col items-center">
//                     <div className="h-16 w-16 rounded-full bg-red-500 mb-4 flex items-center justify-center relative">
//                       <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-600 to-red-400"></div>
//                     </div>

//                     <div className="flex items-center gap-1 mb-1">
//                       <p className="text-sm font-mono text-slate-300">
//                         0xeb...5f5d
//                       </p>
//                       <button className="p-1 rounded-full hover:bg-slate-800">
//                         <Copy size={12} className="text-slate-400" />
//                       </button>
//                     </div>

//                     <p className="text-xl font-semibold text-white mb-1">
//                       0.000 ETH
//                     </p>
//                     <p className="text-xs text-slate-400 mb-6">≈ $0.00 USD</p>
//                   </div>

//                   {/* Menu Options */}
//                   <div className="px-2 pb-2">
//                     <button className="flex items-center justify-between w-full p-3 rounded-xl bg-slate-800 hover:bg-slate-750 transition-colors mb-2">
//                       <div className="flex items-center gap-3">
//                         <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center">
//                           <Clock size={16} className="text-slate-300" />
//                         </div>
//                         <span className="text-sm font-medium text-white">
//                           Activity
//                         </span>
//                       </div>
//                       <ChevronRight size={16} className="text-slate-500" />
//                     </button>

//                     <button className="flex items-center justify-between w-full p-3 rounded-xl bg-slate-800 hover:bg-slate-750 transition-colors">
//                       <div className="flex items-center gap-3">
//                         <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center">
//                           <LogOut size={16} className="text-slate-300" />
//                         </div>
//                         <span className="text-sm font-medium text-white">
//                           Disconnect
//                         </span>
//                       </div>
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Rest of the content remains the same */}
//         {/* Stats Grid, Cards Grid, Recent Activity sections... */}
//       </div>
//     </div>
//   );
// };

// export default WalletPage;
