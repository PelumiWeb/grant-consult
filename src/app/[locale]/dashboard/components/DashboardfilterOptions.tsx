import LabelInput from "@/app/[locale]/components/LabelInput";
import React from "react";
import { DatePicker, DatePickerProps, Space } from "antd";
import CustomButton from "@/app/[locale]/components/CustomButton";

type Props = {};

const DashboardfilterOptions = (props: Props) => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {};
  return (
    <div
      className="w-full bg-white flex items-center justify-between
      px-4
      mt-4
      h-full md:h-[200px] lg:h-[80px]
      rounded-[5px]
      flex-wrap lg:flex-nowrap
    ">
      <LabelInput
        placeholder="Grant title"
        width={"w-full md:w-[130px]"}
        value=""
        height="h-[35px]"
      />
      <DatePicker
        onChange={onChange}
        height={35}
        className="w-full lg:w-[130px] h-[35px]"
      />
      <LabelInput
        placeholder="Client Name"
        width={"w-full md:w-[130px]"}
        value=""
        height="h-[35px]"
      />
      <LabelInput
        placeholder="Deadline"
        width={"w-full md:w-[130px]"}
        value=""
        height="h-[35px]"
        select
      />
      <LabelInput
        placeholder="Status"
        width={"w-full md:w-[130px]"}
        value=""
        height="h-[35px]"
        select
      />
      <LabelInput
        placeholder="Category"
        width={"w-full md:w-[130px]"}
        value=""
        height="h-[35px]"
        select
      />
      <CustomButton
        height="h-[35px]"
        width="w-full lg:w-[76px]"
        title="Filter"
        backgrounColor="bg-primary"
      />
      <div className="my-2 md:my-0 w-full">
        <CustomButton
          height="h-[35px]"
          width="w-full lg:w-[76px]"
          title="Reset"
          backgrounColor="bg-white"
          borderColor="bg-secondaryColor"
          textStyle="text-secondaryColor font-semibold text-[12px] leading-[20px]"
        />
      </div>
    </div>
  );
};

export default DashboardfilterOptions;
