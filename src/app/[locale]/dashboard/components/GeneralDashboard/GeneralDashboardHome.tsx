"use client";
import React from "react";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import { useAppSelector } from "../../../../../../lib/hooks";
import ManageSubscription from "./ManageSubscription";
import GeneralDashboard from "../GeneralDashboard";

type Props = {};

const GeneralDashboardHome = (props: Props) => {
  const dashboard = useAppSelector((state) => state.dashboard.dashboard);
  console.log(dashboard, "This is the dashboard");

  const renderScreens = (route: any) => {
    switch (route) {
      case dashboardRouteName.generalDashboard:
        return <GeneralDashboard />;
        break;
      case dashboardRouteName.manageSubscription:
        return <ManageSubscription />;
        break;
      default:
        return <p>There is no dashboard</p>;
    }
  };
  return <div className="w-full h-full">{renderScreens(dashboard)};</div>;
};

export default GeneralDashboardHome;
