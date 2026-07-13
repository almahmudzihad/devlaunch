import type { Metadata } from "next";
import { Providers } from "@/context";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevLaunch | Learn. Build. Launch.",
  description: "A modern online learning platform built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}