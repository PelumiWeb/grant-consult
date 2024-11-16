import type { Metadata } from "next";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function GrantLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <section className="w-full ">
        <Header />
        {/* Content */}
        <div className="bg-backgroundColor">{children}</div>
        <Footer />
      </section>
    </html>
  );
}
