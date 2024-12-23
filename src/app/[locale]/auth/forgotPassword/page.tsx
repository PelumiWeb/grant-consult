"use client";
import Image from "next/image";
import React from "react";
import CustomInput from "../../components/CustomInput";
import { Checkbox, Input } from "antd";
import CustomButton from "../../components/CustomButton";
import { OTPProps } from "antd/es/input/OTP";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

type Props = {};

const CreateNewPassword = (props: Props) => {
  const router = useRouter();
  const locale = useLocale()
  return (
    <div className="py-32 px-8 w-full flex flex-col items-center justify-center ">
      <div className="mt-[10%] w-full">
        <h3 className="text-center"> Create new assword</h3>
        <p className="py-4 text-center">
          You are about to create a new password
        </p>

        <form>
          <CustomInput
            width="w-full"
            label="Enter New Password"
            inputType="input"
            type="password"
            value=""
            rightIcon
          />
          <CustomInput
            width="w-full"
            label="Confirm New Password"
            inputType="input"
            type="password"
            value=""
            rightIcon
          />
          <div className="w-full flex items-center justify-center">
            <CustomButton title="Create New Password" width="w-[220px]" />
          </div>
          <p
            className="text-secondaryColor200 text-center cursor-pointer py-2 hover:underline"
            onClick={() => router.push(`${locale}/auth/login`)}>
            Back to Sign in
          </p>
        </form>
      </div>
    </div>
  );
};
export default CreateNewPassword;
