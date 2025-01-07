import CustomButton from "@/app/[locale]/components/CustomButton";
import LabelInput from "@/app/[locale]/components/LabelInput";
import CustomModal from "@/app/[locale]/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import {
  closeModal,
  openModal,
} from "../../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";

type Props = {};

const EditNextStep = (props: Props) => {
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
      <div className="w-full h-full">
        <h3>Edit Next Step</h3>

        <LabelInput
          width="w-[880px]"
          height="h-[300px]"
          placeholder="Consultant to finalize the review by August 1, 2024."
          value=""
        />

        <CustomButton
          onClick={() => {
            dispatch(
              openModal({
                open: true,
                modalType: modalName.successModal,
                modalContent:
                  "Thank you for submitting a review, we will let the consultant know what you think of them",
              })
            );
          }}
          width="w-[123px]"
          height="h-[60px]"
          radius="rounded-[5px]"
          backgrounColor="bg-primary"
          title="Save"
          textStyle="text-white font-bold text-[16px] leading-[16px]"
        />
      </div>
    </CustomModal>
  );
};

export default EditNextStep;
