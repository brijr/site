import "./globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import { Layout } from "@/components/craft";
import { Logo } from "@/components/logo";
import { Section, Container } from "@/components/craft";
import { cn } from "@/lib/utils";

import Link from "next/link";

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
          fontSans.variable,
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
        <Logo width={24} />

        <h3 className="sr-only">
          Bridger Tower / Designer and Software Engineer
        </h3>

        <div className="space-x-3">
          <Link href="/work">Work</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/x">Follow</Link>
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
