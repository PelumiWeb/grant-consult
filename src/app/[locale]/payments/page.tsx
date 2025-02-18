"use client";

import Image from "next/image";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SubscriptionCard from "../components/SubscriptionCard";
import GrantFunder from "../components/GrantFunder";
import { ArrowLeftOutlined, CreditCardFilled } from "@ant-design/icons";
import { Checkbox, Input, Select, Space, Tooltip } from "antd";
import React from "react";

export default function Home() {
  const [selected, setSelected] = React.useState(1)

  return (
    <div className="w-full">
      {/*  */}
      {/* <div className="flex  lg:flex-row justify-center lg:justify-between items-start w-full  flex-wrap px-4">
        {/* left */}

      {/* Right */}

      {/* </div> */}
      <div className="py-8">
        <h1 className="text-secondaryColor font-semibold text-[20px] lg:text-[36px] leading-[20px] lg:leading-[42px] text-center mb-6">
          Complete Your Payment
        </h1>
        <p className="text-center text-textColor font-normal text-[14px] md:text-[16px] leading-[23px]">
          Finalize your subscription and unlock full access to all grant
          opportunities and consultant services
        </p>
      </div>

      <div className="bg-white p-8 my-16">
        {/* Left  */}
        <div>
          <h3 className="text-primary font-semibold text-[24px] leading-[36px] my-4">
            {" "}
            Secure Your Payment with Your Preferred Method
          </h3>
          <p className="text-textColor text-[16px] leading-[20px] my-4">
            Select a payment method, and we’ll guide you through a secure
            process{" "}
          </p>
          <div className="flex items-start justify-between w-full flex-col md:flex-row">
            {/* Left */}
            <div className="bg-backgroundColor w-full md:w-[45%] h-full p-4">
              <h4 className="font-semibold text-[20px] leading-[26px] text-primary mb-4">
                Order Summary
              </h4>

              <p className="font-semibold text-[16px] leading-[19px] text-primaryBlack ">
                Customer’s Details
              </p>

              <div className="border-b-[0.5px] border-b-borderColor py-2 my-2">
                <div className="flex items-center justify-between my-1">
                  <p className="font-medium text-[14px] leading-[25px] text-textColor ">
                    Name
                  </p>
                  <p className="font-medium text-[14px] leading-[25px] text-textColor">
                    Williams Smith
                  </p>
                </div>
                <div className="flex items-center justify-between my-1">
                  <p className="font-medium text-[14px] leading-[25px] text-textColor ">
                    Phone
                  </p>
                  <p className="font-medium text-[14px] leading-[25px] text-textColor">
                    +234899033456
                  </p>
                </div>
                <div className="flex items-center justify-between my-1">
                  <p className="font-medium text-[14px] leading-[25px] text-textColor ">
                    Email:
                  </p>
                  <p className="font-medium text-[14px] leading-[25px] text-textColor">
                    smith@gmail.com
                  </p>
                </div>
              </div>

              {/* Subscription Details */}
              <div className="mt-4 border-b-[0.5px] border-b-borderColor py-2 my-2">
                <h4 className="font-semibold text-[20px] leading-[26px] text-primary mb-4">
                  Subscription Details
                </h4>

                <p className=" text-[16px] leading-[20px] text-textColor mb-4 font-medium">
                  Selected Plan: Monthly
                </p>

                <h4 className="font-semibold text-[16px] leading-[18px] text-primary mb-4">
                  Plan Benefits
                </h4>
                {/* Plan Benefits */}
                <div>
                  <div className="flex items-center my-4">
                    <img
                      src="/check.svg"
                      alt=""
                      className="w-[25px] h-[12px]"
                    />
                    <p className="ml-2 font-medium text-[14px] leading-[16px] text-textColor">
                      Full access to grant listings and personalized dashboard
                    </p>
                  </div>
                  <div className="flex items-center my-4">
                    <img
                      src="/check.svg"
                      alt=""
                      className="w-[25px] h-[12px]"
                    />
                    <p className="ml-2 font-medium text-[14px] leading-[16px] text-textColor">
                      Tailored grant opportunities matched to your profile
                    </p>
                  </div>
                  <div className="flex items-center my-4">
                    <img
                      src="/check.svg"
                      alt=""
                      className="w-[25px] h-[12px]"
                    />
                    <p className="ml-2 font-medium text-[14px] leading-[16px] text-textColor">
                      1 free monthly consultation
                    </p>
                  </div>
                  <div className="flex items-center my-4">
                    <img
                      src="/check.svg"
                      alt=""
                      className="w-[25px] h-[12px]"
                    />
                    <p className="ml-2 font-medium text-[14px] leading-[16px] text-textColor">
                      Weekly newsletter updates
                    </p>
                  </div>
                </div>
                <div></div>
              </div>
              {/* Total */}
              <div className="flex items-center justify-between w-full mt-2 pt-2">
                <h4 className="font-semibold text-[20px] leading-[20px] text-primary mb-4">
                  Total
                </h4>
                <h4 className="font-semibold text-[20px] leading-[20px] text-primary mb-4">
                  $25.00
                </h4>
              </div>
              {/*  */}
              <button className="border-[2px] border-secondaryColor flex items-center justify-center h-[55px] w-full rounded-[5px]">
                <div className="flex items-center ">
                  <div className="relative w-[16px] h-[16px]">
                    <Image src={"/black-secondary.svg"} alt="" fill />
                  </div>
                  <p className="font-semibold text-[16px] leading-[18px] font-mono text-secondaryColor ml-2">
                    Change Plan
                  </p>
                </div>
              </button>
            </div>
            {/* Right */}
            <div className="w-full md:w-[45%] mt-4 md:mt-0">
              <h4 className="font-semibold text-[20px] leading-[26px] text-primary mb-4">
                Payment Method
              </h4>
              <div>
                <button
                  className="w-full h-[60px] rounded-[5px] border-borderColor border-[0.5px] flex items-center px-4 my-4"
                  onClick={() => {
                    setSelected(1);
                  }}>
                  <div
                    className={`w-[20px] h-[20px] rounded-full border-secondaryColor ${
                      selected === 1 ? "border-[6px]" : "border-[3px]"
                    } bg-white `}
                  />
                  <p className="font-medium text-[16px] leading-[19px] ml-4">
                    Credit/Debit Card
                  </p>
                </button>
                <button
                  className="w-full h-[60px] rounded-[5px] border-borderColor border-[0.5px] flex items-center px-4 my-4"
                  onClick={() => {
                    setSelected(2);
                  }}>
                  <div
                    className={`w-[20px] h-[20px] rounded-full border-secondaryColor ${
                      selected === 2 ? "border-[6px]" : "border-[3px]"
                    } bg-white`}
                  />
                  <img src="/paypalIcon.svg" alt="" className="ml-4" />
                </button>

                <CustomButton
                  backgrounColor="bg-secondaryColor"
                  width="w-full"
                  textStyle="font-semibold text-[16px] leading-[18px] font-mono text-white"
                  height="h-[54px]"
                  title="Proceed to Payment"
                  IconLeft="/lock.svg"
                />
                <div className="flex items-center justify-center">
                  <p className="text-[14px] leading-[22px] text-center font-mono mt-4 w-[70%]">
                    You will be redirected to complete your payment securely. No
                    card details are stored on our platform.
                  </p>
                </div>

                <div className="w-full flex items-center justify-center mt-4">
                  <img src="/Logotype.svg" alt="" />
                  <img src="/Logotype2.svg" alt="" />
                  <img src="/Logotype3.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}

        <div></div>
      </div>
    </div>
  );
}
