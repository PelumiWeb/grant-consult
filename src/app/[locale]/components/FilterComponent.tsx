import React from "react";
import CustomInput from "./CustomInput";
import LabelInput from "./LabelInput";
import CustomButton from "./CustomButton";

type Props = {
  backgroundColor?: string;
};

const FilterComponent = ({ backgroundColor }: Props) => {
  return (
    <div
      className={`py-4 flex items-start md:items-center justify-center md:justify-between w-full ${
        backgroundColor ? backgroundColor : "bg-backgroundColor"
      } px-4 mt-8 rounded-[10px] flex-col md:flex-row`}>
      <div className="flex items-start md:items-center justify-center md:justify-between flex-col md:flex-row w-full ">
        <div className="md:mr-2 w-full">
          <LabelInput
            width="w-[320px]"
            // type="text"
            placeholder="Select Country"
            // inputType="text"
            // label="Select Country"
            height="h-[47px]"
            value=""
            select
            my="my-2"
          />
        </div>
        <div className="md:mr-2 w-full">
          <LabelInput
            width="w-[320px]"
            placeholder="Grant Category"
            // label="Grant Category"
            height="h-[47px]"
            value=""
            select
            my="my-2"
          />
        </div>

        <div className="md:mr-2 w-full">
          <LabelInput
            width="w-[320px]"
            placeholder="Grant Size"
            // label="Grant Size"
            height="h-[47px]"
            value=""
            select
            my="my-2"
          />
        </div>
        <div className="hidden md:flex ">
          <div className="flex items-center justify-center w-[78px] h-[45px] bg-primary rounded-[10px] mr-4">
            <img
              src="/searchgrant.svg"
              className="object-contain w-[20px] h-[20px]"
            />
          </div>

        </div>
      </div>

      <div className=" mt-4 blobk md:hidden w-full">
        {/* <CustomButton  /> */}
        <CustomButton
          title="Filter"
          backgrounColor="bg-primary"
          height="h-[40px]"
          width="w-full"
          radius="rounded-[5px]"
          textStyle="font-inter text-[16px] text-center leading-[16px] font-bold text-[16px] text-white "
        />
      </div>
    </div>
  );
};

export default FilterComponent;
