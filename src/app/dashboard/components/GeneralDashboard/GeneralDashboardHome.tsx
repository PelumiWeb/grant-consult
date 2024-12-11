"use client";
import React from "react";

import { dashboardRouteName } from "@/app/utils/dashboardRouteType";
import { useAppSelector } from "../../../../../lib/hooks";
import ManageSubscription from "./ManageSubscription";
import GeneralDashboard from "../GeneralDashboard";

type Props = {};

const GeneralDashboardHome = (props: Props) => {
  const dashboard = useAppSelector((state) => state.dashboard.dashboard);

  const renderScreens = (route: any) => {
    switch (route) {
      case dashboardRouteName.generalDashboard:
        return <GeneralDashboard />;
        break;
      case dashboardRouteName.manageSubscription:
        return <ManageSubscription />;
        break;
      default:
        return null;
    }
  };
  return renderScreens(dashboard);
};

export default GeneralDashboardHome;
