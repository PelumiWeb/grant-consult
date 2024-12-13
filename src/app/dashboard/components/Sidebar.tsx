"use client";

import React from "react";
import TabsComponent from "./TabsComponent";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";
import { setActiveTab } from "../../../../lib/features/Tabs/tabsLice";
import { useRouter } from "next/navigation";
import { tabsName } from "@/app/utils/TabsTypes";
import { userTypeName } from "@/app/utils/userTypes";
import { AnyAaaaRecord } from "dns";

type Props = {};
type TabsProps = { imageTitle: string; image: string; textColor?: string }[];

const tabs: TabsProps | undefined = [
  { imageTitle: tabsName.profile, image: "/dashboard.svg" },
  { imageTitle: tabsName.assignedGrants, image: "/dashboard2.svg" },
  { imageTitle: tabsName.consultation, image: "/dashboard3.svg" },
  { imageTitle: tabsName.message, image: "/dashboard4.svg" },
  { imageTitle: tabsName.wallet, image: "/dashboard3.svg" },
  { imageTitle: tabsName.settings, image: "/settings.svg" },
  { imageTitle: tabsName.helpSupport, image: "/help.svg" },
  {
    imageTitle: tabsName.logout,
    image: "/logout-gray.svg",
    textColor: "text-textColor",
  },
];

const generalTabs: TabsProps | undefined = [
  { imageTitle: tabsName.generalDashboard, image: "/generalDashboard.svg" },
  { imageTitle: tabsName.profile, image: "/profileDashboard.svg" },
  { imageTitle: tabsName.grant, image: "/dashboard2.svg" },
  { imageTitle: tabsName.consultation, image: "/dashboard3.svg" },
  { imageTitle: tabsName.message, image: "/dashboard4.svg" },
  { imageTitle: tabsName.settings, image: "/settings.svg" },
  { imageTitle: tabsName.helpSupport, image: "/help.svg" },
  {
    imageTitle: tabsName.logout,
    image: "/logout-gray.svg",
    textColor: "text-textColor",
  },
];

const grantTabs: TabsProps | undefined = [
  { imageTitle: tabsName.profile, image: "/profileDashboard.svg" },
  { imageTitle: tabsName.grant, image: "/dashboard2.svg" },
  { imageTitle: tabsName.settings, image: "/settings.svg" },
  { imageTitle: tabsName.helpSupport, image: "/help.svg" },
  {
    imageTitle: tabsName.logout,
    image: "/logout-gray.svg",
    textColor: "text-textColor",
  },
];

const Sidebar = (props: Props) => {
  const dispatch = useAppDispatch();
  const tabName = useAppSelector((state) => state.tab.name);
  const router = useRouter();
  const userType = useAppSelector((state) => state.signup.userType);

  const renderTabs = React.useMemo(() => {
    if (userType == userTypeName.general) {
      return generalTabs;
    } else if (userType == userTypeName.consultant) {
      return tabs;
    } else {
      return grantTabs;
    }
  }, []);

  // console.log(renderTabs, "Render tabs...");

  return (
    <div className="bg-primary h-screen w-[20%] px-8 ">
      <div className="pb-8 mt-6" onClick={() => router.push("/")}>
        <TabsComponent
          imageTitle="Home"
          image="/home.svg"
          active={false}
          textColor="text-buttonPrimary"
        />
      </div>
      {renderTabs?.map((tab: any) => (
        <TabsComponent
          setActive={() => dispatch(setActiveTab(tab.imageTitle))}
          image={tab.image}
          imageTitle={tab.imageTitle}
          active={tabName.toLowerCase() === tab.imageTitle.toLowerCase()}
          textColor={tab.textColor && tab.textColor}
        />
      ))}
    </div>
  );
};

export default Sidebar;
