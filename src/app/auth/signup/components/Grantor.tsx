import Image from "next/image";
import React from "react";
import CustomInput from "../../../components/CustomInput";
import { Checkbox } from "antd";
import CustomButton from "../../../components/CustomButton";

type Props = {};

const Consultant = (props: Props) => {
  return (
    <div className="py-2 px-8 flex flex-col items-center justify-center mb-[5%]">
      <h3 className="w-full">Sign up Donor/GRANTOR</h3>

      <form className="mt-8 w-full">
        <CustomInput label="Full Name" inputType="input" type="text" value="" />
        <CustomInput label="Email" inputType="input" type="text" value="" />
        <CustomInput
          label="Phone Number"
          inputType="input"
          type="text"
          value=""
          contentLeft
        />
        <CustomInput
          label="Select Country/Region"
          inputType="input"
          type="text"
          value=""
        />
        <CustomInput label="Expertise" inputType="input" type="text" value="" />
        <CustomInput
          label="Years of Experience"
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
        <CustomInput
          label="confirm Password"
          inputType="input"
          type="password"
          value=""
          rightIcon
        />
        <div className="mt-4">
          <CustomButton title="Sign up" />
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
export default Consultant;
