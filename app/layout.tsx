import "./globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Layout } from "@/components/craft";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import { Section, Container } from "@/components/craft";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Circle from "@/public/circle.svg";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bridger.to"),
  title: "Bridger Tower / Designer and Software Engineer",
  description:
    "Bridger is a Design Engineer exploring user interface design, applied artificial intelligence, and human computer interaction.",
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
          "min-h-screen bg-background font-sans antialiased w-screen overflow-x-hidden",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <Header />
            {children}
            <Toggle />
            <Toaster position="top-center" />
          </LenisProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </Layout>
  );
}

const Header = () => {
  return (
    <Section>
      <Container className="flex items-center justify-between gap-4 text-xl">
        <Link href="/" className="group">
          <Image
            src={Logo}
            width={36}
            height={29.31}
            className="hidden group-hover:block invert dark:invert-0"
            alt="Bridger Logo"
          />
          <Image
            src={Circle}
            width={29.31}
            height={29.31}
            className="group-hover:hidden"
            alt="Bridger Logo"
          />
          <h3 className="sr-only">
            Bridger Tower / Designer and Software Engineer
          </h3>
        </Link>

        <div className="space-x-3">
          <Link href="/work">Work</Link>
          <Link href="/posts">Posts</Link>
          <a href="https://github.com/brijr">Github</a>
        </div>
      </Container>
    </Section>
  );
};

const Toggle = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6">
      <ThemeToggle />
    </div>
  );
};
