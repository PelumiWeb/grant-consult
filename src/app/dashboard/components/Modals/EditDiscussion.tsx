import CustomButton from "@/app/components/CustomButton";
import LabelInput from "@/app/components/LabelInput";
import CustomModal from "@/app/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import {
  closeModal,
  openModal,
} from "../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/utils/ModalTypes";

type Props = {};

const EditDiscussion = (props: Props) => {
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
        <h3>Edit Your Discussion Notes</h3>

        <LabelInput
          value=""
          placeholder="
    Here you can jot down notes on 
client goals and resources
Further steps for application draft review"
          textArea
          height="h-[300px]"
          width="w-[880px]"
        />
        <div className="mt-8">
          <CustomButton
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.successModal,
                  modalContent: "Discussion edited Successfully",
                })
              );
            }}
            width="w-[123px]"
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

export default EditDiscussion;
