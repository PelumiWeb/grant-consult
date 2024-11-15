import CustomButton from "@/app/component/CustomButton";
import React from "react";
import { CalendarOutlined } from "@ant-design/icons";


type Props = {};
const ConsultantComponent = (props: Props) => {
  return (
    <div className="m-8"> 
      <div className="relative h-[320px] w-[221px] rounded-tl-[100px] rounded-tr-[100px] border-boderConsultant border-[5px] bg-white flex flex-col items-center justify-center ">
        {/* Image container */}
        <div className=" absolute top-12 w-[130px] h-[130px] rounded-full">
          <img
            src="/consultantImage.svg"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-0 bg-boderConsultant h-[60%] w-full ">
          <p className="font-bold text-base text-center bg-consultantTitle  text-transparent bg-clip-text mt-14">
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

          <div className="absolute bottom-2 w-full flex items-center justify-center">
            <CustomButton
              title="View Profile"
              backgrounColor="bg-consultanButton"
              height="h-[30px]"
              width="w-full"
            />
          </div>
        </div>
      </div>
      <div className="my-4">
        <CustomButton
          title="Select Consultant"
          width="w-[221px]"
          height="h-[40px]"
          backgrounColor="bg-white"
          borderColor="border-buttonPrimary"
          textColor="text-buttonPrimary"
         
        />
      </div>
      <div className="my-4">
        <CustomButton
          title="Select Consultant"
          width="w-[221px]"
          height="h-[40px]"
          backgrounColor="bg-white"
          borderColor="border-borderColor"
          textColor="text-borderColor"
          iconRight=""
          iconPosition="end"
          icon={<CalendarOutlined style={{ fontSize: "16px" }} />}
        />
      </div>
    </div>
  );
};

export default ConsultantComponent;
