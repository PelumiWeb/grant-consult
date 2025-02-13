"use client";
import React, { Dispatch, SetStateAction } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardfilterOptions from "../components/DashboardfilterOptions";
import CustomTable from "../components/CustomTable";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import CustomButton from "@/app/[locale]/components/CustomButton";
import { Pagination } from "antd";
import DashboardGrantCard from "../components/DashboardGrantCard";

type Props = {
  // setActiveScreen: Dispatch<SetStateAction<undefined>>;
};

const Grant = (props: Props) => {
  const dispatch = useAppDispatch();
  const dashboardRoute = useAppSelector((state) => state.dashboard);

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop; // Get the scroll position
      console.log("Scroll Top:", scrollTop); // Debugging scroll value
      dispatch(setIsScrolled(scrollTop > 50));
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="bg-backgroundColor  w-full p-4 md:p-8 overflow-scroll h-screen scroll-smooth overflow-y-auto no-scrollbar"
      ref={scrollContainerRef}>
      <DashboardHeader />

      {/* <div className="flex items-center w-[280px] mt-8">
        <p className="text-textColor"> Dashboard </p>
        <p className="text-textColor mx-3">{">>"}</p>
        <p className="text-textColor">Grants </p>
      </div> */}

      <div className="flex flex-col lg:flex-row justify-between items-center py-4">
        <h3 className="text-secondaryColor text-[24px] font-semibold leading-[36.24px] w-full ">
          Recommended Grants For You
        </h3>
        <div className="flex flex-col lg:flex-row justify-between w-full lg:w-[50%] ">
          <div className=" m-1 mr-0 lg:mr-4 w-full">
            <CustomButton
              width="w-full lg:w-[170.21px]"
              height="h-[35px]"
              title="Available Grants"
              radius="rounded-[5px]"
              textStyle="text-backgroundColor leading-[17px] text-[12px] font-semibold"
            />
          </div>

          <div className="m-1 w-full">
            <CustomButton
              width="w-full lg:w-[200.21px]"
              height="h-[30px]"
              title="Request for consultant"
              radius="rounded-[5px]"
              backgrounColor="bg-transparent"
              borderColor="border-buttonPrimary"
              textStyle="text-[#6E6E6EB2] font-semibold text-[12px] leading-[17px] "
              borderWidth="border-[2px]"
            />
          </div>
        </div>
      </div>

      <DashboardfilterOptions />
      <div className="mt-8">
        <div className="flex flex-wrap justify-between">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => (
            <DashboardGrantCard />
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <Pagination />
      </div>

      {/* <div className="flex items-center cursor-pointer">
        <img src="/arrowLeft.svg" alt="" />
        <p className="text-secondaryColor ml-2">Return to Dashboard</p>
      </div> */}
    </div>
  );
};

export default Grant;
