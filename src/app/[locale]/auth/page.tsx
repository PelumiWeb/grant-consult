"use client";
import Image from "next/image";
import React from "react";
import GeneralSignup from "./components/generalUser";
import Consultant from "./components/consultant";
import Grantor from "./components/grantors";

type Props = {};

type SignupOptionProps = {
  active: string;
  icon: string;
  title: string;
  content: string;
  setActive?: any;
};

const signupData = [
  {
    icon: "/userTypeNotActive2.svg",

    title: "General Users",
    content: "Individuals/NGOs/Corporate Bodies",
  },
  {
    icon: "/userTypeActive3.svg",

    title: "Consultants",
    content: "Grant Writing & Advisory Professionals",
  },
  {
    icon: "/userTypeNotActive.svg",

    title: "Grantors",
    content: "Funding Organizations or Donors",
  },
];

const SignupOptions = (props: SignupOptionProps) => {
  return (
    <div
      onClick={props.setActive}
      className={`rounded-[2px] cursor-pointer ${
        props.active === props.title
          ? "border-secondaryColor border-[2px]"
          : "border-borderColor border-[0.5px]"
      } w-[140px] h-[140px] sm:h-[160px]  sm:w-[180px] p-2 flex flex-col items-center justify-around `}>
      <div className="relative w-[64px] h-[64px]">
        <Image src={props.icon} alt="" fill />
      </div>

      <p
        className={`font-mono font-medium text-[12px] md:text-[16px] lg:leading-[19px] text-center ${
          props.active === props.title
            ? "text-secondaryColor"
            : "text-textColor"
        }`}>
        {props.title}
      </p>

      <p
        className={`text-center font-medium text-[7px] md:text-[10px] leading-[13px] ${
          props.active !== props.title
            ? "text-borderColor"
            : "text-secondaryColor"
        }`}>
        {props.content}
      </p>
    </div>
  );
};

const Auth = () => {
  const [active, setActive] = React.useState("General Users");
  return (
    <div className="flex flex-col p-4 md:mr-[10%] md:ml-[5%]">
      <div>
        <div className="flex items-center ">
          <div className="w-[16px] h-[16px] relative">
            <Image src={"/goBackNew.svg"} alt="" fill />
          </div>
          <p className=" font-mono font-medium text-[16px] leading-[18px] text-primary ml-2 ">
            Back
          </p>
        </div>
      </div>

      <div className="block lg:hidden mt-4">
        <p className="font-mono font-medium text-[16px] leading-[20px] text-secondaryColor">
          Join the GrantsConsult Community!
        </p>
        <p className="font-mono font-normal text-[14px] leading-[20px] text-primaryBlack">
          Whether you’re a General User, Consultant, or Grantor, we have the
          right space for you
        </p>
      </div>

      <h3 className="font-semibold text-[24px] leading-[36px] text-secondaryColor mt-8">
        Select Your User Type
      </h3>
      <div className="flex mt-5 justify-between items-center ">
        {signupData.map((data) => (
          <SignupOptions
            {...data}
            active={active}
            setActive={() => setActive(data.title)}
          />
        ))}
      </div>

      {active === signupData[0].title ? (
        <GeneralSignup />
      ) : active === signupData[1].title ? (
        <Consultant />
      ) : (
        <Grantor />
      )}
    </div>
  );
};

export default Auth;
