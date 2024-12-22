import React from "react";
import ContentComponent from "../ContentComponent";
import { modalName } from "@/app/[locale]/utils/ModalTypes";
import LabelInput from "@/app/[locale]/components/LabelInput";

type Props = {};

const SelectUserType = (props: Props) => {
  return (
    <ContentComponent
      title="Select User Type"
      modalType={modalName.BioData}
      notEditable>
      <div className="w-full mt-4">
        <LabelInput
          placeholder="Select user type"
          value=""
          height="h-[50px]"
          width="w-[444px]"
          options={[
            { label: "Individual", value: "Individual" },
            { label: "NGO", value: "NGO" },
            {
              label: "Corporate Organization",
              value: "Corporate Organization",
            },
          ]}
          select
        />
      </div>
    </ContentComponent>
  );
};

export default SelectUserType;
