import { Input, Select } from "antd";
import Image from "next/image";
import React, { ChangeEvent } from "react";

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
  select?: boolean;
  onChange?: any;
  textArea?: boolean;
  righticon?: any;
  leftIcon?: any;
  options?: SelectOption[] | undefined;
  handleChange?: any
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
            props.width ? props.width : "w-full"
          } !placeholder-black text-black font-normal`}
          placeholder={props.placeholder}
          defaultValue={props.placeholder}
          filterOption
          onChange={props.handleChange}
          options={props.options}
        />
      );
    } else if (props.textArea) {
      return (
        <TextArea
          placeholder={props.placeholder}
          className={`${props.height ? props.height : "h-[55px]"} ${
            props.width ? props.width : "w-full"
          } `}
          allowClear></TextArea>
      );
    } else {
      return (
        <Input
          className={`${props.height ? props.height : "h-[55px]"} ${
            props.width ? props.width : "w-full"
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
      className={`${props.width ? props.width : "w-[267px]"} my-4 ${
        props.mr ? "mr-2" : "mr-0"
      }`}>
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
