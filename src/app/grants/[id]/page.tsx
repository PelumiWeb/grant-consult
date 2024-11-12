"use client";

import Image from "next/image";
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import GrantCard from "../components/GrantCardMore";

export default function Grants() {
  return (
    <div className="w-full px-16 bg-white">
      {/*  */}
      <div className="bg-white">
        <div className="flex items-center justify-between w-[15%] ">
          <p className="text-borderColor">Home</p>
          <p>{">>"}</p>
          <p className="text-borderColor">View All Grants</p>
        </div>
        <div className="flex items-center">
          <div className="h-[25px] w-[2px] bg-buttonPrimary mr-2" />
          <p className="text-borderColor">
            Find opportunities that suit your business, corporate and Individual
            needs
          </p>
        </div>
        {/* Filter Options */}
        <div className="py-4 flex items-center justify-between w-full bg-backgroundColor px-16 mt-8">
          <CustomInput
            width="w-[250px]"
            type="text"
            placeholder="Select Country"
            inputType="text"
            label="Select Country"
            value=""
          />
          <CustomInput
            width="w-[250px]"
            type="text"
            placeholder="Grant Category"
            inputType="text"
            label="Grant Category"
            value=""
          />

          <CustomInput
            width="w-[250px]"
            type="text"
            placeholder="Grant Size"
            inputType="text"
            label="Grant Size"
            value=""
          />
          <div className="flex items-center justify-center w-[78px] h-[47px] bg-primary rounded-[10px]">
            <img src="/searchgrant.svg" className="object-contain" />
          </div>

          <p className="text-secondaryColor ">Advanced Search</p>
        </div>
      </div>

      {/* Grants Cards */}
      <div className="flex justify-between">
        {/* Left */}
        <div>
          <GrantCard />
        </div>
        {/* Right */}
        <div className="mt-16">
          <div className="w-[324px] h-[287px] ">
            <img src="/Ads.svg" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
