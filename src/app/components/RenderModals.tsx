import React from "react";
import { useAppSelector } from "../../../lib/hooks";
import { modalName } from "@/app/utils/ModalTypes";
import BioModal from "../dashboard/components/Modals/BioModal";
import PersonalData from "../dashboard/components/Modals/PersonalData";
import EditExpertise from "../dashboard/components/Modals/EditExpertise";
import AvailableTimes from "../dashboard/components/Modals/AvailableTimesModal";

import EditReference from "../dashboard/components/Modals/EditReference";
import EditResume from "../dashboard/components/Modals/Resume";
import SecuredGrant from "../dashboard/components/Modals/SecureGrantmodal.tsx";
import EditEducation from "../dashboard/components/Modals/EditEducation";
import EditExprience from "../dashboard/components/Modals/EditExperience";
import ConsultantModal from "../consultant/component/Modal/ConsultantModal";
import ExtensiionModal from "../dashboard/components/Modals/ExtensionModal";
import EditToDoListModal from "../dashboard/components/Modals/EditToDoListModal";
import RescheduleModal from "../dashboard/components/Modals/RescheduleConsultation";
import EditDiscussion from "../dashboard/components/Modals/EditDiscussion";
import PinModal from "../dashboard/components/Modals/PinModal";
import WithdrawFunds from "../dashboard/components/Modals/WithdrawFunds";
import AddNewBank from "../dashboard/components/Modals/AddNewBank";
import EditBankAccount from "../dashboard/components/Modals/EditBankAccount";
import SuccessModal from "../dashboard/components/Modals/SuccessModal";

type Props = {};

const RenderModals = (props: Props) => {
  const modalType = useAppSelector((state) => state.modal.modalType);
  console.log(
    modalType,
    "modaltype`--------------------------------------------------------"
  );

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
      case modalName.consultantModal:
        // code block
        return <ConsultantModal />;
        break;
      case modalName.extensionModal:
        // code block
        return <ExtensiionModal />;
        break;
      case modalName.editListModal:
        // code block
        return <EditToDoListModal />;
        break;
      case modalName.rescheduleConsulation:
        // code block
        return <RescheduleModal />;
        break;
      case modalName.editDiscussion:
        // code block
        return <EditDiscussion />;
        break;
      case modalName.pinModal:
        // code block
        return <PinModal />;
        break;
      case modalName.withdraFundsModal:
        // code block
        return <WithdrawFunds />;
        break;
      case modalName.addNewBank:
        // code block
        return <AddNewBank />;
        break;
      case modalName.editBankAccount:
        // code block
        return <EditBankAccount />;
        break;
      case modalName.successModal:
        // code block
        return <SuccessModal />;
        break;

      default:
        return <BioModal />;
      // code block
    }
  };
  return <>{showContents(modalType)}</>;
};

export default RenderModals;
