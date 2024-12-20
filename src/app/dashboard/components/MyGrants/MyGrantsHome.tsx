"use client";
import React from "react";
import { dashboardRouteName } from "@/app/utils/dashboardRouteType";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { userTypeName } from "@/app/utils/userTypes";
import MyGrants from "./MyGrants";
import AllGrants from "./AllGrants";
import GrantPerformance from "./GrantPerformanceMeric";

// import AssignedGrant from "./AssignedGrant";
// import AssignedDetails from "./AssignedDetails";

type Props = {};
const assignedScreens = [
  { name: "home", id: 1 },
  { name: "details", id: 2 },
  { name: "performance", id: 3 },
];

const MyGrantsHome = (props: Props) => {
  const [activeScreen, setActiveScreen] = React.useState(
    assignedScreens[2].name
  );
  const dispatch = useAppDispatch();
  const dashboardRoute = useAppSelector((state) => state.dashboard);
  const { userType } = useAppSelector((state) => state.signup);
//   console.log(userType);

  const mygrant = useAppSelector((state) => state.dashboard.mygrant);

//   React.useEffect(() => {
//     const fetchData = () => {
//       dispatch(
//         setActiveRoute({
//           ...dashboardRoute,
//           consultation:
//             userType === userTypeName.general
//               ? dashboardRouteName.grantConsulatation
//               : dashboardRouteName.consultation,
//         })
//       );
//     };
//     fetchData();
//   }, []);
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
