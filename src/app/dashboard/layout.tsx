import type { Metadata } from "next";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "./components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <section className="w-full h-full relative ">
        {/* <Main /> */}
        <div className="w-full flex justify-between items-start">
          <Sidebar />
          {children}
        </div>
        {/* Footer */}
        <div>
          <Footer />
        </div>
      </section>
    </html>
  );
}
