"use client";

import { calculatePasswordStrength } from "@/utils/functions";
import { Dialog } from "@radix-ui/themes";
import {
  Eye,
  EyeOff,
  RefreshCw,
  Check,
  ChevronDown,
  Globe,
  Building,
  Mail,
  LockIcon,
} from "lucide-react";
import React, { useState } from "react";

const AddPassword = () => {
  const [passwordStrength, setPasswordStrength] = useState<number>(0);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log(formData.entries());

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordStrength(calculatePasswordStrength(e.target.value));
  };

  return (
    <form className="px-4" onSubmit={handleSubmit}>
      <div className="space-y-4">
        {/* WebSite Information  */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-slate-300">
            Website Information
          </h3>

          {/* URL */}
          <div className="relative">
            <label htmlFor="url" className="block text-xs text-slate-400 mb-1">
              Website URL
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <input
                type="url"
                id="url"
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="e.g https://example.com"
                className="w-full pl-10 p-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-xs text-slate-400 mb-1"
            >
              Title
            </label>
            <div className="relative">
              <Building className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g gmail"
                className="w-full pl-10 p-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="Category"
              className="block text-xs text-slate-400 mb-1"
            >
              Category
            </label>
            <div className="relative">
              <select
                name="category"
                id="category"
                className="w-full p-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none"
              >
                <option value="login">Login</option>
                <option value="finance">Finance</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="entertainment">Entertainment</option>
              </select>
              <ChevronDown className="h-4 w-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Login Details */}
      <div className="space-y-2 mt-4">
        <h3 className="text-sm font-medium text-slate-300">Login Details</h3>

        {/* Username */}
        <div className="relative">
          <label
            htmlFor="username"
            className="block text-xs text-slate-400 mb-1"
          >
            Username or Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input
              type="username"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username@example.com"
              className="w-full pl-10 p-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Password */}
        <div className="relative">
          <label
            htmlFor="password"
            className="block text-xs text-slate-400 mb-1"
          >
            Password
          </label>
          <div className="relative">
            <LockIcon className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter password"
              className="w-full pl-10 pr-16 p-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <div className="absolute right-2 top-2 flex items-center gap-1">
              <button
                type="button"
                // onClick={generatePassword}
                className="p-1 text-slate-400 hover:text-slate-200"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="p-1 text-slate-400 hover:text-slate-200"
              >
                {passwordVisible ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Password Indicator */}
          <div className="mt-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="h-1.5 flex-1 bg-slate-600 rounded-full overflow-hidden">
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
              <span className="text-xs text-slate-400">
                {passwordStrength} %
              </span>
            </div>
            <div className="flex flex-wrap gap-3 text-xs">
              <div className="flex items-center gap-1">
                <Check
                  className={`
                  h-3 w-3 ${
                    password.length >= 8 ? "text-green-500" : "text-slate-500"
                  }
                  `}
                />
                <span className="text-slate-400">8+ chars</span>
              </div>
              <div className="flex items-center gap-1">
                <Check
                  className={`
                  h-3 w-3 ${
                    password.match(/[A-Z]/)
                      ? "text-green-500"
                      : "text-slate-500"
                  }
                  `}
                />
                <span className="text-slate-400">Uppercase</span>
              </div>
              <div className="flex items-center gap-1">
                <Check
                  className={`
                  h-3 w-3 ${
                    password.match(/[0-9]/)
                      ? "text-green-500"
                      : "text-slate-500"
                  }
                  `}
                />
                <span className="text-slate-400">Number</span>
              </div>
              <div className="flex items-center gap-1">
                <Check
                  className={`
                  h-3 w-3 ${
                    password.match(/[^A-Za-z0-9]/)
                      ? "text-green-500"
                      : "text-slate-500"
                  }
                  `}
                />
                <span className="text-slate-400">Special Char</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="mt-4">
        <label htmlFor="notes" className="block text-xs text-slate-400 mb-1">
          Notes (Optional)
        </label>

        <textarea
          name="notes"
          id="notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add any additonal notes"
          className="w-full p-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
        ></textarea>
      </div>

      <div className="mt-6 flex gap-3">
        <Dialog.Close>
          <button
            type="button"
            className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-300 hover:bg-slate-600 transition-colors"
          >
            Cancel
          </button>
        </Dialog.Close>
        <button
          type="submit"
          className="flex-1 px-4 py-3 bg-teal-500 rounded-lg text-white font-medium hover:bg-teal-600 transition-colors"
        >
          Save Password
        </button>
      </div>
    </form>
  );
};

export default AddPassword;
