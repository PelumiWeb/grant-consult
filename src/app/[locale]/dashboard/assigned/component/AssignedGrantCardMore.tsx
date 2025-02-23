import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";
import useHandleNavigation from "../../../utils/HandleNavigation";
import { useAppSelector } from "../../../../../../lib/hooks";

type Props = {
  moreDetails?: boolean;
  border?: boolean;
  showMore?: boolean;
  assignedGrant?: boolean;
};
// border-bottom: 0.5px solid #6E6E6E80
const AssignedGrantCardMore = (props: Props) => {
  const locale = useLocale();
  const handleNavigation = useHandleNavigation();
  const { user } = useAppSelector((state) => state.user);

  const router = useRouter();
  return (
    <div
      className={`flex flex-col justify-between border-none md:border-[0.5px] bg-white  ${
        !props.border && "border-borderColor"
      } my-2 md:my-4 px-1  w-full lg:w-[900px] h-full md:h-[420px] lg:h-[360px] py-4 lg:py-0`}>
      <h4 className=" block md:hidden text-primary mx-2 text-[16px] md:text-[19px] leading-[15px] md:leading-[26px] font-semibold md:mb-0 w-full">
        Aspire Coronation Trust (ACT) Foundation Grant 2024
      </h4>
      <div className="flex items-center  justify-start md:justify-between py-0 my-4 px-2  md:px-4 w-full h-full cursor-pointer flex-col  md:flex-row">
        <div className="w-full md:w-[252px] md:h-[200px] lg:w-[320px] lg:h-[260px] flex items-center justify-center rounded-[15px] mr-4">
          <img
            src="/GrantsImage.svg"
            className="w-full object-contain h-full "
          />
        </div>
        <div className="w-full md:w-[70%] space-y-2 mt-2 md:mt-0">
          <h4 className="hidden md:block text-primary  text-[20px] leading-[26px] font-semibold">
            Aspire Coronation Trust (ACT) Foundation Grant 2024
          </h4>
          <div className="flex items-center lg:mx-2">
            <p className="text-[#1E1E1E] text-[16px] sm:text-[12px] md:text-[14px] leading-[15px] md:leading-[20px] font-bold">
              Assigned Grant
            </p>
            <p className="text-textColor ml-2 lg:ml-4 font-normal text-[16px] md:text-[14px]  leading-[23px]">
              October 24, 2024
            </p>
          </div>
          <div className="flex items-center lg:mx-2">
            <p className="text-[#1E1E1E] text-[16px] sm:text-[12px] md:text-[14px] leading-[15px] md:leading-[20px] font-bold">
              Deadline
            </p>
            <p className="text-textColor ml-2 lg:ml-4 font-normal text-[16px] md:text-[14px]  leading-[23px]">
              December 24, 2024
            </p>
          </div>
          <div className="flex items-center lg:mx-2">
            <p className="text-[#1E1E1E] text-[16px] sm:text-[12px] md:text-[14px] leading-[15px] md:leading-[20px] font-bold">
              Client's Name
            </p>
            <p className="text-textColor ml-2 lg:ml-4 font-normal text-[16px] md:text-[14px]  leading-[23px]">
              Global Outreach NGO
            </p>
          </div>
          <div className="flex items-center lg:mx-2">
            <p className="text-[#1E1E1E] text-[16px] sm:text-[12px] md:text-[14px] leading-[15px] md:leading-[20px] font-bold">
              Category
            </p>
            <p className="text-textColor ml-2 lg:ml-4 font-normal text-[16px] md:text-[14px]  leading-[23px]">
              Health
            </p>
          </div>
          <div className="flex items-center lg:mx-2">
            <p className="text-[#1E1E1E] text-[16px] sm:text-[12px] md:text-[14px] leading-[15px] md:leading-[20px] font-bold">
              Grant Size
            </p>
            <p className="text-textColor ml-2 lg:ml-4 font-normal text-[16px] md:text-[14px]  leading-[23px]">
              $100,000 to $500,000
            </p>
          </div>
          <div className="flex items-center lg:mx-2">
            <p className="text-[#1E1E1E] text-[16px] sm:text-[12px] md:text-[14px] leading-[15px] md:leading-[20px] font-bold">
              Grant Size
            </p>
            <p className="text-textColor ml-2 lg:ml-4 font-normal text-[16px] md:text-[14px]  leading-[23px]">
              $100,000 to $500,000
            </p>
          </div>
          <div className="flex items-center lg:mx-2">
            <p className="text-[#1E1E1E] text-[16px] sm:text-[12px] md:text-[14px] leading-[15px] md:leading-[20px] font-bold">
              Donor Agency:{" "}
              <span className="text-textColor ml-2 lg:ml-4 font-normal text-[16px] md:text-[14px]  leading-[23px]">
                United States African Development Foundation
              </span>
            </p>
          </div>
          <div className="flex items-center lg:mx-2">
            <p className="text-[#1E1E1E] text-[16px] sm:text-[12px] md:text-[14px] leading-[15px] md:leading-[20px] font-bold">
              Reference URL:{" "}
              <span className="text-secondaryColor ml-2 lg:ml-4 font-normal text-[16px] md:text-[14px]  leading-[23px]">
                https://www.examplesofgrants.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignedGrantCardMore;
