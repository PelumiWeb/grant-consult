import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "../globals.css";

import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import React, { ReactNode, Suspense } from "react";
import getMessagesSync from "./utils/getMessageAsync";
import ReactQueryProvider from "./utils/ReactQueryProvider";
import ScaleLoader from "react-spinners/ScaleLoader";
import { ThemeProvider } from "next-themes";
import StoreProvider from "../../../lib/storeProvider";

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

export const metadata: Metadata = {
  title: "Grant Consult",
  description:
    "At GrantsConsult we provide grant and other funding opportunities tailored to various niche and backed up with expert consultation to guide you through the grant application process. Our comprehensive approach is designed to simplify your path to success.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams: any = await params; // Resolve the promise
  const messages = await getMessages();

  return (
    <html lang={resolvedParams.locale}>
      <body
        className={` ${mont.variable}
        ${poppins.variable}
        antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <NextIntlClientProvider messages={messages}>
            <ReactQueryProvider>
              <StoreProvider>
                <Suspense
                  fallback={
                    <div className="w-full h-screen  bg-white flex justify-center items-center">
                      <ScaleLoader color="rgb(54, 215, 183)" />
                    </div>
                  }>
                  <div className="">{children}</div>
                </Suspense>
              </StoreProvider>
            </ReactQueryProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
