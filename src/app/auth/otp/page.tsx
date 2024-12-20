"use client";
import Image from "next/image";
import React from "react";
import CustomInput from "../../components/CustomInput";
import { Checkbox, Input } from "antd";
import CustomButton from "../../components/CustomButton";
import { OTPProps } from "antd/es/input/OTP";
import { useRouter } from "next/navigation";
import { setUserType } from "../../../../lib/features/Signup/SignupSlice";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";

type Props = {};

const Otp = (props: Props) => {
  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
  };
  const signupData = useAppSelector((state) => state.signup);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const sharedProps: OTPProps = {
    onChange,
  };

  return (
    <div className="py-32 px-8 flex flex-col items-center justify-center ">
      <div className="mt-[20%]">
        <h3 className="text-center">Check your email</h3>
        <p>
          please enter the six digit verification code that we sent to
          example@gmail.com{" "}
        </p>
        <div className="w-full flex justify-center items-center my-8">
          <Input.OTP
            className="w-[200px]"
            variant="filled"
            size={"large"}
            {...sharedProps}
          />
        </div>
        <div className="flex items-center justify-center w-full mt-16">
          <CustomButton
            width="w-[204px]"
            title="Verify and submit"
            onClick={() => {
              dispatch(
                setUserType({
                  ...signupData,
                  userTypeSelected: false,
                })
              );
              router.push("/dashboard");
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Otp;
