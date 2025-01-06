import { Input, Select, Space, Tooltip } from "antd";
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
};

export type Ref = any;

const CustomInput = forwardRef<Props, Ref>((props, ref) => {
  const [show, setShow] = React.useState(false)
  return (
    <div
      className={`relative ${
        props.width ? props.width : "w-[640px]"
      } w-[640px] my-4 rounded-[5px] `}>
      <Space.Compact
        className={`${props?.width ? props?.width : " w-[640px]"}`}>
        {props.contentLeft && (
          <Input
            ref={props.ref}
            style={{ width: "20%" }}
            placeholder="+234"
            defaultValue="+234"
            value={props.value}
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
                ? "border-errorColor dark:border-errorColor  dark:focus:border-errorColor focus:border-errorColor"
                : "border-borderColor dark:border-borderColor dark:focus:border-borderColor focus:border-borderColor  "
            } appearance-none dark:text-white focus:outline-none focus:ring-0 peer cursor-pointer active:bg-white autofill:bg-white py-4`}
            placeholder=""
            suffix={
              props?.rightIcon && (
                <button onClick={() => setShow((prev) => !prev)}>
                  <img src="/eye.svg" />
                </button>
              )
            }
            value={props.value}
            onChange={props.onChange}
          />
        ) : (
          <Select
            ref={props.ref}
            defaultValue={props.defaultValue}
            placeholder={props.placeholder}
            value={props.value}
            // value={props.value}
            onChange={props.onChange}
            className={`block  w-full h-14 text-md text-gray-900 bg-transparent rounded-lg border border-borderColor appearance-none dark:text-white dark:border-borderColor dark:focus:border-borderColor focus:outline-none focus:ring-0 focus:border-borderColor peer`}
            options={[
              {
                value: "General User (NGOs, Corporates, Individuals)",
                label: (
                  <span>General User (NGOs, Corporates, Individuals)</span>
                ),
              },
            ]}
          />
        )}
      </Space.Compact>

      <label
        htmlFor="default_outlined"
        className={`absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}>
        {props.label}
      </label>
    </div>
  );
});

export default CustomInput;
