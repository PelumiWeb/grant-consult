import Image from "next/image";
import React from "react";
import CustomInput from "../../components/CustomInput";
import { Checkbox } from "antd";
import CustomButton from "../../components/CustomButton";

type Props = {};

const AuthWrapper = (props: Props) => {
  return (
    <section className=" fixed bottom-0 left-0 w-screen h-screen flex justify-center ">
      {/* Left */}
      <div
        className="w-[45%] h-screen flex  px-4 flex-col justify-start items-start py-8 bg-backgroundColor
] relative">
        <Image
          className=""
          src="/grantLogo.svg"
          alt="Grant Logo"
          width={206}
          height={30}
        />
        <div className="z-20 ">
          <img
            src="/path1.svg"
            className=" w-[370px] h-[392px] absolute -top-[15%] -left-[15%]"
          />
          <img
            src="/path2.svg"
            className="h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src="/path3.svg"
            className="w-[450px] h-[465px] absolute -left-[15%] top-[55%] overflow-hidden"
          />
        </div>

        <div className="flex items-center justify-center h-screen flex-1 w-full absolute top-0 z-30">
          <img
            className="max-w-full h-auto"
            src="/people.svg"
            alt="Grant Logo"
          />
        </div>
      </div>
      {/* Content */}

      <div className="w-[55%] rounded-xl border-gray-500 bg-white py-32 px-8 flex flex-col items-center justify-center mb-[5%]">
        <h3 className="text-primary leading-[36px] font-mono text-[24px] w-full">
          Login
        </h3>

        <form className="mt-8 w-full">
          <CustomInput
            label="Email Address"
            inputType="input"
            type="text"
            value=""
          />
          <CustomInput
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
            <CustomButton title="Login" />
          </div>
          <div className="mt-8">
            <CustomButton
              title="Sign in with Google"
              IconLeft="/google.svg"
              textColor="text-secondaryTextColor"
              backgrounColor="bg-white"
              borderColor="border-borderColor"
            />
          </div>
        </form>

        <div>
          <p className="text-sm underline text-center mt-4 ">
            Don't have an account?{" "}
            <span className="text-secondaryColor">Sign up here</span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default AuthWrapper;
