"use client";

import Image from "next/image";
import React from "react";
import { Checkbox } from "antd";
import CustomButton from "../../component/CustomButton";
import CustomInput from "@/app/component/CustomInput";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="py-32 px-8 flex flex-col items-center justify-center mb-[5%]">
      <h3 className="w-full">Login</h3>

      <form className="mt-8 w-full">
        <CustomInput
          label="Email Address"
          inputType="input"
          type="text"
          value=""
        />
        <CustomInput
          label="Password"
          inputType="input"
          type="password"
          value=""
          rightIcon
        />

        <div className="flex justify-between  items-center w-[85%] ">
          <div className="flex items-center">
            <Checkbox />
            <p className="underline text-secondaryColor text-sm ml-2 ">
              {" "}
              Remember me
            </p>
          </div>

          <p className="underline text-red-500 text-sm">Forgot Password</p>
        </div>
        <div className="mt-8">
          <CustomButton title="Login" />
        </div>
        <div className="mt-8">
          <CustomButton
            title="Sign in with Google"
            IconLeft="/google.svg"
            textColor="text-secondaryTextColor"
            backgrounColor="bg-white"
            borderColor="border-borderColor"
          />
        </div>
      </form>

      <div>
        <p className="text-sm underline text-center mt-4 ">
          Don't have an account?{" "}
          <span className="text-secondaryColor">Sign up here</span>
        </p>
      </div>
    </div>
  );
};
export default Login;
