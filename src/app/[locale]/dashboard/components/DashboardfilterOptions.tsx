import LabelInput from "@/app/[locale]/components/LabelInput";
import React from "react";
import { DatePicker, DatePickerProps, Space } from "antd";
import CustomButton from "@/app/[locale]/components/CustomButton";

type Props = {
  children: React.ReactNode;
};

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
      space-x-0 md:space-x-4 
      space-y-4 md:space-y-0
      py-2 md:py-0
    ">
      {props.children}
    </div>
  );
};

export default DashboardfilterOptions;
