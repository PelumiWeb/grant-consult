"use client";

import Image from "next/image";
import React from "react";
import CustomInput from "../../../components/CustomInput";
import { Checkbox } from "antd";
import CustomButton from "../../../components/CustomButton";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import useHandleNavigation from "@/app/utils/HandleNavigation";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import endpoints from "../../../../../../lib/endpoints";
import { toast } from "react-toastify";
import { useApiMutation } from "@/app/utils/useApi";
import { Controller, useForm } from "react-hook-form";
import { setUser } from "../../../../../../lib/features/User/userSlice";
import { SignupData, User } from "@/app/utils/types/SignupData";
// import ErrorMessage from "@/app/components/ErrorMessage";
import {
  countryData,
  expertiseData,
  organizationType,
} from "@/app/utils/customData";
import ErrorMessage from "@/app/[locale]/components/ErrorMessage";

type Props = {};

const Grantor = (props: Props) => {
  const countriesData = React.useMemo(() => {
    const data = countryData?.map((data) => ({
      label: data.name,
      value: data.name,
    }));

    return data;
  }, []);
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
      phone: "",
      country: "",
      sector: "",
      organizationType: "",
      password: "",
      confirmPassword: "",
      organizationName: "",
    },
  });
  const loginNotify = () => toast.success("Signup successful");

  const { mutate, data, isPending } = useApiMutation<User, SignupData>(
    "post",
    endpoints.createUser,
    {
      onSuccess: (data) => {
        console.log("User created:", data);
        if (data.success) {
          console.log(data);
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
          const loginNotify = () => toast.error(data.message);
          loginNotify();
        }
      },
      onError: (data: any) => {
        console.log("User error:", data);
      },
    }
  );

  const onSubmit = async (data: SignupData) => {
    console.log(data);
    const res = mutate({
      fullName: data.fullName,
      email: data.email,
      usertype: "GRANTOR",
      password: data.password,
      confirmPassword: data.confirmPassword,
      country: data.country,
      expertise: data.expertise,
      organizationName: data?.organizationName,
      organizationGroup: data?.organizationType,
    });
  };

  return (
    <div className="p-8 flex flex-col items-center justify-center mb-[5%] ">
      <h3 className="w-full text-lg lg:text-current">Sign up Donor/GRANTOR</h3>

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
                inputType="input"
                // value=""
                type="text"
                error={errors.fullName}
                width="w-full lg:w-[616px]"
                label="Full Name"
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
          rules={{ required: "Email  is required" }}
          render={({ field: { value, onChange, ref } }) => (
            <>
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                // value=""
                error={errors.fullName}
                width="w-full lg:w-[616px]"
                label="Email"
                inputType="input"
                type="text"
              />

              {errors.email && (
                <ErrorMessage message={errors?.email?.message} />
              )}
            </>
          )}
        />

        <Controller
          name="phone"
          control={control}
          rules={{ required: "Phone  is required" }}
          render={({ field: { value, onChange, ref } }) => (
            <>
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                // value=""
                error={errors.phone}
                width="w-full lg:w-[616px]"
                contentLeft
                label="Phone Number"
                inputType="input"
                type="text"
              />

              {errors.phone && (
                <ErrorMessage message={errors?.phone?.message} />
              )}
            </>
          )}
        />

        <Controller
          name="country"
          control={control}
          rules={{ required: "Country  is required" }}
          render={({ field: { value, onChange, ref } }) => (
            <>
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                // value=""
                error={errors.country}
                width="w-full lg:w-[616px]"
                label="Select Country/Region"
                inputType="select"
                type="text"
                defaultValue="Nigeria"
                options={countriesData}
                // options
              />

              {errors.country && (
                <ErrorMessage message={errors?.country?.message} />
              )}
            </>
          )}
        />

        <Controller
          name="organizationName"
          control={control}
          // rules={{ required: "Oragnization Name is required" }}
          render={({ field: { value, onChange, ref } }) => (
            <>
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                // value=""
                error={errors.organizationName}
                width="w-full lg:w-[616px]"
                label="Organization Name"
                inputType="input"
                type="text"
                placeholder="if representing an organization"
              />

              {errors.organizationName && (
                <ErrorMessage message={errors?.organizationName?.message} />
              )}
            </>
          )}
        />

        <Controller
          name="organizationType"
          control={control}
          rules={{ required: "organization Type  is required" }}
          render={({ field: { value, onChange, ref } }) => (
            <>
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                // value=""
                error={errors.organizationType}
                width="w-full lg:w-[616px]"
                label="Organization Type"
                inputType="select"
                type="text"
                options={organizationType}
              />

              {errors.organizationType && (
                <ErrorMessage message={errors?.organizationType?.message} />
              )}
            </>
          )}
        />
        <Controller
          name="sector"
          control={control}
          rules={{ required: "Sectore  is required" }}
          render={({ field: { value, onChange, ref } }) => (
            <>
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                // value=""
                error={errors.sector}
                width="w-full lg:w-[616px]"
                label="Sector"
                inputType="select"
                type="text"
                options={organizationType}
              />

              {errors.sector && (
                <ErrorMessage message={errors?.sector?.message} />
              )}
            </>
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: "Password  is required" }}
          render={({ field: { value, onChange, ref } }) => (
            <>
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                // value=""
                error={errors.fullName}
                width="w-full lg:w-[616px]"
                // defaultValue="Health"
                label="Password"
                inputType="input"
                type="password"
                rightIcon
              />

              {errors.password && (
                <ErrorMessage message={errors?.password?.message} />
              )}
            </>
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          rules={{ required: "Confirm Password  is required" }}
          render={({ field: { value, onChange, ref } }) => (
            <>
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                // value=""
                error={errors.confirmPassword}
                width="w-full lg:w-[616px]"
                // defaultValue="Health"
                label="Confirm Password"
                inputType="input"
                type="password"
                rightIcon
              />

              {errors.confirmPassword && (
                <ErrorMessage message={errors?.confirmPassword?.message} />
              )}
            </>
          )}
        />
        <div className="mt-4">
          <CustomButton
            width="w-full lg:w-[616px]"
            title="Sign up"
            radius="rounded-[5px]"
            loading={isPending}
            type="submit"
            // onClick={() => handleNavigation(`/auth/otp`)}
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

      <div className="w-full flex justify-center items-center">
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
export default Grantor;
