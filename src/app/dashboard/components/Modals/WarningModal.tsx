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

const WarnignModal = (props: Props) => {
  const { open, modalContent, from } = useAppSelector((state) => state.modal);
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
      <div className="w-full h-[100px] flex items-start flex-col">
        <h4 className="font-mono font-semibold text-[20px] leading-[26px] text-errorColor my-2">
          {modalContent}
        </h4>
        <div className="flex items-center justify-between w-[40%] py-2">
          <CustomButton
            onClick={() =>
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.successModal,
                  modalContent:
                    from === "cancel-subscription"
                      ? "We are sorry to let you go. You can subscribe again to gain access to all grants on our platform"
                      : "Card is successfully removed ",
                })
              )
            }
            width="w-[150px]"
            height="h-[40px]"
            radius="rounded-[5px]"
            backgrounColor="bg-errorColor"
            textStyle="text-white font-inter font-semibold text-[16px] leading-[16px]"
            title="Yes, proceed"
          />

          <CustomButton
            onClick={() => openMmodal()}
            width="w-[103px]"
            height="h-[40px]"
            radius="rounded-[5px]"
            backgrounColor="bg-borderColor"
            textStyle="text-white font-inter font-semibold text-[16px] leading-[16px]"
            title="Cancel"
          />
        </div>
      </div>
    </CustomModal>
  );
};

export default WarnignModal;
