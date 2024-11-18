"use client";

import Image from "next/image";
import CustomButton from "../../components/CustomButton";
import GrantFunder from "../../components/GrantFunder";
import InputComponent from "../component/InputComponent";
import ConsultantComponent from "../component/ConsultantComponent";

export default function Home() {
  return (
    <div className="w-full px-16">
      <div className="flex flex-col items-center justify-center py-8">
        <p className="text-secondaryColor font-semibold text-[36px] leading-[42px] text-center ">
          Request A Consultant
        </p>

        <p className="py-4 text-textColor text-[16px] leading-[20px] ">
          Please complete the form below and we will contact you within one
          business day to understand your needs and provide tailored support.
        </p>
      </div>
      {/* Consultant */}
      <div className="w-full h-full p-16 bg-white">
        {/* Left */}
        <div className="w-full h-full p-16 bg-white flex justify-between">
          <div className="w-[55%]">
            <div className="flex w-full items-center justify-between">
              <InputComponent
                label={"First Name"}
                value=""
                required={false}
                placeholder="Enter First Name"
              />
              <InputComponent
                label={"Last Name"}
                value=""
                required={false}
                placeholder="Enter Last Name"
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <InputComponent
                label={"Email Address"}
                value=""
                required={false}
                placeholder="Enter Email Address"
              />
              <InputComponent
                label={"Phone"}
                value=""
                required={false}
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <InputComponent
                label={"Select Consultation Type"}
                value=""
                required={false}
                placeholder="Enter Consultation Type"
              />
              <InputComponent
                label={"Select Client Category"}
                value=""
                required={false}
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <InputComponent
                label={"Select Grant Company"}
                value=""
                required={false}
                placeholder="Enter Grant Company"
              />
              <InputComponent
                label={"Grant Amount (Optional)"}
                value=""
                required={false}
                placeholder="Enter Grant Amount"
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <InputComponent
                label={"Select Contry Residence"}
                value=""
                required={false}
                placeholder="Enter Grant Company"
              />
              <InputComponent
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
          <div className="w-[35%]">
            <img src="/consultant.svg" />
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-primary my-8 text-left ml-16">
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
