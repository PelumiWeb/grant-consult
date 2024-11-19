"use client";

import React from "react";
import TabsComponent from "./TabsComponent";

type Props = {};

const tabs = [
  { imageTitle: "Profile", image: "/dashboard.svg" },
  { imageTitle: "assigned grants", image: "/dashboard2.svg" },
  { imageTitle: "consultation", image: "/dashboard3.svg" },
  { imageTitle: "message", image: "/dashboard4.svg" },
  { imageTitle: "revenue", image: "/dashboard5.svg" },
];

const Sidebar = (props: Props) => {
  const [activeTabs, setActiveTabs] = React.useState("profile");
  return (
    <div className="bg-primary h-screen w-[20%] px-8">
      {tabs?.map((tab) => (
        <TabsComponent
          image={tab.image}
          imageTitle={tab.imageTitle}
          active={activeTabs.toLowerCase() === tab.imageTitle.toLowerCase()}
        //   setActive={() => setActiveTabs(tab.imageTitle)}
        />
      ))}
    </div>
  );
};

export default Sidebar;
