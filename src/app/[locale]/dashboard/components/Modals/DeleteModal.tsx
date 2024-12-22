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

const DeleteAccount = (props: Props) => {
  const open = useAppSelector((state) => state.modal.open);
  const modalContent = useAppSelector((state) => state.modal.modalContent);

  const dispatch = useAppDispatch();
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
          Are you sure you want to delete this grant from our platform? You can
          not undo this
        </h4>
        <div className="w-[35%] flex justify-between">
          <CustomButton
            onClick={() =>
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.successModal,
                  modalContent:
                    "Women in Tech Initiative is successfully deletetd",
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

export default DeleteAccount;
