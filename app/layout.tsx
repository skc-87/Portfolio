import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CursorBlob from "@/components/animations/CursorBlob";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanjay Kumar | Software Engineer",
  description:
    "Portfolio of Sanjay Kumar — Software Engineer and Data Engineering intern at Accenture. Specializing in Python, React, Node.js, Snowflake, and AI/ML.",
  keywords: [
    "Sanjay Kumar",
    "Software Engineer",
    "Data Analytics",
    "Machine Learning",
    "React",
    "Node.js",
    "Snowflake",
    "DBT",
    "Portfolio",
  ],
  authors: [{ name: "Sanjay Kumar" }],
  openGraph: {
    title: "Sanjay Kumar | Software Engineer",
    description:
      "Portfolio of Sanjay Kumar — Software Engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#050816] text-slate-200 antialiased relative">
        <CursorBlob />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
