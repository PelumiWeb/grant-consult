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

const EditToDoListModal = (props: Props) => {
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
        <h3>Edit To Do List</h3>

        <LabelInput
          value=""
          placeholder="
    Submit final draft by November 12, 2024.
Schedule follow-up consultation."
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
                  modalContent: "Edit Saved Successfully",
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

export default EditToDoListModal;
