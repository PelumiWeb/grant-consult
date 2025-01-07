import Image from "next/image";
import React from "react";
import CustomInput from "../../../components/CustomInput";
import { Checkbox } from "antd";
import CustomButton from "../../../components/CustomButton";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import useHandleNavigation from "@/app/[locale]/utils/HandleNavigation";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import { setUserType } from "../../../../../../lib/features/Signup/SignupSlice";
import { ArrowLeftOutlined } from "@ant-design/icons";
import endpoints from "../../../../../../lib/endpoints";
import { toast } from "react-toastify";
import { useApiMutation } from "@/app/[locale]/utils/useApi";
import { Controller, useForm } from "react-hook-form";
import { setUser } from "../../../../../../lib/features/User/userSlice";
import { SignupData, User } from "@/app/[locale]/utils/types/SignupData";




type Props = {};

const Consultant = (props: Props) => {
  const router = useRouter();
  const locale = useLocale();
    const handleNavigation = useHandleNavigation();
        const dispatch = useAppDispatch();
        const signupData = useAppSelector((state) => state.signup);

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
        const loginNotify = () => toast.success("Signup successful");

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

        const onSubmit = async (data: any) => {
          const res = mutate({
            fullName: data.fullName,
            email: data.email,
            usertype: "GENERAL_USER",
            password: data.password,
            confirmPassword: data.password,
          });
        };


  return (
    <div className="py-2 px-8 flex flex-col items-center justify-center mb-[5%] ">
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
      <h3 className="w-full">Sign up Donor/GRANTOR</h3>

      <form className="mt-1 lg:mt-4 w-full">
        <CustomInput
          width="w-full lg:w-[616px]"
          label="Full Name"
          inputType="input"
          type="text"
          value=""
        />
        <CustomInput
          width="w-full lg:w-[616px]"
          label="Email"
          inputType="input"
          type="text"
          value=""
        />
        <CustomInput
          width="w-full lg:w-[616px]"
          label="Phone Number"
          inputType="input"
          type="text"
          value=""
          contentLeft
        />
        <CustomInput
          width="w-full lg:w-[616px]"
          label="Select Country/Region"
          inputType="input"
          type="text"
          value=""
        />
        <CustomInput
          width="w-full lg:w-[616px]"
          label="Expertise"
          inputType="input"
          type="text"
          value=""
        />
        <CustomInput
          width="w-full lg:w-[616px]"
          label="Years of Experience"
          inputType="input"
          type="text"
          value=""
        />
        <CustomInput
          width="w-full lg:w-[616px]"
          label="Password"
          inputType="input"
          type="password"
          value=""
          rightIcon
        />
        <CustomInput
          width="w-full lg:w-[616px]"
          label="confirm Password"
          inputType="input"
          type="password"
          value=""
          rightIcon
        />
        <div className="mt-4">
          <CustomButton
            width="w-full lg:w-[616px]"
            title="Sign up"
            radius="rounded-[5px]"
            onClick={() => handleNavigation(`/auth/otp`)}
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
