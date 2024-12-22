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

const DeleteAccountModal = (props: Props) => {
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
      width="980px"
      height="">
      <div className="w-full h-full">
        <h4 className="text-errorColor text-[20px] leading-[26px] my-8">
          Are you sure you want to deactivate this account? You can reactivate
          again by signing up
        </h4>
        <div className="w-[35%] flex justify-between">
          <CustomButton
            onClick={() =>
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.successModal,
                  modalContent: "Your account is successfully Deactivated",
                })
              )
            }
            title="Yes, Deactive"
            backgrounColor="bg-errorColor"
            textStyle="text-white text-[16px] leading-[16px]"
            width="w-[170px]"
            height="h-[40px]"
            radius="rounded-[5px]"
          />

          <CustomButton
            onClick={() => openMmodal()}
            backgrounColor="bg-borderColor"
            textStyle="text-white"
            title="Cancel"
            width="w-[100px]"
            height="h-[40px]"
            radius="rounded-[5px]"
          />
        </div>
      </div>
    </CustomModal>
  );
};

export default DeleteAccountModal;
