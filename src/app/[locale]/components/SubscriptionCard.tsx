"use client";
import React from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import useHandleNavigation from "../utils/HandleNavigation";

type Cardprops = {
  image: string;
  price: string;
  bgColor?: string;
  plan?: string;
  textColor?: string;
  list: string[];
};

const SubscriptionCard = (data: Cardprops) => {
  const handleNavigation = useHandleNavigation();
  return (
    <div className="  bg-white mt-4 w-[250px] 2lg:w-[220px] m-8 2lg:m-2 h-[400px] border-[2.42px] border-secondaryColor rounded-[8px] p-2 relative">
      <p className="font-semibold text-[16px] leading-[20px] text-primary text-center my-2">
        {data.plan}
      </p>
      <p
        className="text-[29px] leading-[34px] font-bold text-center
      text-black my-2">
        {data.price}
      </p>
      <p className="text-[13px] leading-[16px] text-textColor text-center">
        {data.plan === "Free Trial" ? "7 days" : "30 days"}
      </p>
      <ul className="mt-2">
        {data.list?.map((data: string) => (
          <li className="flex items-center justify-around w-full j-full">
            {/* list */}
            <div className="w-[20%]">
              <img src="/check.svg" alt="" className="w-[12px] h-[12px]" />
            </div>
            <p className="font-medium text-[11px] leading-[16px] text-textColor w-[80%]">
              {data}
            </p>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-[5%] flex justify-center items-center w-full -ml-2">
        <CustomButton
          width="w-[180px]"
          height="h-[33px]"
          borderColor="border-none"
          backgrounColor={`${
            data.plan === "Free Trial"
              ? "bg-backgroundColor"
              : "bg-secondaryColor"
          }`}
          textStyle={`${
            data.plan === "Free Trial" ? "text-textColor" : "text-white"
          } font-inter font-bold text-[13px] leading-[13px] `}
          title={
            data.plan === "Free Trial"
              ? "Start Free Trial"
              : `Choose ${data.plan}`
          }
        />
      </div>

      {/* Card */}
    </div>
  );
};

export default SubscriptionCard;
