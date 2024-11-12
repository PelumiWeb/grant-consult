import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import CustomInput from "../component/CustomInput";
import { Checkbox } from "antd";
import CustomButton from "../component/CustomButton";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <section className="w-full ">
        <Header />
        {/* Content */}
        <div className="">
          {children}
        </div>
        <Footer />
      </section>
    </html>
  );
}
