import CustomButton from "@/app/[locale]/components/CustomButton";
import React from "react";
import { CalendarOutlined } from "@ant-design/icons";

type Props = { showButton: boolean };
const ConsultantComponentModal = (props: Props) => {
  return (
    <div className="m-0  w-full">
      <div className="w-full flex justify-center items-center">
        <div className="relative h-[254px] w-[221px] rounded-tl-[100px] rounded-tr-[100px] border-boderConsultant border-[5px] bg-white flex flex-col items-center justify-center ">
          {/* Image container */}
          <div className=" absolute top-8 w-[115px] h-[115px] rounded-full border-borderColor border-[5px]">
            <img
              src="/consultantImage.svg"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute bottom-0 bg-boderConsultant h-[50%] w-full ">
            <p className="font-bold text-base text-center uppercase  bg-primary leading-[19px] text-transparent bg-clip-text mt-14">
              Alice Brooklyn
            </p>
            <div className="flex w-full items-center justify-center">
              <p className="font-medium text-sm text-center text-secondaryTextColor">
                Grant Consult
              </p>
              <div className="w-[2px] bg-borderColor h-[15px] mx-2" />
              <p className="font-medium text-sm text-center text-secondaryTextColor">
                NGO Advisor
              </p>
            </div>
            <p className="text-secondaryTextColor text-center font-normal text-[10px] leading-[13px]">
              Years of Experience: 25
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center  w-full ">
        <div className="my-4 mr-1">
          <CustomButton
            title="Request Consultant"
            width="w-[145px]"
            height="h-[40px]"
            backgrounColor="bg-white"
            borderWidth="border-[0.5px]"
            padding="p-0"
            radius="rounded-[5px]"
            textStyle="text-buttonPrimary text-[12px] leading-[13px] text-buttonPrimary font-medium"
            borderColor="border-buttonPrimary"
          />
        </div>
        <div className="my-4">
          <CustomButton
            title="Save"
            width="w-[70px]"
            height="h-[39px]"
            backgrounColor="bg-backgroundColor"
            borderColor="border-[1px] border-secondaryColor"
            IconLeft="/like.svg"
            radius="rounded-[5px]"
            padding="p-0"
            textStyle="text-secondaryColor text-[12px] leading-[13px] font-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultantComponentModal;
