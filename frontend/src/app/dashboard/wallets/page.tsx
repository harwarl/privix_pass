"use client";

import React, { useState } from "react";
import {
  Shield,
  Lock,
  Key,
  History,
  Wallet,
  Settings,
  Search,
  Plus,
  Eye,
  Copy,
  CreditCard,
  User,
  LogOut,
  ChevronDown,
} from "lucide-react";

const WalletPage = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-64 bg-slate-800 border-r border-slate-700 p-4">
        <div className="flex items-center gap-2 mb-8">
          <Shield className="h-8 w-8 text-teal-500" />
          <span className="text-xl font-bold text-white">Pass By Privix</span>
        </div>

        <nav className="space-y-2">
          {[
            { icon: <Lock />, label: "Passwords" },
            { icon: <Key />, label: "Generator" },
            { icon: <History />, label: "History" },
            { icon: <Wallet />, label: "Wallet" },
            { icon: <Settings />, label: "Settings" },
          ].map((item, i) => (
            <button
              key={i}
              className={`flex items-center gap-3 w-full p-3 rounded-lg text-slate-300 hover:bg-slate-700 transition-colors ${
                i === 3 ? "bg-slate-700" : ""
              }`}
            >
              {React.cloneElement(item.icon, { size: 20 })}
              {item.label}
            </button>
          ))}
        </nav>

        {/* User Profile in Sidebar Bottom */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Alex Johnson</p>
                <p className="text-xs text-slate-400">Premium Plan</p>
              </div>
            </div>
            <button
              className="p-1.5 rounded-lg hover:bg-slate-700 transition-colors"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <ChevronDown
                className={`h-4 w-4 text-slate-400 transition-transform ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Expanded Profile Menu */}
          {profileOpen && (
            <div className="mt-3 py-2 space-y-1 border-t border-slate-700">
              <div className="p-3 bg-slate-750 rounded-lg mb-2">
                <p className="text-xs text-slate-400 mb-1">Your Wallet</p>
                <p className="text-sm font-medium text-white">
                  4 Cards • 2 IDs
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-teal-500">100% Protected</span>
                  <span className="text-xs text-slate-400">3GB Storage</span>
                </div>
              </div>
              <button className="flex items-center gap-2 w-full p-2 rounded-lg text-red-400 hover:bg-slate-700 transition-colors">
                <LogOut className="h-4 w-4" />
                Disconnect
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header with User Profile */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">Secure Wallet</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search cards..."
                className="w-64 pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
              <Plus className="h-5 w-5" />
              Add Card
            </button>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-800 transition-colors"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: "Total Cards", value: "6", subtext: "2 added this month" },
            {
              label: "Last Activity",
              value: "2h ago",
              subtext: "Card details viewed",
            },
            {
              label: "Security Status",
              value: "Protected",
              subtext: "End-to-end encrypted",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 bg-slate-800 rounded-xl border border-slate-700"
            >
              <p className="text-sm text-slate-400 mb-2">{stat.label}</p>
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-teal-500">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            {
              name: "Chase Sapphire",
              type: "Credit Card",
              lastFour: "4832",
              expiry: "05/25",
              color: "bg-blue-600",
            },
            {
              name: "American Express",
              type: "Credit Card",
              lastFour: "7623",
              expiry: "12/24",
              color: "bg-emerald-600",
            },
            {
              name: "Capital One",
              type: "Debit Card",
              lastFour: "9276",
              expiry: "03/26",
              color: "bg-purple-600",
            },
            {
              name: "Bank of America",
              type: "Credit Card",
              lastFour: "1548",
              expiry: "08/25",
              color: "bg-red-600",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`${card.color} p-6 rounded-xl relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-4 flex gap-2">
                <button className="p-1.5 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                  <Eye size={16} className="text-white" />
                </button>
                <button className="p-1.5 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                  <Copy size={16} className="text-white" />
                </button>
              </div>
              <CreditCard className="h-8 w-8 text-white/80 mb-4" />
              <p className="text-lg font-medium text-white mb-1">{card.name}</p>
              <p className="text-sm text-white/80">{card.type}</p>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-white font-mono">•••• {card.lastFour}</p>
                <p className="text-white/80 text-sm">{card.expiry}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-xl font-bold text-white">Recent Activity</h2>
          </div>
          <div className="divide-y divide-slate-700">
            {[
              {
                action: "Card Viewed",
                card: "Chase Sapphire",
                time: "2 hours ago",
              },
              {
                action: "Card Added",
                card: "American Express",
                time: "1 day ago",
              },
              {
                action: "Details Copied",
                card: "Capital One",
                time: "3 days ago",
              },
              {
                action: "Card Updated",
                card: "Bank of America",
                time: "1 week ago",
              },
            ].map((activity, i) => (
              <div key={i} className="p-4 hover:bg-slate-750 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-300 font-medium">
                      {activity.action}
                    </p>
                    <p className="text-sm text-slate-400">{activity.card}</p>
                  </div>
                  <span className="text-sm text-slate-400">
                    {activity.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
