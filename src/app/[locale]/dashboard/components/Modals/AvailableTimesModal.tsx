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

const AvailableTimes = (props: Props) => {
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
      <div className="w-full h-full md:h-[588px]">
        <h3>Edit Available Times</h3>
        <div className="flex items-center justify-between w-full md:w-[600px] flex-col md:flex-row">
          <LabelInput
            value=""
            placeholder="Select days"
            label="Days"
            select
            required
          />
          <LabelInput
            value=""
            placeholder="Select Time"
            label="Time"
            select
            required
          />
        </div>

        <LabelInput
          value=""
          placeholder="Add Aditional note"
          textArea
          width="w-[600px]"
          height="h-[115px]"
        />

        <div className="mt-8">
          <CustomButton
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.successModal,
                  modalContent: "Availabilty Saved Successfully",
                })
              );
            }}
            width="w-full md:w-[123px]"
            height="h-[60px]"
            title="Save"
            radius="rounded-[5px]"
            backgrounColor="bg-primary"
            textStyle="font-semibold text-white"
          />
        </div>
      </div>
    </CustomModal>
  );
};

export default AvailableTimes;
