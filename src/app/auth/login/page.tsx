"use client";

import Image from "next/image";
import React from "react";
import { Checkbox } from "antd";
import CustomButton from "../../components/CustomButton";
import CustomInput from "@/app/components/CustomInput";
import { useRouter } from "next/navigation";

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
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

          <p
            className="underline text-red-500 text-sm cursor-pointer"
            onClick={() => router.push("/auth/forgotPassword")}>
            Forgot Password
          </p>
        </div>
        <div className="mt-8">
          <CustomButton title="Login" onClick={() => router.push("/")} />
        </div>
        <div className="mt-8">
          <CustomButton
            title="Sign in with Google"
            IconLeft="/google.svg"
            backgrounColor="bg-white"
            borderColor="border-borderColor"
            textStyle="text-secondaryTextColor"
          />
        </div>
      </form>

      <div className="w-[640px] -ml-20">
        <p className="text-sm underline text-center mt-4 ">
          Don't have an account?{" "}
          <span
            className="text-secondaryColor cursor-pointer"
            onClick={() => router.push("/auth/signup")}
            >
            Sign up here
          </span>
        </p>
      </div>
    </div>
  );
};
export default Login;
