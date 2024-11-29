import React, { Dispatch, SetStateAction } from "react";
import DashboardHeader from "../DashboardHeader";
import DashboardfilterOptions from "../DashboardfilterOptions";
import CustomTable from "../CustomTable";

type Props = {
  // setActiveScreen: Dispatch<SetStateAction<undefined>>;
};

const AssignedGrant = (props: Props) => {
  return (
    <div className="bg-backgroundColor  w-full p-8 overflow-scroll h-screen scroll-smooth">
      <DashboardHeader />
      <div>
        <div className="flex items-center w-[280px] mt-8">
          <p className="text-textColor"> Dashboard </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p className="text-textColor">Assigned Grants </p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-secondaryColor">Assign Grants</h2>
          <p className="mt-4">
            View all grants assigned to you here including details of deadlines
            and statuses
          </p>
        </div>
        <DashboardfilterOptions />
      </div>
      <CustomTable />
      <div className="flex items-center">
        <img src="/arrowLeft.svg" alt="" />
        <p className="text-secondaryColor ml-2">Return to Dashboard</p>
      </div>
    </div>
  );
};

export default AssignedGrant;
