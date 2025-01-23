"use client";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { useAppDispatch } from "../../../../../lib/hooks";
import useHandleNavigation from "../../utils/HandleNavigation";
type Props = {};

const Card = (data: any) => {
  return (
    <div className="w-[400px] flex items-center justify-center bg-white h-[138px]">
      <div>
        <p className="font-semibold font-mono text-[36px] leading-[43px] text-secondaryColor text-center">
          {data.name}
        </p>
        <p className="font-mono text-[14px] font-semibold leading-[22px] text-textColor text-center">
          {data.text}
          {/* Daily Visitors */}
        </p>
      </div>
    </div>
  );
};

const PartnerCard = (data: any) => {
  return (
    <div className="max-h-[300px] max-w-[320px] flex flex-col items-center justify-around my-2 lg:my-0">
      <img src={data.image} alt="" />
      <p className="font-bold text-black font-mono text-center text-[16px] leading-[19px] my-4">
        {data.name}
      </p>
      <p className="text-center font-normal text-[16px] leading-[20px] font-mono text-black ">
        {data.text}
      </p>
    </div>
  );
};

const page = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleNavigation = useHandleNavigation();
  return (
    <div className="pb-20">
      <div className="min-h-[421px] bg-becomeConsultantImage bg-cover  bg-left md:bg-center bg-no-repeat relative">
        <div className="w-[600px] min-h-[316px] px-16 flex flex-col justify-between absolute top-[15%]">
          <h3 className="font-mono font-bold text-[25px] md:text-[35px] lg:text-[45px] leading-[30px] lg:leading-[60px] text-white">
            {" "}
            Become a Consultant
          </h3>

          <p className="font-semibold text-[16px] leading-[25px] text-white">
            Join our professional network of seasoned consultants. we value the
            right talent and offer rewarding opportunities for your
            contributions.
          </p>

          <CustomButton
            onClick={() => {
              handleNavigation(`/auth/signup/consultant`);
            }}
            title="Sign Up Now"
            textStyle="font-inter font-semibold text-[16px] leading-[16px] text-white"
            radius="rounded-[5px]"
            backgrounColor="bg-secondaryColor"
            width="w-[190px]"
            height="h-[40px]"
          />
        </div>
      </div>
      {/* 

      <h3 className="text-center pb-12">Benefits of Partnering with Us</h3> */}

      <div className="bg-white flex items-center lg:items-start px-8  py-16 justify-center lg:justify-between flex-wrap ">
        {[
          {
            name: "Professional Network",
            text: "Connect with industry experts and expand your professional reach",
            image: "/consultantNew.svg",
          },
          {
            name: "Growth Opportunities",
            text: "Access continuous learning and development resources.",
            image: "/consultantNew2.svg",
          },
          {
            name: "Expert Recognition",
            text: "Build your reputation as a trusted grant consultant",
            image: "/consultantNew3.svg",
          },
        ].map((data) => (
          <PartnerCard {...data} />
        ))}
      </div>
      <div className="py-8 flex flex-col items-center">
        <h3 className="text-center pb-12">Join Our Expert Team</h3>
        <p className="font-normal text-[18px] leading-[30px] text-center text-primaryBlack w-[70%]">
          GrantsConsult welcomes talented individuals with expertise and
          knowledge in grant consultancy. If you have strong skills in grant
          management, a passion for the complexities of grant writing, and the
          drive to provide advisory services from start to finish, we want you
          on our team
        </p>
      </div>

      <div className="py-8 bg-white">
        <h3 className=" text-center font-semibold text-[24px] leading-[36px] text-secondaryColor">
          Required Qualification
        </h3>
        <div className=" flex items-center lg:items-start px-8  py-16 justify-center lg:justify-between flex-wrap ">
          {[
            {
              name: "Grant Management Expertise",
              text: "Proven experience in managing grant programs and ensuring compliance with requirements",
              image: "/consultantNew5.svg",
            },
            {
              name: "Grant Writing Proficiency",
              text: "Excellence in crafting compellling grant proposals and documentations.",
              image: "/consultantNew6.svg",
            },
            {
              name: "Advisory Service Skills",
              text: "Strong communication and ability to guide clients through the grant process",
              image: "/consultantNew7.svg",
            },
          ].map((data) => (
            <PartnerCard {...data} />
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-around items-center h-[300px]">
        <div className="w-[130px] h-[130px] rounded-full  ">
          <img src="/consultantProfile.svg" alt="" />
        </div>
        <p className="font-normal text-[18px] leading-[30px] text-primaryBlack font-mono w-[70%] text-center">
          “Joining GrantsConsult was one of the best decisions in my consulting
          career. The support and resources are unmatched.”
        </p>
        <p className="text-black leading-[30px] font-mono text-[18px] font-bold w-[70%] text-center">
          Alice Brooklyn, Senior Grant Consultant
        </p>
      </div>

      <div className="bg-secondaryColor w-full flex flex-col justify-around items-center py-8 mt-8">
        <p className="text-center font-mono font-bold text-[24px] leading-[36px] text-white">
          Ready to Join our Team?
        </p>
        <p className="font-normal text-[18px] leading-[28px] text-center text-white my-4">
          Take the first step towards an exciting consulting career with
          Grantsconsult,
        </p>
        <CustomButton
          title="Sign Up Now"
          textStyle="font-bold text-[16px] leading-[16px] text-secondaryColor"
          backgrounColor="bg-white"
          width="w-[150px]"
          height="h-[40px]"
        />
      </div>
    </div>
  );
};

export default page;
