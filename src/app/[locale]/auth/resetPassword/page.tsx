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
import {
  createNewPasswordData,
  forgotPassword,
} from "../../utils/types/SignupData";
import { useApiMutation } from "../../utils/useApi";
import endpoints from "../../../../../lib/endpoints";
import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import { useAppSelector } from "../../../../../lib/hooks";
import GoBack from "../../components/GoBack";

type Props = {};

const ResetPassword = (props: Props) => {
  const router = useRouter();
  const locale = useLocale();
  const handleNavigation = useHandleNavigation();

  const resetPasswordEmail = useAppSelector(
    (data) => data.user.resetPasswordEmail
  );

  const { user } = useAppSelector((data) => data.user);

  console.log(user, "current user");

  const fotgorPasswordNotify = () => toast.success("email sent successfully");
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      password: "",
      passwordConfirm: "",
      otp: user?.otp ? user?.otp : "",
    },
  });

  const { mutate, data, isPending } = useApiMutation<
    any,
    createNewPasswordData
  >("patch", endpoints.resetPassword, {
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
    onError: (data: any) => {
      console.log("User error:", data);
      const errorMessage = () => toast.error(data?.message);
      errorMessage();
    },
  });

  // const sharedProps: OTPProps = {
  //   onChange,
  // };

  const onSubmit = async (data: createNewPasswordData) => {
    mutate({
      email: resetPasswordEmail,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
      otp: data.otp,
    });
  };
  return (
    <div className="py-32 px-2 md:px-8 w-full flex flex-col items-center justify-center relative">
      <div className="absolute top-4 left-4">
        <GoBack />
      </div>
      <div className="mt-[10%] w-full">
        <h3 className="text-center"> Create new Password</h3>
        <p className="py-4 text-center">
          You are about to create a new password
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, ref } }) => (
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                width="w-full"
                label="Enter New Password"
                inputType="input"
                type="password"
                rightIcon
              />
            )}
          />

          <Controller
            name="passwordConfirm"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, ref } }) => (
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                width="w-full"
                label="Confirm New Password"
                inputType="input"
                type="password"
                rightIcon
              />
            )}
          />

          <Controller
            name="otp"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, ref } }) => (
              <div className=" flex  items-start my-1 flex-col w-full justify-center">
                <p className="text-[14px] text-textColor">Enter OTP</p>
                <Input.OTP
                  ref={ref}
                  onChange={onChange}
                  className="w-[200px]"
                  value={value}
                  variant="filled"
                  size={"large"}
                  // {...sharedProps}
                />
              </div>
            )}
          />

          <div className="w-full flex items-center justify-center mt-8">
            <CustomButton
              title="Create New Password"
              width="w-[220px]"
              type="submit"
              loading={isPending}
              textStyle="font-medium text-white"
            />
          </div>
          <button className="flex justify-center items-center w-full">
            <p
              className="text-secondaryColor200 text-center cursor-pointer py-2 hover:underline"
              onClick={() => handleNavigation("/auth/login")}>
              Back to Sign in
            </p>
          </button>
        </form>
      </div>
    </div>
  );
};
export default ResetPassword;
