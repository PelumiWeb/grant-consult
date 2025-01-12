"use client";

import React from "react";
import TabsComponent from "./TabsComponent";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { setActiveTab } from "../../../../../lib/features/Tabs/tabsLice";
import { useRouter } from "next/navigation";
import { tabsName } from "@/app/[locale]/utils/types/TabsTypes";
import { userTypeName } from "@/app/[locale]/utils/types/userTypes";
import { AnyAaaaRecord } from "dns";
import { useLocale } from "next-intl";
import useHandleNavigation from "../../utils/HandleNavigation";

type Props = {};
type TabsProps = {
  imageTitle: string;
  image: string;
  textColor?: string;
  url?: string | undefined;
}[];

const tabs: TabsProps | undefined = [
  {
    imageTitle: tabsName.profile,
    image: "/dashboard.svg",
    url: "/dashboard/profile",
  },
  {
    imageTitle: tabsName.assignedGrants,
    image: "/dashboard2.svg",
    url: "/dashboard/assigned",
  },
  {
    imageTitle: tabsName.consultation,
    image: "/dashboard3.svg",
    url: "/dashboard/consultation",
  },
  {
    imageTitle: tabsName.message,
    image: "/dashboard4.svg",
    url: "/dashboard/message",
  },
  {
    imageTitle: tabsName.wallet,
    image: "/dashboard3.svg",
    url: "/dashboard/wallet",
  },
  {
    imageTitle: tabsName.settings,
    image: "/settings.svg",
    url: "/dashboard/settings",
  },
  {
    imageTitle: tabsName.helpSupport,
    image: "/help.svg",
    url: "/dashboard/help",
  },
  {
    imageTitle: tabsName.logout,
    image: "/logout-gray.svg",
    textColor: "text-textColor",
  },
];

const generalTabs: TabsProps | undefined = [
  {
    imageTitle: tabsName.generalDashboard,
    image: "/generalDashboard.svg",
    url: "/dashboard/",
  },
  {
    imageTitle: tabsName.profile,
    image: "/profileDashboard.svg",
    url: "/dashboard/profile",
  },
  {
    imageTitle: tabsName.grant,
    image: "/dashboard2.svg",
    url: "/dashboard/grants",
  },
  {
    imageTitle: tabsName.consultation,
    image: "/dashboard3.svg",
    url: "/dashboard/consultation",
  },
  {
    imageTitle: tabsName.message,
    image: "/dashboard4.svg",
    url: "/dashboard/message",
  },
  {
    imageTitle: tabsName.settings,
    image: "/settings.svg",
    url: "/dashboard/settings",
  },
  {
    imageTitle: tabsName.helpSupport,
    image: "/help.svg",
    url: "/dashboard/help",
  },
  {
    imageTitle: tabsName.logout,
    image: "/logout-gray.svg",
    textColor: "text-textColor",
  },
];

const grantTabs: TabsProps | undefined = [
  {
    imageTitle: tabsName.profile,
    image: "/profileDashboard.svg",
    url: "/dashboard/profile",
  },
  {
    imageTitle: tabsName.myGrants,
    image: "/dashboard2.svg",
    url: "/dashboard/mygrant",
  },
  {
    imageTitle: tabsName.settings,
    image: "/settings.svg",
    url: "/dashboard/settings",
  },
  {
    imageTitle: tabsName.helpSupport,
    image: "/help.svg",
    url: "/dashboard/help",
  },
  {
    imageTitle: tabsName.logout,
    image: "/logout-gray.svg",
    textColor: "text-textColor",
  },
];

const Sidebar = (props: Props) => {
  const dispatch = useAppDispatch();
  const tabName = useAppSelector((state) => state.tab.name);
  const { user } = useAppSelector((state) => state.user);

  const router = useRouter();

  const locale = useLocale();
  const handleNavigation = useHandleNavigation();

  const renderTabs = React.useMemo(() => {
    if (user?.userType == userTypeName.general) {
      return generalTabs;
    } else if (user?.userType == userTypeName.consultant) {
      return tabs;
    } else {
      return grantTabs;
    }
  }, []);

  // console.log(renderTabs, "Render tabs...");

  return (
    <div className="bg-primary h-screen w-[20%] px-8 ">
      <div className="pb-8 mt-6" onClick={() => handleNavigation(`/`)}>
        <TabsComponent
          imageTitle="Home"
          image="/home.svg"
          active={false}
          textColor="text-buttonPrimary"
        />
      </div>
      {renderTabs?.map((tab: any) => (
        <TabsComponent
          // setActive={() => dispatch(setActiveTab(tab.imageTitle))}
          image={tab.image}
          url={tab?.url}
          imageTitle={tab.imageTitle}
          active={tabName.toLowerCase() === tab.imageTitle.toLowerCase()}
          textColor={tab.textColor && tab.textColor}
        />
      ))}
    </div>
  );
};

export default Sidebar;
