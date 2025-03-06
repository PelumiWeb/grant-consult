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
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import {
  setResetPassword,
  setUser,
} from "../../../../../lib/features/User/userSlice";
import GoBack from "../../components/GoBack";

type Props = {};

const CreateNewPassword = (props: Props) => {
  const router = useRouter();
  const locale = useLocale();
  const handleNavigation = useHandleNavigation();
  const dispatch = useAppDispatch();
  const fotgorPasswordNotify = () => toast.success("email sent successfully");
  const user = useAppSelector((data) => data.user.user);
  const newUser = useAppSelector((data) => data.user.resetPasswordEmail);

  console.log("the new user", newUser);

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const { mutate, data, isPending } = useApiMutation<any, forgotPassword>(
    "post",
    endpoints.forgotPassword,
    {
      onSuccess: (data) => {
        console.log(data.data.otp, "it's success from forgot password");
        dispatch(
          setUser({
            user: {
              ...user,
              otp: data.data.otp,
            },
          })
        );
        fotgorPasswordNotify();

        handleNavigation("/auth/resetPassword");

        console.log(data, "from forgotpassowrd");
      },
      onError: (data: any) => {
        console.log("User error:", data);
        const errorMessage = () => toast.error(data?.message);
        errorMessage();
      },
    }
  );

  const onSubmit = async (data: forgotPassword) => {
    mutate({
      email: data.email.toLocaleLowerCase(),
    });
    
    dispatch(setResetPassword({ resetPasswordEmail: data.email }));
  };
  return (
    <div className="py-32 px-2 md:px-8 w-full flex flex-col items-center justify-center relative ">
      <div className="absolute top-4 left-4">
        <GoBack />
      </div>
      <div className="mt-[10%] w-full">
        <h3 className="text-center"> Forgot Pasword?</h3>
        <p className="py-4 text-center">
          Don’t worry, we will send you a reset link{" "}
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, ref } }) => (
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                width="w-full"
                label="Enter your email"
                inputType="input"
                type="text"
              />
            )}
          />
          {/* <CustomInput
            width="w-full"
            label="Enter your email"
            inputType="input"
            type="password"
            value=""
            rightIcon
          /> */}
          <div className="w-full flex items-center justify-center">
            <CustomButton
              loading={isPending}
              type="submit"
              title="Reset My Password"
              width="w-[220px]"
            />
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
export default CreateNewPassword;
