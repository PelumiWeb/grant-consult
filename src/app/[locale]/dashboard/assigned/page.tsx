"use client";
import React from "react";
import AssignedGrant from "./AssignedGrant";
import AssignedDetails from "./AssignedDetails";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import { useAppSelector } from "../../../../../lib/hooks";

type Props = {};
const assignedScreens = [
  { name: "home", id: 1 },
  { name: "details", id: 2 },
];

const AssignedHome = (props: Props) => {
  const [activeScreen, setActiveScreen] = React.useState(
    assignedScreens[1].name
  );

  const assignedGrant = useAppSelector(
    (state) => state.dashboard.assignedGrant
  );

  const renderScreens = (route: any) => {
    switch (route) {
      case dashboardRouteName.assignedGrant:
        return <AssignedGrant />;
        break;
      case dashboardRouteName.assignDetails:
        return <AssignedDetails />;
        break;
      default:
        return null;
    }
  };
  return renderScreens(assignedGrant);
};

export default AssignedHome;
