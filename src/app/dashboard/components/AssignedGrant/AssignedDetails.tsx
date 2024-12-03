"use client";
import React, { Dispatch, SetStateAction } from "react";
import DashboardHeader from "../DashboardHeader";
import CustomButton from "@/app/components/CustomButton";
import LabelInput from "@/app/components/LabelInput";
import GrantCard from "@/app/grants/components/GrantCard";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { openModal } from "../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/utils/ModalTypes";
import RenderModals from "@/app/components/RenderModals";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/utils/dashboardRouteType";

type Props = {
  //   setActiveScreen: Dispatch<SetStateAction<undefined>>;
};

const AssignedDetails = (props: Props) => {
  const dispatch = useAppDispatch();
   const consultation = useAppSelector((state) => state.dashboard.consultation);
            

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
          <p className="text-textColor">Assigned Grants </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p>Community Health Initiative</p>
        </div>

        <div className="w-full flex justify-end ">
          <CustomButton
            borderWidth="border-[1px]"
            width="w-[228px]"
            height="h-[40px]"
            IconLeft="/downloadImage.svg"
            title="Download Summary"
            backgrounColor="bg-transparent"
            borderColor="border-borderColor"
            textStyle="text-[16px] leading-[16px] font-semibold"
          />
        </div>

        <div>
          {/* Header */}
          <div className="w-full bg-grantColor h-[43px] mt-4">
            <p className="text-white p-2 font-semibold text-[20px] leading-[26px]">
              Aspire Coronation Trust (ACT) Foundation Grant 2024{" "}
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
                width="w-[190px]"
                height="h-[40px]"
                title="Request Extension"
                backgrounColor="bg-secondaryColor"
                textStyle="text-white font-semibold text-[14px] leading-[22px] text-center"
              />
            </div>
          </div>

          {/* Grants details */}
          <div>
            <GrantCard border showMore />
          </div>

          {/* Grant contents */}
          <div className="ml-4">
            <div className="w-[700px]">
              <p className="font-bold leading-[24px] text-[16px]">
                Grant Objectives
              </p>
              <p className="font-normal text-[16px] leading-[24px] ">
                This grant aims to support innovative community health programs
                targeting maternal and child health, prevention of communicable
                diseases, and capacity building for local health workers.
              </p>
            </div>
            <div className="w-[700px] mt-4">
              <p className="font-bold leading-[24px] text-[16px]">
                Use of Funds
              </p>
              <ul className="list-disc ml-4">
                <p className="font-normal text-[16px] leading-[24px] -ml-4 mt-2 ">
                  Funds can be utilized for:
                </p>
                <li className="">
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Training health workers.
                  </p>
                </li>
                <li>
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Purchasing medical supplies and equipment.
                  </p>
                </li>
                <li>
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Outreach programs for underserved populations.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-[700px] mt-4 ">
              <p className="font-bold leading-[24px] text-[16px]">
                Additional Notes
              </p>
              <p className="font-normal text-[16px] leading-[24px] ">
                Preference will be given to programs that demonstrate
                sustainability and measurable impact.
              </p>
            </div>

            <div className="w-[700px] mt-4">
              <p className="font-bold leading-[24px] text-[16px]">
                Eligibility Criteria:
              </p>
              <ul className="list-disc ml-4">
                <li className="">
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Non-profit organizations focused on community health
                    programs.
                  </p>
                </li>
                <li>
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Minimum of two years of operational experience in the health
                    sector.
                  </p>
                </li>
                <li>
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Based in Sub-Saharan Africa or South Asia.
                  </p>
                </li>
              </ul>
            </div>

            <div className="w-[700px] mt-4">
              <p className="font-bold leading-[24px] text-[16px]">
                Application Guildelines
              </p>
              <ul className="list-disc ml-4">
                <p className="font-normal text-[16px] leading-[24px] ">
                  Application Process
                </p>
                <li className="">
                  <p className="font-normal text-[16px] leading-[24px] ">
                    1. Register: Sign up on the Global Health Foundation portal.
                  </p>
                </li>
                <li>
                  <p className="font-normal text-[16px] leading-[24px] ">
                    2. Complete Application Form: Provide organizational
                    details, program proposal, and budget outline.
                  </p>
                </li>
                <li>
                  <p className="font-normal text-[16px] leading-[24px] ">
                    3. Upload Documents: Submit required documents (see below).
                  </p>
                </li>
                <li>
                  <p className="font-normal text-[16px] leading-[24px] ">
                    4. Submit: Ensure all sections are complete before
                    submission.
                  </p>
                </li>
              </ul>
            </div>

            <div className="w-[700px] mt-4">
              <p className="font-bold leading-[24px] text-[16px]">
                Required Document
              </p>
              <ul className="list-disc ml-4">
                <li className="">
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Organization Registration Certificate
                  </p>
                </li>
                <li>
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Program Proposal (maximum 5 pages).
                  </p>
                </li>
                <li>
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Financial Statements (last 2 years).
                  </p>
                </li>
                <li>
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Letters of Endorsement (minimum of 2).
                  </p>
                </li>
              </ul>
            </div>

            <p className="mt-12 text-buttonPrimary">[Apply Here]</p>

            <div className="w-[700px] mt-4">
              <p className="font-bold leading-[24px] text-[16px]">
                Contact Information
              </p>
              <ul className="list-disc ml-4">
                <li className="">
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Contact Person: Dr. Jane Anderson
                  </p>
                </li>
                <li>
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Email Address: grants@globalhealthfoundation.org
                  </p>
                </li>
                <li>
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Phone Number: +1 (555) 123-4567
                  </p>
                </li>
                <li>
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Address: 123 Health Street, New York, NY, USA
                  </p>
                </li>
              </ul>
            </div>

            <div className="w-[700px] mt-4">
              <p className="font-bold leading-[24px] text-[16px]">
                Key Dates and Milestones
              </p>
              <ul className="list-disc ml-4">
                <li className="">
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Opening Date: November 1, 2024
                  </p>
                </li>
                <li>
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Application Deadline: December 15, 2024
                  </p>
                </li>
                <li>
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Shortlist Announcement Date: January 20, 2025
                  </p>
                </li>
                <li>
                  <p className="font-normal text-[16px] leading-[24px] ">
                    Grant Award Date: February 15, 2025
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center mt-16 ml-4 cursor-pointer"
        onClick={() => {
          dispatch(
            setActiveRoute({
              consultation,
              assignedGrant: dashboardRouteName.assignedGrant,
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

export default AssignedDetails;
