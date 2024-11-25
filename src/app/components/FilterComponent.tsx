import React from "react";
import CustomInput from "./CustomInput";
import LabelInput from "./LabelInput";

type Props = {
  backgroundColor?: string;
};

const FilterComponent = ({ backgroundColor }: Props) => {
  return (
    <div
      className={`py-4 flex items-center justify-between w-full ${
        backgroundColor ? backgroundColor : "bg-backgroundColor"
      } px-4 mt-8 rounded-[10px]`}>
      <div className="flex items-center justify-between ">
        <div className="mr-2">
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
        <div className="mr-2">
          <LabelInput
            width="w-[320px]"
            placeholder="Grant Category"
            // label="Grant Category"
            value=""
            select
          />
        </div>

        <div className="mr-2">
          <LabelInput
            width="w-[320px]"
            placeholder="Grant Size"
            // label="Grant Size"
            value=""
            select
          />
        </div>
      </div>

      <div className="flex justify-between items-center ">
        <div className="flex items-center justify-center w-[78px] h-[47px] bg-primary rounded-[10px] mr-4">
          <img src="/searchgrant.svg" className="object-contain" />
        </div>

        <p className="text-secondaryColor ">Advanced Search</p>
      </div>
    </div>
  );
};

export default FilterComponent;
