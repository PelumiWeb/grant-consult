"use client";
import React from "react";

import Image from "next/image";
import CustomButton from "../../components/CustomButton";
import GrantFunder from "../../components/GrantFunder";
import ConsultantComponent from "../component/ConsultantComponent";
import LabelInput from "@/app/[locale]/components/LabelInput";
import RenderModals from "@/app/[locale]/components/RenderModals";
import { countryData } from "../../utils/customData";
import useHandleNavigation from "../../utils/HandleNavigation";
import { grantsData } from "../../utils/constants/grants";
import { useAppDispatch } from "../../../../../lib/hooks";
import { setActiveConsultantType } from "../../../../../lib/features/Consultant/consultantSlice";
import { ClientCategory } from "../../utils/constants/clientCategory";

export default function Home() {
  const dispatch = useAppDispatch();
  const countriesData = React.useMemo(() => {
    const data = countryData?.map((data) => ({
      label: data.name,
      value: data.name,
    }));

    return data;
  }, []);

  const handleChange = (value: string) => {
    dispatch(
      setActiveConsultantType({
        selectedConsultantTypes: value,
      })
    );
    console.log(value, "This is the value");
  };

  const consultationType = React.useMemo(() => {
    const data = grantsData?.map((data) => ({
      value: data.name,
      label: data.name,
    }));

    return data;
  }, []);

  const handleNavigation = useHandleNavigation();
  return (
    <div className="w-full px-4 lg:px-16 bg-white">
      <div className="flex flex-col items-center justify-center py-8">
        <p className="text-secondaryColor font-semibold text-[24px] lg:text-[36px] leading-[20px] lg:leading-[42px] text-center ">
          Request Consultation
        </p>

        <p className="py-4 text-textColor text-[12px] lg:text-[16px] leading-[20px] ">
          Please complete the form below and we will contact you within one
          business day to understand your needs and provide tailored support.
        </p>
      </div>
      {/* Consultant */}
      <div className="w-full h-full p-2 md:p-16 bg-white">
        {/* Left */}
        <div className="w-full h-full p-0 lg:p-8 bg-white flex justify-center lg:justify-between ">
          <div className="w-full flex flex-col items-center 2lg:w-[55%]">
            <div className="flex w-full items-center justify-center md:justify-between  flex-col md:flex-row ">
              <LabelInput
                label={"First Name"}
                value=""
                required={true}
                placeholder="Enter First Name"
                mr="mr-0 md:mr-2"
              />
              <LabelInput
                label={"Last Name"}
                value=""
                required={true}
                placeholder="Enter Last Name"
              />
            </div>
            <div className="flex w-full items-center justify-center md:justify-between  flex-col md:flex-row">
              <LabelInput
                label={"Email Address"}
                value=""
                required={true}
                placeholder="Enter Email Address"
                mr="mr-0 md:mr-2"
              />
              <LabelInput
                label={"Phone"}
                value=""
                required={true}
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="flex w-full items-center justify-center md:justify-between  flex-col md:flex-row">
              <LabelInput
                label={"Select Consultation Type"}
                value=""
                required={true}
                placeholder="Select Consultation Type"
                select
                options={consultationType}
                handleChange={handleChange}
                mr="mr-0 md:mr-2"
              />
              <LabelInput
                label={"Select Client Category"}
                value=""
                required={true}
                placeholder="Select Client Category"
                options={ClientCategory}
                select
              />
            </div>
            <div className="flex w-full items-center justify-center md:justify-between  flex-col md:flex-row">
              <LabelInput
                label={"Select Grant Category"}
                value=""
                // required={true}
                placeholder="Enter Grant Company"
                select
                mr="mr-0 md:mr-2"
              />
              <LabelInput
                label={"Grant Amount (Optional)"}
                value=""
                required={false}
                placeholder="Enter Grant Amount"
              />
            </div>
            <div className="flex w-full items-center justify-center md:justify-between  flex-col md:flex-row">
              <LabelInput
                label={"Select Country Of Residence"}
                value=""
                required={true}
                placeholder="Select Country"
                select
                options={countriesData}
                mr="mr-0 md:mr-2"
              />
              <LabelInput
                label={"Add a Message"}
                value=""
                height="h-[70px]"
                required={false}
                placeholder="Enter Message"
                textArea
              />
            </div>
            <div className="mt-4 flex w-full items-center justify-center md:justify-between  flex-col md:flex-row">
              <CustomButton
                title="Save"
                width="w-[157px]"
                height="h-[60px]"
                backgrounColor="bg-white"
                borderColor="border-buttonPrimary"
                textStyle="text-buttonPrimary font-inter font-bold"
              />
            </div>
            {/* Consultant Matching */}
          </div>
          <div className="hidden 2lg:block w-[35%] mt-[3%]">
            <img src="/requestConsultant.svg" />
          </div>
        </div>
        <div className="w-full bg-backgroundColor py-4 mt-4">
          <h3 className="text-primary text-[20px] leading-[26px]  my-8 text-center md:text-left ml-0 md:ml-16 ">
            Consultant Matching
          </h3>
          <div className="flex w-full flex-wrap items-center justify-center ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data) => (
              <ConsultantComponent showButton key={data} />
            ))}
          </div>
        </div>

        <div className="w-full flex items-center justify-center my-8">
          <CustomButton
            onClick={() => handleNavigation("/payments")}
            title="PROCEED"
            backgrounColor="bg-buttonPrimary"
            width="w-[370px]"
            textStyle="text-white text-[12px] lg:text-lg font-semibold"
            // height="h-[20px]"
          />
        </div>

        {/* Right
         */}
      </div>

      <GrantFunder />
      <RenderModals />
    </div>
  );
}
