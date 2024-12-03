import CustomButton from "@/app/components/CustomButton";
import LabelInput from "@/app/components/LabelInput";
import CustomModal from "@/app/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { closeModal } from "../../../../../lib/features/Modal/modalSlice";

type Props = {};

const EditBankAccount = (props: Props) => {
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
      width="738px"
      height="">
      <div className="w-full h-[1026px]">
        <h3>Edit Bank Account</h3>
      </div>
    </CustomModal>
  );
};

export default EditBankAccount;
