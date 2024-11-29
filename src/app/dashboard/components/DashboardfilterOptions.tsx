import LabelInput from "@/app/components/LabelInput";
import React from "react";
import { DatePicker, DatePickerProps, Space } from "antd";
import CustomButton from "@/app/components/CustomButton";

type Props = {};

const DashboardfilterOptions = (props: Props) => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div
      className="w-full bg-white flex items-center justify-between
      px-4
      mt-4
      h-[80px]
      rounded-[5px]
    ">
      <LabelInput
        placeholder="Grant title"
        width={"w-[130px]"}
        value=""
        height="h-[35px]"
      />
      <DatePicker onChange={onChange} height={35} className="h-[35px]" />
      <LabelInput
        placeholder="Client Name"
        width={"w-[130px]"}
        value=""
        height="h-[35px]"
      />
      <LabelInput
        placeholder="Deadline"
        width={"w-[130px]"}
        value=""
        height="h-[35px]"
        select
      />
      <LabelInput
        placeholder="Status"
        width={"w-[130px]"}
        value=""
        height="h-[35px]"
        select
      />
      <LabelInput
        placeholder="Category"
        width={"w-[130px]"}
        value=""
        height="h-[35px]"
        select
      />
      <CustomButton
        height="h-[35px]"
        width="w-[76px]"
        title="Filter"
        backgrounColor="bg-primary"
      />
      <CustomButton
        height="h-[35px]"
        width="w-[76px]"
        title="Reset"
        backgrounColor="bg-white"
        borderColor="bg-secondaryColor"
        textStyle="text-secondaryColor font-semibold text-[12px] leading-[20px]"
      />
    </div>
  );
};

export default DashboardfilterOptions;
