import React, { useEffect, useState } from "react";
import { Copy, RefreshCw, Globe, User, Lock, Check } from "lucide-react";
import {
  calculatePasswordStrength,
  generateRandomPassword,
  getPasswordStrengthLabel,
} from "@/utils/functions";

const GeneratePasswordForm = () => {
  const [copied, setCopied] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<number>(0);
  const [passwordState, setPasswordState] = useState({
    text: "",
    color: "",
  });
  const [password, setPassword] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleCopy = (text: string, id?: number | string | null) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      // TODO: Save copied Password to the data base
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //Get Password from the
    const passwordStrength = calculatePasswordStrength(password);
    setPasswordStrength(passwordStrength);
    setPasswordState(getPasswordStrengthLabel(passwordStrength));
  };

  const generatePassword = () => {
    if (url || username) {
      const newPassword = generateRandomPassword(url, username);
      setPassword(newPassword);
      updatePasswordStrength(newPassword);
    } else {
      setPassword("");
      setPasswordStrength(0);
      setPasswordState({ text: "", color: "" });
    }
  };

  const updatePasswordStrength = (password: string) => {
    const strength = calculatePasswordStrength(password);
    setPasswordStrength(strength);
    setPasswordState(getPasswordStrengthLabel(strength));
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  // Handle Username change
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    generatePassword();
    console.log("new password");
  }, [url, username]);

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
            value={url}
            onChange={handleUrlChange}
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
            value={username}
            onChange={handleUsernameChange}
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
            onChange={handlePasswordChange}
            readOnly
            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-300 font-mono focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            onClick={() => handleCopy(password)}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors flex items-center gap-2"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
            <span className="hidden sm:block">
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>
          <button className="p-3 text-slate-400 hover:text-slate-300 bg-slate-900 border border-slate-700 rounded-lg">
            <RefreshCw size={20} />
          </button>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-slate-400">Password Strength</span>
          <span className={`text-sm font-medium ${passwordState.color}`}>
            {passwordState.text}
          </span>
        </div>
        <div className="h-2 bg-slate-700 rounded-full">
          <div
            className={`h-full transition-all duration-300 ${
              passwordStrength >= 75
                ? "bg-green-500"
                : passwordStrength >= 50
                ? "bg-yellow-500"
                : passwordStrength >= 25
                ? "bg-orange-500"
                : "bg-red-500"
            }`}
            style={{ width: `${passwordStrength}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneratePasswordForm;
