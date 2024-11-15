import React from "react";
import CustomInput from "./CustomInput";

type Props = {
  backgroundColor?: string
};

const FilterComponent = ({ backgroundColor }: Props) => {
  return (
    <div
      className={`py-4 flex items-center justify-between w-full ${
        backgroundColor ? backgroundColor : "bg - backgroundColor"
      } px-16 mt-8`}>
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
      <div className="flex justify-between items-center w-[420px]">
        <div className="flex items-center justify-center w-[78px] h-[47px] bg-primary rounded-[10px]">
          <img src="/searchgrant.svg" className="object-contain" />
        </div>

        <p className="text-secondaryColor ">Advanced Search</p>
      </div>
    </div>
  );
};

export default FilterComponent;
