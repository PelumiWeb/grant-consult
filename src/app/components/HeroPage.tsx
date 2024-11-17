import React from "react";
import CustomButton from "./CustomButton";

type Props = {};

const HeroPage = (props: Props) => {
  return (
    <div className="w-full flex items-start justify-between bg-hero h-[651px] relative">
      {/* left  */}
      <div className="ml-16 mt-[10%] w-[100%]">
        <h1 className="w-[80%]">Helping You Secure the Right Grants</h1>
        <p className="w-[70%]">
          Access grant opportunities, expert consultation, and personalized
          support. At ullamcorper eu et i
        </p>
        <div className="flex items-center justify-between w-full my-8 ">
          <CustomButton
            width="w-[226px]"
            title="Available Grants"
            radius="rounded-[5px]"
          />

          <CustomButton
            width="w-[226px]"
            backgrounColor="bg-primary"
            title="Become a donor"
            textColor="text-white"
            radius="rounded-[5px]"
          />
          <CustomButton
            width="w-[226px]"
            backgrounColor="bg-transparent"
            borderColor="border-secondaryColor border-[1px] "
            title="Become a consultant"
            textColor="text-secondaryColor"
            radius="rounded-[5px]"
          />
        </div>
      </div>

      {/* right */}
      <div className="relative w-full h-full">
        <div
          className="absolute bottom-0  right-0 w-full h-[600px] bg-buttonPrimary"
          style={{ clipPath: "polygon(64% 0, 100% 0%, 100% 100%, 30% 100%)" }}
        />
        {/* <img
            className=" z-10  w-[600px] h-[600px] "
            src="/backgroundHero2.png"
          /> */}

        <div className="absolute bottom-4 right-4">
          <img className=" z-0  w-[560px] h-[560px]" src="/heroImage2.png" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
