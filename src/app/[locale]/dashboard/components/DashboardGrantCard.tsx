import React from 'react'

type Props = {}

const DashboardGrantCard = (props: Props) => {
  return (
    <div className="shadow-grant-card-dashboard w-[500px] h-[205px] flex justify-between bg-white  py-4 px-2 rounded-[5px] m-4">
      <div className="w-[125px] h-[125px] flex justify-center items-center mt-4 ml-2">
        <img
          src="/grantFrame.svg"
          className="w-full h-full object-contain"
          alt=""
        />
      </div>

      <div>
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
        <div className="flex justify-end mt-6">
          <button className="">
            <p className="text-[8.81px] leading-[10.4px] font-bold text-secondaryColor underline">
              View Details
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardGrantCard