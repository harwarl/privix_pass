import { passwordData, statsMockData } from "@/data/data";
import { div } from "framer-motion/client";
import { Copy, Eye, EyeOff, Plus, RefreshCcw, Search } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="ml-24 sm:ml-60 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 gap-2">
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-textSecondary" />
            <input
              type="text"
              placeholder="Search passwords..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        <button className="flex justify-center items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors duration-150 ease-in-out">
          <Plus size={20} className=" text-white" />
          <span className="hidden sm:block">Add Password</span>
        </button>
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
              type="password"
              value="P@ssw0rd-X2Y9-!Km4"
              readOnly
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-300 font-mono"
            />
            <button className="absolute right-10 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-slate-300">
              {false ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-slate-300">
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
          <h2 className="text-xl font-bold text-white">Stored Passwords</h2>
        </div>
        <div className="divide-y-2 divide-slate-700">
          {passwordData.map((item, i) => (
            <div key={i} className="p-4 hover:bg-slate-750 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-300 font-medium">{item.site}</p>
                  <p className="text-sm text-slate-400">{item.username}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-400">
                    {item.lastUpdated}
                  </span>
                  <button className="p-2 text-slate-400 hover:text-slate-300">
                    <Eye size={16} />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-300">
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
