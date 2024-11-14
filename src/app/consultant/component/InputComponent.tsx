import { Input, Select } from "antd";
import React from "react";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  required: boolean;
  width?: string;
  height?: string;
  mr?: string;
  select?: boolean;
  onChange?: (value: string) => void;
};

const InputComponent = (props: Props) => {
  return (
    <div
      className={`${props.width ? props.width : "w-[267px]"} my-4 ${
        props.mr ? "mr-2" : "mr-0"
      }`}>
      <p className="text-sm font-normal my-2">{props.label}</p>
      {props?.select ? (
        <Select onChange={props.onChange}>
          <Select.Option value="sample">Sample</Select.Option>
        </Select>
      ) : (
        <Input
          className={`${props.height ? props.height : "h-[55px]"} w-full`}
          placeholder={props.placeholder}
        />
      )}
    </div>
  );
};

export default InputComponent;
