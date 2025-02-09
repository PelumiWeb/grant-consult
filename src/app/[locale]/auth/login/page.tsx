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
import { LoginData, User } from "../../utils/types/SignupData";
import { toast } from "react-toastify";
import endpoints from "../../../../../lib/endpoints";
import { useAppDispatch } from "../../../../../lib/hooks";
import { setUser } from "../../../../../lib/features/User/userSlice";

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  const locale = useLocale();
  const handleNavigation = useHandleNavigation();
  const dispatch = useAppDispatch();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginSuccessfully = () => toast.success("Login successful");

  const { mutate, data, isPending } = useApiMutation<User, LoginData>(
    "post",
    endpoints.loginUser,
    {
      onSuccess: (data) => {
        console.log(data, "it's success");
        if (data.success) {
          loginSuccessfully();
          console.log(data.data, "from login");
          dispatch(
            setUser({
              user: {
                ...data.data,
                userActivated: false,
              },
            })
          );
          handleNavigation(`/dashboard/profile`);
        } else {
          const loginFailed = () => toast.error(data.message);
          loginFailed();
        }
      },
      onError: (data) => {
        console.log("User error:", data);
      },
    }
  );

  const onSubmit = async (data: LoginData) => {
    console.log(data);
    mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="py-8 md:py-32 px-8 flex flex-col items-center justify-center mb-[5%]">
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

        <div className="flex justify-between  items-center w-full md:w-[85%] ">
          <div className="flex items-center">
            <Checkbox />
            <p className="underline text-secondaryColor text-sm ml-2 ">
              {" "}
              Remember me
            </p>
          </div>
          <div onClick={() => handleNavigation(`/auth/forgotPassword`)} className="cursor-pointer">
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
