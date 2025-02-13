"use client";

import { DatePicker, Progress, TimePicker } from "antd";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { grantsData } from "../../utils/constants/grants";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { setActiveConsultantType } from "../../../../../lib/features/Consultant/consultantSlice";
import useHandleNavigation from "../../utils/HandleNavigation";

type Props = {};

const ConsultBookingCard = (props: any) => {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => {
        dispatch(
          setActiveConsultantType({
            selectedConsultantTypes: props.name,
          })
        );
      }}
      className={`p-4 shadow-complete-shadow-2 w-full lg:w-[260px] ${
        props.name === props.selectedConsultant
          ? "border-[2px] border-secondaryColor"
          : "border-[0.5px] border-borderColor"
      } my-4 rounded-[5px] h-[200px] flex flex-col justify-between`}>
      <div className="flex justify-between items-center">
        <p className="font-semibold leading-[18px] text-[16px] text-black">
          {props.name}
        </p>
        <p className="text-secondaryColor font-semibold text-[16px] font-mono">
          {props.price}
        </p>
      </div>
      <div>
        <p className="text-left font-medium text-[12px] leading-[17px] text-textColor  ">
          {props.content}
        </p>
      </div>

      <CustomButton
        title="Select"
        width="w-full"
        height="h-[40px]"
        radius="rounded-[5px]"
        backgrounColor={`${
          props.name === props.selectedConsultant
            ? "bg-secondaryColor"
            : "bg-backgroundColor"
        }`}
        textStyle={`
          ${
            props.name === props.selectedConsultant
              ? "text-white"
              : "text-ttextColor"
          } font-bold text-[14px] leading-[19px]`}
      />
    </div>
  );
};

const page = (props: Props) => {
  const currentConsultationSelected = useAppSelector(
    (data) => data.consultant.selectedConsultantTypes
  );
  const selectedConsultant = useAppSelector(
    (data) => data.consultant.selectedConsultant
  );

  const handleNavigation = useHandleNavigation();
  return (
    <div className="w-full h-full bg-white p-8">
      <div className="flex justify-between items-center my-2 lg:my-12 flex-wrap">
        <h4 className="text-center lg:text-left text-[20px] leading-[26px] w-full lg:w-[50%] text-secondaryColor ">
          Complete Your Consultation Booking
        </h4>
        <p className="w-full text-center font-medium text-[12px] leading-[17px] text-textColor my-1">
          Please complete the form below and we will contact you within one
          business day to understand your needs and provide tailored support.
        </p>

        <div className=" w-full flex justify-center md:justify-between items-center ">
          <p className="text-textColor font-bold text-[13px] leading-[21px] mt-2 mr-1 w-full">
            Step 2 of 3
          </p>
          <div className="w-[70px] flex items-center justify-center">
            <Progress percent={70} strokeWidth={4} showInfo={false} />
          </div>
        </div>
      </div>

      <div className="w-full ">
        <div className="w-full flex justify-between items-start mt-8 flex-wrap">
          {/* Select Date and Time */}
          <div className="w-full lg:w-[70%]">
            <div className="w-full shadow-complete-shadow-1 h-full md:h-[180px] rounded-[5px] border-borderColor border-[0.5px] p-4 ">
              <p className="text-primary font-semibold leading-[18px] font-mono mb-4">
                Select Date & Time
              </p>
              <div className="flex w-full justify-between items-center flex-col md:flex-row">
                <div className="w-full md:w-[45%]">
                  <p className="font-normal text-[16px] leading-[20px] mb-2">
                    Date
                  </p>
                  <DatePicker className="h-[55px] w-full" />
                </div>
                <div className="w-full md:w-[45%]">
                  <p className="font-normal text-[16px] leading-[20px] mb-2">
                    Time
                  </p>
                  <TimePicker className="h-[55px] w-full" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center flex-wrap">
              {grantsData.map((data, key) => (
                <ConsultBookingCard
                  {...data}
                  key={key}
                  selectedConsultant={currentConsultationSelected}
                />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[25%]">
            <div className="bg-white shadow-complete-shadow-3 border-[0.5px] border-borderColor  p-2 ">
              <p className="font-semibold text-[18px] leading-[22px] text-secondaryColor text-center my-4 mb-8">
                Booking Summary
              </p>
              <div className="flex justify-center items-center ">
                <div className="w-[57px] h-[57px]">
                  <img
                    src="/complete.svg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-around items-start ml-2">
                  <p className="font-semibold text-[14px] leading-[16.5px] text-black">
                    Alice Brooklyn
                  </p>
                  <p className="font-normal text-[12px] leading-[15.6px] text-textColor">
                    Senior Grant Consultant
                  </p>
                </div>
                {/*  */}
              </div>

              <div className="mt-8 pl-4 mr-6">
                <div className="flex justify-between items-center my-2 w-full">
                  <p className="font-medium text-[14px] leading-[30px] text-textColor">
                    Service:
                  </p>
                  <p className="font-bold text-[14px] leading-[30px] text-primaryBlack text-right w-[150px]">
                    {selectedConsultant?.name}
                  </p>
                </div>

                <div className="flex justify-between items-center my-2 w-full">
                  <p className="font-medium text-[14px] leading-[30px] text-textColor">
                    Date:
                  </p>
                  <p className="font-bold text-[14px] leading-[30px] text-primaryBlack text-right w-[150px]">
                    March 15, 2024
                  </p>
                </div>
                <div className="flex justify-between items-center my-2 w-full ">
                  <p className="font-medium text-[14px] leading-[30px] text-textColor">
                    Time:
                  </p>
                  <p className="font-bold text-[14px] leading-[30px] text-primaryBlack text-right w-[150px]">
                    9:00 AM EST
                  </p>
                </div>
                <div className="flex justify-between items-center my-2 w-full">
                  <p className="font-medium text-[14px] leading-[30px] text-textColor">
                    Duration:
                  </p>
                  <p className="font-bold text-[14px] leading-[30px] text-primaryBlack text-right w-[150px]">
                    30 Minutes
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4 w-full  ">
                  <p className="font-semibold text-[18px] leading-[40px] text-textColor">
                    Total
                  </p>
                  <p className="font-bold text-[18px] leading-[40px] text-secondaryColor right">
                    {selectedConsultant?.price}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <CustomButton
                  title="Proceed to Payment"
                  onClick={() => handleNavigation("/subscription")}
                  width="w-full"
                  height="h-[50px]"
                  radius="rounded-[5px]"
                  backgrounColor="bg-secondaryColor"
                  textStyle="text-white font-bold text-[14px] leading-[19px] "
                />
                <div className="mt-4">
                  <CustomButton
                    title="Back"
                    width="w-full"
                    height="h-[50px]"
                    radius="rounded-[5px]"
                    backgrounColor="bg-backgroundColor"
                    textStyle="text-textColor font-bold text-[14px] leading-[19px] "
                  />
                </div>
              </div>

              <div className="flex justify-center items-center w-full my-2">
                <img src="/securdedPayment.svg" alt="" />
                <p className="text-[10px] leading-[15px] font-semibold ml-1">
                  Secure payment powered by stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
