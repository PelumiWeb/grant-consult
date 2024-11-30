"use client";
import React, { Dispatch, SetStateAction } from "react";
import DashboardHeader from "../DashboardHeader";
import CustomButton from "@/app/components/CustomButton";
import LabelInput from "@/app/components/LabelInput";
import GrantCard from "@/app/grants/components/GrantCard";
import { useAppDispatch } from "../../../../../lib/hooks";
import { openModal } from "../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/utils/ModalTypes";
import RenderModals from "@/app/components/RenderModals";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";

type Props = {
  //   setActiveScreen: Dispatch<SetStateAction<undefined>>;
};

const ConsultationDetails = (props: Props) => {
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
  return (
    <div
      className="bg-backgroundColor  w-full p-8 overflow-scroll h-screen scroll-smooth"
      ref={scrollContainerRef}>
      <DashboardHeader />
      <div>
        <div className="flex items-center w-[580px] mt-8">
          <p className="text-textColor"> Dashboard </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p className="text-textColor">Consultation </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p>Strategic Funding Advisory</p>
        </div>

        <div className="w-full flex justify-end ">
          <CustomButton
            borderWidth="border-[1px]"
            width="w-[228px]"
            height="h-[40px]"
            IconLeft="/downloadImage.svg"
            title="Start Messaging"
            backgrounColor="bg-transparent"
            borderColor="border-borderColor"
            textStyle="text-[16px] leading-[16px] font-semibold"
          />
        </div>

        <div>
          {/* Header */}
          <div className="w-full bg-grantColor h-[43px] mt-4">
            <p className="text-white p-2 font-semibold text-[20px] leading-[26px]">
              Strategic Funding Advisory
            </p>
          </div>
          {/* Status */}
          <div className="mt-4 flex items-center w-full justify-between">
            {/* Left */}
            <div className="flex items-center">
              <div className="w-[173px] h-[50px] border-[0.5px] border-borderColor bg-white flex items-center justify-center mr-4">
                <p className="font-semibold text-sm">Status : Ongoing 🟢</p>
              </div>
              {/* Update Status */}
              <LabelInput
                placeholder="Update Status"
                value=""
                select
                width="w-[173px]"
                height=" h-[50px]"
              />
            </div>
            {/* Right */}
            <div className="flex items-center  ">
              <div className="mr-4">
                <CustomButton
                  width="w-[190px]"
                  height="h-[40px]"
                  title="Mark as completeed"
                  backgrounColor="bg-buttonPrimary"
                  textStyle="text-white font-semibold text-[14px] leading-[22px] text-center"
                />
              </div>

              <CustomButton
                onClick={() => {
                  dispatch(
                    openModal({
                      open: true,
                      modalType: modalName.extensionModal,
                    })
                  );
                }}
                width="w-[230px]"
                height="h-[40px]"
                title="Reschedule Consultation"
                backgrounColor="bg-secondaryColor"
                textStyle="text-white font-semibold text-[14px] leading-[22px] text-center"
              />
            </div>
          </div>

          <div>
            {/* Component 1 */}
            <div className="w-full p-4 bg-white my-2">
              <h4>Client Information</h4>
              <p className="font-semibold my-2">
                Name: <span className="font-normal">John Doe (Doe inc.)</span>
              </p>
              <p className="font-semibold my-2">
                Email:{" "}
                <span className="font-normal text-secondaryColor">
                  John.doe@example.com
                </span>
              </p>
              <p className="font-semibold my-2">
                Phone:{" "}
                <span className="font-normal text-secondaryColor">
                  +123 456 789 31
                </span>
              </p>
              {/* Component 1 */}
              <div className="w-[30%] flex items-center justify-between mt-4">
                <CustomButton
                  width="w-[150px]"
                  height="h-[40px]"
                  title="Send Email"
                  IconLeft="/message.svg"
                  radius="rounded-[5px]"
                  textStyle="font-semibold text-[15px] leading-[15px] text-white"
                />
                <CustomButton
                  width="w-[150px]"
                  height="h-[40px]"
                  title="Call Now"
                  IconLeft="/call.svg"
                  radius="rounded-[5px]"
                  backgrounColor="bg-secondaryColor"
                  textStyle="font-semibold text-[15px] leading-[15px] text-white"
                />
              </div>
            </div>
            {/* Component 2 */}

            <div className="w-full p-4 bg-white my-2">
              <h4>Consultation Details</h4>
              <p className="font-semibold my-2">
                Type:
                <span className="font-normal"> Funding Advisory </span>
              </p>
              <p className="font-semibold my-2">
                Date:
                <span className="font-normal text-secondaryColor">
                  November 5, 2024 | Time: 2:00PM | Duration 1 hour
                </span>
              </p>
              <p className="font-semibold my-2">
                Location:
                <span className="font-normal">
                  Zoom (
                  <span className="text-secondaryColor">
                    https//:somezoomlinkhere
                  </span>
                  )
                </span>
              </p>
            </div>

            {/* Component 3 */}
            <div className="relative w-full p-4 bg-white my-2">
              <div
                className="absolute right-[5%] top-[10%] bg-backgroundColor rounded-full w-[40px] h-[40px] flex items-center justify-center"
                onClick={() =>
                  dispatch(
                    openModal({
                      open: true,
                      modalType: modalName.editDiscussion,
                    })
                  )
                }>
                <img src="/edit.svg" />
              </div>
              <h4>Discussion Notes</h4>
              <ul className="list-disc ml-4 mt-4">
                <p className="text-textColor text-sm -ml-4">
                  Here you can jot down notes on{" "}
                </p>
                <li>
                  <p className="text-textColor text-sm my-1">
                    client goals and resources
                  </p>
                </li>
                <li>
                  <p className="text-textColor text-sm">
                    Further steps for application draft review
                  </p>
                </li>
              </ul>
            </div>
            {/* Component 4 */}
            <div className="relative w-full p-4 bg-white my-2">
              <div
                className="absolute right-[5%] top-[10%] bg-backgroundColor rounded-full w-[40px] h-[40px] flex items-center justify-center"
                onClick={() =>
                  dispatch(
                    openModal({
                      open: true,
                      modalType: modalName.editListModal,
                    })
                  )
                }>
                <img src="/edit.svg" />
              </div>
              <h4>To Do List</h4>
              <ul className="list-disc ml-4 mt-4">
                <li>
                  <p className="text-textColor text-sm my-1">
                    Submit final draft by November 12, 2024.
                  </p>
                </li>
                <li>
                  <p className="text-textColor text-sm">
                    Schedule follow-up consultation.
                  </p>
                </li>
              </ul>
            </div>
            {/* Compomemt 5 */}
            <div className="relative w-full p-4 bg-white my-2 h-[150px]">
              <div
                className="absolute right-[5%] top-[10%] bg-backgroundColor rounded-full w-[40px] h-[40px] flex items-center justify-center"
                onClick={() =>
                  dispatch(
                    openModal({
                      open: true,
                      modalType: modalName.rescheduleConsulation,
                    })
                  )
                }>
                <img src="/edit.svg" />
              </div>
              <div className="mt-12">
                <CustomButton
                  width="w-[350px]"
                  height="h-[40px]"
                  title="Request Feedback/Review from Client"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-16 ml-4">
        <img src="/arrowLeft.svg" alt="" />
        <p className="text-secondaryColor ml-2">Return to Dashboard</p>
      </div>
      <RenderModals />
    </div>
  );
};

export default ConsultationDetails;
