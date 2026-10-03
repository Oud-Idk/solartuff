import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";
import { ScrollRestoration } from "@/lib/scroll-preservation";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // `default` renders on pages that set no title of their own (the home page);
  // `template` is applied to any title set further down the tree.
  title: {
    default: "SolarTuff",
    template: "%s | SolarTuff",
  },
  description: "Solar water heater with German vacuum tube technology.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} font-sans w-full h-dvh bg-[url(/background.jpeg)] bg-no-repeat bg-cover bg-center ring-0 overscroll-none`}>
        <MobileMenuProvider>{children}</MobileMenuProvider>
        <ScrollRestoration />
      </body>
    </html>
  );
}