"use client";

import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import CustomInput from "../components/CustomInput";
import { Checkbox } from "antd";
import CustomButton from "../components/CustomButton";
import { Poppins, Montserrat } from "next/font/google";
import { useRouter, redirect, usePathname } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import CustomGrantsLogo from "../customIcon/GrantsLogo";
import { useLocale } from "next-intl";

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
  const pathname = usePathname();
  const locale = useLocale();
  console.log(pathname);

  // Define paths where you want to hide/show elements
  const signUpScreen = pathname === `/${locale}/auth`;
  return (
    <html lang="en">
      <body
        className={` ${mont.variable}
        ${poppins.variable}
        antialiased`}>
        <section className=" flex justify-center ">
          {/* Left */}
          <div className="fixed bottom-0 left-0  h-screen w-[45%] ">
            <div
              className=" hidden lg:flex  h-screen   px-4 flex-col justify-center lg:justify-start items-center lg:items-start py-8 bg-backgroundColor
] relative ">
              <div
                onClick={async () => {
                  // router.refresh();
                  redirect("/");
                }}
                className="absolute top-3 z-40 cursor-pointer">
                <CustomGrantsLogo />
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
              {signUpScreen && (
                <div className="flex items-center justify-center h-[40%] flex-1 w-full absolute top-16 z-30">
                  <ul className="mr-8">
                    <div>
                      <p className="font-bold text-[16px] leading-[20px] font-mono text-[#000000]">
                        Join the GrantsConsult Community!
                      </p>
                      <p className="font-normal font-mono text-[16px] leading-[20px] text-primaryBlack">
                        Whether you’re a General User, Consultant, or Grantor,
                        we have the right space for you.
                      </p>
                    </div>
                    <li className="mt-2 list-disc ml-4">
                      <p className="font-bold text-[16px] leading-[20px] font-mono text-primaryBlack">
                        General Users:{" "}
                        <span className="font-normal font-mono text-[16px] leading-[20px] text-primaryBlack">
                          Includes individuals, NGOs, and corporate bodies
                          seeking grants for projects, education, or
                          initiatives. Access tailored opportunities and request
                          expert consultations.
                        </span>
                      </p>
                    </li>
                    <li className="mt-2 list-disc ml-4">
                      <p className="font-bold text-[16px] leading-[20px] font-mono text-primaryBlack">
                        Consultant:{" "}
                        <span className="font-normal font-mono text-[16px] leading-[20px] text-primaryBlack">
                          Grant writing and advisory professionals can showcase
                          their expertise, connect with clients, and earn
                          through successful applications.
                        </span>
                      </p>
                    </li>
                    <li className="mt-2 list-disc ml-4">
                      <p className="font-bold text-[16px] leading-[20px] font-mono text-primaryBlack">
                        Grantors:{" "}
                        <span className="font-normal font-mono text-[16px] leading-[20px] text-primaryBlack">
                          Funding organizations or donors can upload grant
                          details, connect with qualified applicants, and track
                          the impact of their contributions.
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              )}

              <div
                className={`flex items-center justify-center ${
                  signUpScreen ? "h-[60%]" : "h-screen"
                } flex-1 w-full absolute bottom-0 z-30`}>
                <img
                  className={`${
                    signUpScreen ? "h-[300px] w-[300px]" : "h-auto max-w-full"
                  }`}
                  src="/people.svg"
                  alt="Grant Logo"
                />
              </div>
            </div>
          </div>
          {/* Mobile Header */}

          {/* Content */}
          <div className="w-full lg:w-[55%]  border-gray-500 bg-white absolute top-0 right-0  ">
            <div className="flex items-center py-4 px-2 md:hidden">
              <button
                className="flex items-center justify-start mr-8"
                onClick={() => router.back()}>
                <div className="w-[16px] h-[16px] relative">
                  <Image src={"/goBackNew.svg"} alt="" fill />
                </div>
                <p className=" font-mono font-medium text-[16px] leading-[18px] text-primary ml-2 ">
                  Back
                </p>
              </button>
              <CustomGrantsLogo height="22" width="163" />
            </div>
            {children}
          </div>
          <ToastContainer />
        </section>
      </body>
    </html>
  );
}
