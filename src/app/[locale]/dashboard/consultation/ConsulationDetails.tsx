"use client";
import React, { Dispatch, SetStateAction } from "react";
import DashboardHeader from "../components/DashboardHeader";
import CustomButton from "@/app/[locale]/components/CustomButton";
import LabelInput from "@/app/[locale]/components/LabelInput";
import GrantCard from "@/app/[locale]/grants/components/GrantCard";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { openModal } from "../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";
import RenderModals from "@/app/[locale]/components/RenderModals";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import ContentComponent from "../profile/ContentComponent";
import { Upload, UploadFile, UploadProps } from "antd";

type Props = {
  //   setActiveScreen: Dispatch<SetStateAction<undefined>>;
};

const ConsultationDetails = (props: Props) => {
  const dispatch = useAppDispatch();
  const dashboardRoutes = useAppSelector((state) => state.dashboard);
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

   const [fileList, setFileList] = React.useState<UploadFile[]>([]);

   const handleChange: UploadProps["onChange"] = ({
     fileList: newFileList,
   }) => {
     setFileList(newFileList);
   };

   console.log(fileList, "file lost----");

   const uploadProps: UploadProps = {
     fileList,
     
     onChange: handleChange,
     beforeUpload: (file) => {
       // Prevent automatic uploading
       return false;
     },
     showUploadList: false,
   };
  return (
    <div
      className="bg-backgroundColor  w-full p-2 md:p-8 overflow-scroll h-full md:h-screen scroll-smooth overflow-y-auto no-scrollbar"
      ref={scrollContainerRef}>
      <DashboardHeader />
      <div>
        {/* <div className="flex items-center w-full md:w-[580px] mt-8 flex-col md:flex-row mb-4 md:mb-0">
          <p className="text-textColor"> Dashboard </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p className="text-textColor">Consultation </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p>Strategic Funding Advisory</p>
        </div> */}

        <div className="hidden w-full md:flex justify-center md:justify-end ">
          <CustomButton
            borderWidth="border-[1px]"
            width="w-full md:w-[228px]"
            height="h-[40px]"
            IconLeft="/downloadImage.svg"
            title="Start Messaging"
            backgrounColor="bg-transparent"
            borderColor="border-borderColor"
            textStyle="text-[16px] leading-[16px] font-semibold"
          />
        </div>
        <div className="block w-full md:hidden ">
          <CustomButton
            width="w-full md:w-[228px]"
            height="h-[50px]"
            title="Start Messaging"
            backgrounColor="bg-buttonPrimary"
            textStyle="text-[16px] leading-[16px] font-semibold text-white"
            radius="rounded-[5px]"
          />
        </div>

        <div>
          {/* Header */}
          <div className="w-full bg-grantColor  h-[50px] md:h-[43px] mt-4 flex  justify-center md:justify-start items-center md:items-start">
            <p className="text-white p-2 font-semibold text-[16px] md:text-[20px] leading-[26px]">
              Strategic Funding Advisory
            </p>
          </div>
          {/* Status */}
          <div className="mt-4 flex items-center w-full justify-between flex-col md:flex-row">
            {/* Left */}
            <div className="flex justify-between items-center w-full md:w-[40%] flex-col md:flex-row">
              <div className=" w-full md:w-[173px] h-[50px] border-[0.5px] border-borderColor bg-white flex items-center justify-center md:mr-4">
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
            <div className="flex items-center justify-center md:ustify-between md:justify-end  w-full md:w-[40%] flex-col md:flex-row">
              <div className="mr-0 md:mr-4 w-full mb-4 md:mb-0 ">
                <CustomButton
                  width="w-full md:w-[190px]"
                  height="h-[50px] md:h-[40px]"
                  title="Mark as completed"
                  backgrounColor="bg-buttonPrimary"
                  textStyle="text-white font-semibold text-[14px] leading-[22px] text-center"
                  radius="rounded-[5px]"
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
                width="w-full md:w-[350px]"
                height="h-[50px] md:h-[40px]"
                title="Reschedule Consultation"
                backgrounColor="bg-secondaryColor"
                textStyle="text-white font-semibold text-[12px] leading-[16px] text-center"
                radius="rounded-[5px]"
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
              <div className="w-full sm:w-[70%] md:w-[40%] flex items-center justify-between mt-4">
                <CustomButton
                  width="w-full md:w-[200px]"
                  height="h-[40px]"
                  title="Schedule a call"
                  IconLeft="/googleMeetIcon.svg"
                  radius="rounded-[5px]"
                  textStyle="font-bold text-[15px] leading-[15px] text-secondaryColor"
                  backgrounColor="bg-white"
                  borderColor="border-secondaryColor"
                />
              </div>
            </div>
            {/* Component 2 */}

            <div className="w-full p-4 bg-white my-2">
              <h4 className="font-semibold text-[20px] leading-[26px]">
                Consultation Details
              </h4>
              <p className="font-semibold text-[16px] leading-[28px] my-2">
                Type:
                <span className=""> Funding Advisory </span>
              </p>
              <p className="font-semibold my-2 text-[16px] leading-[28px] ">
                Date:
                <span className=" text-secondaryColor ml-1">
                  November 5, 2024 | Time: 2:00PM | Duration 1 hour
                </span>
              </p>
              <p className="font-semibold my-2 text-[16px] leading-[28px] ">
                Location:
                <span className="ml-1">
                  Zoom (
                  <span className="text-secondaryColor ml-1">
                    https//:somezoomlinkhere
                  </span>
                  )
                </span>
              </p>
            </div>

            {/* Component 3 */}
            {/* <div className="relative w-full p-4 bg-white my-2">
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
            </div> */}

            <div className="relative w-full p-4 pr-4 md:pr-16 bg-white my-2">
              <h4 className="text-[20px] leading-[26px] -mb-5 md:mb-0">
                Files Shared with you
              </h4>
              {/* <ul className="list-disc ml-4 mt-4">
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
              </ul> */}
              {[1, 2, 3, 4, 5].map((data) => (
                <div className="hidden lg:flex items-center w-full py-4 justify-between border-b border-b-borderColor">
                  <img src="/folder.svg" alt="" />
                  <p className="font-semibold text-primary text-[16px] leading-[19px]">
                    Grant Proposal Template (PDF)
                  </p>
                  <p className="font-medium text-[12px] leading-[17px] text-textColor">
                    Uploaded By Alice Brooklyn
                  </p>
                  <p className="font-medium text-[12px] leading-[17px] text-textColor">
                    17.07.2024
                  </p>
                  <p className="font-medium text-[12px] leading-[17px] text-textColor">
                    8:34 AM
                  </p>

                  <p className="font-bold text-[13px] leading-[20px] text-secondaryColor">
                    Download
                  </p>
                  <p className="font-bold text-[13px] leading-[20px] text-errorColor">
                    Delete
                  </p>
                </div>
              ))}
              <div className="mt-4 flex lg:hidden flex-col justify-center items-center w-full">
                {[1, 2, 3, 4, 5].map((data) => (
                  <div className="p-0 my-2 w-full">
                    <div className="flex items-center my-2">
                      <div className="w-[24px] h-[24px]">
                        <img
                          src="/folder.svg"
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>

                      <p className="font-semibold text-primary text-[16px] leading-[19px]">
                        Grant Proposal Template (PDF)
                      </p>
                    </div>
                    <div className="flex items-center py-1">
                      <p className="text-primaryBlack font-semibold text-[16px] leading-[28px] ">
                        Updated:
                      </p>
                      <p className="text-textColor font-semibold text-[16px] leading-[28px] ml-2 ">
                        By Alice Brooklyn
                      </p>
                    </div>
                    <div className="flex items-center py-1">
                      <p className="text-primaryBlack font-semibold text-[16px] leading-[28px] ">
                        Date:
                      </p>
                      <p className="text-textColor font-semibold text-[16px] leading-[28px] ml-2 ">
                        17.07.2024
                      </p>
                    </div>
                    <div className="flex items-center py-1">
                      <p className="text-primaryBlack font-semibold text-[16px] leading-[28px] ">
                        Time:
                      </p>
                      <p className="text-textColor font-semibold text-[16px] leading-[28px] ml-2">
                        8:34pm
                      </p>
                    </div>

                    <div className="w-full">
                      <CustomButton
                        width="w-full"
                        radius="rounded-[5px]"
                        height="h-[40px]"
                        title="Download"
                        backgrounColor="bg-secondaryColor"
                        textStyle="font-inter font-bold text-[16px] leading-[16px] text-center text-white"
                      />
                      <div className="mt-2">
                        <CustomButton
                          width="w-full"
                          height="h-[40px]"
                          title="Delete"
                          backgrounColor="bg-white"
                          textStyle="font-inter font-bold text-[16px] leading-[16px] text-center text-errorColor"
                          borderColor="border-errorColor"
                          borderWidth="border"
                          radius="rounded-[5px]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                <p className="-ml-4  text-[16px] leading-[28px] font-medium text-newPrimaryTextColor">
                  Here you can jot down notes on{" "}
                </p>
                <li>
                  <p className=" text-[16px] leading-[28px] font-medium text-newPrimaryTextColor my-1">
                    client goals and resources
                  </p>
                </li>
                <li>
                  <p className=" text-[16px] leading-[28px] font-medium text-newPrimaryTextColor text-sm">
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
                <p className="-ml-4  text-[16px] leading-[28px] font-medium text-newPrimaryTextColor">
                  Here you can jot down notes on{" "}
                </p>
                <li>
                  <p className=" text-[16px] leading-[28px] font-medium text-newPrimaryTextColor my-1">
                    Submit final draft by November 12, 2024.
                  </p>
                </li>
                <li>
                  <p className=" text-[16px] leading-[28px] font-medium text-newPrimaryTextColor ">
                    Schedule follow-up consultation.
                  </p>
                </li>
              </ul>
            </div>

            <ContentComponent title="Upload Supporting Document">
              <p className="text-sm font-normal">
                Upload any relevant documents for your consultant to review
              </p>

              <div className="flex items-center flex-col md:flex-row my-2 md:my-0">
                <LabelInput
                  width="w-full md:w-[221px]"
                  height="h-[40px]"
                  label=""
                  value=""
                  placeholder=""
                  mr="mr-4"
                />
                  {/* <Upload
                    {...uploadProps}
                    className="custom-upload w-full"
                    listType="picture"
                    > */}
                    <CustomButton
                      title="Upload file"
                      width="w-full md:w-[150px]"
                      height="h-[40px]"
                      backgrounColor="bg-primary"
                      textStyle="font-semibold text-white uppercase"
                    />
                  {/* </Upload> */}
              </div>

              <div>
                {fileList.map((file) => (
                  <div
                    key={file.uid}
                    className="bg-backgroundColor w-[377px] h-[62px] rounded-[5px] flex justify-between items-center">
                    <img src="/folder.svg" alt="" />
                    <div className="w-[200px]  flex flex-col items-start justify-around">
                      <p className="font-bold text-[13px] leading-[20.8px] font-mono">
                        {file.name}
                      </p>
                      <p className="text-buttonPrimary text-[10px] leading-[13.1px]">
                        File(s) successfully uploaded
                      </p>
                    </div>
                    <button
                      className="flex justify-start  p-2 w-[30px] h-[30px]"
                      onClick={() => setFileList([])}>
                      <img src="/close.svg" alt="" className="" />
                    </button>
                  </div>
                ))}
              </div>
            </ContentComponent>
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
                  width="w-full md:w-[350px]"
                  height="h-[40px]"
                  title="Request Feedback/Review from Client"
                  textStyle="text-white text-sm font-semibold md:text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center mt-12 ml-4 cursor-pointer my-4"
        onClick={() => {
          dispatch(
            setActiveRoute({
              ...dashboardRoutes,
              consultation: dashboardRouteName.consultation,
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

export default ConsultationDetails;
