import React from "react";
import ProfileComponent from "../ProfileComponent";
import { modalName } from "@/app/utils/ModalTypes";
import LabelInput from "@/app/components/LabelInput";

type Props = {
    
};

const SelectUserType = (props: Props) => {
  return (
    <ProfileComponent title="Select User Type" modalType={modalName.BioData} notEditable>
      <div className="w-full mt-4">
        <LabelInput 
        placeholder="Select user type"
        value=""
        height="h-[50px]"
        width="w-[444px]"
        
        select
        />
      </div>
    </ProfileComponent>
  );
};

export default SelectUserType;
