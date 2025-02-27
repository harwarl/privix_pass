import { Key, Lock, Settings } from "lucide-react";

export const navData = [
  {
    icon: <Lock />,
    label: "Vault",
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
];

export const passwordData = [
  {
    site: "Gmail",
    username: "user@example.com",
    lastUpdated: "2 days ago",
  },
  // {
  //   site: "Github",
  //   username: "devuser",
  //   lastUpdated: "1 week ago",
  // },
  // {
  //   site: "Dropbox",
  //   username: "user@example.com",
  //   lastUpdated: "3 weeks ago",
  // },
  // {
  //   site: "AWS",
  //   username: "admin@example.com",
  //   lastUpdated: "1 month ago",
  // },
];

export const walletData = {
  address: "0x1234...5678",
  fullAddress: "0x1234567890abcdef1234567890abcdef12345678",
  balance: "1.2456 ETH",
  network: "Ethereum",
  networkStatus: "connected",
  ensName: "john.eth",
};

export const mockAutofillData = [
  {
    url: "https://github.com",
    favicon: "/api/placeholder/16/16",
    title: "GitHub",
    username: "developer@example.com",
    domain: "github.com",
  },
  {
    url: "https://gitlab.com",
    favicon: "/api/placeholder/16/16",
    title: "GitLab",
    username: "dev@company.com",
    domain: "gitlab.com",
  },
  {
    url: "https://dropbox.com",
    favicon: "/api/placeholder/16/16",
    title: "Dropbox",
    username: "user@example.com",
    domain: "dropbox.com",
  },
];

export const generatedHistoryData = [
  {
    id: 1,
    password: "Password1",
    created_at: new Date(),
  },
  {
    id: 2,
    password: "Password2",
    created_at: new Date(),
  },
];
