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
import { ResendVerification } from "../../utils/types/SignupData";
import { setUser } from "../../../../../lib/features/User/userSlice";
import GoBack from "../../components/GoBack";

type Props = {};
type ActivateAccount = {
  email: string | undefined;
  otp: string | undefined;
};
type User = any;

const Otp = (props: Props) => {
  const locale = useLocale();
  const handleNavigation = useHandleNavigation();
  const { user } = useAppSelector((state) => state.user);

  const [otp, setOtp] = React.useState(user?.otp);

  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
    setOtp(text);
  };

  console.log(user);

  const dispatch = useAppDispatch();
  const router = useRouter();
  const loginSuccessfully = () => toast.success("User authenticated");

  const {
    mutate: resendVerificationEmail,
    isPending: resendVerificationEmailLoading,
  } = useApiMutation<User, ResendVerification>(
    "post",
    endpoints.resendVerificationEmail,
    {
      onSuccess: (data) => {
        console.log(data, "it's success");
        dispatch(
          setUser({
            user: {
              ...user,
              otp: data?.data?.otp && data?.data?.otp,
            },
          })
        );
        handleNavigation(`/auth/otp`);
      },
      onError: (data: any) => {
        console.log("User error:", data);
        const errorMessage = () => toast.error(data?.message);
        errorMessage();
      },
    }
  );

  const { mutate, data, isPending } = useApiMutation<User, ActivateAccount>(
    "patch",
    endpoints.verifyUser,
    {
      onSuccess: (data) => {
        console.log(data, "it's success");
        if (data.status) {
          loginSuccessfully();
          handleNavigation(`/dashboard/profile`);
        }
      },
      onError: (data: any) => {
        console.log("User error:", data);
        const errorMessage = () => toast.error(data?.message);
        errorMessage();
      },
    }
  );

  const sharedProps: OTPProps = {
    onChange,
  };

  return (
    <div className="py-32 px-2 md:px-8 flex flex-col items-center justify-center relative">
      <div className="absolute top-4 left-4">
        <GoBack />
      </div>
      <div className="mt-[20%]">
        <h3 className="text-center">Check your email</h3>
        <p className="text-center">
          please enter the six digit verification code that we sent to{" "}
          {user?.email}
        </p>
        <div className="w-full flex justify-center items-center my-8">
          <Input.OTP
            value={otp}
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
            loading={isPending || resendVerificationEmailLoading}
            onClick={() => {
              mutate({
                otp,
                email: user?.email || "",
              });
            }}
          />
        </div>
        <button
          className="w-full"
          onClick={() => {
            resendVerificationEmail({ email: user?.email || "" });
          }}>
          <p className="underline text-center text-secondaryColor my-4">
            Resend Otp
          </p>
        </button>
      </div>
    </div>
  );
};
export default Otp;
