import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Layout } from "@/components/craft";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MDX Starter Template for Building Websites",
  description:
    "MDX and Next.js Starter made by Bridger Tower at 9d8 and WIP / AC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased w-screen",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toggle />
        </ThemeProvider>
        <Analytics />
      </body>
    </Layout>
  );
}

const Header = () => {
  return <div>Header</div>;
};

const Toggle = () => {
  return (
    <div className="fixed bottom-6 right-6">
      <ThemeToggle />
    </div>
  );
};
