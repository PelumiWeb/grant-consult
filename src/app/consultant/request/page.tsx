"use client";

import Image from "next/image";
import CustomButton from "../../components/CustomButton";
import GrantFunder from "../../components/GrantFunder";
import ConsultantComponent from "../component/ConsultantComponent";
import LabelInput from "@/app/components/LabelInput";

export default function Home() {
  return (
    <div className="w-full px-16">
      <div className="flex flex-col items-center justify-center py-8">
        <p className="text-secondaryColor font-semibold text-[24px] lg:text-[36px] leading-[20px] lg:leading-[42px] text-center ">
          Request A Consultant
        </p>

        <p className="py-4 text-textColor text-[12px] lg:text-[16px] leading-[20px] ">
          Please complete the form below and we will contact you within one
          business day to understand your needs and provide tailored support.
        </p>
      </div>
      {/* Consultant */}
      <div className="w-full h-full p-16 bg-white">
        {/* Left */}
        <div className="w-full h-full p-0 lg:p-8 bg-white flex justify-center lg:justify-between ">
          <div className="w-full flex flex-col items-center 2lg:w-[55%]">
            <div className="flex w-full items-center justify-between flex-wrap ">
              <LabelInput
                label={"First Name"}
                value=""
                required={true}
                placeholder="Enter First Name"
              
              />
              <LabelInput
                label={"Last Name"}
                value=""
                required={true}
                placeholder="Enter Last Name"
              />
            </div>
            <div className="flex w-full items-center justify-between flex-wrap">
              <LabelInput
                label={"Email Address"}
                value=""
                required={true}
                placeholder="Enter Email Address"
              />
              <LabelInput
                label={"Phone"}
                value=""
                required={true}
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="flex w-full items-center justify-between flex-wrap">
              <LabelInput
                label={"Select Consultation Type"}
                value=""
                required={true}
                placeholder="Enter Consultation Type"
                select
              />
              <LabelInput
                label={"Select Client Category"}
                value=""
                required={true}
                placeholder="Enter Phone Number"
                select
              />
            </div>
            <div className="flex w-full items-center justify-between flex-wrap">
              <LabelInput
                label={"Select Grant Company"}
                value=""
                required={true}
                placeholder="Enter Grant Company"
                select
              />
              <LabelInput
                label={"Grant Amount (Optional)"}
                value=""
                required={false}
                placeholder="Enter Grant Amount"
              />
            </div>
            <div className="flex w-full items-center justify-between flex-wrap">
              <LabelInput
                label={"Select Contry Residence"}
                value=""
                required={true}
                placeholder="Enter Grant Company"
                select
              />
              <LabelInput
                label={"Add a Message"}
                value=""
                required={false}
                placeholder="Enter Message"
              />
            </div>
            <div className="mt-4">
              <CustomButton
                title="Save"
                width="w-[157px]"
                height="h-[60px]"
                backgrounColor="bg-white"
                borderColor="border-buttonPrimary"
                textStyle="text-buttonPrimary"
              />
            </div>
            {/* Consultant Matching */}
          </div>
          <div className="hidden 2lg:block w-[35%]">
            <img src="/consultant.svg" />
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-primary text-sm md:text-md lg:text-2xl my-8 text-left ml-16">
            Consultant Matching
          </h3>
          <div className="flex w-full flex-wrap items-center justify-center ">
            {[1, 2, 3, 4, 5, 6].map((data) => (
              <ConsultantComponent showButton key={data} />
            ))}
          </div>
        </div>

        <div className="w-full flex items-center justify-center my-8">
          <CustomButton
            title="CONFIRM BOOKING/PROCEED TO PAYMENT"
            backgrounColor="bg-buttonPrimary"
            width="w-[370px]"
            // height="h-[20px]"
          />
        </div>

        {/* Right
         */}
      </div>

      <GrantFunder />
    </div>
  );
}
