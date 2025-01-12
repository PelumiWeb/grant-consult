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
      px-4
      mt-4
      h-[80px]
      rounded-[5px]
    ">
      <DatePicker
        onChange={onChange}
        height={40}
        className="h-[40px] w-[250px]"
        placeholder="Month"
      />
      <LabelInput
        placeholder="Service Rendered"
        width={"w-[250px]"}
        value=""
        height="h-[40px]"
        select
      />
      <LabelInput
        placeholder="Status"
        width={"w-[250px]"}
        value=""
        height="h-[40px]"
        select
      />

      <CustomButton
        height="h-[40px]"
        width="w-[120px]"
        title="Filter"
        backgrounColor="bg-primary"
      />
    </div>
  );
};

export default WalletFilterPption;
