"use client";
import React from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import { useLocale } from "next-intl";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return children;
}
