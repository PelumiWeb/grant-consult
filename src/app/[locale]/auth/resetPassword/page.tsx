"use client";
import Image from "next/image";
import React from "react";
import CustomInput from "../../components/CustomInput";
import { Checkbox, Input } from "antd";
import CustomButton from "../../components/CustomButton";
import { OTPProps } from "antd/es/input/OTP";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import useHandleNavigation from "../../utils/HandleNavigation";
import { createNewPasswordData, forgotPassword } from "../../utils/types/SignupData";
import { useApiMutation } from "../../utils/useApi";
import endpoints from "../../../../../lib/endpoints";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";


type Props = {};

const ResetPassword = (props: Props) => {
  const router = useRouter();
  const locale = useLocale()
  const handleNavigation = useHandleNavigation()

  const fotgorPasswordNotify = () => toast.success("email sent successfully");

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const { mutate, data, isPending } = useApiMutation<any, createNewPasswordData>(
    "post",
    endpoints.resetPassword,
    {
      onSuccess: (data) => {
        console.log(data, "it's success");
        if (data.success) {
          fotgorPasswordNotify();
          console.log(data.data, "from forgotpassowrd");
        } else {
          const failed = () => toast.error(data.message);
          failed();
        }
      },
      onError: (data) => {
        console.log("User error:", data);
      },
    }
  );

  const onSubmit = async (data: createNewPasswordData) => {
    console.log(data);
    mutate({
      email: data.email,
      newPassword: "",
      confirmPassword: "",
      token: ""
    });
  };
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
            onClick={() => handleNavigation("/auth/login")}>
            Back to Sign in
          </p>
        </form>
      </div>
    </div>
  );
};
export default ResetPassword;
