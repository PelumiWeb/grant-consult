"use client";

import React from "react";
import TabsComponent from "./TabsComponent";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { setActiveTab } from "../../../../../lib/features/Tabs/tabsLice";
import { usePathname, useRouter } from "next/navigation";
import { tabsName } from "@/app/[locale]/utils/types/TabsTypes";
import { userTypeName } from "@/app/[locale]/utils/types/userTypes";
import { useLocale } from "next-intl";
import useHandleNavigation from "../../utils/HandleNavigation";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";

type Props = {};
type TabsProps = {
  imageTitle: string;
  image: string;
  textColor?: string;
  url?: string | undefined;
}[];

const Sidebar = (props: Props) => {
  const tabName = useAppSelector((state) => state.tab.name);
  const { user } = useAppSelector((state) => state.user);
  const pathName = usePathname();
  const dashboardRoute = useAppSelector((state) => state.dashboard);

  const locale = useLocale();
  const dispatch = useAppDispatch();

  const tabs: TabsProps | undefined = [
    {
      imageTitle: tabsName.profile,
      image: "/dashboard.svg",
      url: `/${locale}/dashboard/profile`,
    },
    {
      imageTitle: tabsName.favourite,
      image: "/profileDashboard.svg",
      url: `/${locale}/dashboard/favourites`,
    },
    {
      imageTitle: tabsName.assignedGrants,
      image: "/dashboard2.svg",
      url: `/${locale}/dashboard/assigned`,
    },
    {
      imageTitle: tabsName.consultation,
      image: "/dashboard3.svg",
      url: `/${locale}/dashboard/consultation`,
    },
    {
      imageTitle: tabsName.message,
      image: "/dashboard4.svg",
      url: `/${locale}/dashboard/message`,
    },
    {
      imageTitle: tabsName.wallet,
      image: "/dashboard3.svg",
      url: `/${locale}/dashboard/wallet`,
    },
    {
      imageTitle: tabsName.settings,
      image: "/settings.svg",
      url: `/${locale}/dashboard/settings`,
    },
    {
      imageTitle: tabsName.helpSupport,
      image: "/help.svg",
      url: `/${locale}/dashboard/help`,
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
      url: `/${locale}/dashboard/general`,
    },
    {
      imageTitle: tabsName.profile,
      image: "/profileDashboard.svg",
      url: `/${locale}/dashboard/profile`,
    },
    {
      imageTitle: tabsName.favourite,
      image: "/profileDashboard.svg",
      url: `/${locale}/dashboard/favourites`,
    },
    {
      imageTitle: tabsName.grant,
      image: "/dashboard2.svg",
      url: `/${locale}/dashboard/grants`,
    },
    {
      imageTitle: tabsName.consultation,
      image: "/dashboard3.svg",
      url: `/${locale}/dashboard/consultation`,
    },
    {
      imageTitle: tabsName.message,
      image: "/dashboard4.svg",
      url: `/${locale}/dashboard/message`,
    },
    {
      imageTitle: tabsName.settings,
      image: "/settings.svg",
      url: `/${locale}/dashboard/settings`,
    },
    {
      imageTitle: tabsName.helpSupport,
      image: "/help.svg",
      url: `/${locale}/dashboard/help`,
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
      url: `/${locale}/dashboard/profile`,
    },
    {
      imageTitle: tabsName.favourite,
      image: "/profileDashboard.svg",
      url: `/${locale}/dashboard/favourites`,
    },
    {
      imageTitle: tabsName.myGrants,
      image: "/dashboard2.svg",
      url: `/${locale}/dashboard/mygrant`,
    },
    {
      imageTitle: tabsName.settings,
      image: "/settings.svg",
      url: `/${locale}/dashboard/settings`,
    },
    {
      imageTitle: tabsName.helpSupport,
      image: "/help.svg",
      url: `/${locale}/dashboard/help`,
    },
    {
      imageTitle: tabsName.logout,
      image: "/logout-gray.svg",
      textColor: "text-textColor",
    },
  ];

  const handleNavigation = useHandleNavigation();
  const renderTabs = React.useMemo(() => {
    if ("GENERAL_USER" == userTypeName.general) {
      return generalTabs;
    } else if (user?.userType == userTypeName.consultant) {
      return tabs;
    } else {
      return grantTabs;
    }
  }, []);

  React.useCallback(() => {
    const FetchData = () => {
      dispatch(
        setActiveRoute({
          ...dashboardRoute,
          initialDashboardRoute: renderTabs[0]?.url,
        })
      );
    };

    FetchData();
  }, []);

  const [activeUrl, setActiveUrl] = React.useState(renderTabs[0].url);

  return (
    <div className="hidden lg:block bg-primary h-screen w-[20%] px-8 ">
      <div className="pb-2 mt-6" onClick={() => handleNavigation(`/`)}>
        <TabsComponent
          imageTitle="Home"
          image="/home.svg"
          active={false}
          textColor="text-buttonPrimary"
        />
      </div>
      {renderTabs?.map((tab: any) => (
        <TabsComponent
          setActive={() => setActiveUrl(tab?.url)}
          // setActive={() => dispatch(setActiveTab(tab.imageTitle))}
          image={tab.image}
          url={tab?.url}
          imageTitle={tab.imageTitle}
          active={pathName === tab?.url}
          textColor={tab.textColor && tab.textColor}
        />
      ))}
    </div>
  );
};

export default Sidebar;
