import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stately Cloud - Next.js Example",
  description: "An example of how to use Stately Cloud DB with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="app-wrapper">{children}</body>
    </html>
  );
}
