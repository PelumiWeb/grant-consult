"use client";

import Image from "next/image";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import GrantCard from "../components/GrantCardMore";
import FilterComponent from "@/app/[locale]/components/FilterComponent";
import LatestNews from "../../components/LatestNews";
import LabelInput from "../../components/LabelInput";
import React from "react";
import { countryData } from "../../utils/customData";

export default function Grants() {
  const countriesData = React.useMemo(() => {
    const data = countryData?.map((data) => ({
      label: data.name,
      value: data.name,
    }));

    return data;
  }, []);
  return (
    <div className="w-full  px-4 lg:px-16 bg-white">
      {/*  */}
      <div className="bg-white">
        {/* <div className="flex items-center justify-between w-[70%] md:w-[40%] lg:w-[30%] mt-4 mb-2">
          <p className="text-textColor">Home</p>
          <p className="text-textColor mr-4">{">>"}</p>
          <p className="text-textColor">View All Grants</p>
        </div> */}
        <div className="flex items-center md:my-4">
          <div className="h-[25px] w-[2px] bg-buttonPrimary mr-2" />
          <p className="text-borderColor">
            Find opportunities that suit your business, corporate and Individual
            needs
          </p>
        </div>
        {/* Filter Options */}
        <FilterComponent
        // options={[
        //   {
        //     placeholder: "Select Country",
        //   },
        //   {
        //     placeholder: "Grant Category",
        //   },
        //   { placeholder: "Grant Type" },
        // ]}
        >
          <LabelInput
            width="w-[305px]"
            placeholder="Select Country"
            // label="Grant Category"
            height="h-[47px]"
            value=""
            select
            my="my-2"
            mr="md:mr-2"
            options={countriesData}
          />

          <LabelInput
            width="w-[305px]"
            placeholder="Grant Category"
            // label="Grant Category"
            height="h-[47px]"
            value=""
            select
            my="my-2"
            mr="md:mr-2"
          />
          <LabelInput
            width="w-[305px]"
            placeholder="Grant Type"
            // label="Grant Category"
            height="h-[47px]"
            value=""
            select
            my="my-2"
            mr="md:mr-2"
          />
        </FilterComponent>
      </div>

      {/* Grants Cards */}
      <div className="w-full flex justify-between md:mt-8">
        {/* Left */}
        <div>
          <GrantCard />
        </div>
        {/* Right */}
        <div className="hidden lg:block mt-16">
          <div className="w-[324px] h-[287px] ">
            <img src="/Ads.svg" className="w-full h-full object-contain" />
          </div>
          <LatestNews />

          <div className="w-[324px] h-[287px] mt-4">
            <img src="/Ads.svg" className="w-full h-full object-contain" />
          </div>
          <LatestNews />
        </div>
      </div>
    </div>
  );
}
