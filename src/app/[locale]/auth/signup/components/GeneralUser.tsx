import Image from "next/image";
import React from "react";
import CustomInput from "../../../components/CustomInput";
import { Checkbox } from "antd";
import CustomButton from "../../../components/CustomButton";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import useHandleNavigation from "@/app/[locale]/utils/HandleNavigation";
import { Controller, useForm } from "react-hook-form";
import ErrorMessage from "@/app/[locale]/components/ErrorMessage";
import { useApiMutation } from "@/app/[locale]/utils/useApi";
import endpoints from "../../../../../../lib/endpoints";

type Props = {};
type User = any;
type SignupData = {
  usertype: string;
  fullName: string;
  phoneNumber?: string;
  email: string;
  country?: string;
  expertise?: string;
  password: string;
  confirmPassword: string;
};

const GeneralSignup = (props: Props) => {
  const router = useRouter();
  const locale = useLocale();
  const handleNavigation = useHandleNavigation();
  

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
    },
  });

   const { mutate } = useApiMutation<User, SignupData>(
       "post",
       endpoints.createUser,
       {
         onSuccess: (data) => {
           console.log("User created:", data);
         },
         onError: (data) => {
           console.log("User error:", data);
         },
       }
     );

  const onSubmit = async (data: any) => {
    console.log(data);

         const res = mutate({
           fullName: data.fullName,
           email: data.email,
           usertype: "GENERAL_USER",
           password: data.password,
           confirmPassword: data.password
         });

         console.log(res, "Here is the response from");
       };


  

  return (
    <div className="pt-16 px-8 flex flex-col items-center justify-center mb-[5%]">
      <h3 className="w-full">Signup</h3>

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
                width="w-full lg:w-[616px]"
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
              value: /^(?=.*[0-9])(?=.*[^a-zA-Z0-9]).+$/,
              message: `Email must have at least one non-alphanumeric character and one digit.`,
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
                width="w-full lg:w-[616px]"
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
                width="w-full lg:w-[616px]"
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

        <div className="flex justify-between  items-center w-[85%] ">
          <div className="flex items-center">
            <Checkbox />
            <p className="underline text-secondaryColor text-sm ml-2 ">
              {" "}
              Remember me
            </p>
          </div>

          <p className="underline text-red-500 text-sm">Forgot Password</p>
        </div>
        <div className="mt-8">
          <CustomButton
            width="w-full lg:w-[616px]"
            title="Signup"
            type="submit"
            // onClick={() => handleNavigation(`/auth/otp`)}
          />
        </div>
        <div className="mt-8">
          <CustomButton
            width="w-full lg:w-[616px]"
            title="Sign up with Google"
            IconLeft="/google.svg"
            backgrounColor="bg-white"
            borderColor="border-borderColor"
            textStyle="text-secondaryTextColor"
          />
        </div>
      </form>
      <div className="w-full">
        <p className="text-sm py-2 mx-16">
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
