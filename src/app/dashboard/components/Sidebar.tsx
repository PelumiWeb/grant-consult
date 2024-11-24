"use client";

import React from "react";
import TabsComponent from "./TabsComponent";

type Props = {};
type TabsProps = { imageTitle: string; image: string; textColor?: string }[];

const tabs: TabsProps = [
  { imageTitle: "Profile", image: "/dashboard.svg" },
  { imageTitle: "assigned grants", image: "/dashboard2.svg" },
  { imageTitle: "consultation", image: "/dashboard3.svg" },
  { imageTitle: "message", image: "/dashboard4.svg" },
  { imageTitle: "revenue", image: "/dashboard5.svg" },
  {
    imageTitle: "Logout",
    image: "/logout-gray.svg",
    textColor: "text-textColor",
  },
];

const Sidebar = (props: Props) => {
  const [activeTabs, setActiveTabs] = React.useState("profile");
  return (
    <div className="bg-primary h-screen w-[20%] px-8 ">
      <div className="pb-8">
        <TabsComponent
          imageTitle="Home"
          image="/home.svg"
          active={false}
          textColor="text-buttonPrimary"
        />
      </div>
      {tabs?.map((tab) => (
        <TabsComponent
          setActive={() => setActiveTabs(tab.imageTitle)}
          image={tab.image}
          imageTitle={tab.imageTitle}
          active={activeTabs.toLowerCase() === tab.imageTitle.toLowerCase()}
          textColor={tab.textColor && tab.textColor}
          //   setActive={() => setActiveTabs(tab.imageTitle)}
        />
      ))}
    </div>
  );
};

export default Sidebar;
