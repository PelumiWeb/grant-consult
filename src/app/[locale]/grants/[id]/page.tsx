"use client";

import Image from "next/image";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import GrantCard from "../components/GrantCardMore";
import FilterComponent from "@/app/[locale]/components/FilterComponent";

export default function Grants() {
  return (
    <div className="w-full px-16 bg-white">
      {/*  */}
      <div className="bg-white">
        <div className="flex items-center justify-between w-[70%] md:w-[40%] lg:w-[30%] mt-4 mb-2">
          <p className="text-textColor">Home</p>
          <p className="text-textColor mr-4">{">>"}</p>
          <p className="text-textColor">View All Grants</p>
        </div>
        <div className="flex items-center">
          <div className="h-[25px] w-[2px] bg-buttonPrimary mr-2" />
          <p className="text-borderColor">
            Find opportunities that suit your business, corporate and Individual
            needs
          </p>
        </div>
        {/* Filter Options */}
        <FilterComponent />
      </div>

      {/* Grants Cards */}
      <div className="flex justify-between">
        {/* Left */}
        <div>
          <GrantCard />
        </div>
        {/* Right */}
        <div className="hidden xl:block mt-16">
          <div className="w-[324px] h-[287px] ">
            <img src="/Ads.svg" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
