"use client";

import Image from "next/image";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import GrantCard from "./components/GrantCard";
import FilterComponent from "../components/FilterComponent";
import { Pagination } from "antd";

export default function Home() {
  return (
    <div className="w-full">
      {/*  */}
      <div className="bg-white mb-8 p-4 ">
        {/* <div className="flex items-center justify-between w-[70%] md:w-[40%] lg:w-[30%] mt-4 mb-2">
          <p className="text-textColor">Home</p>
          <p className="text-textColor mr-4">{">>"}</p>
          <p className="text-textColor">View All Grants</p>
        </div> */}
        <div className="block md:hidden">
          <h4 className="text-secondaryColor font-semibold text-[20px] leading-[26px] text-left">
            Grants Opportunity
          </h4>
        </div>
        <div className="hidden md:flex items-center">
          <div className="h-[25px] w-[2px] bg-buttonPrimary mr-2" />
          <p className="text-textColor">
            Find opportunities that suit your business, corporate and Individual
            needs
          </p>
        </div>
        {/* Filter Options */}

        <FilterComponent
          options={[
            {
              placeholder: "Select Country",
            },
            {
              placeholder: "Grant Category",
            },
            { placeholder: "Grant Type" },
          ]}
        />
      </div>

      {/* Grants Cards */}
      <div className="flex justify-between h-full mb-8 p-0 md:p-6">
        {/* Left */}
        <div className="h-full">
          {[1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10].map((data) => (
            <GrantCard />
          ))}

          <div className="w-full flex items-center justify-center mt-16 mb-8">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
        {/* Right */}
        <div className="hidden 2lg:block mt-16">
          <div className="w-[324px] h-[287px] ">
            <img src="/Ads.svg" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
