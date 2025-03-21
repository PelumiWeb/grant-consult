"use client";

import Image from "next/image";
import React from "react";
import { Checkbox } from "antd";
import CustomButton from "../../components/CustomButton";
import CustomInput from "@/app/[locale]/components/CustomInput";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import useHandleNavigation from "../../utils/HandleNavigation";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useApiMutation } from "../../utils/useApi";
import {
  LoginData,
  ResendVerification,
  User,
} from "../../utils/types/SignupData";
import { toast } from "react-toastify";
import endpoints from "../../../../../lib/endpoints";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { setToken, setUser } from "../../../../../lib/features/User/userSlice";
import { userTypeName } from "../../utils/types/userTypes";
import { apiInstance } from "../../../../../lib/api/Api";

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  const locale = useLocale();
  const handleNavigation = useHandleNavigation();
  const dispatch = useAppDispatch();

  const user = useAppSelector((data) => data.user.user);

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  console.log(user, "hwre is the user");

  const loginSuccessfully = () => toast.success("Login successful");
  const {
    mutate: resendVerificationEmail,
    isPending: resendVerificationEmailLoading,
  } = useApiMutation<User, ResendVerification>(
    "post",
    endpoints.resendVerificationEmail,
    {
      onSuccess: (data) => {
        console.log(data, "it's success");
        console.log(data.data.otp);
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
      onError: (data) => {
        console.log("User error:", data);
      },
    }
  );

  const { mutate, data, isPending } = useApiMutation<User, LoginData>(
    "post",
    endpoints.loginUser,
    {
      onSuccess: (data) => {
        console.log(data, "it's success");
        const token = data.data.accessToken;

        if (data.status) {
          if (data.data.user?.emailVerified) {
            loginSuccessfully();
            // console.log(data.data.user, "from login");
            dispatch(
              setUser({
                user: {
                  ...data.data.user,
                  userActivated: false,
                },
              })
            );

            // apiInstance.setAuth(token);
            dispatch(
              setToken({
                token,
              })
            );
            if (data.data.user?.role === userTypeName.general) {
              handleNavigation(`/dashboard/general`);
            } else {
              handleNavigation(`/dashboard/profile`);
            }
          } else {
            console.log(data?.data?.user?.email);
            resendVerificationEmail({
              email: data?.data?.user?.email,
            });
            return;
          }
        } else {
          const loginFailed = () => toast.error(data.message);
          loginFailed();
        }
      },
      onError: (data: any) => {
        console.log("User error:", data);
        const errorMessage = () => toast.error(data?.message);
        errorMessage();
      },
    }
  );

  const onSubmit = async (data: LoginData) => {
    console.log(data);
    mutate({
      email: data.email,
      password: data.password,
      role: "consultant",
    });
    // handleNavigation(`/dashboard/general`);
  };

  return (
    <div className="py-8 md:py-32 px-2 md:px-8 flex flex-col items-center justify-center mb-[5%]">
      <h3 className="w-full">Login</h3>

      <form className="mt-8 w-full" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange, ref } }) => {
            return (
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                label="Email Address"
                inputType="input"
                type="text"
                // value=""
                width="w-full"
              />
            );
          }}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange, ref } }) => (
            <CustomInput
              ref={ref}
              onChange={onChange}
              value={value}
              label="Enter Password"
              inputType="input"
              // value=""
              width="w-full"
              type="password"
              rightIcon
            />
          )}
        />

        <div className="flex justify-between  items-center w-full md:w-full">
          <div className="flex items-center">
            <Checkbox />
            <p className="underline text-secondaryColor text-sm ml-2 ">
              {" "}
              Remember me
            </p>
          </div>
          <div
            onClick={() => handleNavigation(`/auth/forgotPassword`)}
            className="cursor-pointer">
            <p className="underline text-red-500 text-sm cursor-pointer">
              Forgot Password
            </p>
          </div>
        </div>
        <div className="mt-8">
          <CustomButton
            width="w-full"
            title="Login"
            type="submit"
            loading={isPending}

            // onClick={() => handleNavigation(`/auth/otp`)}
          />
        </div>
        <div className="mt-8">
          <CustomButton
            width="w-full"
            title="Sign in with Google"
            IconLeft="/google.svg"
            backgrounColor="bg-white"
            borderColor="border-borderColor"
            textStyle="text-secondaryTextColor"
          />
        </div>
      </form>

      <div className="w-full md:w-[640px] md:-ml-20">
        <p className="text-sm underline text-center mt-4 ">
          Don't have an account?{" "}
          <span
            className="text-secondaryColor cursor-pointer"
            onClick={() => handleNavigation(`/auth/`)}>
            Sign up here
          </span>
        </p>
      </div>
    </div>
  );
};
export default Login;
