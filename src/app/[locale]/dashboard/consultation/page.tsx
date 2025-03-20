"use client";
import React from "react";
import Consultation from "./Consultation";
import ConsulationDetails from "./ConsulationDetails";
import PerformanceMetric from "./PerformanceMetric";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";

import GrantConsultation from "./GrantConsultation";
import GeneralConsultantDetails from "./GeneralConsultantDetails";
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
  const dispatch = useAppDispatch();
  const dashboardRoute = useAppSelector((state) => state.dashboard);

  const { user } = useAppSelector((state) => state.user);

  const consultation = useAppSelector((state) => state.dashboard.consultation);

  React.useEffect(() => {
    const fetchData = () => {
      dispatch(
        setActiveRoute({
          ...dashboardRoute,
          consultation:
            user?.role === "GENERAL_USER"
              ? dashboardRouteName.grantConsulatation
              : dashboardRouteName.consultation,
        })
      );
    };
    fetchData();
  }, []);

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
      case dashboardRouteName.grantConsulatation:
        return <GrantConsultation />;
        break;
      case dashboardRouteName.generalConsultationDetails:
        return <GeneralConsultantDetails />;
        break;
      default:
        return null;
    }
  };
  return renderScreens(consultation);
};

export default ConsultanHome;
