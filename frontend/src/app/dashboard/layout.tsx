import { navData } from "@/data/data";
import { Shield } from "lucide-react";
import React from "react";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* SideBar */}
      <aside className="fixed left-0 top-0 h-screen max-w-64 bg-slate-800 border-r border-slate-700 p-4">
        <div className="flex items-center gap-2 mb-8">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-white">Pass By Privix</span>
        </div>

        <nav className="space-y-2">
          <ul>
            {navData.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.url}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg text-textSecondary hover:bg-slate-700 transition-colors duration-150 ${
                    i === 0 ? "bg:slate-700" : ""
                  }`}
                >
                  {React.cloneElement(item.icon, { size: 20 })}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main>{children}</main>
    </>
  );
};

export default Layout;
