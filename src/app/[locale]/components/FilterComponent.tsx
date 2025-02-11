import React from "react";
import CustomInput from "./CustomInput";
import LabelInput from "./LabelInput";

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
            value=""
            select
          />
        </div>
        <div className="md:mr-2 w-full">
          <LabelInput
            width="w-[320px]"
            placeholder="Grant Category"
            // label="Grant Category"
            value=""
            select
          />
        </div>

        <div className="md:mr-2 w-full">
          <LabelInput
            width="w-[320px]"
            placeholder="Grant Size"
            // label="Grant Size"
            value=""
            select
          />
        </div>
      </div>

      <div className="flex justify-start md:justify-between items-center  w-full">
        <div className="flex items-center justify-center w-[78px] h-[47px] bg-primary rounded-[10px] mr-4">
          <img
            src="/searchgrant.svg"
            className="object-contain w-[20px] h-[20px]"
          />
        </div>

        <p className="text-secondaryColor ">Advanced Search</p>
      </div>
    </div>
  );
};

export default FilterComponent;
