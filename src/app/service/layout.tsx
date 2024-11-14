import type { Metadata } from "next";
import React from "react";
import Header from "../home/components/Header";
import Footer from "../home/components/Footer";

export default function ServiceLayout({
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
