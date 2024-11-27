import React from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

type Props = {};

const HeroPage = (props: Props) => {
  const router = useRouter();
  return (
    <div className="mt-4 lg:mt-0\">
      <div className="hidden lg:flex w-full  flex-col md:flex-row  items-start justify-between bg-hero  h-full md:h-[551px] lg:h-[651px] relative">
        {/* left  */}
        <div className="hidden lg:block ml-8 xl:ml-16 mt-[10%] w-full lg:w-[50%]">
          <h1 className="sm:w-[70%] w-full ">
            Helping You Secure the Right Grants
          </h1>
          <p className="w-[90%] font-poppins text-newPrimaryTextColor font-medium leading-[38px] text-[24px]">
            Access grant opportunities, expert consultation, and personalized
            support. At ullamcorper eu et
          </p>
          <div className="flex items-center justify-between my-8 md:w-[80%] lg:w-[50%] w-full">
            <div onClick={() => router.push("/grants")}>
              <CustomButton
                width="md:w-[170px] w-[190px]"
                height="h-[52px]"
                title="Available Grants"
                radius="rounded-[5px]"
                textStyle="lg:text-sm font-semibold text-white"
                padding="p-0"
              />
            </div>
            <div className="ml-4" onClick={() => router.push("/auth/signup")}>
              <CustomButton
                width="md:w-[170px] w-[200px]"
                height="h-[52px]"
                backgrounColor="bg-transparent"
                title="Become a consultant"
                radius="rounded-[5px]"
                textStyle=" sm:text-[12px] lg:text-sm  text-primary font-semibold text-center  "
                borderWidth="border-[2px]"
                borderColor="border-primary"
                padding="p-0"
              />
            </div>

            {/* <CustomButton
            width="w-[226px]"
            backgrounColor="bg-transparent"
            borderColor="border-secondaryColor border-[1px] "
            title="Become a consultant"
            radius="rounded-[5px]"
            textStyle="text-secondaryColor"
          /> */}
          </div>
        </div>

        {/* right */}
        <div className="hidden lg:block relative w-full lg:w-[60%] h-full ">
          <div
            className="absolute bottom-0  right-0 w-[400px] sm:w-[400px] sm:h-[400px] lg:w-[500px] h-[500px] lg:h-[600px] bg-buttonPrimary"
            style={{ clipPath: "polygon(64% 0, 100% 0%, 100% 100%, 30% 100%)" }}
          />
          <div className="absolute bottom-4 right-4">
            <img
              className=" z-0  sm:w-[460px] sm:h-[460px] md:w-[560px] md:h-[560px]"
              src="/heroImage2.png"
            />
          </div>
        </div>
        {/* Mobile */}
      </div>
      <div className="py-8 block lg:hidden ">
        {/* Top */}
        <div className="block  relative mb-16">
          <div
            className="absolute z-0 top-0 -bottom-8
         bg-buttonPrimary w-full "
            style={{ clipPath: "polygon(64% 0, 100% 0%, 100% 100%, 30% 100%)" }}
          />
          <div className="relative right-4 w-full h-full z-10 top-4">
            <img
              className=" w-full object-contain z-10"
              src="/mobileHero.svg"
            />
          </div>
        </div>
        {/* Bottom */}
        <div className="">
          <h1 className="w-full font-semibold text-[20px] leading-[26px] text-center   lg:w-full ">
            Helping You Secure the Right Grants
          </h1>
          <p className="w-full font-poppins text-newPrimaryTextColor font-medium leading-[23px] text-[14px] text-center">
            Access grant opportunities, expert consultation, and personalized
            support. At ullamcorper eu et
          </p>
          <div className="flex items-center justify-center w-full mt-4">
            <div onClick={() => router.push("/grants")}>
              <CustomButton
                width="w-[134px]"
                height="h-[52px]"
                title="Available Grants"
                radius="rounded-[5px]"
                textStyle="text-[10px] font-semibold text-white"
                padding="p-0"
              />
            </div>
            <div className="ml-4" onClick={() => router.push("/auth/signup")}>
              <CustomButton
                width="w-[134px]"
                height="h-[52px]"
                backgrounColor="bg-transparent"
                title="Become a consultant"
                radius="rounded-[5px]"
                textStyle="text-[10px] font-semibold text-primary"
                borderWidth="border-[2px]"
                borderColor="border-primary"
                padding="p-0"
              />
            </div>

            {/* <CustomButton
            width="w-[226px]"
            backgrounColor="bg-transparent"
            borderColor="border-secondaryColor border-[1px] "
            title="Become a consultant"
            radius="rounded-[5px]"
            textStyle="text-secondaryColor"
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
