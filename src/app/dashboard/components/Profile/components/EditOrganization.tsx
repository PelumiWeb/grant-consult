import React from "react";
import ContentComponent from "../ContentComponent";
import { modalName } from "@/app/utils/ModalTypes";
import LabelInput from "@/app/components/LabelInput";
import { Checkbox, DatePicker } from "antd";
import CustomButton from "@/app/components/CustomButton";

type Props = {
  notEditable?: boolean;
};

const EditOrganization = (props: Props) => {
  return (
    <ContentComponent
      title="Edit Organization Information"
      modalType={modalName.editAboutModal}
      notEditable={props.notEditable}>
      <div className="w-full mt-4">
        <LabelInput
          placeholder="U.S. Agency for International Development (USAID)"
          label="Organization Name"
          value=""
          width="w-[444px]"
          height="h-[55px]"
          required
        />
        <LabelInput
          placeholder="usaidglobal@gmail.com"
          label="Email Address"
          value=""
          width="w-[444px]"
          height="h-[55px]"
          required
        />

        <LabelInput
          placeholder="+1 234 567 89 0"
          label="Phone Number"
          value=""
          width="w-[444px]"
          height="h-[55px]"
          required
        />
        <LabelInput
          placeholder="www.usaidglobal.com"
          label="Website"
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
          placeholder="Enter Address here"
          label="Address"
          value=""
          width="w-[444px]"
          height="h-[55px]"
          required
        />

        <LabelInput
          placeholder="SME"
          label="Company Type"
          value=""
          width="w-[444px]"
          height="h-[55px]"
          required
          select
        />
        <LabelInput
          placeholder="Manufacturing"
          label="Industry"
          value=""
          width="w-[444px]"
          height="h-[55px]"
          required
          select
        />
        <LabelInput
          placeholder="51-200"
          label="Employee Size"
          value=""
          width="w-[444px]"
          height="h-[55px]"
          required
          select
        />
  
        <CustomButton
          title="Save"
          width="w-[123px]"
          height="h-[60px]"
          backgrounColor="bg-primary"
        />
      </div>
    </ContentComponent>
  );
};

export default EditOrganization;
