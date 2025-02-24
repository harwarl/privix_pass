"use client";

// import React, { useState } from "react";
// import {
//   Shield,
//   Lock,
//   Key,
//   History,
//   Wallet,
//   Settings,
//   Search,
//   Plus,
//   Eye,
//   Copy,
//   CreditCard,
//   User,
//   LogOut,
//   ChevronDown,
// } from "lucide-react";

// const WalletPage = () => {
//   const [profileOpen, setProfileOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-slate-900">
//       {/* Sidebar */}
//       <div className="fixed left-0 top-0 h-screen w-64 bg-slate-800 border-r border-slate-700 p-4">
//         <div className="flex items-center gap-2 mb-8">
//           <Shield className="h-8 w-8 text-teal-500" />
//           <span className="text-xl font-bold text-white">Pass By Privix</span>
//         </div>

//         <nav className="space-y-2">
//           {[
//             { icon: <Lock />, label: "Passwords" },
//             { icon: <Key />, label: "Generator" },
//             { icon: <History />, label: "History" },
//             { icon: <Wallet />, label: "Wallet" },
//             { icon: <Settings />, label: "Settings" },
//           ].map((item, i) => (
//             <button
//               key={i}
//               className={`flex items-center gap-3 w-full p-3 rounded-lg text-slate-300 hover:bg-slate-700 transition-colors ${
//                 i === 3 ? "bg-slate-700" : ""
//               }`}
//             >
//               {React.cloneElement(item.icon, { size: 20 })}
//               {item.label}
//             </button>
//           ))}
//         </nav>

//         {/* User Profile in Sidebar Bottom */}
//         <div className="absolute bottom-0 left-0 w-full p-4 border-t border-slate-700">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center">
//                 <User className="h-5 w-5 text-white" />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-white">Alex Johnson</p>
//                 <p className="text-xs text-slate-400">Premium Plan</p>
//               </div>
//             </div>
//             <button
//               className="p-1.5 rounded-lg hover:bg-slate-700 transition-colors"
//               onClick={() => setProfileOpen(!profileOpen)}
//             >
//               <ChevronDown
//                 className={`h-4 w-4 text-slate-400 transition-transform ${
//                   profileOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </button>
//           </div>

//           {/* Expanded Profile Menu */}
//           {profileOpen && (
//             <div className="mt-3 py-2 space-y-1 border-t border-slate-700">
//               <div className="p-3 bg-slate-750 rounded-lg mb-2">
//                 <p className="text-xs text-slate-400 mb-1">Your Wallet</p>
//                 <p className="text-sm font-medium text-white">
//                   4 Cards • 2 IDs
//                 </p>
//                 <div className="mt-2 flex items-center justify-between">
//                   <span className="text-xs text-teal-500">100% Protected</span>
//                   <span className="text-xs text-slate-400">3GB Storage</span>
//                 </div>
//               </div>
//               <button className="flex items-center gap-2 w-full p-2 rounded-lg text-red-400 hover:bg-slate-700 transition-colors">
//                 <LogOut className="h-4 w-4" />
//                 Disconnect
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="ml-64 p-8">
//         {/* Header with User Profile */}
//         <div className="flex items-center justify-between mb-8">
//           <h1 className="text-2xl font-bold text-white">Secure Wallet</h1>
//           <div className="flex items-center gap-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
//               <input
//                 type="text"
//                 placeholder="Search cards..."
//                 className="w-64 pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//             </div>
//             <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
//               <Plus className="h-5 w-5" />
//               Add Card
//             </button>

