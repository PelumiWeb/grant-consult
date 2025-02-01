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

const AllGrants = (props: Props) => {
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
      className="bg-backgroundColor  w-full p-8 overflow-scroll h-screen scroll-smooth overflow-y-auto no-scrollbar"
      ref={scrollContainerRef}>
      <DashboardHeader />

      <div className="flex items-center w-[280px] mt-8">
        <p className="text-textColor"> Dashboard </p>
        <p className="text-textColor mx-3">{">>"}</p>
        <p className="text-textColor">Grants </p>
      </div>

      <div className="flex justify-between items-center py-4 flex-col md:flex-row">
        <h3 className="text-secondaryColor text-[24px] font-semibold leading-[36.24px] ">
          Total Grants
        </h3>
        <div className="flex justify-center md:justify-between  flex-col md:flex-row  w-full md:w-[35%]">
          <div className="mr-4 w-full mb-4 md:mb-0">
            <CustomButton
              width="w-full md:w-[170.21px]"
              height="h-[35px]"
              title="List A New Grant"
              radius="rounded-[5px]"
              backgrounColor="bg-buttonPrimary"
              textStyle="text-backgroundColor leading-[17px] text-[12px] font-semibold"
            />
          </div>

          <CustomButton
            width="w-full md:w-[200.21px]"
            height="h-[30px]"
            title="View All Grant"
            radius="rounded-[5px]"
            backgrounColor="bg-transparent"
            borderColor="border-buttonPrimary"
            textStyle="text-[#6E6E6EB2] font-semibold text-[12px] leading-[17px] "
            borderWidth="border-[2px]"
          />
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

      <div
        className="flex items-center cursor-pointer ml-4"
        onClick={() => {
          dispatch(
            setActiveRoute({
              ...dashboardRoute,
              // dashboard: dashboardRouteName.generalDashboard,
              mygrant: dashboardRouteName.myGrants,
            })
          );
        }}>
        <img src="/arrowLeft.svg" alt="" />
        <p className="text-secondaryColor ml-2">Return to Dashboard</p>
      </div>
    </div>
  );
};

export default AllGrants;
