"use client";
import Image from "next/image";
import RenderContents from "./components/RenderContent";
import { useAppSelector } from "../../../../lib/hooks";
import GeneralDashboardHome from "./components/GeneralDashboard/GeneralDashboardHome";
import useHandleNavigation from "../utils/HandleNavigation";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useApiQuery } from "../utils/useApi";
import endpoints from "../../../../lib/endpoints";
import { useLocale } from "next-intl";

export default function Home() {
  const locale = useLocale();
  const handleNavigation = useHandleNavigation();
  const router = useRouter()
  const { currentDashboardRoute } = useAppSelector((state) => state.dashboard);
  const user = useAppSelector((state) => state.user.user);

  // React.useCallback(() => {
  // }, []);

  React.useEffect(() => {
    if (!user) {
      // redirect(`/${locale}`);
      router.push(`/${locale}`);

    } else {
      handleNavigation(currentDashboardRoute);
    }
  }, [user]);

  return (
    <div className="h-screen  w-full flex justify-center items-center">
      <ScaleLoader color="rgb(54, 215, 183)" />
    </div>
  );
}
