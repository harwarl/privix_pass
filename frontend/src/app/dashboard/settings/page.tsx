import { Select } from "@radix-ui/themes";
import { Bell, Download, Laptop, Laptop2, LockIcon, Moon } from "lucide-react";
import React from "react";

const SettingsPage = () => {
  return (
    <div className="ml-64 p-8">
      <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>

      {/* Settings Section */}
      <div className="space-y-8">
        {/* GENERAL */}
        <div className="bg-slate-800 rounded-xl border border-slate-700">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-xl font-bold text-white">General</h2>
          </div>
          <div className="p-6 space-y-6">
            {/* Theme Settings */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Moon className="h-5 w-5 text-slate-400" />
                <div>
                  <p className="text-slate-300">Dark Mode</p>
                  <p className="text-sm text-slate-400">
                    Adjust the appearance of the app
                  </p>
                </div>
              </div>
              <button className="w-12 h-6 bg-teal-500 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute right-1 top-0.5" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-slate-400" />
                <div>
                  <p className="text-slate-300">Notifications</p>
                  <p className="text-sm text-slate-400">
                    Get notified about important updates
                  </p>
                </div>
              </div>
              <button className="w-12 h-6 bg-teal-500 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute right-1 top-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* SECURITY */}
        <div className="bg-slate-800 rounded-xl border border-slate-700">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-xl font-bold text-white">Security</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <LockIcon className="h-5 w-5 text-slate-400" />
                <div>
                  <p className="text-slate-300">Two-Factor Authentication</p>
                  <p className="text-sm text-slate-400">
                    Add an extra layer of security
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                Enable
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Laptop2 className="h-5 w-5 text-slate-400" />
                <div>
                  <p className="text-slate-300">Auto Lock</p>
                  <p className="text-sm text-slate-400">
                    Lock vault after inactivity
                  </p>
                </div>
              </div>
              <select className="bg-slate-700 text-slate-300 rounded-lg px-3 py-2 border border-slate-600 font-mono focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>5 minutes</option>
                <option>15 minutes</option>
                <option>30 minutes</option>
                <option>1 hour</option>
              </select>
            </div>
          </div>
        </div>

        {/* BACKUP & SYNC */}
        <div className="bg-slate-800 rounded-xl border border-slate-700">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-xl font-bold text-white">Backup & Sync</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Download className="h-5 w-5 text-slate-400" />
                <div>
                  <p className="text-slate-300">Export Data</p>
                  <p className="text-sm text-slate-400">
                    Download a backup of your data
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                Export
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SettingsPage;
