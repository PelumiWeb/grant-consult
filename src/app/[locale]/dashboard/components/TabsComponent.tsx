"use client";
import Link from "antd/es/typography/Link";
import { useLocale } from "next-intl";
import React from "react";
import useHandleNavigation from "../../utils/HandleNavigation";
import { setActiveTab } from "../../../../../lib/features/Tabs/tabsLice";
import { useAppDispatch } from "../../../../../lib/hooks";
import { useRouter } from "next/navigation";

type Props = {
  image: string;
  imageTitle: string;
  active: boolean;
  setActive?: any;
  textColor?: string;
  url?: string | undefined;
};

const TabsComponent = ({
  image,
  imageTitle,
  active,
  setActive,
  textColor = " text-white",
  url,
}: Props) => {
  const handleNavigation = useHandleNavigation();
  return (
    <button
      // href={`${locale}/dashboard/page1`}
      className={`w-[224px] cursor-pointer h-[51px] rounded-[5px] flex items-center ${
        active && "bg-secondaryColor"
      } my-2 mr-5 pl-4 transition-all`}
      onClick={() => {
        // setActive();
        handleNavigation(url);
      }}>
      <img src={image} />
      <p
        className={`font-semibold leading-[19px] items-center ${textColor} text-[16px] uppercase mx-4 font-mono`}>
        {imageTitle}
      </p>
    </button>
  );
};

export default TabsComponent;
