"use client";
import AddPassword from "@/components/Password/AddPassword";
import Modal from "@/components/UI/Modal";
import { passwordData, statsMockData } from "@/data/data";
import { generateRandomPassword, maskPassword } from "@/utils/functions";
import useClickOutside from "@/utils/hooks/useClickOutside";

import {
  Check,
  Copy,
  Eye,
  EyeOff,
  Lock,
  Plus,
  RefreshCcw,
  Search,
  Trash2,
} from "lucide-react";
import React, { useRef, useState } from "react";
import crypto from "crypto";

const Dashboard = () => {
  const [generatedPassword, setGeneratedPassword] = useState<string>("");
  const [showGenerated, setShowGenerated] = React.useState(false);
  const [query, setQuery] = useState<string>("");
  const [filteredPasswords, setFilteredPasswords] = useState(passwordData);
  const [visiblePasswordId, setVisiblePasswordId] = useState<number | null>(
    null
  );
  const [copied, setCopied] = React.useState(false);
  const [openDropDown, setOpenDropDown] = useState<number | null>(null);
  const dropDownRef = useRef(null);

  useClickOutside(dropDownRef, () => setOpenDropDown(null));
  const togglePasswordVisibility = (id: number) => {
    if (visiblePasswordId === id) {
      setVisiblePasswordId(null);
    } else {
      setVisiblePasswordId(id);
    }
  };

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

  const handleQuickGeneratePassword = () => {
    const randomUrl = crypto.randomBytes(24).toString("hex");
    const randomPassword = crypto.randomBytes(32).toString("hex");
    setGeneratedPassword(generateRandomPassword(randomUrl, randomPassword));
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
            <button className="ml-auto flex justify-center items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-600 transition-colors duration-150 ease-in-out">
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
              value={generatedPassword}
              readOnly
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-300 font-mono focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              className="absolute right-10 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-slate-300 bg-slate-900"
              onClick={() => setShowGenerated(!showGenerated)}
            >
              {showGenerated ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-slate-300 bg-slate-900"
              onClick={() => handleCopy(generatedPassword)}
            >
              {copied ? (
                <Check size={16} className="text-teal-500" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
          <button
            className="p-2 text-slate-400 hover:text-slate-300 bg-slate-900 border border-slate-700 rounded-lg"
            onClick={handleQuickGeneratePassword}
          >
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
            {filteredPasswords.map((item) => (
              <div
                key={item.id}
                className="p-4 hover:bg-slate-750 transition-colors"
              >
                <div className="flex items-center justify-between">
                  {/* Password Info */}
                  <div>
                    <p className="text-slate-300 font-medium">
                      {visiblePasswordId === item.id
                        ? item.site
                        : maskPassword(item.site)}
                    </p>
                    <p className="text-sm text-slate-400">
                      {visiblePasswordId === item.id
                        ? item.username
                        : maskPassword(item.username)}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-slate-400 hidden sm:block">
                      {item.lastUpdated}
                    </span>

                    {/* Toggle Password Visibility */}
                    <button
                      className="p-2 text-slate-400 hover:text-slate-300"
                      onClick={() => togglePasswordVisibility(item.id)}
                    >
                      {visiblePasswordId === item.id ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>

                    {/* Copy Dropdown */}
                    <div className="relative" ref={dropDownRef}>
                      <button
                        onClick={() =>
                          setOpenDropDown(
                            openDropDown === item.id ? null : item.id
                          )
                        }
                        className="p-2 text-slate-400 hover:text-slate-300"
                      >
                        <Copy size={16} />
                      </button>

                      {openDropDown === item.id && (
                        <div className="absolute right-0 mt-2 w-40 z-40 bg-slate-900 border border-slate-700 rounded-md shadow-lg">
                          <button
                            className="flex items-center gap-3 w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700"
                            onClick={() => handleCopy(item.username)}
                          >
                            <Copy size={16} />
                            Username
                          </button>
                          <button
                            className="flex items-center gap-3 w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700"
                            onClick={() => handleCopy(item.password)}
                          >
                            <Copy size={16} />
                            Password
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Delete Button */}
                    <button className="p-2 text-red-400 hover:text-red-500">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="mb-4 p-4 bg-slate-800 rounded-full">
              <Lock size={32} className="text-slate-400" />
            </div>

            <p className="text-slate-400 text-lg font-medium">
              No passwords found
            </p>
            <p className="text-slate-500 text-sm mt-1">
              Save your passwords securely and access them anytime.
            </p>

            <Modal
              title={
                <div className="flex items-center gap-2">
                  <Lock size={20} className="text-teal-600" />
                  <h1 className="text-lg font-semibold">Add Password</h1>
                </div>
              }
              trigger={
                <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">
                  <span className="">Add Password</span>
                </button>
              }
            >
              <AddPassword />
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
