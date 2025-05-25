import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
});

export const metadata: Metadata = {
  title: "ICD Test",
  description: "Assignment test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bitter.variable} ${bitter.variable} antialiased`}>
        <Loading>{children}</Loading>
      </body>
    </html>
  );
}
