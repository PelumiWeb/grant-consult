"use client";
import React from "react";
import { dashboardRouteName } from "@/app/[locale]/utils/dashboardRouteType";
import { useAppSelector } from "../../../../../../lib/hooks";
import ProfileGeneral from "./ProfileGeneralUser";
import Profile from "./Profile";
import { userTypeName } from "@/app/[locale]/utils/userTypes";
import ProfileGrant from "./ProfileGrant";

type Props = {};
const assignedScreens = [
  { name: "grant-profile", id: 1 },
  { name: "consultant-profile", id: 2 },
  { name: "grant-profile", id: 2 },
];

const ProfileHome = (props: Props) => {
  const [activeScreen, setActiveScreen] = React.useState(
    assignedScreens[1].name
  );
  const userType = useAppSelector((state) => state.signup.userType);

  const assignedGrant = useAppSelector(
    (state) => state.dashboard.assignedGrant
  );

  const renderScreens = (route: any) => {
    switch (route) {
      case userTypeName.general:
        return <ProfileGeneral />;
        break;
      case userTypeName.consultant:
        return <Profile />;
        break;
      case userTypeName.grantor:
        return <ProfileGrant />;
        break;
      default:
        return null;
    }
  };
  return renderScreens(userType);
};

export default ProfileHome;
