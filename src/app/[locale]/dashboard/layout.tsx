"use client";
import type { Metadata } from "next";
import React, { useEffect, useState, useTransition } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "./components/Sidebar";
import { Poppins, Montserrat } from "next/font/google";
// import { useRouter } from "next/navi";

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

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isPending,] = useTransition();

  console.log(isPending, "it's pendingggggg");

  //   // Start loading when route changes
  //   const handleStart = () => setIsLoading(true);
  //   const handleComplete = () => setIsLoading(false);

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);

  //   // Cleanup listeners on unmount
  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleComplete);
  //     router.events.off("routeChangeError", handleComplete);
  //   };
  // }, [router.events]);

  return (
    <html lang="en">
      <body
        className={` ${mont.variable}
        ${poppins.variable}
        antialiased`}>
        <section className="w-full h-full relative ">
          {/* <Main /> */}
          <div className="w-full flex justify-between items-start">
            <Sidebar />

            {isPending && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800"></div>
              </div>
            )}
            {children}
          </div>
          {/* Footer */}
          <div>
            <Footer />
          </div>
        </section>
      </body>
    </html>
  );
}
