import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";
import useHandleNavigation from "../../utils/HandleNavigation";
import { useAppSelector } from "../../../../../lib/hooks";

type Props = {
  moreDetails?: boolean;
  border?: boolean;
  showMore?: boolean;
  assignedGrant?: boolean;
};
// border-bottom: 0.5px solid #6E6E6E80
const GrantCard = (props: Props) => {
  const locale = useLocale();
  const handleNavigation = useHandleNavigation();
  const { user } = useAppSelector((state) => state.user);

  const router = useRouter();
  return (
    <div
      className={`flex flex-col justify-between border-none md:border-[0.5px] bg-white  ${
        !props.border && "border-borderColor"
      }  my-4 px-1  w-full lg:w-[900px] h-full md:h-[420px] lg:h-[360px] py-4 lg:py-0`}>
      <h4 className=" block md:hidden text-primary mx-2 text-[11px] md:text-[16px] leading-[15px] md:leading-[26px] font-semibold -mb-2 md:mb-0">
        Aspire Coronation Trust (ACT) Foundation Grant 2024
      </h4>
      <div className="flex items-center  justify-start md:justify-between py-0 my-4 px-2  md:px-4 w-full h-full cursor-pointer  ">
        <div className="w-[150px] md:w-[252px] md:h-[200px] lg:w-[320px] lg:h-[260px] flex items-center justify-center rounded-[15px] mr-4">
          <img
            src="/GrantsImage.svg"
            className="w-full object-contain h-full "
          />
        </div>
        <div className="w-[60%] md:w-[70%] space-y-1">
          <h4 className="hidden md:block text-primary  text-[20px] leading-[26px] font-semibold">
            Aspire Coronation Trust (ACT) Foundation Grant 2024
          </h4>

          {/* {props.assignedGrant && (
            <div>
              <div className="flex items-center lg:mx-2">
                <p className="text-[#1E1E1E] text-[10px] sm:text-[12px] md:text-[14px] leading-[15px] md:leading-[20px] font-semibold">
                  Assigned Grant
                </p>
                <p className="text-textColor ml-2 lg:ml-4 font-normal text-[10px] md:text-[14px]  leading-[23px]">
                  October 24, 2024
                </p>
              </div>
              <div className="flex items-center lg:mx-2">
                <p className="text-[#1E1E1E] text-[10px] sm:text-[12px] md:text-[14px] leading-[15px] font-semibold">
                  Deadline
                </p>
                <p className="text-textColor ml-2 lg:ml-4 md:text-[14px] font-normal text-[10px] leading-[23px]">
                  December 1st, 2024
                </p>
              </div>
              <div className="flex items-center lg:mx-2 ">
                <p className="text-[#1E1E1E] text-[10px] sm:text-[12px] md:text-[14px] leading-[15px] font-semibold">
                  Client's Name
                </p>
                <p className="text-textColor ml-2 lg:ml-4  md:text-[14px] font-normal text-[10px] leading-[23px]">
                  Global Outreach
                </p>
              </div>
              <div className="flex items-center lg:mx-2">
                <p className="text-[#1E1E1E] text-[10px] sm:text-[12px] md:text-[14px] leading-[15px] font-semibold">
                  Category
                </p>
                <p className="text-textColor ml-2 lg:ml-4 md:text-[14px] font-normal text-[10px] leading-[23px]">
                  Health
                </p>
              </div>
              <div className="flex items-center lg:mx-2">
                <p className="text-[#1E1E1E] text-[10px] sm:text-[12px] md:text-[14px] leading-[15px] font-semibold">
                  Grant Size
                </p>
                <p className="text-textColor ml-2 lg:ml-4 md:text-[14px] font-normal text-[10px] leading-[23px]">
                  $100,000 to $500,000
                </p>
              </div>
              <div className="flex items-center lg:mx-2">
                <p className="text-[#1E1E1E] text-[10px] sm:text-[12px] md:text-[14px] leading-[15px] font-semibold">
                  Donor Agency:
                </p>
                <p className="text-textColor ml-2 lg:ml-4 md:text-[14px] font-normal text-[10px] leading-[23px]">
                 United States African Development Foundation
                </p>
              </div>
            </div>
          )}
            <div>
              <div className="flex items-center lg:mx-2">
                <p className="text-[#1E1E1E] text-[10px] sm:text-[12px] md:text-[14px] leading-[15px] md:leading-[20px] font-semibold">
                  Date Posted
                </p>
                <p className="text-textColor ml-2 lg:ml-4 font-normal text-[10px] md:text-[14px]  leading-[23px]">
                  October 24, 2024
                </p>
              </div>
              <div className="flex items-center lg:mx-2">
                <p className="text-[#1E1E1E] text-[10px] sm:text-[12px] md:text-[14px] leading-[15px] font-semibold">
                  Deadline
                </p>
                <p className="text-textColor ml-2 lg:ml-4 md:text-[14px] font-normal text-[10px] leading-[23px]">
                  December 1st, 2024
                </p>
              </div>
              <div className="flex items-center lg:mx-2 ">
                <p className="text-[#1E1E1E] text-[10px] sm:text-[12px] md:text-[14px] leading-[15px] font-semibold">
                  Location
                </p>
                <p className="text-textColor ml-2 lg:ml-4  md:text-[14px] font-normal text-[10px] leading-[23px]">
                  AMERICA
                </p>
              </div>
              <div className="flex items-center lg:mx-2">
                <p className="text-[#1E1E1E] text-[10px] sm:text-[12px] md:text-[14px] leading-[15px] font-semibold">
                  Category
                </p>
                <p className="text-textColor ml-2 lg:ml-4 md:text-[14px] font-normal text-[10px] leading-[23px]">
                  Agriculture
                </p>
              </div>
            </div> */}

          {/* <div className="flex items-center mx-2">
            <p className="text-[#1E1E1E]">Grant Size</p>
            <p className="text-textColor ml-4">$100,000 to $500,000</p>
          </div> */}
          <div className="flex items-center lg:mx-2">
            <p
              className={`text-[#1E1E1E] text-[10px] leading-[15px] md:text-[14px] font-semibold ${
                !user ? "blur-none" : "blur-sm"
              }`}>
              Grant Size
            </p>
            <p
              className={`text-textColor ml-2 lg:ml-4 font-normal text-[8px] md:text-[14px] leading-[23px] ${
                !user ? "blur-none" : "blur-sm"
              }`}>
              $100,000 to $500,000
            </p>
          </div>
          <div>
            {!props?.showMore && (
              <p
                className={`hidden lg:block w-full ml-2 ${
                  user ? "blur-none" : "blur-sm"
                }`}>
                Lorem ipsum dolor sit amet consectetur. Ac odio eu a Vel neque
                ullamcorper in auctor. Urna laoreet bibendum nullam adipiscing
                tellus est posuere dolor sit am
              </p>
            )}
            <button onClick={() => handleNavigation(`/grants/1`)}>
              <p className="ml-0 text-secondaryColor backdrop-blur-0 blur-none cursor-pointer text-[12px] leading-[15px] font-semibold md:text-[14px]">
                Read more...
              </p>
            </button>
          </div>
        </div>
      </div>
      {!props.showMore && (
        <p
          className={`block lg:hidden w-full ml-2 ${
            user ? "blur-none" : "blur-sm"
          }`}>
          Lorem ipsum dolor sit amet consectetur. Ac odio eu a Vel neque
          ullamcorper in auctor. Urna laoreet bibendum nullam adipiscing tellus
          est posuere dolor sit am
          <span
            className="ml-2 text-secondaryColor backdrop-blur-0 blur-none cursor-pointer text-[12px] leading-[15px] font-semibold"
            onClick={() => handleNavigation(`/grants/1`)}>
            Read more...
          </span>
        </p>
      )}
    </div>
  );
};

export default GrantCard;
