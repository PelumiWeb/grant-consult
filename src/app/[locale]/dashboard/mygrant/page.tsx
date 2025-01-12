"use client";
import React from "react";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import MyGrants from "./MyGrants";
import AllGrants from "./AllGrants";
import GrantPerformance from "./GrantPerformanceMeric";

// import AssignedGrant from "./AssignedGrant";
// import AssignedDetails from "./AssignedDetails";

type Props = {};
const MyGrantsHome = (props: Props) => {
  const mygrant = useAppSelector((state) => state.dashboard.mygrant);
  const renderScreens = (route: any) => {
    switch (route) {
      case dashboardRouteName.myGrants:
        return <MyGrants />;
        break;
      case dashboardRouteName.allGrants:
        return <AllGrants />;
        break;
      case dashboardRouteName.grantPerformanceMetric:
        return <GrantPerformance />;
        break;

      default:
        return null;
    }
  };
  return renderScreens(mygrant);
};

export default MyGrantsHome;
