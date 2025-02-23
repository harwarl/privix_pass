import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "../styles/globals.css";
import { APP_DESCRIPTION, APP_NAME } from "@/data/constants";
import { Providers } from "@/components/providers";

const tomorrow = Tomorrow({
  variable: "--font-tomorrow",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 font-[family-name:var(--font-tomorrow)] ${tomorrow.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
