"use client";
import AddPassword from "@/components/Password/AddPassword";
import Modal from "@/components/UI/Modal";
import { passwordData, statsMockData } from "@/data/data";
import {
  Copy,
  Eye,
  EyeOff,
  Lock,
  Plus,
  RefreshCcw,
  Search,
} from "lucide-react";
import React, { useState } from "react";

const Dashboard = () => {
  const [showGenerated, setShowGenerated] = React.useState(false);
  const [query, setQuery] = useState<string>("");
  const [filteredPasswords, setFilteredPasswords] = useState(passwordData);
  const [, setCopied] = React.useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value === "") {
      setFilteredPasswords(passwordData);
    } else {
      const filtered = passwordData.filter(
        (data) =>
          data.site.toLowerCase().includes(value) ||
          data.username.toLowerCase().includes(value)
      );

      setFilteredPasswords(filtered);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8 gap-2">
        <Modal
          title={
            <div className="flex items-center gap-2 ">
              <Lock size={20} className="text-teal-600" />
              <h1 className="text-lg font-semibold">Add Password</h1>
            </div>
          }
          trigger={
            <button className="ml-auto flex justify-center items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors duration-150 ease-in-out">
              <Plus size={20} className=" text-white" />
              <span className="hidden sm:block">Add Password</span>
            </button>
          }
        >
          <AddPassword />
        </Modal>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {statsMockData.map((stat, i) => (
          <div
            className="p-6 bg-slate-800 rounded-xl border border-slate-700"
            key={i}
          >
            <p className="text-sm text-slate-400 mb-2">{stat.label}</p>
            <p className="text-2xl font-bold text-white my-4">{stat.value}</p>
            <p className="text-sm text-teal-500">{stat.subText}</p>
          </div>
        ))}
      </div>

      {/* Password Generator
       */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
        <h2 className="text-xl font-bold text-white mb-4">
          Quick Password Generator
        </h2>
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type={showGenerated ? "text" : "password"}
              value="P@ssw0rd-X2Y9-!Km4"
              readOnly
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-300 font-mono focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              className="absolute right-10 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-slate-300"
              onClick={() => setShowGenerated(!showGenerated)}
            >
              {showGenerated ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-slate-300"
              onClick={() => handleCopy("P@ssw0rd-X2Y9-!Km4")}
            >
              <Copy size={16} />
            </button>
          </div>
          <button className="p-2 text-slate-400 hover:text-slate-300 bg-slate-900 border border-slate-700 rounded-lg">
            <RefreshCcw size={16} />
          </button>
        </div>
      </div>

      {/* Passwords List */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
        <div className="py-3 border-b border-slate-700">
          <div className="flex items-center sm:justify-between justify-center">
            <h2 className="text-xl hidden sm:block font-bold text-white">
              Stored Passwords
            </h2>
            <div className="flex-1 max-w-sm">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-textSecondary" />
                <input
                  type="text"
                  placeholder="Search passwords..."
                  value={query}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
          </div>
        </div>
        {filteredPasswords.length > 0 ? (
          <div className="divide-y-2 divide-slate-700">
            {filteredPasswords.map((item, i) => (
              <div key={i} className="p-4 hover:bg-slate-750 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-300 font-medium">{item?.site}</p>
                    <p className="text-sm text-slate-400">{item.username}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-slate-400 hidden sm:block">
                      {item.lastUpdated}
                    </span>
                    <button className="p-2 text-slate-400 hover:text-slate-300">
                      <Eye size={16} />
                    </button>
                    <button
                      className="p-2 text-slate-400 hover:text-slate-300"
                      onClick={() => handleCopy(item.username)}
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
