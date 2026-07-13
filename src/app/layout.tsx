import type { Metadata } from "next";
import { Providers } from "@/context";
import "./globals.css";

export const metadata: Metadata = {
  title: "SCIC",
  description: "SCIC Application",
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
