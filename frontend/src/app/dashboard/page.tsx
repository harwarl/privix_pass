import { Plus, Search } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="ml-64 p-8">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-8">
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

        <button className="flex justify-center items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors duration-150 ease-in-out"
        
        >
          <Plus className="w-5 h-5 text-white" />
          Add password
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
