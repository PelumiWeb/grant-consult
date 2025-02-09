"use client";
import Image from "next/image";
import React from "react";
import GeneralSignup from "./components/generalUser";
import Consultant from "./components/consultant";
import Grantor from "./components/grantors";
import { useRouter } from "next/navigation";

type Props = {};

type SignupOptionProps = {
  active: string;
  icon: string;
  title: string;
  content: string;
  setActive?: any;
  activeIcon: string;
};

const signupData = [
  {
    icon: "/userTypeIcon.svg",
    activeIcon: "/userTypeIconActive.svg",
    title: "General Users",
    content: "Individuals/NGOs/Corporate Bodies",
  },
  {
    icon: "/userTypeIcon2.svg",
    activeIcon: "/userTypeIconActive2.svg",

    title: "Consultants",
    content: "Grant Writing & Advisory Professionals",
  },
  {
    icon: "/userTypeIcon3.svg",
    activeIcon: "/userTypeIconActive3.svg",
    title: "Grantors",
    content: "Funding Organizations or Donors",
  },
];

const SignupOptions = (props: SignupOptionProps) => {
  console.log(props.active === props.title);
  return (
    <div
      onClick={props.setActive}
      className={`rounded-[2px] cursor-pointer ${
        props.active === props.title
          ? "border-secondaryColor border-[2px]"
          : "border-borderColor border-[0.5px]"
      } w-[115px] h-[120px] sm:h-[160px]  sm:w-[180px] p-1 md:p-2 flex flex-col items-center justify-around mr-2 `}>
      <div className="bg-backgroundColor rounded-full p-3">
        <div
          className="relative w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-center bg-contain bg-no-repeat transition-all duration-300"
          style={{
            backgroundImage: `url(${
              props.active === props.title ? props.activeIcon : props.icon
            })`,
          }}>
          {/* {props.active === props.title ? (
            <img
              src={props.activeIcon}
              alt=""
              className={`w-full h-full object-contain transition-opacity duration-300 ${
                props.active === props.title ? "opacity-0" : "opacity-100"
              }`}
            />
          ) : (
            <img
              src={props.icon}
              alt=""
              className={`w-full h-full object-contain transition-opacity duration-300 ${
                props.active === props.title ? "opacity-100" : "opacity-0"
              }`}
            />
          )} */}
        </div>
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
  const router = useRouter();
  return (
    <div className="flex flex-col p-4 md:mr-[10%] md:ml-[5%]">
      <div>
        <button className="flex items-center " onClick={() => router.back()}>
          <div className="w-[16px] h-[16px] relative">
            <Image src={"/goBackNew.svg"} alt="" fill />
          </div>
          <p className=" font-mono font-medium text-[16px] leading-[18px] text-primary ml-2 ">
            Back
          </p>
        </button>
      </div>

      <div className="block lg:hidden mt-4">
        <p className="font-mono font-medium text-[16px] leading-[20px] text-secondaryColor mb-2">
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
