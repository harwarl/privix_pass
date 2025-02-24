import { Key, Lock, Settings } from "lucide-react";

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
  // {
  //   icon: <Wallet />,
  //   label: "Wallets",
  //   url: "/dashboard/wallets",
  // },
  {
    icon: <Settings />,
    label: "Settings",
    url: "/dashboard/settings",
  },
];

export const statsMockData = [
  {
    label: "Total Passwords",
    value: "48",
    subText: "12 Added this month",
  },
  {
    label: "Password Strength",
    value: "92%",
    subText: "Average Strength Score",
  },
  {
    label: "Last Backup",
    value: "2h Ago",
    subText: "Auto-backup enabled",
  },
  {
    label: "Total Passwords",
    value: "48",
    subText: "12 Added this month",
  },
  {
    label: "Password Strength",
    value: "92%",
    subText: "Average Strength Score",
  },
  {
    label: "Last Backup",
    value: "2h Ago",
    subText: "Auto-backup enabled",
  },
];

export const passwordData = [
  {
    site: "Gmail",
    username: "user@example.com",
    lastUpdated: "2 days ago",
  },
  {
    site: "Github",
    username: "devuser",
    lastUpdated: "1 week ago",
  },
  {
    site: "Dropbox",
    username: "user@example.com",
    lastUpdated: "3 weeks ago",
  },
  {
    site: "AWS",
    username: "admin@example.com",
    lastUpdated: "1 month ago",
  },
];
