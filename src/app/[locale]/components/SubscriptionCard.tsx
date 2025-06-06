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
  days?: string;
  popular?: boolean;
};

const SubscriptionCard = (data: Cardprops) => {
  const handleNavigation = useHandleNavigation();
  return (
    <div className="  bg-white mt-4 w-full sm:w-[250px] 2lg:w-[220px]  md:m-8 2lg:m-2 h-full md:h-[470px] border-[2.42px] border-secondaryColor rounded-[8px] p-2 md:p-2 relative  flex flex-col justify-between items-center">
      {data.popular && (
        <div className="absolute -top-4 left-[30%] md:left-[35px]">
          <CustomButton
            backgrounColor="bg-secondaryColor"
            radius="rounded-[18px]"
            width="w-[145px]"
            height="h-[30px]"
            padding="py-[8px] px-[38pd]"
            title="Most popular"
            textStyle="text-white font-inter font-bold text-[13px] leading-[13px]"
          />
        </div>
      )}

      <div>
        <p className="font-semibold text-[16px] leading-[20px] text-primary text-center my-2 mt-5">
          {data.plan}
        </p>
        <p
          className="text-[29px] leading-[34px] font-bold text-center
      text-black my-2">
          {data.price}
        </p>
        <p className="text-[13px] leading-[16px] text-textColor text-center">
          {data.days}
        </p>
        <ul className="mt-4">
          {data.list?.map((data: string) => (
            <li className="flex items-center justify-berween w-full my-2">
              {/* list */}
              <div className="w-[15%]">
                <img src="/check.svg" alt="" className="w-[25px] h-[12px]" />
              </div>
              <p className="font-medium text-[14px] md:text-[11px] leading-[16px] text-textColor w-[85%] capitalize">
                {data}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`flex justify-center items-center w-full mt-4 md:mt-0 h-[50px] ${
          data.popular ? "mb-[10px]" : "mb-2"
        } `}>
        <CustomButton
          onClick={() => handleNavigation("/payments")}
          width="w-full md:w-[180px]"
          height="h-[50px]"
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
