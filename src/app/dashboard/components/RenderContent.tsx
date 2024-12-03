import React from "react";
// import { useAppSelector } from "../app/hook";
import { tabsName } from "@/app/utils/TabsTypes";
import Profile from "./Profile/Profile";
import { useAppSelector } from "../..//../../lib/hooks";
import Consultation from "./Consultation/Consultation";
import Message from "./Message/Message";
import Revenue from "./Revenue/Revenue";
import AssignedHome from "./AssignedGrant/AssignedHome";
import ConsultanHome from "./Consultation/ConsulatationHome";
import WalletHome from "./Wallet/WalletHome";

export default function RenderContents() {
  const tab = useAppSelector((state) => state.tab.name);
  console.log(tab);
  const showContents = (tab: any) => {
    switch (tab) {
      case tabsName.profile:
        // code block
        return <Profile />;
        break;
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

      default:
        return <Profile />;
      // code block
    }
  };
  return <>{showContents(tab)}</>;
}
