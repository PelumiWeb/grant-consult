import React from "react";
// import { useAppSelector } from "../app/hook";
import { tabsName } from "@/app/[locale]/utils/types/TabsTypes";
import { useAppSelector } from "../../../../../lib/hooks";
import Consultation from "./Consultation/Consultation";
import Message from "./Message/Message";
import Revenue from "./Revenue/Revenue";
import AssignedHome from "./AssignedGrant/AssignedHome";
import ConsultanHome from "./Consultation/ConsulatationHome";
import WalletHome from "./Wallet/WalletHome";
import Settings from "./Settings/Settings";
import HelpSupport from "./HelpSupport/HelpSupport";
// import ProfileHome from "./Profile/ProfileHome";
import GeneralDashboard from "./GeneralDashboard";
import GeneralDashboardHome from "./GeneralDashboard/GeneralDashboardHome";
import Grant from "./Grant/Grant";
import MyGrantsHome from "./MyGrants/MyGrantsHome";

export default function RenderContents() {
  const tab = useAppSelector((state) => state.tab.name);
  const showContents = (tab: any) => {
    switch (tab) {
      // case tabsName.profile:
      //   // code block
      //   return <ProfileHome />;
      //   break;
      case tabsName.assignedGrants:
        // code block
        return <AssignedHome />;
        break;
      case tabsName.consultation:
        // code block
        return <ConsultanHome />;
        break;
      case tabsName.message:
        // code block
        return <Message />;
        break;
      case tabsName.wallet:
        // code block
        return <WalletHome />;
        break;
      case tabsName.settings:
        // code block
        return <Settings />;
        break;
      case tabsName.helpSupport:
        // code block
        return <HelpSupport />;
        break;
      case tabsName.generalDashboard:
        // code block
        return <GeneralDashboardHome />;
        break;
      case tabsName.grant:
        // code block
        return <Grant />;
        break;
      case tabsName.myGrants:
        // code block
        return <MyGrantsHome />;
        break;

      default:
        return <div></div>;
      // code block
    }
  };
  return <>{showContents(tab)}</>;
}
