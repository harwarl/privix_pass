"use client";
import React, { useState } from "react";
import { RefreshCw, Copy, Check, Eye, EyeOff } from "lucide-react";
import { generatedHistoryData } from "@/data/data";
import { maskPassword } from "@/utils/functions";

type SettingsType = {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

const GeneratePassword = () => {
  const [password] = useState("P@ssw0rd-X2Y9-!Km4");
  const [visiblePasswordId, setVisiblePasswordId] = useState<number | null>(
    null
  );
  const [copiedId, setCopiedId] = useState<number | string | null>(null);
  const [copied, setCopied] = useState(false);
  const [settings, setSettings] = useState<SettingsType>({
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const handleCopy = (
    text: string,
    id?: number | string | null,
    exists = false
  ) => {
    navigator.clipboard.writeText(text).then(() => {
      if (exists) {
        setCopiedId(id ?? null);
        setTimeout(() => setCopiedId(null), 2000);
      } else {
        setCopied(true);
        // TODO: Save copied Password to the data base
        setTimeout(() => setCopied(false), 2000);
      }
    });
  };

  const togglePasswordVisibility = (id: number) => {
    if (visiblePasswordId === id) {
      setVisiblePasswordId(null);
    } else {
      setVisiblePasswordId(id);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Password Generator</h1>

      {/* Generated Password Display */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-300 font-mono focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            onClick={() => handleCopy(password)}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors flex items-center gap-2"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
            {copied ? "Copied!" : "Copy"}
          </button>
          <button className="p-3 text-slate-400 hover:text-slate-300 bg-slate-900 border border-slate-700 rounded-lg">
            <RefreshCw size={20} />
          </button>
        </div>

        {/* Password Strength Indicator */}
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-slate-400">Password Strength</span>
            <span className="text-sm text-teal-500">Strong</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full">
            <div className="h-full w-4/5 bg-teal-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Generator Settings */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
        <h2 className="text-xl font-bold text-white mb-6">Password Settings</h2>

        {/* Length Slider */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-slate-300">Password Length</span>
            <span className="text-teal-500">{settings.length} characters</span>
          </div>
          <input
            type="range"
            min="8"
            max="32"
            value={settings.length}
            onChange={(e) =>
              setSettings({ ...settings, length: Number(e.target.value) })
            }
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Character Settings */}
        <div className="space-y-4">
          {(
            [
              { id: "uppercase", label: "Uppercase Letters", example: "A-Z" },
              { id: "lowercase", label: "Lowercase Letters", example: "a-z" },
              { id: "numbers", label: "Numbers", example: "0-9" },
              {
                id: "symbols",
                label: "Special Characters",
                example: "!@#$%^&*",
              },
            ] as const
          ).map((option) => (
            <div
              key={option.id}
              className="flex items-center justify-between p-4 bg-slate-900 rounded-lg"
            >
              <div>
                <p className="text-slate-300">{option.label}</p>
                <p className="text-sm text-slate-400">{option.example}</p>
              </div>
              <button
                onClick={() =>
                  setSettings({
                    ...settings,
                    [option.id]: !settings[option.id as keyof SettingsType],
                  })
                }
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings[option.id as keyof SettingsType]
                    ? "bg-teal-500"
                    : "bg-slate-700"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                    settings[option.id as keyof SettingsType]
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Generated Passwords History */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
        <div className="py-3 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white mb-6">
            Password History
          </h2>
        </div>

        <div className="divide-y-2 divide-slate-700">
          {generatedHistoryData.map((item, i) => (
            <div key={i} className="p-4 hover:bg-slate-750 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-300">
                    {visiblePasswordId === item.id
                      ? item.password
                      : maskPassword(item.password)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-400 hidden sm:block">
                    {item.created_at.toDateString()}
                  </span>
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
                  <button
                    className="p-2 text-slate-400 hover:text-slate-300"
                    onClick={() => handleCopy(item.password, item.id, true)}
                  >
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

export default GeneratePassword;
