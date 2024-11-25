import React from "react";
import { useAppSelector } from "../../../../lib/hooks";
import { modalName } from "@/app/utils/ModalTypes";
import BioModal from "./Modals/BioModal";
import PersonalData from "./Modals/PersonalData";
import EditExpertise from "./Modals/EditExpertise";
import AvailableTimes from "./Modals/AvailableTimesModal";

import EditReference from "./Modals/EditReference";
import EditResume from "./Modals/Resume";
import SecuredGrant from "./Modals/SecureGrantmodal.tsx";
import EditEducation from "./Modals/EditEducation";
import EditExprience from "./Modals/EditExperience";


type Props = {};

const RenderModals = (props: Props) => {
  const modalType = useAppSelector((state) => state.modal.modalType);
  console.log(modalType, "this is modal type");
  const showContents = (tab: any) => {
    switch (modalType) {
      case modalName.BioData:
        // code block
        return <BioModal />;
        break;
      case modalName.EditAvailable:
        // code block
        return <AvailableTimes />;
        break;
      case modalName.Experience:
        // code block
        return <EditExprience />;
        break;

      case modalName.Expertise:
        // code block
        return <EditExpertise />;
        break;
      case modalName.References:
        // code block
        return <EditReference />;
        break;
      case modalName.Resume:
        // code block
        return <EditResume />;
        break;
      case modalName.SecureGrant:
        // code block
        return <SecuredGrant />;
        break;
      case modalName.editEducation:
        // code block
        return <EditEducation />;
        break;
      case modalName.personalData:
        // code block
        return <PersonalData />;
        break;

      default:
        return <BioModal />;
      // code block
    }
  };
  return <>{showContents(modalType)}</>;
};

export default RenderModals;
