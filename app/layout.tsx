import "./globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Layout } from "@/components/craft";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import { Section, Container } from "@/components/craft";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Bridger Tower / Designer and Software Engineer",
  description:
    "Bridger is a Design Engineer exploring user interface design, applied artificial intelligence, and human computer interaction.",
  metadataBase: new URL("https://bridger.to"),
  alternates: {
    canonical: "/",
  },
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
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </Layout>
  );
}

const Header = () => {
  return (
    <Section>
      <Container className="flex items-center justify-between gap-4">
        <Link href="/" className="hover:opacity-75 transition-all">
          <Image src={Logo} width={36} height={29.31} alt="Bridger Logo" />
          <h3 className="sr-only">
            Bridger Tower / Designer and Software Engineer
          </h3>
        </Link>

        <div className="space-x-3">
          <a href="https://github.com/brijr">GitHub</a>
          <a href="https://x.com/bridgertower">X.com</a>
        </div>
      </Container>
    </Section>
  );
};

const Toggle = () => {
  return (
    <div className="fixed bottom-6 right-6">
      <ThemeToggle />
    </div>
  );
};
