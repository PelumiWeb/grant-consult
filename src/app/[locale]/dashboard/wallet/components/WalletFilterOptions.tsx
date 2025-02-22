import LabelInput from "@/app/[locale]/components/LabelInput";
import React from "react";
import { DatePicker, DatePickerProps, Space } from "antd";
import CustomButton from "@/app/[locale]/components/CustomButton";

type Props = {};

const WalletFilterPption = (props: Props) => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div
      className="w-full bg-white flex items-center justify-between
      md:px-4
      mt-4
      h-full md:h-[80px]
      rounded-[5px]
      flex-col
      md:flex-row
      my-4
      py-4
      md:my-0
      md:py-0

    ">
      <DatePicker
        onChange={onChange}
        height={40}
        className="h-[40px] w-full md:w-[250px]"
        placeholder="Month"
      />
      <LabelInput
        placeholder="Service Rendered"
        width={"w-full md:w-[250px]"}
        value=""
        height="h-[40px]"
        select
        my="my-2"
      />
      <LabelInput
        placeholder="Status"
        width={"w-full md:w-[250px]"}
        value=""
        height="h-[40px]"
        select
        my="my-2"
      />

      <CustomButton
        height="h-[40px]"
        width="w-full md:w-[120px]"
        title="Filter"
        backgrounColor="bg-primary"
        textStyle="text-white font-semibold"
        radius="rounded-[5px]"
      />
    </div>
  );
};

export default WalletFilterPption;
