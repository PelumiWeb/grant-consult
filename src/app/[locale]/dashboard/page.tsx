"use client";
import Image from "next/image";
import RenderContents from "./components/RenderContent";
import { useAppSelector } from "../../../../lib/hooks";
import GeneralDashboardHome from "./components/GeneralDashboard/GeneralDashboardHome";
import useHandleNavigation from "../utils/HandleNavigation";
import { useRouter } from "next/navigation";
import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function Home() {
  const handleNavigation = useHandleNavigation();
  const { initialDashboardRoute } = useAppSelector((state) => state.dashboard);

  React.useCallback(() => {
    handleNavigation(initialDashboardRoute);
  }, []);

  return (
    <div className="h-screen  w-full flex justify-center items-center">
      <ScaleLoader color="rgb(54, 215, 183)" />
    </div>
  );
}
