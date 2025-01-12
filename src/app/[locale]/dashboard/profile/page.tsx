"use client";
import React from "react";

import { useAppSelector } from "../../../../../lib/hooks";
import ProfileGeneral from "./ProfileGeneralUser";
import Profile from "./Profile";
import { userTypeName } from "@/app/[locale]/utils/types/userTypes";
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
 
  const { user } = useAppSelector((state) => state.user);

  const assignedGrant = useAppSelector(
    (state) => state.dashboard.assignedGrant
  );

  const renderScreens = (route: any) => {
    console.log(route);

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
  return renderScreens(user?.userType);
};

export default ProfileHome;
