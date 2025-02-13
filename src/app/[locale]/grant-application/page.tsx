"use client";
import React from "react";
import CustomButton from "../components/CustomButton";
import { title } from "process";
import useHandleNavigation from "../utils/HandleNavigation";
import { useAppDispatch } from "../../../../lib/hooks";

type Props = {};

const page = (props: Props) => {
  const handleNavigation = useHandleNavigation();
  const dispatch = useAppDispatch();
  return (
    <div className="h-full bg-backgroundColor">
      {/* Hero Page */}
      <div className="flex flex-col md:flex-row items-start justify-between h-full md:h-[550px] bg-white ">
        <div className="w-full md:w-[55%] h-full px-4 md:px-16 flex flex-col justify-start">
          {/* <div className="flex items-center justify-center md:justify-between w-full flex-col md:flex-row  md:w-[580px] mt-8 pb-10">
            <p className="text-textColor"> Home </p>
            <p className="text-textColor mx-3">{">>"}</p>
            <p className="text-textColor">Resources </p>
            <p className="text-textColor mx-3">{">>"}</p>
            <p className="text-textColor">Grants Application </p>
          </div> */}
          <div className="w-full md:w-[400px] my-2 pt-0 md:pt-[100px]">
            <h4 className="font-bold text-[20px]   md:text-[36px] font-mono leading-[20px] md:leading-[45px]  text-center md:text-left mb-2 md:mb-0">
              Grants Application
            </h4>
            <h4 className="font-bold text-[20px]   md:text-[36px] font-mono leading-[20px] md:leading-[45px]  text-secondaryColor text-center md:text-left">
              Success Starts Here
            </h4>
          </div>

          <p className="font-medium text-[12px] md:text-[16px] leading-[25px] text-textColor w-full md:w-[500px] mt-2 md:mt-6 mb-8">
            Applying for grants can be complex, but we’re here to simplify the
            process. With customized advice, professional writing and expert
            consultation. Our team is dedicated to helping you secure the
            funding you need. 
          </p>

          <CustomButton
            onClick={() => handleNavigation("/consultant/request")}
            title="Request Consultation"
            backgrounColor="bg-secondaryColor"
            radius="rounded-[5px]"
            width="w-full md:w-[250px]"
            height="h-[45px]"
            textStyle="font-inter font-bold text-[16px] leading-[16px] text-center text-white"
          />
        </div>

        <div className="mt-4 md:mt-0 w-full md:w-[40%] h-full">
          <img
            src="/grant-application.svg"
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
      </div>

      <div className="p-4 md:p-16 w-full h-full">
        <h4 className="text-center font-bold text-[24px] leading-[32px] my-8">
          Why Choose GrantsConsult?
        </h4>
        <p className="text-center my-1 text-[16px] leading-[25px] font-normal">
          At GrantsConsult, we are committed to helping you navigate the grant
          application process with ease and confidence. We provide comprehensive
          guidance through every step of the application process as our
          dedicated expert consultants support you until your funding goals are
          met
        </p>
      </div>

      <div className="bg-white w-full flex justify-center md:justify-between flex-wrap p-4 md:p-16">
        {[
          {
            image: "/grant-consult.svg",
            title: "Tailored Support",
            text: "   GrantsConsult streamlines the grant application journey, providing expert support from research to writing. Beyond applications, we offer encouragement, meaningful guidance, and unwavering support to help you succeed, no matter the challenges.",
          },
          {
            image: "/grant-consult2.svg",
            title: "Proven Success",
            text: "Get ready to hear “Yes” more often! GrantsConsult users enjoy a 70% higher success rate in securing funding, thanks to our expert guidance and proven effective service.",
          },
          {
            image: "/grant-consult3.svg",
            title: "Streamlined Experience",
            text: "GrantsConsult is set to transform how you approach grant applications. Our expert consultants handle the tedious tasks, meet deadlines, save your time and energy and enhance your chances of success to make a difference.",
          },
          {
            image: "/grant-consult4.svg",
            title: "Timely Service",
            text: "We do not take months to prepare your grant application. Our expert consultants ensure your application is completed well before the deadline, helping you tick this task off your to-do list  as soon as possible",
          },
        ].map((data) => (
          <div className="flex flex-col items-center  w-full  md:w-[300px]  justify-start h-full md:h-[350px] my-4 md:my-0">
            <img src={data.image} alt="" />
            <p className="text-primary font-bold text-[16px] leading-[19px] my-4">
              {data.title}
            </p>
            <p className="text-black text-center">{data.text}</p>
          </div>
        ))}
      </div>

      <div className=" p-4 md:p-16 w-full">
        <h4 className="text-center w-full leading-[31px] pt-8">Our Process</h4>
        <p className="px-4 md:px-16 lg:px-64 text-center py-8">
          We provide comprehensive guidance through every step of the
          application process. Our dedicated expert consultants support you
          until your funding goals are met.
        </p>

        <div className="flex justify-center flex-wrap">
          {[
            {
              title: "Initial Consultation",
              text: "We assess your needs and match you with the perfect consultant.",
              letter: "A",
            },
            {
              title: "Strategy Development",
              text: "We create a customized plan to maximize your chances of success.",
              letter: "B",
            },
            {
              title: "Application Preparation",
              text: "We collaboratively create a compelling, polished grant application for you.",
              letter: "C",
            },
            {
              title: "Submission and Follow-Up",
              text: "We handle the entire submission process with attention to details and provide ongoing support to track its progress.",
              letter: "D",
            },
          ].map((data) => (
            <div className="flex items-center m-4">
              <div className="min-w-[50px] min-h-[42px] rounded-[5px] bg-secondaryColor mr-2 grid place-items-center">
                <p className="font-semibold text-[24px] leading-[31px] text-white">
                  {data?.letter}
                </p>
              </div>
              <div className="ml-1">
                <p className="text-primary font-semibold text-base ">
                  {data.title}
                </p>
                <p className="text-textColor font-semibold text-[14px] leading-[18px] w-full md:w-[500px]">
                  {data.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-secondaryColor w-full flex flex-col justify-around items-center py-8 my-16">
        <p className="text-center font-mono font-bold text-[24px] leading-[36px] text-white">
          Ready to Get Started?
        </p>
        <p className="font-normal text-[18px] leading-[28px] text-center text-white my-4">
          Take the first step now
        </p>
        <CustomButton
          onClick={() => handleNavigation("/consultant/request")}
          title="Request Consultation"
          textStyle="font-bold text-[16px] leading-[16px] text-secondaryColor"
          backgrounColor="bg-white"
          width="w-[250px]"
          height="h-[40px]"
        />
      </div>
    </div>
  );
};

export default page;
