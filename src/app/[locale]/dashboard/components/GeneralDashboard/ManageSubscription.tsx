"use client";
import React, { Dispatch, SetStateAction } from "react";
import DashboardHeader from "../DashboardHeader";
import CustomButton from "@/app/[locale]/components/CustomButton";
import LabelInput from "@/app/[locale]/components/LabelInput";
import GrantCard from "@/app/[locale]/grants/components/GrantCard";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import { openModal } from "../../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";
import RenderModals from "@/app/[locale]/components/RenderModals";
import { setIsScrolled } from "../../../../../../lib/features/Scrolled/Scrolled";
import { setActiveRoute } from "../../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import { Input, Switch } from "antd";

type Props = {
  //   setActiveScreen: Dispatch<SetStateActionf<undefined>>;
};

const ManageSubscription = (props: Props) => {
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
      className="bg-backgroundColor  w-full p- md:p-8 overflow-scroll h-full md:h-screen scroll-smooth overflow-y-auto no-scrollbar"
      ref={scrollContainerRef}>
      <DashboardHeader />
      {/* <div>
        <div className="flex items-center w-[580px] mt-8">
          <p className="text-textColor"> Dashboard </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p className="text-textColor">Grants </p>
        </div>
      </div> */}

      <div className="flex justify-between items-center py-4 flex-wrap ">
        <h3 className="hidden md:block text-secondaryColor text-[24px] font-semibold leading-[36.24px] ">
          Manage Subscription{" "}
        </h3>
        <div className="hidden lg:flex justify-between  ">
          <div className="mr-4 flex w-full items-center justify-between">
            <CustomButton
              width="w-[170.21px]"
              height="h-[35px]"
              title="Available Grants"
              radius="rounded-[5px]"
              textStyle="text-backgroundColor leading-[17px] text-[12px] font-semibold"
            />

            <div className="ml-4">
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
        </div>
      </div>

      <div className="bg-white md:bg-transparent p-4 md:p-0 px-8 md:px-0 ">
        <h4 className="block md:hidden text-primary font-semibold text-[20px] leading-[26px]">
          Manage Subscription
        </h4>
        <div className="bg-subscriptionBackground w-full  h-full lg:h-[238px] rounded-[5px] grid place-items-center p-4  my-4">
          <div className="bg-white h-[480px] lg:h-[204px] w-full p-4 flex justify-center lg:justify-between items-center flex-wrap lg:flex-nowrap">
            <div className="w-full">
              <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center my-2 lg:my-0">
                <h4 className="font-semibold text-[20px] leading-[26px] mr-2">
                  Current Plan:{" "}
                </h4>
                <h4 className="font-semibold text-[20px] leading-[26px] text-secondaryColor ">
                  $100 / Monthly{" "}
                </h4>
              </div>
              <div className="">
                <p className="text-textColor font-medium text-[14px] leading-[28px]">
                  Features included:
                </p>
                <p className="text-textColor font-medium text-[14px] leading-[28px] ml-2">
                  - Full access to grants
                </p>
                <p className="text-textColor font-medium text-[14px] leading-[28px] ml-2">
                  - Personalized recommendations
                </p>
                <p className="text-textColor font-medium text-[14px] leading-[28px] ml-2">
                  - Priority consultations
                </p>
                <p className="text-textColor font-medium text-[14px] leading-[28px] ml-2">
                  - Free Training & Workshop
                </p>
              </div>
            </div>
            <div className=" w-[529px] h-[137px] bg-subscriptionBackground rounded-[5px] p-4 hidden lg:flex flex-col justify-between">
              <div className=" ">
                <div className="flex items-center">
                  <p className="text-black text-[16px] leading-[18.88px] mr-2 font-semibold">
                    Subscription Status:
                  </p>
                  <p className="text-buttonPrimary text-[16px] leading-[18.88px] font-semibold ">
                    Active
                  </p>
                </div>
                <div className="flex justify-between items-center my-2">
                  <p className="font-bold text-[15px] leading-[17.1px] text-[#003399] mr-2">
                    Auto-Renew
                  </p>
                  <Switch />
                </div>
              </div>
              <div>
                <p className="font-mono font-semibold text-[14px] leading-[22px] text-textColor">
                  Renewal Date: November 7, 2024
                </p>
              </div>
              <div className="flex  items-center">
                <button>
                  <p className="underline text-[#007AFF] mr-4">Upgrade Plan</p>
                </button>
                <button
                  onClick={() =>
                    dispatch(
                      openModal({
                        open: true,
                        modalType: modalName.warning,
                        modalContent:
                          "Are you sure you want to cancel your subscription? You can subscribe again",
                      })
                    )
                  }>
                  <p className="text-textColor text-[14px] leading-[21.96px] underline">
                    Cancel Subscription
                  </p>
                </button>
              </div>
            </div>
            <div className=" bg-subscriptionBackground rounded-[5px] p-4 flex lg:hidden flex-col justify-between items-center w-full h-[200px]">
              <div className="flex items-center">
                <p className="text-black text-[16px] leading-[18.88px] mr-2 font-semibold">
                  Subscription Status:
                </p>
                <p className="text-secondaryColor text-[16px] leading-[18.88px] font-semibold ">
                  Active
                </p>
              </div>
              <div>
                <p className="font-mono font-semibold text-[14px] leading-[22px] text-textColor">
                  Renewal Date: November 7, 2024
                </p>
              </div>
              <button>
                <p className="underline text-[#007AFF] mr-4">Upgrade Plan</p>
              </button>
              <button
                onClick={() =>
                  dispatch(
                    openModal({
                      open: true,
                      modalType: modalName.warning,
                      modalContent:
                        "Are you sure you want to cancel your subscription? You can subscribe again",
                    })
                  )
                }>
                <p className="text-textColor text-[14px] leading-[21.96px] underline">
                  Cancel Subscription
                </p>
              </button>

              <div className="flex justify-center items-center w-full">
                <p className="font-bold text-[15px] leading-[17.1px] text-[#003399] mr-2">
                  Auto-Renew
                </p>
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4  h-full lg:h-[204px] w-full px-8 md:px-4">
        <h4 className="font-mono font-semibold text-[20px] leading-[26px] text-primary ">
          Payment History
        </h4>
        <div className="flex flex-col lg:flex-row justify-between items-start  py-4 md:py-0">
          <div className="flex flex-col h-full md:h-[150px] w-[70%] lg:w-[25%] justify-around space-y-4 mb-6">
            <p className="text-textColor font-medium text-[14px] leading-[28px]">
              Here, you can view all your past payment history both successful
              and declined ones{" "}
            </p>
            <button className="-mt-8 lg:mt-0">
              <p className="underline font-semibold text-secondaryColor text-[16px] leading-[18.88px] w-full text-left">
                View More
              </p>
            </button>
          </div>
          {/* Notifications & Alert */}
          <div className="hidden lg:block w-full lg:w-[75%]">
            <div className="border-b border-b-borderColor  flex justify-between">
              {["Plan", "Date", "Amount", "Payment Method", "Status"].map(
                (data) => (
                  <p
                    className={`text-black font-semibold text-[12.3px] leading-[19.3px] mx-4 my-2  ${
                      data === "Payment Method" ? "w-[151px]" : "w-[50px]"
                    }`}>
                    {data}
                  </p>
                )
              )}
              <div className="w-[41px] h-[19px]"></div>
            </div>
            <div className="border-b border-b-borderColor w-full flex justify-between items-center">
              {["Monthly", "12/11/21", "$100", "Visa ****1234", "Paid"].map(
                (data) => (
                  <p
                    className={`${
                      data === "Paid" ? "text-buttonPrimary" : "text-textColor"
                    } font-semibold text-[12.3px] leading-[19.3px] mx-4 my-2 text-left ${
                      data === "Visa ****1234" ? "w-[151px]" : "w-[50px]"
                    }`}>
                    {data}
                  </p>
                )
              )}
              <div className="w-[41px] h-[19px]">
                <img src="/downloadHistrory.svg" alt="" />
              </div>
            </div>
            <div className="border-b border-b-borderColor w-full flex justify-between items-center">
              {["Monthly", "12/11/21", "$100", "Visa ****1234", "Paid"].map(
                (data) => (
                  <p
                    className={`${
                      data === "Paid" ? "text-buttonPrimary" : "text-textColor"
                    } font-semibold text-[12.3px] leading-[19.3px] mx-4 my-2 text-left ${
                      data === "Visa ****1234" ? "w-[151px]" : "w-[50px]"
                    }`}>
                    {data}
                  </p>
                )
              )}
              <div className="w-[41px] h-[19px]">
                <img src="/downloadHistrory.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="block lg:hidden w-full h-full space-y-4">
            <div className="w-full flex items-center  justify-between ">
              <p className="font-medium text-[14px] leading-[22px] text-newPrimaryTextColor">
                Plan:
              </p>

              <p className="font-semibold text-[14px] leading-[22px] text-newPrimaryTextColor">
                Monthly
              </p>
            </div>
            <div className="w-full flex items-center  justify-between ">
              <p className="font-medium text-[14px] leading-[22px] text-newPrimaryTextColor">
                Date:
              </p>

              <p className="font-semibold text-[14px] leading-[22px] text-newPrimaryTextColor">
                12/11/2021
              </p>
            </div>
            <div className="w-full flex items-center  justify-between">
              <p className="font-medium text-[14px] leading-[22px] text-newPrimaryTextColor">
                Amount:
              </p>

              <p className="font-semibold text-[14px] leading-[22px] text-newPrimaryTextColor">
                $100
              </p>
            </div>
            <div className="w-full flex items-center  justify-between ">
              <p className="font-medium text-[14px] leading-[22px] text-newPrimaryTextColor">
                Payment method:
              </p>

              <p className="font-semibold text-[14px] leading-[22px] text-newPrimaryTextColor">
                Visa ****1234
              </p>
            </div>
            <div className="w-full flex items-center  justify-between ">
              <p className="font-medium text-[14px] leading-[22px] text-newPrimaryTextColor">
                Status
              </p>

              <p className="font-semibold text-[14px] leading-[22px] text-newPrimaryTextColor">
                Paid
              </p>
            </div>
            <div className="mt-4">
              <CustomButton
                width="w-full"
                title="Download"
                height="h-[50px]"
                backgrounColor="bg-secondaryColor"
                textStyle="text-white font-bold text-[16px] leading-[16px] text-center"
                radius="rounded-[5px]"
              />
            </div>
          </div>
          <div className="block lg:hidden w-full h-full mt-16 space-y-4 ">
            <div className="w-full flex items-center  justify-between ">
              <p className="font-medium text-[14px] leading-[22px] text-newPrimaryTextColor">
                Plan:
              </p>

              <p className="font-semibold text-[14px] leading-[22px] text-newPrimaryTextColor">
                Monthly
              </p>
            </div>
            <div className="w-full flex items-center  justify-between ">
              <p className="font-medium text-[14px] leading-[22px] text-newPrimaryTextColor">
                Date:
              </p>

              <p className="font-semibold text-[14px] leading-[22px] text-newPrimaryTextColor">
                12/11/2021
              </p>
            </div>
            <div className="w-full flex items-center  justify-between ">
              <p className="font-medium text-[14px] leading-[22px] text-newPrimaryTextColor">
                Amount:
              </p>

              <p className="font-semibold text-[14px] leading-[22px] text-newPrimaryTextColor">
                $100
              </p>
            </div>
            <div className="w-full flex items-center  justify-between ">
              <p className="font-medium text-[14px] leading-[22px] text-newPrimaryTextColor">
                Payment method:
              </p>

              <p className="font-semibold text-[14px] leading-[22px] text-newPrimaryTextColor">
                Visa ****1234
              </p>
            </div>
            <div className="w-full flex items-center  justify-between ">
              <p className="font-medium text-[14px] leading-[22px] text-newPrimaryTextColor">
                Status
              </p>

              <p className="font-semibold text-[14px] leading-[22px] text-newPrimaryTextColor">
                Paid
              </p>
            </div>
            <div className="mt-4 w-full h-full">
              <CustomButton
                width="w-full"
                title="Download"
                height="h-[50px]"
                backgrounColor="bg-secondaryColor"
                textStyle="text-white font-bold text-[16px] leading-[16px] text-center"
                radius="rounded-[5px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" p-4 px-8 md:px-4 bg-white my-4">
        <h4 className="font-mono font-semibold text-[20px] leading-[26px] text-primary mb-8">
          Notifications & Alert
        </h4>

        <div className="flex justify-between items-center w-full md:w-[30%] py-2">
          <p className="font-medium text-[14px] leading-[30.8px] text-textColor">
            Enable Renewal Reminder
          </p>
          <Switch size="small" />
        </div>
        <div className="flex justify-between items-center w-full md:w-[30%]">
          <p className="font-medium text-[14px] leading-[30.8px] text-textColor">
            Notify on Payment Failures
          </p>
          <Switch size="small" />
        </div>
      </div>

      <div
        className="flex items-center my-8 ml-4 cursor-pointer"
        onClick={() => {
          dispatch(
            setActiveRoute({
              ...dashboardRoute,
              dashboard: dashboardRouteName.generalDashboard,
            })
          );
        }}>
        <img src="/arrowLeft.svg" alt="" />
        <p className="text-secondaryColor ml-2">Go back</p>
      </div>
      <RenderModals />
    </div>
  );
};

export default ManageSubscription;
