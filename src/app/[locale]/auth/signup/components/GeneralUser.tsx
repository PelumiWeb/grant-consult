import Image from "next/image";
import React from "react";
import CustomInput from "../../../components/CustomInput";
import { Checkbox } from "antd";
import CustomButton from "../../../components/CustomButton";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import useHandleNavigation from "@/app/[locale]/utils/HandleNavigation";

type Props = {};

const GeneralSignup = (props: Props) => {
  const router = useRouter()
  const locale = useLocale();
    const handleNavigation = useHandleNavigation();

  return (
    <div className="pt-16 px-8 flex flex-col items-center justify-center mb-[5%]">
      <h3 className="w-full">Signup</h3>

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
          label="Email Address"
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
            onClick={() => handleNavigation(`/auth/otp`)}
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
