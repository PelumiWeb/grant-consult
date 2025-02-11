"use client";
import Image from "next/image";
import React from "react";
import CustomInput from "../../components/CustomInput";
import { Checkbox, Input } from "antd";
import CustomButton from "../../components/CustomButton";
import { OTPProps } from "antd/es/input/OTP";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { useLocale } from "next-intl";
import useHandleNavigation from "../../utils/HandleNavigation";
import { useApiMutation } from "../../utils/useApi";
import endpoints from "../../../../../lib/endpoints";
import { toast } from "react-toastify";

type Props = {};
type ActivateAccount = {
  email: string | undefined;
  otp: string;
};
type User = any;

const Otp = (props: Props) => {
  const locale = useLocale();
  const handleNavigation = useHandleNavigation();
  const [otp, setOtp] = React.useState("");

  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
    setOtp(text);
  };

  const { user } = useAppSelector((state) => state.user);
  console.log(user);

  const dispatch = useAppDispatch();
  const router = useRouter();
  const loginSuccessfully = () => toast.success("User authenticated");

  const { mutate, data, isPending } = useApiMutation<User, ActivateAccount>(
    "post",
    endpoints.activateAccount,
    {
      onSuccess: (data) => {
        console.log(data, "it's success");
        if (data.success) {
          loginSuccessfully();
          handleNavigation(`/auth/login`);
        }
      },
      onError: (data) => {
        console.log("User error:", data);
      },
    }
  );

  const sharedProps: OTPProps = {
    onChange,
  };

  return (
    <div className="py-32 px-2 md:px-8 flex flex-col items-center justify-center ">
      <div className="mt-[20%]">
        <h3 className="text-center">Check your email</h3>
        <p className="text-center">
          please enter the six digit verification code that we sent to {" "}
          {user?.email}
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
            loading={isPending}
            onClick={() => {
              mutate({
                otp,
                email: user?.email,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Otp;