//             {/* User Profile Dropdown */}
//             <div className="relative">
//               <button
//                 className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-800 transition-colors"
//                 onClick={() => setProfileOpen(!profileOpen)}
//               >
//                 <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center">
//                   <User className="h-4 w-4 text-white" />
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           {[
//             { label: "Total Cards", value: "6", subtext: "2 added this month" },
//             {
//               label: "Last Activity",
//               value: "2h ago",
//               subtext: "Card details viewed",
//             },
//             {
//               label: "Security Status",
//               value: "Protected",
//               subtext: "End-to-end encrypted",
//             },
//           ].map((stat, i) => (
//             <div
//               key={i}
//               className="p-6 bg-slate-800 rounded-xl border border-slate-700"
//             >
//               <p className="text-sm text-slate-400 mb-2">{stat.label}</p>
//               <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
//               <p className="text-sm text-teal-500">{stat.subtext}</p>
//             </div>
//           ))}
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           {[
//             {
//               name: "Chase Sapphire",
//               type: "Credit Card",
//               lastFour: "4832",
//               expiry: "05/25",
//               color: "bg-blue-600",
//             },
//             {
//               name: "American Express",
//               type: "Credit Card",
//               lastFour: "7623",
//               expiry: "12/24",
//               color: "bg-emerald-600",
//             },
//             {
//               name: "Capital One",
//               type: "Debit Card",
//               lastFour: "9276",
//               expiry: "03/26",
//               color: "bg-purple-600",
//             },
//             {
//               name: "Bank of America",
//               type: "Credit Card",
//               lastFour: "1548",
//               expiry: "08/25",
//               color: "bg-red-600",
//             },
//           ].map((card, i) => (
//             <div
//               key={i}
//               className={`${card.color} p-6 rounded-xl relative overflow-hidden`}
//             >
//               <div className="absolute top-0 right-0 p-4 flex gap-2">
//                 <button className="p-1.5 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
//                   <Eye size={16} className="text-white" />
//                 </button>
//                 <button className="p-1.5 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
//                   <Copy size={16} className="text-white" />
//                 </button>
//               </div>
//               <CreditCard className="h-8 w-8 text-white/80 mb-4" />
//               <p className="text-lg font-medium text-white mb-1">{card.name}</p>
//               <p className="text-sm text-white/80">{card.type}</p>
//               <div className="mt-6 flex items-center justify-between">
//                 <p className="text-white font-mono">•••• {card.lastFour}</p>
//                 <p className="text-white/80 text-sm">{card.expiry}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Recent Activity */}
//         <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
//           <div className="p-6 border-b border-slate-700">
//             <h2 className="text-xl font-bold text-white">Recent Activity</h2>
//           </div>
//           <div className="divide-y divide-slate-700">
//             {[
//               {
//                 action: "Card Viewed",
//                 card: "Chase Sapphire",
//                 time: "2 hours ago",
//               },
//               {
//                 action: "Card Added",
//                 card: "American Express",
//                 time: "1 day ago",
//               },
//               {
//                 action: "Details Copied",
//                 card: "Capital One",
//                 time: "3 days ago",
//               },
//               {
//                 action: "Card Updated",
//                 card: "Bank of America",
//                 time: "1 week ago",
//               },
//             ].map((activity, i) => (
//               <div key={i} className="p-4 hover:bg-slate-750 transition-colors">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-slate-300 font-medium">
//                       {activity.action}
//                     </p>
//                     <p className="text-sm text-slate-400">{activity.card}</p>
//                   </div>
//                   <span className="text-sm text-slate-400">
//                     {activity.time}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WalletPage;

// import React, { useState } from "react";
// import {
//   Shield,
//   Lock,
//   Key,
//   History,
//   Wallet,
//   Settings,
//   Search,
//   Plus,
//   Eye,
//   Copy,
//   CreditCard,
//   User,
//   LogOut,
//   ChevronDown,
//   Disc,
// } from "lucide-react";

// const WalletPage = () => {
//   const [profileOpen, setProfileOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-slate-900">
//       {/* Profile Popup */}
//       {profileOpen && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
//           <div className="bg-slate-800 rounded-xl border border-slate-700 w-full max-w-md p-6 relative">
//             <button
//               className="absolute right-4 top-4 text-slate-400 hover:text-white"
//               onClick={() => setProfileOpen(false)}
//             >
//               ✕
//             </button>

//             <div className="flex flex-col items-center mb-6">
//               <div className="h-20 w-20 rounded-full bg-teal-500 flex items-center justify-center mb-4">
//                 <User className="h-10 w-10 text-white" />
//               </div>
//               <h2 className="text-xl font-bold text-white">Alex Johnson</h2>
//               <p className="text-sm text-slate-400">Premium Plan</p>
//             </div>

//             <div className="bg-slate-750 rounded-lg p-4 mb-6">
//               <h3 className="text-lg font-semibold text-white mb-3">
//                 Your Wallet
//               </h3>

//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div className="bg-slate-700 rounded-lg p-3">
//                   <p className="text-xs text-slate-400 mb-1">ETH Balance</p>
//                   <p className="text-lg font-medium text-white">2.456 ETH</p>
//                 </div>
//                 <div className="bg-slate-700 rounded-lg p-3">
//                   <p className="text-xs text-slate-400 mb-1">USD Value</p>
//                   <p className="text-lg font-medium text-white">$4,932.45</p>
//                 </div>
//               </div>

//               <div className="bg-slate-700 rounded-lg p-3">
//                 <div className="flex justify-between items-center mb-1">
//                   <p className="text-xs text-slate-400">Wallet Address</p>
//                   <button className="p-1 hover:bg-slate-600 rounded">
//                     <Copy size={14} className="text-slate-400" />
//                   </button>
//                 </div>
//                 <p className="text-sm font-mono text-white truncate">
//                   0x7F5EB5bB5cF88cfcEe9613368636f458800e62CB
//                 </p>
//               </div>
//             </div>

//             <div className="border-t border-slate-700 pt-4">
//               <div className="flex items-center justify-between mb-4">
//                 <div>
//                   <p className="text-white font-medium">Connected to</p>
//                   <p className="text-sm text-teal-500">Ethereum Mainnet</p>
//                 </div>
//                 <div className="h-3 w-3 rounded-full bg-green-500"></div>
//               </div>

//               <button className="flex items-center justify-center gap-2 w-full p-3 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors">
//                 <LogOut size={18} />
//                 Disconnect Wallet
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Sidebar */}
//       <div className="fixed left-0 top-0 h-screen w-64 bg-slate-800 border-r border-slate-700 p-4">
//         <div className="flex items-center gap-2 mb-8">
//           <Shield className="h-8 w-8 text-teal-500" />
//           <span className="text-xl font-bold text-white">Pass By Privix</span>
//         </div>

//         <nav className="space-y-2">
//           {[
//             { icon: <Lock />, label: "Passwords" },
//             { icon: <Key />, label: "Generator" },
//             { icon: <History />, label: "History" },
//             { icon: <Wallet />, label: "Wallet" },
//             {
//               icon: <Disc />,
//               label: "Ethereum",
//               onClick: () => setProfileOpen(true),
//             },
//             { icon: <Settings />, label: "Settings" },
//           ].map((item, i) => (
//             <button
//               key={i}
//               className={`flex items-center gap-3 w-full p-3 rounded-lg text-slate-300 hover:bg-slate-700 transition-colors ${
//                 i === 3 ? "bg-slate-700" : ""
//               }`}
//               onClick={item.onClick}
//             >
//               {React.cloneElement(item.icon, { size: 20 })}
//               {item.label}
//             </button>
//           ))}
//         </nav>

//         {/* User Profile in Sidebar Bottom */}
//         <div className="absolute bottom-0 left-0 w-full p-4 border-t border-slate-700">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center">
//                 <User className="h-5 w-5 text-white" />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-white">Alex Johnson</p>
//                 <p className="text-xs text-slate-400">Premium Plan</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="ml-64 p-8">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <h1 className="text-2xl font-bold text-white">Secure Wallet</h1>
//           <div className="flex items-center gap-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
//               <input
//                 type="text"
//                 placeholder="Search cards..."
//                 className="w-64 pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//             </div>
//             <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
//               <Plus className="h-5 w-5" />
//               Add Card
//             </button>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           {[
//             { label: "Total Cards", value: "6", subtext: "2 added this month" },
//             {
//               label: "Last Activity",
//               value: "2h ago",
//               subtext: "Card details viewed",
//             },
//             {
//               label: "Security Status",
//               value: "Protected",
//               subtext: "End-to-end encrypted",
//             },
//           ].map((stat, i) => (
//             <div
//               key={i}
//               className="p-6 bg-slate-800 rounded-xl border border-slate-700"
//             >
//               <p className="text-sm text-slate-400 mb-2">{stat.label}</p>
//               <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
//               <p className="text-sm text-teal-500">{stat.subtext}</p>
//             </div>
//           ))}
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           {[
//             {
//               name: "Chase Sapphire",
//               type: "Credit Card",
//               lastFour: "4832",
//               expiry: "05/25",
//               color: "bg-blue-600",
//             },
//             {
//               name: "American Express",
//               type: "Credit Card",
//               lastFour: "7623",
//               expiry: "12/24",
//               color: "bg-emerald-600",
//             },
//             {
//               name: "Capital One",
//               type: "Debit Card",
//               lastFour: "9276",
//               expiry: "03/26",
//               color: "bg-purple-600",
//             },
//             {
//               name: "Bank of America",
//               type: "Credit Card",
//               lastFour: "1548",
//               expiry: "08/25",
//               color: "bg-red-600",
//             },
//           ].map((card, i) => (
//             <div
//               key={i}
//               className={`${card.color} p-6 rounded-xl relative overflow-hidden`}
//             >
//               <div className="absolute top-0 right-0 p-4 flex gap-2">
//                 <button className="p-1.5 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
//                   <Eye size={16} className="text-white" />
//                 </button>
//                 <button className="p-1.5 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
//                   <Copy size={16} className="text-white" />
//                 </button>
//               </div>
//               <CreditCard className="h-8 w-8 text-white/80 mb-4" />
//               <p className="text-lg font-medium text-white mb-1">{card.name}</p>
//               <p className="text-sm text-white/80">{card.type}</p>
//               <div className="mt-6 flex items-center justify-between">
//                 <p className="text-white font-mono">•••• {card.lastFour}</p>
//                 <p className="text-white/80 text-sm">{card.expiry}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Recent Activity */}
//         <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
//           <div className="p-6 border-b border-slate-700">
//             <h2 className="text-xl font-bold text-white">Recent Activity</h2>
//           </div>
//           <div className="divide-y divide-slate-700">
//             {[
//               {
//                 action: "Card Viewed",
//                 card: "Chase Sapphire",
//                 time: "2 hours ago",
//               },
//               {
//                 action: "Card Added",
//                 card: "American Express",
//                 time: "1 day ago",
//               },
//               {
//                 action: "Details Copied",
//                 card: "Capital One",
//                 time: "3 days ago",
//               },
//               {
//                 action: "Card Updated",
//                 card: "Bank of America",
//                 time: "1 week ago",
//               },
//             ].map((activity, i) => (
//               <div key={i} className="p-4 hover:bg-slate-750 transition-colors">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-slate-300 font-medium">
//                       {activity.action}
//                     </p>
//                     <p className="text-sm text-slate-400">{activity.card}</p>
//                   </div>
//                   <span className="text-sm text-slate-400">
//                     {activity.time}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WalletPage;

// import React, { useState } from 'react';
// import { Shield, Lock, Key, History, Wallet, Settings, Search, Plus, Eye, Copy, CreditCard, User, LogOut, Disc, ArrowUp } from 'lucide-react';

// const WalletPage = () => {
//   const [profileOpen, setProfileOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-slate-900">
//       {/* Ethereum Profile Popup */}
//       {profileOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(15, 23, 42, 0.8)' }}>
//           <div className="bg-slate-800 rounded-xl w-full max-w-md overflow-hidden shadow-2xl border border-slate-700 transition-all">
//             {/* Header with Ethereum Gradient */}
//             <div className="p-6 relative" style={{ background: 'linear-gradient(135deg, #6e8efb, #a777e3)' }}>
//               <button
//                 className="absolute right-4 top-4 text-white bg-black bg-opacity-20 rounded-full h-8 w-8 flex items-center justify-center hover:bg-opacity-30 transition-all"
//                 onClick={() => setProfileOpen(false)}
//               >
//                 ✕
//               </button>

//               <div className="flex items-center gap-4">
//                 <div className="h-14 w-14 bg-white/20 flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
//                   <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M12 1.75L5.75 12.25L12 16L18.25 12.25L12 1.75Z" fill="white" />
//                     <path d="M12 16L5.75 12.25L12 22.25L18.25 12.25L12 16Z" fill="white" opacity="0.6" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h2 className="text-white text-xl font-bold">Ethereum Wallet</h2>
//                   <div className="flex items-center mt-1">
//                     <span className="h-2 w-2 rounded-full bg-green-400 mr-2"></span>
//                     <span className="text-white/70 text-sm">Connected to Mainnet</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Balance Card */}
//             <div className="p-6">
//               <div className="bg-slate-700 rounded-xl p-4 mb-5">
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-slate-400 text-sm">Current Balance</span>
//                   <div className="flex items-center bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded">
//                     <ArrowUp className="h-3 w-3 mr-1" />
//                     <span>2.4%</span>
//                   </div>
//                 </div>
//                 <div className="flex items-end mb-1">
//                   <span className="text-3xl font-bold text-white">2.456</span>
//                   <span className="text-xl text-white/70 ml-2">ETH</span>
//                 </div>
//                 <span className="text-slate-400">≈ $4,932.45 USD</span>
//               </div>

//               {/* Wallet Address Section */}
//               <div className="mb-6">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-slate-400 text-sm">Wallet Address</span>
//                   <button className="text-teal-400 text-sm hover:text-teal-300 flex items-center gap-1">
//                     <Copy className="h-4 w-4" />
//                     Copy
//                   </button>
//                 </div>
//                 <div className="bg-slate-700 rounded-lg p-3 flex items-center">
//                   <div className="h-8 w-8 rounded-full bg-slate-600 flex items-center justify-center mr-3">
//                     <User className="h-4 w-4 text-slate-400" />
//                   </div>
//                   <div className="flex-1 font-mono text-sm text-white truncate">0x7F5EB5bB5cF88cfcEe9613368636f458800e62CB</div>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="grid grid-cols-2 gap-3">
//                 <button className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-lg font-medium flex justify-center items-center transition-colors">
//                   <svg className="mr-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" fill="currentColor"/>
//                   </svg>
//                   Send ETH
//                 </button>
//                 <button className="bg-red-500/10 hover:bg-red-500/20 text-red-500 py-3 px-4 rounded-lg font-medium flex justify-center items-center transition-colors">
//                   <LogOut className="h-4 w-4 mr-2" />
//                   Disconnect
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Sidebar */}
//       <div className="fixed left-0 top-0 h-screen w-64 bg-slate-800 border-r border-slate-700 p-4">
//         <div className="flex items-center gap-2 mb-8">
//           <Shield className="h-8 w-8 text-teal-500" />
//           <span className="text-xl font-bold text-white">Pass By Privix</span>
//         </div>

//         <nav className="space-y-2">
//           {[
//             { icon: <Lock />, label: 'Passwords' },
//             { icon: <Key />, label: 'Generator' },
//             { icon: <History />, label: 'History' },
//             { icon: <Wallet />, label: 'Wallet' },
//             { icon: <Disc />, label: 'Ethereum', onClick: () => setProfileOpen(true) },
//             { icon: <Settings />, label: 'Settings' },
//           ].map((item, i) => (
//             <button
//               key={i}
//               className={`flex items-center gap-3 w-full p-3 rounded-lg text-slate-300 hover:bg-slate-700 transition-colors ${i === 3 ? 'bg-slate-700' : ''}`}
//               onClick={item.onClick}
//             >
//               {React.cloneElement(item.icon, { size: 20 })}
//               {item.label}
//             </button>
//           ))}
//         </nav>

//         {/* User Profile in Sidebar Bottom */}
//         <div className="absolute bottom-0 left-0 w-full p-4 border-t border-slate-700">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center">
//                 <User className="h-5 w-5 text-white" />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-white">Alex Johnson</p>
//                 <p className="text-xs text-slate-400">Premium Plan</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="ml-64 p-8">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <h1 className="text-2xl font-bold text-white">Secure Wallet</h1>
//           <div className="flex items-center gap-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
//               <input
//                 type="text"
//                 placeholder="Search cards..."
//                 className="w-64 pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//             </div>
//             <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
//               <Plus className="h-5 w-5" />
//               Add Card
//             </button>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           {[
//             { label: 'Total Cards', value: '6', subtext: '2 added this month' },
//             { label: 'Last Activity', value: '2h ago', subtext: 'Card details viewed' },
//             { label: 'Security Status', value: 'Protected', subtext: 'End-to-end encrypted' },
//           ].map((stat, i) => (
//             <div key={i} className="p-6 bg-slate-800 rounded-xl border border-slate-700">
//               <p className="text-sm text-slate-400 mb-2">{stat.label}</p>
//               <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
//               <p className="text-sm text-teal-500">{stat.subtext}</p>
//             </div>
//           ))}
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           {[
//             {
//               name: 'Chase Sapphire',
//               type: 'Credit Card',
//               lastFour: '4832',
//               expiry: '05/25',
//               color: 'bg-blue-600'
//             },
//             {
//               name: 'American Express',
//               type: 'Credit Card',
//               lastFour: '7623',
//               expiry: '12/24',
//               color: 'bg-emerald-600'
//             },
//             {
//               name: 'Capital One',
//               type: 'Debit Card',
//               lastFour: '9276',
//               expiry: '03/26',
//               color: 'bg-purple-600'
//             },
//             {
//               name: 'Bank of America',
//               type: 'Credit Card',
//               lastFour: '1548',
//               expiry: '08/25',
//               color: 'bg-red-600'
//             }
//           ].map((card, i) => (
//             <div key={i} className={`${card.color} p-6 rounded-xl relative overflow-hidden`}>
//               <div className="absolute top-0 right-0 p-4 flex gap-2">
//                 <button className="p-1.5 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
//                   <Eye size={16} className="text-white" />
//                 </button>
//                 <button className="p-1.5 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
//                   <Copy size={16} className="text-white" />
//                 </button>
//               </div>
//               <CreditCard className="h-8 w-8 text-white/80 mb-4" />
//               <p className="text-lg font-medium text-white mb-1">{card.name}</p>
//               <p className="text-sm text-white/80">{card.type}</p>
//               <div className="mt-6 flex items-center justify-between">
//                 <p className="text-white font-mono">•••• {card.lastFour}</p>
//                 <p className="text-white/80 text-sm">{card.expiry}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Recent Activity */}
//         <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
//           <div className="p-6 border-b border-slate-700">
//             <h2 className="text-xl font-bold text-white">Recent Activity</h2>
//           </div>
//           <div className="divide-y divide-slate-700">
//             {[
//               { action: 'Card Viewed', card: 'Chase Sapphire', time: '2 hours ago' },
//               { action: 'Card Added', card: 'American Express', time: '1 day ago' },
//               { action: 'Details Copied', card: 'Capital One', time: '3 days ago' },
//               { action: 'Card Updated', card: 'Bank of America', time: '1 week ago' },
//             ].map((activity, i) => (
//               <div key={i} className="p-4 hover:bg-slate-750 transition-colors">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-slate-300 font-medium">{activity.action}</p>
//                     <p className="text-sm text-slate-400">{activity.card}</p>
//                   </div>
//                   <span className="text-sm text-slate-400">{activity.time}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WalletPage;

import React, { useState, useRef, useEffect } from "react";
import {
  User,
  LogOut,
  CreditCard,
  Settings,
  Bell,
  Shield,
  ChevronRight,
  MoreHorizontal,
  Plus,
} from "lucide-react";

const WalletPage = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Close profile when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (profileRef.current && !profileRef.current.contains(event.target)) {
  //       setProfileOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Sidebar code remains the same */}
      <div className="fixed left-0 top-0 h-screen w-64 bg-slate-800 border-r border-slate-700 p-4">
        {/* ...existing sidebar code... */}
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header with User Profile */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">Secure Wallet</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              {/* Search input remains the same */}
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
              <Plus className="h-5 w-5" />
              Add Card
            </button>

            {/* Redesigned User Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                className="flex items-center gap-2 p-1.5 rounded-full bg-slate-800 border border-slate-700 hover:border-teal-500 transition-all"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
              </button>

              {/* New Profile Popup Design */}
              {profileOpen && (
                <div className="absolute right-0 top-12 w-80 bg-slate-800 border border-slate-700 rounded-xl shadow-lg overflow-hidden z-10">
                  {/* Profile Header */}
                  <div className="p-4 border-b border-slate-700">
                    <div className="flex items-start gap-3">
                      <div className="h-12 w-12 rounded-full bg-teal-500 flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-semibold text-white">
                          Alex Johnson
                        </p>
                        <p className="text-xs text-slate-400">
                          alex.j@example.com
                        </p>
                        <div className="mt-1 flex items-center gap-1">
                          <span className="px-2 py-0.5 bg-teal-500/20 rounded-full text-xs text-teal-400 font-medium">
                            Premium Plan
                          </span>
                          <span className="px-2 py-0.5 bg-slate-700 rounded-full text-xs text-slate-400">
                            3GB Storage
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Wallet Summary */}
                  <div className="p-4 border-b border-slate-700 bg-slate-750">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-white">
                        Your Wallet
                      </p>
                      <span className="text-xs text-teal-500 font-medium">
                        100% Protected
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 p-3 bg-slate-800 rounded-lg">
                        <p className="text-xs text-slate-400 mb-1">Cards</p>
                        <p className="text-lg font-bold text-white">4</p>
                      </div>
                      <div className="flex-1 p-3 bg-slate-800 rounded-lg">
                        <p className="text-xs text-slate-400 mb-1">IDs</p>
                        <p className="text-lg font-bold text-white">2</p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Options */}
                  <div className="py-2">
                    {[
                      {
                        icon: <User size={16} />,
                        label: "My Account",
                        desc: "Profile & security",
                      },
                      {
                        icon: <CreditCard size={16} />,
                        label: "Manage Wallet",
                        desc: "6 saved items",
                      },
                      {
                        icon: <Bell size={16} />,
                        label: "Notifications",
                        desc: "3 unread alerts",
                      },
                      {
                        icon: <Settings size={16} />,
                        label: "Preferences",
                        desc: "App settings",
                      },
                      {
                        icon: <Shield size={16} />,
                        label: "Security Center",
                        desc: "Privacy & protection",
                      },
                    ].map((item, i) => (
                      <button
                        key={i}
                        className="flex items-center justify-between w-full px-4 py-2.5 hover:bg-slate-750 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <div className="text-left">
                            <p className="text-sm font-medium text-white">
                              {item.label}
                            </p>
                            <p className="text-xs text-slate-400">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        <ChevronRight size={14} className="text-slate-500" />
                      </button>
                    ))}
                  </div>

                  {/* Footer with Logout */}
                  <div className="p-4 border-t border-slate-700 bg-slate-750">
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                        <LogOut size={16} />
                        <span className="text-sm font-medium">Sign Out</span>
                      </button>
                      <button className="p-1.5 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                        <MoreHorizontal size={16} className="text-slate-400" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Rest of the content remains the same */}
        {/* Stats Grid, Cards Grid, Recent Activity sections... */}
      </div>
    </div>
  );
};

export default WalletPage;
