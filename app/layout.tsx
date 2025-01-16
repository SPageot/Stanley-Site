"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { useCallback, useState } from "react";
import "./globals.css";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/NavBar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black relative`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
