import React from "react";
import useHandleNavigation from "../../utils/HandleNavigation";

type Props = {
  DoNotshowButton?: boolean;
};

const DashboardGrantCard = (props: Props) => {
  const handleNavigation = useHandleNavigation();
  return (
    <div className="shadow-grant-card-dashboard w-full md:w-[540px] h-full md:h-full flex flex-col md:flex-row justify-between bg-white  py-4 md:px-4 rounded-[5px] my-2  md:my-4">
      <div className="w-full  md:w-[80%] h-[180px] md:h-[80%] flex justify-center items-center mt-4 md:mt-0 ml-0 md:ml-2 mr-0 md:mr-2 ">
        <img
          src="/grantFrame.svg"
          className="w-[95%] h-full object-cover  md:object-contain rounded-[10px] md:rounded-none"
          alt=""
        />
      </div>

      <div className="p-3 md:p-0 md:w-[90%]">
        <p className="text-[15px] leading-[19.23px] font-semibold mb-4 text-primary">
          Aspire Coronation Trust (ACT) Foundation Grant 2024{" "}
        </p>
        <div className="flex items-center my-2 ">
          <p className="font-semibold text-black text-[14px] leading-[17px] mr-2">
            Date Posted:
          </p>
          <p className="font-normal text-textColor text-[14px] leading-[17px]">
            October 24, 2024
          </p>
        </div>
        <div className="flex items-center my-2 ">
          <p className="font-semibold text-black text-[14px] leading-[17px] mr-2">
            Deadline:
          </p>
          <p className="font-normal text-textColor text-[14px] leading-[17px]">
            December 1st, 2024
          </p>
        </div>
        <div className="flex items-center my-2 ">
          <p className="font-semibold text-black text-[14px] leading-[17px] mr-2">
            Location:
          </p>
          <p className="font-normal text-[14px] leading-[17px] uppercase text-secondaryColor">
            America
          </p>
        </div>
        <div className="flex items-center my-2 ">
          <p className="font-semibold text-black text-[14px] leading-[17px] mr-2">
            Category:
          </p>
          <p className="font-normal text-[14px] leading-[17px] uppercase text-textColor">
            Health
          </p>
        </div>

        <div className="flex items-center my-2 ">
          <p className="font-semibold text-black text-[14px] leading-[17px] mr-2">
            Grant Size:
          </p>
          <p className="font-normal text-[14px] leading-[17px]uppercase text-textColor">
            $100,000 to $500,000
          </p>
        </div>
        <div className="flex items-center my-2 w-full ">
          <p className="font-semibold text-black text-[14px] leading-[17px] mr-2">
            Donor Agency:{" "}
            <span className="font-normal text-[14px] leading-[17px]text-textColor font-mono">
              United States African Development Foundation
            </span>
          </p>
        </div>
        {!props.DoNotshowButton && (
          <div className="flex justify-center  md:justify-end mt-6">
            <button className="" onClick={() => handleNavigation("/grants/1")}>
              <p className="text-[12px] md:text-[10.81px] leading-[10.4px] font-bold text-secondaryColor">
                View Details
              </p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardGrantCard;
