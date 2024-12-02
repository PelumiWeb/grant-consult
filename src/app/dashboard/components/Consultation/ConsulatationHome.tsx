"use client";
import React from "react";
import Consultation from "./Consultation";
import ConsulationDetails from "./ConsulationDetails";
import PerformanceMetric from "./PerformanceMetric";
import { dashboardRouteName } from "@/app/utils/dashboardRouteType";
import { useAppSelector } from "../../../../../lib/hooks";
// import AssignedGrant from "./AssignedGrant";
// import AssignedDetails from "./AssignedDetails";

type Props = {};
const assignedScreens = [
  { name: "home", id: 1 },
  { name: "details", id: 2 },
  { name: "performance", id: 3 },
];

const ConsultanHome = (props: Props) => {
  const [activeScreen, setActiveScreen] = React.useState(
    assignedScreens[2].name
  );
   const consultation = useAppSelector((state) => state.dashboard.consultation);
  const renderScreens = (route: any) => {
    switch (route) {
      case dashboardRouteName.consultation:
        return <Consultation />;
        break;
      case dashboardRouteName.consultationDetails:
        return <ConsulationDetails />;
        break;
      case dashboardRouteName.performanceMetrics:
        return <PerformanceMetric />;
        break;
      default:
        return null;
    }
  };
  return renderScreens(consultation);
};

export default ConsultanHome;
