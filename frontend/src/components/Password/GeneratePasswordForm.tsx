import React, { useState } from "react";
import { Copy, RefreshCw, Globe, User, Lock, Check } from "lucide-react";

const GeneratePasswordForm = () => {
  const [copied, setCopied] = useState(false);
  const password = "P@ssw0rd-X2Y9-!Km4";

  const handleCopy = (text: string, id?: number | string | null) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      // TODO: Save copied Password to the data base
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8 space-y-3">
      {/* Domain Url */}
      <div className="space-y-2">
        <label className="flex items-center text-slate-400 text-sm font-medium">
          <Globe size={16} className="mr-2 text-slate-500" />
          Domain URL
        </label>
        <div className="flex">
          <input
            type="url"
            name="domainUrl"
            // value={formData.domainUrl}
            // onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="https://example.com"
          />
        </div>
      </div>

      {/* Username Field */}
      <div className="space-y-2">
        <label className="flex items-center text-slate-400 text-sm font-medium">
          <User size={16} className="mr-2 text-slate-500" />
          Username
        </label>
        <div className="flex">
          <input
            type="text"
            name="username"
            // value={formData.username}
            // onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="username@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="flex items-center text-slate-400 text-sm font-medium">
          <Lock size={16} className="mr-2 text-slate-500" />
          Password
        </label>
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
      </div>

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
  );
};

export default GeneratePasswordForm;
