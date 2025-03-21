"use client";

import React from "react";
import TabsComponent from "./TabsComponent";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { setActiveTab } from "../../../../../lib/features/Tabs/tabsLice";
import { redirect, usePathname, useRouter } from "next/navigation";
import { tabsName } from "@/app/[locale]/utils/types/TabsTypes";
import { userTypeName } from "@/app/[locale]/utils/types/userTypes";
import { useLocale } from "next-intl";
import useHandleNavigation from "../../utils/HandleNavigation";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { revalidatePath } from "next/cache";

type Props = {
  setShowMobileNavigation: React.Dispatch<React.SetStateAction<boolean>>;
};
type TabsProps = {
  imageTitle: string;
  image: string;
  textColor?: string;
  url?: string | undefined;
  logout?: boolean;
}[];

const SidebarModal = (props: Props) => {
  const tabName = useAppSelector((state) => state.tab.name);
  const { user } = useAppSelector((state) => state.user);
  const pathName = usePathname();
  const dashboardRoute = useAppSelector((state) => state.dashboard);
  const router = useRouter();
  const locale = useLocale();
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (!user) {
      // handleNavigation("/", redirect);
      // redirect(`/${locale}`)
      router.push(`/${locale}`);
    }
  }, [user]);

  const tabs: TabsProps | undefined = [
    {
      imageTitle: tabsName.profile,
      image: "/dashboard.svg",
      url: `/${locale}/dashboard/profile`,
    },
    // {
    //   imageTitle: tabsName.favourite,
    //   image: "/profileDashboard.svg",
    //   url: `/${locale}/dashboard/favourites`,
    // },
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
    // {
    //   imageTitle: tabsName.message,
    //   image: "/dashboard4.svg",
    //   url: `/${locale}/dashboard/message`,
    // },
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
      logout: true,
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
    // {
    //   imageTitle: tabsName.message,
    //   image: "/dashboard4.svg",
    //   url: `/${locale}/dashboard/message`,
    // },
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
      logout: true,
    },
  ];

  const grantTabs: TabsProps | undefined = [
    {
      imageTitle: tabsName.profile,
      image: "/profileDashboard.svg",
      url: `/${locale}/dashboard/profile`,
    },
    // {
    //   imageTitle: tabsName.favourite,
    //   image: "/profileDashboard.svg",
    //   url: `/${locale}/dashboard/favourites`,
    // },
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
      logout: true,
    },
  ];

  const handleNavigation = useHandleNavigation();
  const renderTabs = React.useMemo(() => {
    if (user?.role == userTypeName.general) {
      return generalTabs;
    } else if (user?.role == userTypeName.consultant) {
      return tabs;
    } else {
      return grantTabs;
    }
  }, []);

  const [activeUrl, setActiveUrl] = React.useState(renderTabs[0].url);

  return (
    <div className="block lg:hidden bg-primary h-full w-full fixed top-0 left-0 px-8 z-50 p-4">
      <button
        className="flex w-full justify-end"
        onClick={() => props.setShowMobileNavigation((prev: boolean) => !prev)}>
        <img src="/cancel-white.svg" alt="" />
      </button>
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
          Logout={tab.logout}
          url={tab?.url}
          imageTitle={tab.imageTitle}
          active={pathName === tab?.url}
          textColor={tab.textColor && tab.textColor}
        />
      ))}
    </div>
  );
};

export default SidebarModal;
