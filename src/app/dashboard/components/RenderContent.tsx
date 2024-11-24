import React from "react";
// import { useAppSelector } from "../app/hook";
import { tabsName } from "@/app/utils/TabsTypes";
import Profile from "./Profile/Profile";

export default function RenderContents() {
  //   const tab = useAppSelector((state) => state.tabs.name);
  const tab = tabsName;

  const showContents = (tab: any) => {
    switch (tab) {
      case !tabsName.profile:
        // code block
        return <Profile />;
        break;
      case tabsName.assignedGrants:
        // code block
        return <Profile />;
        break;
      case tabsName.consultation:
        // code block
        return <Profile />;
        break;

      case tabsName.messages:
        // code block
        return <Profile />;
        break;
      case tabsName.revenue:
        // code block
        return <Profile />;
        break;

      default:
        return <Profile />;
      // code block
    }
  };
  return <>{showContents(tab)}</>;
}
