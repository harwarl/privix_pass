import { Key, Lock, Settings, Wallet } from "lucide-react";

export const navData = [
  {
    icon: <Lock />,
    label: "Passwords",
    url: "/dashboard",
  },
  {
    icon: <Key />,
    label: "Generator",
    url: "/dashboard/passwords/generate",
  },
  //   {
  //     icon: <History />,
  //     label: "History",
  //     url: "/dashboard/history",
  //   },
  {
    icon: <Wallet />,
    label: "Wallets",
    url: "/dashboard/wallets",
  },
  {
    icon: <Settings />,
    label: "Settings",
    url: "/dashboard/settings",
  },
];
