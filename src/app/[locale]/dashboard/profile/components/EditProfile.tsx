import React from "react";
import ContentComponent from "../ContentComponent";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";
import LabelInput from "@/app/[locale]/components/LabelInput";
import { Checkbox, DatePicker } from "antd";
import CustomButton from "@/app/[locale]/components/CustomButton";

type Props = {
  notEditable?: boolean;
};

const EditProfile = (props: Props) => {
  return (
    <ContentComponent
      title="Edit Profile"
      modalType={modalName.editAboutModal}
      notEditable={props.notEditable}>
      <div className="w-full mt-4">
        <LabelInput
          placeholder="Williams Smith / ABC NGO"
          label="Name/Organization Name"
          value=""
          width="w-[444px]"
          height="h-[55px]"
          required
        />
        <LabelInput
          placeholder="alicebrooklyn@gmail.com"
          label="Email Address"
          value=""
          width="w-[444px]"
          height="h-[55px]"
          required
        />

        <LabelInput
          placeholder="+31 890 783 456"
          label="Phone Number"
          value=""
          width="w-[444px]"
          height="h-[55px]"
          required
        />
        <LabelInput
          placeholder="United States"
          label="Country/Region"
          value=""
          width="w-[444px]"
          height="h-[55px]"
          required
          select
        />

        <LabelInput
          placeholder="Gender"
          label="Gender"
          value=""
          width="w-[444px]"
          height="h-[55px]"
          required
          select
        />
        <div>
          <p className="text-sm text-[#000000]">Date of Birth</p>
          <DatePicker
            placeholder="DD/MM/YYYY"
            className="w-[444px] h-[55px] placeholder:text-[#000000]"
          />
        </div>

        <LabelInput
          placeholder=" e.g Teacher"
          label="Occupation"
          value=""
          width="w-[444px]"
          height="h-[55px]"
          required
          select
        />
        <div>
          <div className="flex items-center mb-2">
            <p className="text-sm text-[#000000]">Interests</p>
            <p className="text-sm font-normal text-errorColor ml-1">*</p>
          </div>

          <div className="border-[0.5px] border-borderColor  w-[444px] rounded-[5px] mb-8">
            <div className="flex justify-between items-center p-4">
              <p className="font-mono text-sm text-textColor">Education</p>
              <Checkbox />
            </div>
            <div className="flex justify-between items-center p-4">
              <p className="font-mono text-sm text-textColor">Health</p>
              <Checkbox />
            </div>
            <div className="flex justify-between items-center p-4">
              <p className="font-mono text-sm text-textColor">Education</p>
              <Checkbox />
            </div>

            <div className="flex justify-between items-center p-4">
              <p className="font-mono text-sm text-textColor">Education</p>
              <Checkbox />
            </div>
            <div className="flex justify-between items-center p-4">
              <p className="font-mono text-sm text-textColor">Agriculture</p>
              <Checkbox />
            </div>

            <div className="flex justify-between items-center p-4">
              <p className="font-mono text-sm text-textColor">
                Domestic Violence
              </p>
              <Checkbox />
            </div>

            <div className="flex justify-between items-center p-4">
              <p className="font-mono text-sm text-textColor">Disability</p>
              <Checkbox />
            </div>
          </div>
        </div>
        <CustomButton
          title="Save"
          width="w-full md:w-[123px]"
          height="h-[60px]"
          backgrounColor="bg-primary"
        />
      </div>
    </ContentComponent>
  );
};

export default EditProfile;
