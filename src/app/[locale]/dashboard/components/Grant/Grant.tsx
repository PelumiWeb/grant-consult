import React, { Dispatch, SetStateAction } from "react";
import DashboardHeader from "../DashboardHeader";
import DashboardfilterOptions from "../DashboardfilterOptions";
import CustomTable from "../CustomTable";
import { setIsScrolled } from "../../../../../../lib/features/Scrolled/Scrolled";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import { setActiveRoute } from "../../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import CustomButton from "@/app/[locale]/components/CustomButton";
import { Pagination } from "antd";

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
      className="bg-backgroundColor  w-full p-8 overflow-scroll h-screen scroll-smooth overflow-y-auto no-scrollbar"
      ref={scrollContainerRef}>
      <DashboardHeader />

      <div className="flex items-center w-[280px] mt-8">
        <p className="text-textColor"> Dashboard </p>
        <p className="text-textColor mx-3">{">>"}</p>
        <p className="text-textColor">Grants </p>
      </div>

      <div className="flex justify-between items-center py-4">
        <h3 className="text-secondaryColor text-[24px] font-semibold leading-[36.24px] ">
          Recommended Grants For You
        </h3>
        <div className="flex justify-between ">
          <div className="mr-4">
            <CustomButton
              width="w-[170.21px]"
              height="h-[35px]"
              title="Available Grants"
              radius="rounded-[5px]"
              textStyle="text-backgroundColor leading-[17px] text-[12px] font-semibold"
            />
          </div>

          <CustomButton
            width="w-[200.21px]"
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

      <DashboardfilterOptions />
      <div className="mt-8">
        <div className="flex flex-wrap justify-between">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => (
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
