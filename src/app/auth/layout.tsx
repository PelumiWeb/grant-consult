import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import CustomInput from "../component/CustomInput";
import { Checkbox } from "antd";
import CustomButton from "../component/CustomButton";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <section className=" fixed bottom-0 left-0 w-screen h-screen flex justify-center ">
        {/* Left */}
        <div
          className="w-[45%] h-screen flex  px-4 flex-col justify-start items-start py-8 bg-backgroundColor
] relative">
          <Image
            className=""
            src="/grantLogo.svg"
            alt="Grant Logo"
            width={206}
            height={30}
          />
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
        <div className="w-[55%] rounded-xl border-gray-500 bg-white  rounded-tl-xl rounded-bl-[100px]">
          {children}
        </div>
      </section>
    </html>
  );
}
