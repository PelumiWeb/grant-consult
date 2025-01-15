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
  React.useCallback(() => {
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
      <div>
        <div className="flex items-center w-[580px] mt-8">
          <p className="text-textColor"> Dashboard </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p className="text-textColor">Grants </p>
        </div>
      </div>

      <div className="flex justify-between items-center py-4">
        <h3 className="text-secondaryColor text-[24px] font-semibold leading-[36.24px] ">
          Manage Subscription{" "}
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

      <div className="bg-subscriptionBackground w-full h-[238px] rounded-[5px] grid place-items-center px-4">
        <div className="bg-white h-[204px] w-full p-4 flex justify-between items-center">
          <div>
            <div className="flex ">
              <h4 className="font-semibold text-[20px] leading-[26px] mr-2">
                Current Plan:{" "}
              </h4>
              <h4 className="ont-semibold text-[20px] leading-[26px] text-secondaryColor ">
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
          <div className="w-[529px] h-[137px] bg-subscriptionBackground rounded-[5px] p-4 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <p className="text-black text-[16px] leading-[18.88px] mr-2 font-semibold">
                  Subscription Status:
                </p>
                <p className="text-secondaryColor text-[16px] leading-[18.88px] font-semibold ">
                  Active
                </p>
              </div>
              <div className="flex justify-between items-center">
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
        </div>
      </div>

      <div className="bg-white p-4 h-[204px] w-full">
        <h4 className="font-mono font-semibold text-[20px] leading-[26px] text-primary ">
          Payment History
        </h4>
        <div className="flex justify-between items-start">
          <div className="flex flex-col h-[150px] w-[25%] justify-around">
            <p className="text-textColor font-medium text-[14px] leading-[28px]">
              Here, you can view all your past payment history both successful
              and declined ones{" "}
            </p>
            <button>
              <p className="underline font-semibold text-secondaryColor text-[16px] leading-[18.88px] w-full text-left">
                View More
              </p>
            </button>
          </div>

          <div>
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
        </div>
      </div>

      <div className="flex justify-between items-center p-4 bg-white my-4">
        <div className="flex flex-col justify-start h-[190px]">
          <h4 className="font-mono font-semibold text-[20px] leading-[26px] text-primary mb-8">
            Manage Payment Methods
          </h4>
          <div>
            <div className="flex justify-between">
              <p className="font-mono text-[14px] leading-[30.8px] text-textColor">
                1. Visa ****1234{" "}
              </p>
              <div className="flex items-center">
                <button
                  onClick={() =>
                    dispatch(
                      openModal({
                        open: true,
                        modalType: modalName.warning,
                        modalContent:
                          "Are you sure you want to delete this Card? You can not undo this action",
                        from: "cancel-subscription",
                      })
                    )
                  }>
                  <p className="font-semibold text-errorColor text-[14px] leading-[30.8px] mr-2">
                    Remove
                  </p>
                </button>
                <button
                  onClick={() =>
                    dispatch(
                      openModal({
                        open: true,
                        modalType: modalName.editCardModal,
                      })
                    )
                  }>
                  <p className="font-semibold text-buttonPrimary text-[14px] leading-[30.8px]">
                    Edit
                  </p>
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="font-mono text-[14px] leading-[30.8px] text-textColor">
                2. Mastercard ****5678
              </p>
              <div className="flex items-center">
                <button
                  onClick={() =>
                    dispatch(
                      openModal({
                        open: true,
                        modalType: modalName.warning,
                        modalContent:
                          "Are you sure you want to delete this Card? You can not undo this action",
                      })
                    )
                  }>
                  <p className="font-semibold text-errorColor text-[14px] leading-[30.8px] mr-2">
                    Remove
                  </p>
                </button>

                <button
                  onClick={() =>
                    dispatch(
                      openModal({
                        open: true,
                        modalType: modalName.editCardModal,
                      })
                    )
                  }>
                  <p className="font-semibold text-buttonPrimary text-[14px] leading-[30.8px]">
                    Edit
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-textColor py-1 font-bold text-[16px] leading-[19px]">
            Add New Card
          </p>
          <div className="w-[530px] h-[170px]  rounded-[6.11px] border border-borderColor ">
            {/* Top */}
            <div className="flex items-center border-b border-b-borderColor justify-between py-1 ">
              <div className="h-[54.81px] w-full cursor-pointer px-4">
                <input
                  type="text"
                  className="h-full w-full outline-none placeholder:text-textColor placeholder:text-[16px] placeholder:leading-[23.24px] placeholder:font-mono placeholder:ml-2 font-mono text-[16px] leading-[23.24px] font-medium"
                  placeholder="Williams Smith"
                />
              </div>
            </div>

            <div className="h-[50px] w-full cursor-pointer flex border-b border-b-borderColor px-4">
              <input
                type="card"
                className="h-full w-full outline-none placeholder:text-textColor placeholder:text-[16px] placeholder:leading-[23.24px] placeholder:font-mono font-mono text-[16px] leading-[23.24px] font-medium"
                placeholder="0000 0000 0000 0000"
              />
              <div className="flex items-center justify-around w-[150px]">
                <img src="/card-visa.png" />
                <img src="/card-master.svg" />
                <img src="/card-pay.svg" />
              </div>
            </div>

            <div className="h-[50px] w-full cursor-pointer flex px-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="h-full w-[50%] border-r border-r-borderColor outline-none"
              />
              <div className="w-[50%] flex justify-between items-center px-4">
                <input type="text" className="h-full w-full outline-none" />
                <img src="/cardIcon.svg" className="" alt="" />
              </div>
            </div>
          </div>
          <button>
            <p className="text-secondaryColor font-bold text-[16px] leading-[18.88px] underline mt-8">
              Save Card
            </p>
          </button>
        </div>
      </div>

      <div className=" p-4 bg-white my-4">
        <h4 className="font-mono font-semibold text-[20px] leading-[26px] text-primary mb-8">
          Notifications & Alert
        </h4>

        <div className="flex justify-between items-center w-[30%] py-2">
          <p className="font-medium text-[14px] leading-[30.8px] text-textColor">
            Enable Renewal Reminder
          </p>
          <Switch size="small" />
        </div>
        <div className="flex justify-between items-center w-[30%]">
          <p className="font-medium text-[14px] leading-[30.8px] text-textColor">
            Notify on Payment Failures
          </p>
          <Switch size="small" />
        </div>
      </div>
      <div
        className="flex items-center mt-16 ml-4 cursor-pointer"
        onClick={() => {
          dispatch(
            setActiveRoute({
              ...dashboardRoute,
              dashboard: dashboardRouteName.generalDashboard,
            })
          );
        }}>
        <img src="/arrowLeft.svg" alt="" />
        <p className="text-secondaryColor ml-2">Return to Dashboard</p>
      </div>
      <RenderModals />
    </div>
  );
};

export default ManageSubscription;
