import CustomButton from "@/app/[locale]/components/CustomButton";
import LabelInput from "@/app/[locale]/components/LabelInput";
import CustomModal from "@/app/[locale]/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import {
  closeModal,
  openModal,
} from "../../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/[locale]/utils/ModalTypes";

type Props = {};

const RescheduleStatus = (props: Props) => {
  const open = useAppSelector((state) => state.modal.open);
  const dispatch = useAppDispatch();
  // console.log(open)
  const openMmodal = () => {
    if (open) {
      dispatch(closeModal());
    }
  };
  return (
    <CustomModal
      open={open}
      setOpen={() => openMmodal()}
      width="1000px"
      height="">
      <div className="w-full h-[588px]">
        <h3>Request Consultation Status Update</h3>

        <p className="font-normal text-[12px] leading-[13.1px] text-textColor mt-8">
          Request an update on the progress of your consultation. The consultant
          will respond as soon as possible.
        </p>

        <div>
          <p className="font-semibold my-4">
            Title:
            <span className="font-semibold ml-2">
              {" "}
              Education Grant Proposal Review{" "}
            </span>
          </p>
          <p className="font-semibold my-4">
            Type:
            <span className="font-semibold ml-2"> Proposal Review</span>
          </p>
          <p className="font-semibold my-4">
            Consultant:
            <span className="font-semibold ml-2"> Alice Brooklyn</span>
          </p>
          <p className="font-semibold my-4">
            View Consultant’s Profile:
            <span className="font-semibold ml-2 text-secondaryColor underline">
              {" "}
              https://profilealicebrooklyn
            </span>
          </p>
        </div>

        <LabelInput
          placeholder="Please explain why you’re requesting an update (optional)."
          label="Reason for Requesting Update (Optional)"
          value=""
          width="w-[510px]"
          height="h-[170px]"
        />

        <CustomButton
          onClick={() => {
            dispatch(
              openModal({
                open: true,
                modalType: modalName.successModal,
                modalContent:
                  "Your status update request has been sent. We will notify you once it's reviewed",
              })
            );
          }}
          width="w-[239px]"
          height="h-[60px]"
          radius="rounded-[5px]"
          backgrounColor="bg-primary"
          title="SEND UPDATE REQUEST"
          textStyle="font-bold text-[16px] leading-[16px] font-inter text-white"
        />
      </div>
    </CustomModal>
  );
};

export default RescheduleStatus;
