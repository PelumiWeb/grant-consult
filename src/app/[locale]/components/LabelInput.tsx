import { Input, Select } from "antd";
import Image from "next/image";
import React, { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type SelectOption = {
  value: string;
  label: string | React.ReactNode;
};
type Props = {
  label?: string;
  placeholder: string;
  value: string;
  required?: boolean;
  width?: string;
  height?: string;
  mr?: string;
  my?: string;
  select?: boolean;
  onChange?: any;
  textArea?: boolean;
  righticon?: any;
  leftIcon?: any;
  options?: SelectOption[] | undefined;
  handleChange?: any;
};

const { TextArea } = Input;

// {
//   props.options?.map((option: SelectOption) => (
//     <Select.Option value="sample">
//
//     </Select.Option>
//   ));
// }

const LabelInput = (props: Props) => {
  const RenderInputs = (props: Props) => {
    if (props.select) {
      return (
        <Select
          className={`${props.height ? props.height : "h-[55px]"} ${
            props.width
              ? clsx("w-full", `md:${props.width}`)
              : "w-full  md:w-[267px]"
          } !placeholder-[#333333]  text-[#333333] placeholder:font-semibold placeholder:text-[#333333] font-semibold`}
          placeholder={props.placeholder}
          defaultValue={props.value ? props.value : props.placeholder}
          onChange={props.handleChange}
          options={props.options}
          // dropdownStyle={{
          //   fontWeight: "bold",
          //   backgroundColor: "#1F4E79",
          //   color: "#1F4E79",
          // }}
          showSearch
          filterOption={(input, option: any) =>
            option?.label?.toLowerCase().includes(input.toLowerCase())
          }
        />
      );
    } else if (props.textArea) {
      return (
        <TextArea
          placeholder={props.placeholder}
          className={`${props.height ? props.height : "h-[55px]"} ${
            props.width
              ? clsx("w-full", `md:${props.width}`)
              : "w-full  md:w-[267px]"
          } `}
          allowClear
        />
      );
    } else {
      return (
        <Input
          className={`${props.height ? props.height : "h-[55px]"} ${
            props.width
              ? clsx("w-full", `md:${props.width}`)
              : "w-full  md:w-[267px]"
          } placeholder-black`}
          placeholder={props.placeholder}
          suffix={props.righticon}
          prefix={props.leftIcon}
          // value={props.value}
        />
      );
    }
  };

  return (
    <div
      className={`${
        props.width ? clsx("w-full", `md:${props.width}`) : "w-full  md:w-[267px]"
      } ${props.my ? props.my : "my-4"} ${props.mr ? "mr-2" : "mr-0"}`}>
      <div className="flex items-center">
        {props.label && (
          <p className="text-sm font-normal my-2">{props.label}</p>
        )}
        {props.required && (
          <p className="text-sm font-normal text-errorColor ml-1"> *</p>
        )}
      </div>

      {RenderInputs(props)}
    </div>
  );
};

export default LabelInput;
