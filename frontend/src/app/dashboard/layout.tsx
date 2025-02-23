// "use client";
// import { navData } from "@/data/data";
// import { Shield } from "lucide-react";
// import React from "react";
// import Link from "next/link";

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <>
//       {/* SideBar */}
//       <aside className="hidden sm:block fixed left-0 top-0 h-screen max-w-64 bg-slate-800 border-r border-slate-700 p-4 pt-8 ">
//         <div className="flex items-center gap-2 mb-8">
//           <Shield className="h-8 w-8 text-primary" />
//           <span className="text-xl font-bold text-white hidden sm:block">
//             Pass By Privix
//           </span>
//         </div>

//         <nav className="space-y-2">
//           <ul>
//             {navData.map((item, i) => (
//               <li key={i}>
//                 <Link
//                   href={item.url}
//                   className={`flex items-center gap-3 w-full p-3 rounded-lg text-primary hover:bg-slate-700 transition-colors duration-150 ${
//                     i === 0 ? "bg:slate-700" : ""
//                   }`}
//                 >
//                   {React.cloneElement(item.icon, { size: 20 })}
//                   <span className="hidden sm:block text-white">
//                     {item.label}
//                   </span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </aside>
//       <main>{children}</main>
//     </>
//   );
// };

// export default Layout;

"use client";
import { navData } from "@/data/data";
import { Shield, Menu, X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 bg-slate-800 border-b border-slate-700 p-4 z-20 sm:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-teal-500" />
            <span className="text-lg font-bold text-white">Pass By Privix</span>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-slate-300 hover:text-slate-100"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 bg-slate-900/80 z-10 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed top-16 right-0 w-64 h-screen bg-slate-800 border-l border-slate-700 p-4 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="space-y-2">
            {navData.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                className="flex items-center gap-3 w-full p-3 rounded-lg text-slate-300 hover:bg-slate-700 transition-colors"
              >
                {React.cloneElement(item.icon, { size: 20 })}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden sm:block fixed left-0 top-0 h-screen max-w-64 bg-slate-800 border-r border-slate-700 p-4 pt-8 ">
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
                  className="flex items-center gap-3 w-full p-3 rounded-lg text-primary hover:bg-slate-700 transition-colors duration-150"
                >
                  {React.cloneElement(item.icon, { size: 20 })}
                  <span className="hidden sm:block text-white">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-auto sm:ml-60 p-8 mt-16">{children}</main>
    </div>
  );
};

export default Layout;
