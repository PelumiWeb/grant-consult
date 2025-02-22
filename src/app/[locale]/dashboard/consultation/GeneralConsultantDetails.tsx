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
import { Upload, UploadFile, UploadProps, Rate } from "antd";

const imageProps: UploadProps = {
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
  defaultFileList: [],
};

type Props = {
  //   setActiveScreen: Dispatch<SetStateAction<undefined>>;
};

const GeneralConsultantDetails = (props: Props) => {
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

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
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
      className="bg-backgroundColor  w-full p-2 md:p-8 overflow-scroll h-screen scroll-smooth overflow-y-auto no-scrollbar"
      ref={scrollContainerRef}>
      <DashboardHeader />
      <div>
        {/* <div className="flex items-center w-[580px] mt-8">
          <p className="text-textColor"> Dashboard </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p className="text-textColor">Consultation </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p className="text-textColor">Education Grant Proposal Review</p>
        </div> */}

        <div className="w-full flex justify-between items-center ">
          <h4 className="font-semibold text-[20px] leading-[26px] text-secondaryColor">
            Education Grant Proposal Review
          </h4>
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
          {/* <div className="w-full bg-grantColor h-[43px] mt-4">
            <p className="text-white p-2 font-semibold text-[20px] leading-[26px]">
              Strategic Funding Advisory
            </p>
          </div> */}
          {/* Status */}
          <div className="mt-4 flex items-center w-full justify-between">
            {/* Left */}
            <div className="flex items-center">
              <div className="w-[173px] h-[40px] border-[0.5px] border-borderColor bg-white flex items-center justify-center mr-4 rounded-[5px]">
                <p className="font-semibold text-sm">Status : Ongoing 🟢</p>
              </div>
              {/* Update Status */}
              <CustomButton
                onClick={() => {
                  dispatch(
                    openModal({
                      open: true,
                      modalType: modalName.requestStatusModal,
                    })
                  );
                }}
                title="Request Status Update"
                width="w-[220px]"
                height="h-[40px] "
                backgrounColor="bg-white"
                borderColor="border-borderColor"
                borderWidth="border-[0.5px]"
                textStyle="font-semibold text-[14px] leading-[22px] "
                radius="rounded-[5px]"
              />
            </div>
            {/* Right */}
            <div className="flex items-center  ">
              <div className="mr-4">
                <CustomButton
                  width="w-[190px]"
                  height="h-[40px]"
                  title="Chat with Consultant"
                  backgrounColor="bg-buttonPrimary"
                  textStyle="text-white font-semibold text-[14px] leading-[22px] text-center"
                />
              </div>

              <CustomButton
                onClick={() => {
                  dispatch(
                    openModal({
                      open: true,
                      modalType: modalName.requestRescheduleModal,
                    })
                  );
                }}
                width="w-[230px]"
                height="h-[40px]"
                title="Request Reschedule"
                backgrounColor="bg-secondaryColor"
                textStyle="text-white font-semibold text-[14px] leading-[22px] text-center"
              />
            </div>
          </div>

          <div>
            {/* Component 1 */}
            <ContentComponent title="Consultation Overview" notEditable>
              <p className="font-semibold my-4">
                Title:
                <span className="font-semibold ml-2">
                  {" "}
                  Education Grant Proposal Review{" "}
                </span>
              </p>
              <p className="font-semibold my-4">
                Type:
                <span className="font-semibold ml-2">Proposal Review</span>
              </p>
              <p className="font-semibold my-4">
                Consultant:
                <span className="font-semibold ml-2">Alice Brooklyn</span>
              </p>
              <p className="font-semibold my-4">
                Start Date:
                <span className="font-semibold ml-2">July 14, 2024</span>
              </p>
              <p className="font-semibold my-4">
                End Date:
                <span className="font-semibold ml-2">August 2, 2024</span>
              </p>
              {/* Component 1 */}
              <div className="w-[30%] flex items-center justify-between mt-8">
                <CustomButton
                  width="w-[200px]"
                  height="h-[40px]"
                  title="Schedule a call"
                  IconLeft="/googleMeetIcon.svg"
                  radius="rounded-[5px]"
                  textStyle="font-bold text-[15px] leading-[15px] text-secondaryColor"
                  backgrounColor="bg-white"
                  borderColor="border-secondaryColor"
                />
              </div>
              {/* Component 2 */}
            </ContentComponent>

            <ContentComponent
              title="Progress Update"
              modalType={modalName.editprogressModal}>
              <p className="font-semibold text-[15px] leading-[33px] text-textColor">
                Reviewed initial draft; feedback shared on July 18, 2024.
              </p>
            </ContentComponent>

            {/* Component 3 */}

            <ContentComponent title="Files Shared with you" notEditable>
              <div className="flex items-center w-full py-4 justify-between border-b border-b-borderColor">
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
              <div className="flex items-center w-full py-4 justify-between border-b border-b-borderColor">
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
              <div className="flex items-center w-full py-4 justify-between border-b border-b-borderColor">
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
              <div className="flex items-center w-full py-4 justify-between border-b border-b-borderColor">
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
              <div className="flex items-center w-full py-4 justify-between border-b border-b-borderColor">
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
            </ContentComponent>
            <ContentComponent
              title="Next Step"
              modalType={modalName.editNextModal}>
              <p className="font-semibold text-[15px] leading-[33px] text-textColor">
                Consultant to finalize the review by August 1, 2024.
              </p>
            </ContentComponent>
            <ContentComponent title="Upload Supporting Document">
              <p className="text-sm font-normal">
                Upload any relevant documents for your consultant to review
              </p>

              <div className="flex items-center ">
                <LabelInput
                  width="w-[221px]"
                  height="h-[40px]"
                  label=""
                  value=""
                  placeholder=""
                  mr="mr-4"
                />

                <Upload
                  {...uploadProps}
                  className="custom-upload"
                  listType="picture">
                  <CustomButton
                    title="Upload file"
                    width="w-[150px]"
                    height="h-[40px]"
                    backgrounColor="bg-primary"
                    textStyle="font-semibold text-white uppercase"
                  />
                </Upload>
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
                      className="flex justify-start h-full p-2"
                      onClick={() => setFileList([])}>
                      <img src="/close.svg" alt="" />
                    </button>
                  </div>
                ))}
              </div>
            </ContentComponent>

            <div className="p-8 bg-white">
              <CustomButton
                width="w-[350px]"
                height="h-[40px]"
                radius="rounded-[5px]"
                backgrounColor="bg-[#FF9500]"
                textStyle="font-bold text-[16px] leading-[16px] text-center text-white"
                title="Feedback/Rating (Post Completion)"
              />

              <div className="mt-8">
                <p className="font-semibold text-[14px] leading-[16px] text-primaryBlack my-2">
                  Share your experience working with Alice Brooklyn
                </p>

                <p className="font-normal text-[14px] leading-[23px] text-primaryBlack my-2">
                  Were you satisfied with her service?
                </p>
              </div>

              <div>
                <Rate allowHalf defaultValue={2.5} className="" />

                <LabelInput
                  label="Can you tell us more?"
                  placeholder="Add feedback"
                  value=""
                  textArea
                  width="w-[376px]"
                  height="h-[160px]"
                />
              </div>

              <div>
                <CustomButton
                  width="w-[180px]"
                  height="h-[40px]"
                  radius="rounded-[5px]"
                  title="SUBMIT REVIEW"
                  textStyle="font-bold text-[16px] leading-[16px] text-white "
                  backgrounColor="bg-buttonPrimary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center mt-16 ml-4 cursor-pointer"
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

export default GeneralConsultantDetails;
