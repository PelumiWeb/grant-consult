"use client";
import React from "react";
import DashboardHeader from "./DashboardHeader";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import RenderModals from "@/app/[locale]/components/RenderModals";
import CustomButton from "@/app/[locale]/components/CustomButton";
import GrantCard from "@/app/[locale]/grants/components/GrantCard";
import { Pagination } from "antd";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/[locale]/utils/dashboardRouteType";
type Props = {};

const GeneralDashboard = (props: Props) => {
  const dispatch = useAppDispatch();
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

  const dashboardRoute = useAppSelector((state) => state.dashboard);

  // console.log(dashboardRoute, "routee")

  return (
    <div
      className={`bg-backgroundColor
 w-full p-8 overflow-scroll h-screen scroll-smooth overflow-y-auto no-scrollbar`}
      ref={scrollContainerRef}>
      <DashboardHeader />
      {/* Header Modals */}
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <div className="w-[57px] h-[57px] mr-2">
            <img
              src="/userprofile.svg"
              className="object-contain w-full h-full"
              alt=""
            />
          </div>
          <div>
            <p className="text-[13.2px] leading-[15.58px] font-semibold text-[#000000] ">
              Welcome!
            </p>
            <p className="text-[16.5px] leading-[21px] font-semibold text-textColor ">
              Brooklyn Smith
            </p>
          </div>
        </div>

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

      {/* Sub heading */}

      <div className="flex justify-between items-center w-full">
        <div className="p-4 shadow-genera-user-shdow-card w-[315px] h-[78px]">
          <p className="text-primaryBlack font-semibold text-sm leading-[15.54px] my-1">
            Subscription Status
          </p>
          <div className="flex items-center">
            <img src="/status.svg" alt="" />
            <p className="text-sm font-normal font-mono ml-2 text-buttonPrimary">
              Monthly
            </p>
          </div>
        </div>
        <div className="p-4 shadow-genera-user-shdow-card w-[315px] h-[78px]">
          <p className="text-primaryBlack font-semibold text-sm leading-[15.54px] my-1">
            Renewal Date
          </p>
          <p className="text-sm font-normal font-mono text-textColor">
            November 27, 2024
          </p>
        </div>
        <div className="p-4 shadow-genera-user-shdow-card w-[315px] h-[78px]">
          <p className="text-primaryBlack font-semibold text-sm leading-[15.54px] my-1">
            Manage Subscription
          </p>
          <button>
            <p
              className="text-sm font-normal font-mono  text-secondaryColor"
              onClick={() => {
                dispatch(
                  setActiveRoute({
                    ...dashboardRoute,
                    dashboard: dashboardRouteName.manageSubscription,
                  })
                );
              }}>
              Click here
            </p>
          </button>
        </div>
      </div>

      {/* Active Summary */}

      <div>
        <p className="font-semibold text-primary text-[16px] leading-[18.88px] py-4">
          Activity Summary
        </p>
        <div className="w-full h-[259px] shadow-active-summary flex justify-between bg-white border-[0.5px] border-borderColor p-8 ">
          <div className="relative border-[9.99px] border-transparent rounded-full bg-gradient-border  h-[180px] w-[180px] z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-[160px] rounded-full w-[160px] z-0 flex flex-col justify-between items-center py-6">
              <img src="/summary1.svg" alt="" />
              <p className="text-textColor text-[9.51px] leading-[12.46px] text-center">
                You submitted 2 grants applications.{" "}
              </p>

              <button>
                <p className="underline font-bold text-[10px] leading-[15.82px] text-buttonPrimary">
                  {" "}
                  Track Their Status. {" "}
                </p>
              </button>
            </div>
          </div>
          <div className="relative border-[9.99px] border-transparent rounded-full bg-gradient-border  h-[180px] w-[180px] z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-[160px] rounded-full w-[160px] z-0 flex flex-col justify-between items-center py-6">
              <img src="/summary2.svg" alt="" />
              <p className="text-textColor text-[9.51px] leading-[12.46px] text-center">
                You added 3 Postings as your Favourites.
              </p>

              <button>
                <p className="underline font-bold text-[10px] leading-[15.82px] text-buttonPrimary">
                  {" "}
                  Review Them
                </p>
              </button>
            </div>
          </div>
          <div className="relative border-[9.99px] border-transparent rounded-full bg-gradient-border  h-[180px] w-[180px] z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-[160px] rounded-full w-[160px] z-0 flex flex-col justify-between items-center py-6">
              <img src="/summary3.svg" alt="" />
              <p className="text-textColor text-[9.51px] leading-[12.46px] text-center">
                You have 1 active subscription.
              </p>

              <button>
                <p className="underline font-bold text-[10px] leading-[15.82px] text-buttonPrimary">
                  {" "}
                  Manage Your Plan
                </p>
              </button>
            </div>
          </div>
          <div className="relative border-[9.99px] border-transparent rounded-full bg-gradient-border  h-[180px] w-[180px] z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-[160px] rounded-full w-[160px] z-0 flex flex-col justify-between items-center py-6">
              <img src="/summary4.svg" alt="" />
              <p className="text-textColor text-[9.51px] leading-[12.46px] text-center">
                You have 2 pending consultations.
              </p>

              <button>
                <p className="underline font-bold text-[10px] leading-[15.82px] text-buttonPrimary">
                  {" "}
                  Schedule Now
                </p>
              </button>
            </div>
          </div>
          <div className="relative border-[9.99px] border-transparent rounded-full bg-gradient-border  h-[180px] w-[180px] z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-[160px] rounded-full w-[160px] z-0 flex flex-col justify-between items-center py-6 ">
              <img src="/summary5.svg" alt="" />
              <p className="text-textColor text-[9.51px] leading-[12.46px] text-center">
                You saved 5 grants to review later.
              </p>
              <button>
                <p className="underline font-bold text-[10px] leading-[15.82px] text-buttonPrimary">
                  {" "}
                  See Saved Grants
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="font-semibold text-primary text-[16px] leading-[18.88px] pb-4 ">
          Recommended Grants For You
        </p>

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

      {/* <div className="">
        <ProfileHeader />
      </div> */}
      <RenderModals />
    </div>
  );
};

export default GeneralDashboard;
