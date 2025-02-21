import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        input: "var(--input)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        secondary: "var(--secondary)",
        textPrimary: "var(--textPrimary)",
        textSecondary: "var(--textSecondary)",
        textTertiary: "var(--textTertiary)",
        btnPrimary: "var(--btnPrimary)",
        highlight: "var(--highlight)",
        hover: "var(--hover)",
      },
    },
  },
  plugins: [],
} satisfies Config;
