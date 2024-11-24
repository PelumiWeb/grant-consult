"use client";

import Image from "next/image";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import GrantCard from "./components/GrantCard";
import FilterComponent from "../components/FilterComponent";

export default function Home() {
  return (
    <div className="w-full px-16 bg-white">
      {/*  */}
      <div className="bg-white">
        <div className="flex items-center justify-between w-[15%] ">
          <p className="text-textColor">Home</p>
          <p>{">>"}</p>
          <p className="text-textColor">View All Grants</p>
        </div>
        <div className="flex items-center">
          <div className="h-[25px] w-[2px] bg-buttonPrimary mr-2" />
          <p className="text-textColor">
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
          {[1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10].map((data) => (
            <GrantCard />
          ))}
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
