import { DatePicker, Progress, TimePicker } from "antd";
import React from "react";
import CustomButton from "../../components/CustomButton";

type Props = {};

const ConsultBookingCard = () => {
  return (
    <div className="p-4 shadow-complete-shadow-2 w-[300px]  m-4">
      <div className="flex justify-between items-center">
        <p className="font-semibold leading-[18px] text-[16px] text-black">
          Grant Writing
        </p>
        <p className="text-secondaryColor font-semibold text-[16px] font-mono">
          $100
        </p>
      </div>
      <div>
        <p className="text-left font-medium text-[12px] leading-[17px] text-textColor  ">
          Professional assistance with grant proposal writing (30 Minutes)
        </p>
      </div>

      <CustomButton
        title="Select"
        width="w-full"
        height="h-[40px]"
        radius="rounded-[5px]"
        textStyle="text-white font-bold text-[14px] leading-[19px]"
      />
    </div>
  );
};

const page = (props: Props) => {
  return (
    <div className="w-full h-screen bg-white p-8">
      <div className="flex justify-between items-center">
        <h4 className="text-[20px] leading-[26px] ">
          Complete Your Consultation Booking
        </h4>

        <div className="flex justify-between items-center">
          <p className="text-textColor font-bold text-[13px] leading-[21px] mt-2 mr-1">
            Step 2 of 3
          </p>
          <div className="w-[70px] flex items-center justify-center">
            <Progress percent={70} strokeWidth={4} showInfo={false} />
          </div>
        </div>
      </div>

      <div className="w-full ">
        <div className="w-full flex justify-between items-start mt-4">
          {/* Select Date and Time */}
          <div className="w-[65%]">
            <div className="w-full shadow-complete-shadow-1 h-[180px] rounded-[5px] border-borderColor border-[0.5px] p-4 ">
              <p className="text-primary font-semibold leading-[18px] font-mono mb-4">
                Select Date & Time
              </p>
              <div className="flex w-full justify-between items-center">
                <div className="w-[45%]">
                  <p className="font-normal text-[16px] leading-[20px] mb-2">
                    Date
                  </p>
                  <DatePicker className="h-[55px] w-full" />
                </div>
                <div className="w-[45%]">
                  <p className="font-normal text-[16px] leading-[20px] mb-2">
                    Time
                  </p>
                  <TimePicker className="h-[55px] w-full" />
                </div>
              </div>
            </div>
            <div>
              <ConsultBookingCard />
            </div>
          </div>

          <div className="w-[30%]"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
