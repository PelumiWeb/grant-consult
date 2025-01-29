import React from "react";

type Props = {
  DoNotshowButton?: boolean;
};

const DashboardGrantCard = (props: Props) => {
  return (
    <div className="shadow-grant-card-dashboard w-full md:w-[500px] h-full md:h-[205px] flex flex-col md:flex-row justify-between bg-white  py-4 md:px-2 rounded-[5px] my-2  md:my-4">
      <div className="w-full md:w-[125px] h-[250px] md:h-[125px] flex justify-center items-center mt-4 ml-0 md:ml-2 mr-0 md:mr-2 ">
        <img
          src="/grantFrame.svg"
          className="w-[95%] h-full object-cover  md:object-contain rounded-[10px] md:rounded-none"
          alt=""
        />
      </div>

      <div className="p-3 md:p-0">
        <p className="text-[12.48px] leading-[16.23px] font-semibold mb-4">
          Aspire Coronation Trust (ACT) Foundation Grant 2024{" "}
        </p>
        <div className="flex items-center my-2 ">
          <p className="font-semibold text-black text-[10px] leading-[12px] mr-2">
            Date Posted
          </p>
          <p className="font-semibold text-textColor text-[10px] leading-[12px]">
            October 24, 2024
          </p>
        </div>
        <div className="flex items-center my-2 ">
          <p className="font-semibold text-black text-[10px] leading-[12px] mr-2">
            Deadline
          </p>
          <p className="font-semibold text-textColor text-[10px] leading-[12px]">
            December 1st, 2024
          </p>
        </div>
        <div className="flex items-center my-2 ">
          <p className="font-semibold text-black text-[10px] leading-[12px] mr-2">
            Location
          </p>
          <p className="font-semibold text-[10px] leading-[12px] uppercase text-secondaryColor">
            America
          </p>
        </div>
        <div className="flex items-center my-2 ">
          <p className="font-semibold text-black text-[10px] leading-[12px] mr-2">
            Category
          </p>
          <p className="font-semibold text-[10px] leading-[12px] uppercase text-textColor">
            Health
          </p>
        </div>

        <div className="flex items-center my-2 ">
          <p className="font-semibold text-black text-[10px] leading-[12px] mr-2">
            Grant Size
          </p>
          <p className="font-semibold text-[10px] leading-[12px] uppercase text-textColor">
            $100,000 to $500,000
          </p>
        </div>
        <div className="flex items-center my-2 w-full ">
          <p className="font-semibold text-black text-[10px] leading-[12px] mr-2">
            Donor Agency
          </p>
          <p className="font-semibold text-[10px] leading-[12px] text-textColor">
            United States African Development Foundation
          </p>
        </div>
        {!props.DoNotshowButton && (
          <div className="flex justify-center  md:justify-end mt-6">
            <button className="">
              <p className="text-[12px] md:text-[8.81px] leading-[10.4px] font-bold text-secondaryColor underline">
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
