import { Input, Select } from "antd";
import React from "react";

type Props = {
  label?: string;
  placeholder: string;
  value: string;
  required?: boolean;
  width?: string;
  height?: string;
  mr?: string;
  select?: boolean;
  onChange?: (value: string) => void;
  textArea?: boolean;
  righticon?: any
};

const { TextArea } = Input;

const LabelInput = (props: Props) => {
  const RenderInputs = (props: Props) => {
    if (props.select) {
      return (
        <Select
          className={`${props.height ? props.height : "h-[55px]"} w-full`}
          placeholder={props.placeholder}
          onChange={props.onChange}>
          <Select.Option value="sample">Sample</Select.Option>
        </Select>
      );
    } else if (props.textArea) {
      return (
        <TextArea
          placeholder={props.placeholder}
          className={`${props.height ? props.height : "h-[55px]"} w-full placeholder-black`}
          allowClear
        >
        </TextArea>
      );
    } else {
      return (
        <Input
          className={`${props.height ? props.height : "h-[55px]"} w-full`}
          placeholder={props.placeholder}
          suffix={props.righticon}
          value={props.value}
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
