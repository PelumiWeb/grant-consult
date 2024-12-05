import { Input, Select, Space, Tooltip } from "antd";
import React from "react";

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
  
};

const CustomInput = (props: Props) => {
  return (
    <div
      className={`relative ${
        props.width ? props.width : "w-[640px]"
      } w-[640px] my-4 rounded-[5px] `}>
      <Space.Compact
        className={`${props?.width ? props?.width : " w-[640px]"}`}>
        {props.contentLeft && (
          <Input
            style={{ width: "20%" }}
            placeholder="+234"
            defaultValue="+234"
          />
        )}

        {props.inputType === "input" ? (
          <Input
            style={{ width: "100%" }}
            type={props.type ?? "text"}
            // id="default_outlined"
            className="flex px-2.5 w-full text-md text-gray-900 bg-transparent rounded-lg border border-borderColor appearance-none dark:text-white dark:border-borderColor dark:focus:border-borderColor focus:outline-none focus:ring-0 focus:border-borderColor peer cursor-pointer active:bg-red-500 autofill:bg-red-500 py-4"
            placeholder=""
            suffix={props?.rightIcon && <img src="/eye.svg" />}
          />
        ) : (
          <Select
            //   ref={data.ref}
            defaultValue={props.defaultValue}
            placeholder={props.placeholder}
            // value={props.value}
            onChange={props.onChange}
            className="block  w-full h-14 text-md text-gray-900 bg-transparent rounded-lg border border-borderColor appearance-none dark:text-white dark:border-borderColor dark:focus:border-borderColor focus:outline-none focus:ring-0 focus:border-borderColor peer "
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
        className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
        {props.label}
      </label>
    </div>
  );
};

export default CustomInput;
