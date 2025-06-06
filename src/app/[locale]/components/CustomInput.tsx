import { Input, Select, Space, Tooltip } from "antd";
import { DefaultOptionType } from "antd/es/select";
import React, { forwardRef } from "react";

type Props = {
  label: string;
  inputType: string;
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  rightIcon?: boolean;
  defaultValue?: string;
  contentLeft?: boolean;
  width?: string;
  ref?: any;
  error?: boolean;
  options?: any[];
};

export type Ref = any;

const CustomInput = forwardRef<Props, Ref>((props, ref) => {
  const [show, setShow] = React.useState(false);
  return (
    <div
      className={`relative ${
        props.width ? props.width : "w-[640px]"
      } w-[640px] my-4 rounded-[5px] h-[50px] `}>
      <Space.Compact
        className={`${props?.width ? props?.width : " w-[640px]"}`}>
        {props.contentLeft && (
          <Input
            // ref={props.ref}
            style={{ width: "20%" }}
            placeholder="+234"
            defaultValue="+234"
            value={"+234"}
            onChange={props.onChange}
          />
        )}

        {props.inputType === "input" ? (
          <Input
            ref={props.ref}
            style={{ width: "100%" }}
            type={show ? "text" : props.type ?? "text"}
            // id="default_outlined"
            className={`flex px-2.5 w-full text-md text-gray-900 bg-transparent rounded-lg border ${
              props?.error
                ? "border-errorColor  focus:border-errorColor"
                : "border-borderColor focus:border-borderColor  "
            } appearance-none focus:outline-none focus:ring-0 peer cursor-pointer active:bg-white autofill:bg-white py-4 h-[50px]`}
            placeholder={props.placeholder}
            suffix={
              props?.rightIcon && (
                <div onClick={() => setShow((prev) => !prev)}>
                  <img src="/eye.svg" />
                </div>
              )
            }
            value={props.value}
            onChange={props.onChange}
          />
        ) : (
          <Select
            ref={props.ref}
            defaultValue={props.defaultValue}
            placeholder={props.placeholder ? props.placeholder : props.value}
            // value={props.value}
            // value={props.value}
            onChange={props.onChange}
            className={`block  w-full h-[50px] text-md text-gray-900 bg-transparent rounded-lg border border-borderColor appearance-none  focus:outline-none focus:ring-0 focus:border-borderColor peer placeholder:text-black `}
            options={props.options}
            showSearch
            filterOption={(input, option: any) =>
              option?.label?.toLowerCase().includes(input.toLowerCase())
            }
          />
        )}
      </Space.Compact>

      <label
        htmlFor="default_outlined"
        className={`absolute text-md text-gray-500  duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}>
        {props.label}
      </label>
    </div>
  );
});

export default CustomInput;
