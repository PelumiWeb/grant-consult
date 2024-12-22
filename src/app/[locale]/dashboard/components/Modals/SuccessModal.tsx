import CustomButton from "@/app/[locale]/components/CustomButton";
import LabelInput from "@/app/[locale]/components/LabelInput";
import CustomModal from "@/app/[locale]/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import { closeModal } from "../../../../../../lib/features/Modal/modalSlice";

type Props = {};

const SuccessModal = (props: Props) => {
  const { open, modalContent } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  console.log(modalContent);
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
      <div className="w-full h-[70px] flex items-center">
        <h3 className="font-semibold text-[20px] leading-[36px]">
          {modalContent}
        </h3>
        <img src="/success.svg" alt="" className="ml-4" />
      </div>
    </CustomModal>
  );
};

export default SuccessModal;
