import Image from "next/image";
import React from "react";
import CustomInput from "../../../component/CustomInput";
import { Checkbox } from "antd";
import CustomButton from "../../../component/CustomButton";

type Props = {};

const GeneralSignup = (props: Props) => {
  return (
    <div className="py-32 px-8 flex flex-col items-center justify-center mb-[5%]">
      <h3 className="w-full">
        Signup
      </h3>

      <form className="mt-4 w-full">
        <CustomInput label="Full Name" inputType="input" type="text" value="" />
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
          <CustomButton title="Signup" />
        </div>
        <div className="mt-8">
          <CustomButton
            title="Sign up with Google"
            IconLeft
            textColor="text-secondaryTextColor"
            backgrounColor="bg-white"
            borderColor="border-borderColor"
          />
        </div>
      </form>
      <div className="w-full">
        <p className="text-sm py-2 mx-16">
          By creating an account, you agree to Grantsconsult {" "}
          <span className="underline text-secondaryColor">
            Terms of Use, Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
};
export default GeneralSignup;
