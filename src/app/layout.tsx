import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "./globals.css";

const bitterFont = Bitter ({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${bitterFont.variable} ${bitterFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
