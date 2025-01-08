import Image from "next/image";
import React from "react";
import CustomInput from "../../../components/CustomInput";
import { Checkbox } from "antd";
import CustomButton from "../../../components/CustomButton";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import useHandleNavigation from "@/app/[locale]/utils/HandleNavigation";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import { setUserType } from "../../../../../../lib/features/Signup/SignupSlice";
import { Controller, useForm } from "react-hook-form";
import { setUser } from "../../../../../../lib/features/User/userSlice";
import { SignupData, User } from "@/app/[locale]/utils/types/SignupData";
import { toast } from "react-toastify";
import { useApiMutation } from "@/app/[locale]/utils/useApi";
import endpoints from "../../../../../../lib/endpoints";
import ErrorMessage from "@/app/[locale]/components/ErrorMessage";
import { countryData, expertiseData } from "@/app/[locale]/utils/customData";

type Props = {};

const Consultant = (props: Props) => {
  const router = useRouter();
  const locale = useLocale();
  const handleNavigation = useHandleNavigation();
  const dispatch = useAppDispatch();

  const countriesData = React.useMemo(() => {
    const data = countryData?.map((data) => ({
      label: data.name,
      value: data.name,
    }));

    return data;
  }, []);

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
      expertise: "",
      yearsOfExperience: "",
      password: "",
      confirmPassword: "",
    },
  });
  const loginNotify = () => toast.success("Signup successful");
  const signupData = useAppSelector((state) => state.signup);

  const { mutate, data, isPending } = useApiMutation<User, SignupData>(
    "post",
    endpoints.createUser,
    {
      onSuccess: (data) => {
        console.log("User created:", data);
        if (data.success) {
          dispatch(setUser({ ...data.data, userActivated: false }));
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
      usertype: "CONSULTANT",
      password: data.password,
      confirmPassword: data.confirmPassword,
      country: "NIGERIA",
      expertise: data.expertise,
    });
  };

  return (
    <div className="py-2 px-8 flex flex-col items-center justify-center mb-[5%]">
      <button
        className="w-full mb-4 flex"
        onClick={
          () =>
            dispatch(
              setUserType({
                ...signupData,
                userTypeSelected: false,
              })
            )
          // setUserTypeSelected(true)
        }>
        <ArrowLeftOutlined style={{ fontSize: 24, color: "#1F4E79" }} />
      </button>
      <h3 className="w-full">Sign up Consultant</h3>

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
          name="expertise"
          control={control}
          rules={{ required: "Expertise  is required" }}
          render={({ field: { value, onChange, ref } }) => (
            <>
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                // value=""
                error={errors.expertise}
                width="w-full lg:w-[616px]"
                label="Expertise"
                inputType="select"
                type="text"
                defaultValue="Health"
                options={expertiseData}
              />

              {errors.expertise && (
                <ErrorMessage message={errors?.expertise?.message} />
              )}
            </>
          )}
        />

        <Controller
          name="yearsOfExperience"
          control={control}
          // rules={{ required: "Years Of Experience  is required" }}
          render={({ field: { value, onChange, ref } }) => (
            <>
              <CustomInput
                ref={ref}
                onChange={onChange}
                value={value}
                // value=""
                error={errors.yearsOfExperience}
                width="w-full lg:w-[616px]"
                defaultValue="Health"
                label="Years of Experience"
                inputType="input"
                type="text"
              />

              {errors.yearsOfExperience && (
                <ErrorMessage message={errors?.yearsOfExperience?.message} />
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
                defaultValue="Health"
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
                defaultValue="Health"
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
            loading={isPending}
            type="submit"
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
export default Consultant;
