"use client";
import React from "react";
import LabelInput from "../../components/LabelInput";
import CustomButton from "../../components/CustomButton";
import { Checkbox, Upload, UploadFile, UploadProps } from "antd";

type Props = {};

const page = (props: Props) => {
  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);

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
    <div className="bg-white">
      <h2 className="font-mono font-medium text-[36px] leading-[42px] text-secondaryColor text-center my-12">
        List a Grant
      </h2>
      {/* Grant Information */}

      <div className="px-16 py-4">
        <h3 className="font-semibold text-[24px] leading-[36px] text-primary ">
          Grant Information
        </h3>

        <div className="w-full flex justify-between flex-col md:flex-row">
          <LabelInput
            label="Grant Name"
            required
            value=""
            placeholder=""
            width="w-[460px]"
            height="h-[55px]"
            my="my-2"
          />
          <LabelInput
            label="Select Grant Category"
            required
            value=""
            placeholder=""
            width="w-[460px]"
            height="h-[55px]"
            my="my-2"
            select
          />
        </div>
        <div className="w-full flex justify-between flex-col md:flex-row">
          <LabelInput
            label="Grant Description"
            value=""
            placeholder="Give indepth description of the grant "
            width="w-full"
            height="h-[180px]"
            textArea
            my="my-2"
          />
        </div>
        <div className="w-full flex justify-between flex-col md:flex-row">
          <LabelInput
            label="Grant Size ($)"
            required
            value=""
            placeholder=""
            width="w-[460px]"
            height="h-[55px]"
            my="my-2"
          />
          <LabelInput
            label="Location Eligibility"
            required
            value=""
            placeholder=""
            width="w-[460px]"
            height="h-[55px]"
            my="my-2"
          />
        </div>
        <div className="w-full flex justify-between flex-col md:flex-row">
          <LabelInput
            label="Application Deadline"
            required
            value=""
            placeholder=""
            width="w-[460px]"
            height="h-[55px]"
            my="my-2"
          />
          <LabelInput
            label="Number of Recipient"
            required
            value=""
            placeholder=""
            width="w-[460px]"
            height="h-[55px]"
            my="my-2"
          />
        </div>
      </div>

      {/* Application Requirement */}
      <div className="px-16 py-4">
        <h3 className="font-semibold text-[24px] leading-[36px] text-primary pb-8">
          Application Requirements
        </h3>

        <div className="w-full flex justify-between flex-col md:flex-row">
          <div>
            <p className="font-bold font-mono text-[16px] leading-[19px] text-primary mb-2">
              Upload Supporting Document
            </p>

            <p className="text-[14px] leading-[23px] font-mono text-textColor w-[350px]">
              Upload any relevant documents containing full grants details and
              Application requirements
            </p>

            <div className="flex items-center justify-between">
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
          <div>
            <p className="font-bold font-mono text-[16px] leading-[19px] text-primary mb-2">
              List Required Documents
            </p>

            <p className="text-[14px] leading-[23px] font-mono text-textColor w-[350px] mb-2">
              Applicants must provide the following:
            </p>
            <div className="p-2 w-full md:w-[453px] h-[215px] border-[0.5px] border-borderColor">
              <p className="text-[14px] text-textColor leading-[23px] my-1 ">
                1. Project proposal (maximum 5 pages).
              </p>
              <p className="text-[14px] text-textColor leading-[23px] my-1 ">
                2. Detailed budget breakdown..
              </p>
              <p className="text-[14px] text-textColor leading-[23px]  my-1">
                3. Organizational profile or individual résumé..
              </p>
              <p className="text-[14px] text-textColor leading-[23px]  my-1">
                4. Evidence of past project success (reports, testimonials,
                etc.)..
              </p>
              <p className="text-[14px] text-textColor leading-[23px] my-1 ">
                5. Copies of registration documents..
              </p>
              <p className="text-[14px] text-textColor leading-[23px] my-1 ">
                6. A project timeline.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between flex-col md:flex-row mt-8">
          <div>
            <p className="font-bold font-mono text-[16px] leading-[19px] text-primary mb-2">
              Application Process
            </p>

            <p className="text-[14px] leading-[23px] font-mono text-textColor w-full md:w-[350px] mb-2">
              Applicants must do the following:
            </p>
            <div className="p-2 w-full md:w-[453px] h-[215px] border-[0.5px] border-borderColor">
              <p className="text-[14px] text-textColor leading-[23px] my-1 ">
                1. Fill out the online application form.
              </p>
              <p className="text-[14px] text-textColor leading-[23px] my-1 ">
                2. Submit a 5-page project proposal including a budget
                breakdown.
              </p>
              <p className="text-[14px] text-textColor leading-[23px]  my-1">
                3. Attach supporting documents such as proof of registration and
                past project impact reports.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[450px]">
            <p className="font-bold font-mono text-[16px] leading-[19px] text-primary mb-2">
              Upload Grant Image
            </p>

            <div className="flex items-center  justify-between w-full">
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
                  title="Choose file"
                  width="w-[150px]"
                  height="h-[40px]"
                  backgrounColor="bg-primary"
                  textStyle="font-semibold text-white uppercase"
                />
              </Upload>
            </div>
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

            <p className="text-center font-bold text-[16px] leading-[17px] text-textColor mt-4">
              OR
            </p>
            <p className="text-primary font-bold text-[16px] font-mono leading-[19px] my-8">
              Use AI-generated Image
            </p>
            <div className="flex justify-between items-center w-full my-4">
              <p className="font-semibold text-[14px] leading-[21px] text-underline text-secondaryColor">
                Preview Generate Image
              </p>
              <p className="font-semibold text-[14px] leading-[21px] text-underline text-buttonPrimary">
                Regenerate Image
              </p>
            </div>

            <CustomButton
              title="Save"
              width="w-[94px]"
              height="h-[40px]"
              radius={"rounded-[5px]"}
              backgrounColor="bg-primary"
            />
          </div>
        </div>
      </div>

      {/* Grantor's Details */}

      <div className="px-16 py-8">
        <h3 className="font-semibold text-[24px] leading-[36px] text-primary ">
          Grantor’s Details
        </h3>

        <div className="w-full flex justify-between flex-col md:flex-row">
          <LabelInput
            label="Grantor’s Organization Name*"
            required
            value=""
            placeholder=" Enter Organization Name"
            width="w-[460px]"
            height="h-[55px]"
          />
          <LabelInput
            label="Organization’s Website"
            required
            value=""
            placeholder="www.organizationwebsite.com"
            width="w-[460px]"
            height="h-[55px]"
          />
        </div>
        <div className="w-full flex justify-between flex-col md:flex-row flex-1">
          <LabelInput
            label="Contact Email"
            value=""
            placeholder="Enter email "
            width="w-[460px]"
            height="h-[55px]"
            required
          />
          <LabelInput
            label="Contact Phone Number"
            value=""
            placeholder="Enter email "
            width="w-[460px]"
            height="h-[55px]"
            required
          />
        </div>
        <div className="w-full flex justify-between flex-col md:flex-row">
          <LabelInput
            label="Grant Application URL"
            required
            value=""
            placeholder="https:somegrantsapplicationlink.com"
            width="w-[460px]"
            height="h-[55px]"
          />
          <LabelInput
            label="Additional Notes (Optional)"
            value=""
            placeholder="State any preference for gender, religion or race"
            width="w-[460px]"
            height="h-[55px]"
          />
        </div>

        <div>
          <p className="text-black text-[14px] leading-[24px] pb-2">
            Listing Options
          </p>
          <div className="border-[0.5px] rounded-[5px] border-borderColor bg-white p-2 w-full md:w-[460px]">
            <div className="flex items-center justify-between">
              <p className="text-[14px] leading-[24px] text-textColor font-normal font-mono">
                Public Listing
              </p>
              <Checkbox />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[14px] leading-[24px] text-textColor font-normal font-mono">
                Invite Only
              </p>
              <Checkbox />
            </div>
          </div>
        </div>
      </div>

      {/* Submission section  */}
      <div className=" px-4 md:px-16 py-4 flex justify-between items-center w-full  md:w-[600px] flex-col md:flex-row">
        <CustomButton
          title="PREVIEW"
          backgrounColor="bg-secondaryColor"
          width="w-[120px]"
          height="h-[40px]"
          radius="rounded-[5px]"
          textStyle="font-inter font-bold leading-[16px] text-[16px] text-white "
        />
        <button>
          <p className="capitalize font-semibold underline text-[14px] leading-[22px] font-mono text-textColor my-2 md:my-0">
            Save as a draft
          </p>
        </button>

        <CustomButton
          title="PUBLISH GRANT"
          backgrounColor="bg-buttonPrimary"
          width="w-[200px]"
          height="h-[40px]"
          radius="rounded-[5px]"
          textStyle="font-inter font-bold leading-[16px] text-[16px] text-white "
        />
      </div>
    </div>
  );
};

export default page;
