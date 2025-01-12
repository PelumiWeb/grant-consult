"use client";
import React from "react";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import { useAppSelector } from "../../../../../lib/hooks";
import Wallet from "./Wallet";
import WalletHistory from "./WalletHistory";
import RenderModals from "@/app/[locale]/components/RenderModals";
// import AssignedGrant from "./AssignedGrant";
// import AssignedDetails from "./AssignedDetails";

type Props = {};

const WalletHome = (props: Props) => {
  const wallet = useAppSelector((state) => state.dashboard.wallet);
  console.log(wallet);
  const renderScreens = (route: any) => {
    switch (route) {
      case dashboardRouteName.wallet:
        return <Wallet />;
        break;
      case dashboardRouteName.walletHistory:
        return <WalletHistory />;
        break;
      default:
        return null;
    }
  };
  return (
    <div className="w-full">
      {renderScreens(wallet)}
      <RenderModals />
    </div>
  );
};

export default WalletHome;
