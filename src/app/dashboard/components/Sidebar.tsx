"use client";

import React from "react";
import TabsComponent from "./TabsComponent";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";
import { setActiveTab } from "../../../../lib/features/Tabs/tabsLice";
import { useRouter } from "next/navigation";
import { tabsName } from "@/app/utils/TabsTypes";

type Props = {};
type TabsProps = { imageTitle: string; image: string; textColor?: string }[];

const tabs: TabsProps = [
  { imageTitle: "Profile", image: "/dashboard.svg" },
  { imageTitle: "assigned grants", image: "/dashboard2.svg" },
  { imageTitle: "consultation", image: "/dashboard3.svg" },
  { imageTitle: "message", image: "/dashboard4.svg" },
  { imageTitle: "wallet", image: "/dashboard3.svg" },
  { imageTitle: "settings", image: "/settings.svg" },
  { imageTitle: "help & support", image: "/help.svg" },
  {
    imageTitle: "Logout",
    image: "/logout-gray.svg",
    textColor: "text-textColor",
  },
];

const Sidebar = (props: Props) => {
  const dispatch = useAppDispatch();
  const tabName = useAppSelector((state) => state.tab.name);
  const router = useRouter();
  console.log(tabName , "TabName")

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
      {tabs?.map((tab) => (
        <TabsComponent
          setActive={() => dispatch(setActiveTab(tab.imageTitle))}
          image={tab.image}
          imageTitle={tab.imageTitle}
          active={tabName.toLowerCase() === tab.imageTitle.toLowerCase()}
          textColor={tab.textColor && tab.textColor}
          //   setActive={() => setActiveTabs(tab.imageTitle)}
        />
      ))}
    </div>
  );
};

export default Sidebar;
