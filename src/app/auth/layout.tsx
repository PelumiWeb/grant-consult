"use client";

import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import CustomInput from "../components/CustomInput";
import { Checkbox } from "antd";
import CustomButton from "../components/CustomButton";
import { Poppins, Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";

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
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <html lang="en">
      <body
        className={` ${mont.variable}
        ${poppins.variable}
        antialiased`}>
        <section className=" fixed bottom-0 left-0 w-screen h-screen flex justify-center ">
          {/* Left */}
          <div
            className=" hidden lg:flex w-[45%] h-screen   px-4 flex-col justify-center lg:justify-start items-center lg:items-start py-8 bg-backgroundColor
] relative ">
            <div
              onClick={async () => {
                // router.refresh();
                router.replace("/");
              }}
              className="relative z-40 cursor-pointer">
              <Image
                src="/grantLogo.svg"
                alt="Grant Logo"
                width={206}
                height={30}
              />
            </div>

            <div className="z-20 ">
              <img
                src="/path1.svg"
                className=" w-[370px] h-[392px] absolute -top-[15%] -left-[15%]"
              />
              <img
                src="/path2.svg"
                className="h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
              <img
                src="/path3.svg"
                className="w-[450px] h-[465px] absolute -left-[15%] top-[55%] overflow-hidden"
              />
            </div>

            <div className="flex items-center justify-center h-screen flex-1 w-full absolute top-0 z-30">
              <img
                className="max-w-full h-auto"
                src="/people.svg"
                alt="Grant Logo"
              />
            </div>
          </div>
          {/* Content */}
          <div className="w-full lg:w-[55%]  border-gray-500 bg-white  ">
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
