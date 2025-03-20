"use client";

import Image from "next/image";
import React from "react";
import CustomInput from "../../components/CustomInput";
import { Checkbox } from "antd";
import CustomButton from "../../components/CustomButton";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import useHandleNavigation from "@/app/utils/HandleNavigation";
import { Controller, useForm } from "react-hook-form";
import ErrorMessage from "@/app/[locale]/components/ErrorMessage";
import { useApiMutation } from "@/app/utils/useApi";
import endpoints from "../../../../../lib/endpoints";
import { toast } from "react-toastify";
import { setUser } from "../../../../../lib/features/User/userSlice";
import { useAppDispatch } from "../../../../../lib/hooks";
import { SignupData, User } from "@/app/utils/types/SignupData";

type Props = {
  title: string;
  userType: string;
};

const GeneralSignup = (props: Props) => {
  const handleNavigation = useHandleNavigation();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });
  const loginNotify = () => toast.success("Signup successful");

  const { mutate, isPending, isError } = useApiMutation<User, SignupData>(
    "post",
    endpoints.createUser,
    {
      onSuccess: (data) => {
        console.log("User created:", data);
        if (data.status) {
          dispatch(
            setUser({
              user: {
                ...data.data,
                userActivated: false,
              },
            })
          );
          loginNotify();
          handleNavigation(`/auth/otp`);
        } else {
          console.log(data, "this is the error response");
          loginNotify();
        }
      },
      // onError: (data: any) => {
      //   console.log("User error---", data);
      //     const loginNotify = () => toast.error(data);
      //     loginNotify();
      // },
      onError: (data: any) => {
        console.log("User error:", data);
        const errorMessage = () => toast.error(data?.message);
        errorMessage();
      },
    }
  );

  const onSubmit = async (data: any) => {
    const res = mutate({
      fullName: data.fullName,
      email: data.email,
      role: props.userType,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
    });
  };

  return (
    <div className="mt-8 flex flex-col items-center justify-center mb-[5%]">
      <h3 className="w-full">{props.title}</h3>

      <form className="mt-1 lg:mt-4 w-full" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="fullName"
          control={control}
          rules={{ required: "Full Name  is required" }}
          render={({ field: { value, onChange, ref } }) => (
            <>
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                label="Full Name"
                inputType="input"
                // value=""
                type="text"
                width="w-full"
                error={errors.fullName}
              />

              {errors.fullName && (
                <ErrorMessage message={errors.fullName.message} />
              )}
            </>
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email Address is required",
            pattern: {
              value: /^(?=.)(?=.*[^a-zA-Z0-9]).+$/,
              message: `Email must have at least one non-alphanumeric character.`,
            },
          }}
          render={({ field: { value, onChange, ref } }) => (
            <>
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                inputType="input"
                // value=""
                type="text"
                width="w-full "
                label="Email Address"
                error={errors.email}
              />

              {errors.email && <ErrorMessage message={errors.email.message} />}
            </>
          )}
        />

        {/* <CustomInput
          width="w-full lg:w-[616px]"
          label="Email Address"
          inputType="input"
          type="text"
          value=""
        /> */}

        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            pattern: {
              value: /^(?=.)(?=.*[^a-zA-Z0-9]).+$/,
              message: `Password must have at least one non-alphanumeric character.`,
            },

            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
          render={({ field: { value, onChange, ref } }) => (
            <>
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                inputType="input"
                width="w-full "
                label="Password"
                type="password"
                rightIcon
                error={errors.password?.message}
              />
              {errors.password && (
                <ErrorMessage message={errors.password.message} />
              )}
            </>
          )}
        />

        <Controller
          name="passwordConfirm"
          control={control}
          rules={{
            required: "Confirm Password is required",
            pattern: {
              value: /^(?=.)(?=.*[^a-zA-Z0-9]).+$/,
              message: `Confirm Password must have at least one non-alphanumeric character.`,
            },

            minLength: {
              value: 6,
              message: "Confirm Password must be at least 6 characters",
            },
          }}
          render={({ field: { value, onChange, ref } }) => (
            <>
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                inputType="input"
                width="w-full "
                label="Confirm Password"
                type="password"
                rightIcon
                error={errors.passwordConfirm?.message}
              />
              {errors.password && (
                <ErrorMessage message={errors.passwordConfirm?.message} />
              )}
            </>
          )}
        />

        {/* <div className="flex justify-between  items-center w-full  md:w-[85%] ">
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
            <p className="underline text-red-500 text-sm">Forgot Password</p>
          </div>
        </div> */}
        <div className="mt-8">
          <CustomButton
            width="w-full "
            title="Signup"
            type="submit"
            loading={isPending}
          />
        </div>
        <div className="mt-8">
          <CustomButton
            width="w-full "
            title="Sign up with Google"
            IconLeft="/google.svg"
            backgrounColor="bg-white"
            borderColor="border-borderColor"
            textStyle="text-secondaryTextColor"
          />
        </div>
      </form>
      <div className="w-full flex justify-center items-center">
        <p className="text-sm py-2 mx-4 md:mx-16">
          Already hanve an account
          <button onClick={() => handleNavigation("/auth/login")}>
            <span className="underline text-secondaryColor ml-1">
              Click to login
            </span>
          </button>
        </p>
      </div>

      <div className="w-full">
        <p className="text-sm py-2 mx-4 md:mx-16">
          By creating an account, you agree to Grantsconsult {" "}
          <span className="underline text-secondaryColor">
            Terms of Use, Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
};
export default GeneralSignup;
