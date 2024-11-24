import type { Metadata } from "next";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Poppins, Montserrat } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const mont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${mont.variable}
        ${poppins.variable}
        antialiased`}>
        <section className="w-full ">
          <Header />
          {/* Content */}
          <div className="bg-backgroundColor">{children}</div>
          <Footer />
        </section>
      </body>
    </html>
  );
}
