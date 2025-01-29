"use client";
import type { Metadata } from "next";
import React, { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "./components/Sidebar";
import { Poppins, Montserrat } from "next/font/google";
import { redirect, useParams, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useAppSelector } from "../../../../lib/hooks";
import useHandleNavigation from "../utils/HandleNavigation";

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
  const user = useAppSelector((data) => data.user.user);
  const locale = useLocale();
  const handleNavigation = useHandleNavigation()

  React.useEffect(() => {
    if (!user) {
     handleNavigation("/auth/login", redirect);
    }
  }, []);
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
            <Suspense
              fallback={
                <div className="w-full h-screen bg-white flex justify-center items-center">
                  <ScaleLoader color="rgb(54, 215, 183)" />
                </div>
              }>
              <div className="w-full lg:w-[80%] h-full ">{children}</div>
            </Suspense>
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
