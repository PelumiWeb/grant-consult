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

const AddNewBank = (props: Props) => {
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
      <div className="w-full md:w-[80%] h-full">
        <h3>Edit Your Bank Details</h3>
        <div className="flex justify-between items-start">
          <div className="w-full">
            <LabelInput required label="Account Name" placeholder="" value="" />
            <LabelInput
              required
              label="Account Number"
              placeholder=""
              value=""
            />
            <LabelInput required label="Bank Name" placeholder="" value="" />
          </div>
          <div className="hidden md:block mt-12">
            <CustomButton
              backgrounColor="bg-white"
              title="Set as Default"
              width="w-[150px]"
              height="h-[40px]"
              textStyle="text-sm text-secondaryColor"
              borderColor="border-secondaryColor"
            />
          </div>
        </div>

        <div className="w-full flex justify-between mt-8 flex-col md:flex-row ">
          <CustomButton
            width="w-full md:w-[150px]"
            height="h-[60px]"
            backgrounColor="bg-primary"
            title="Save"
            radius="rounded-[5px]"
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.successModal,
                  modalContent: "Bank details updated successfully",
                })
              );
            }}
            textStyle="text-white font-semibold"
          />
          <button
            className="hidden md:block"
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.addNewBank,
                })
              );
            }}>
            <p className="text-buttonPrimary underline font-semibold ">
              Add New Account
            </p>
            s
          </button>
          <div className="py-4 space-y-4">
            <CustomButton
              onClick={() => {
                dispatch(
                  openModal({
                    open: true,
                    modalType: modalName.addNewBank,
                  })
                );
              }}
              title="Add new Account"
              backgrounColor="bg-white"
              width="w-full"
              height="h-[40px]"
              textStyle="font-inter font-bold text-[16px] leading-[16px] text-buttonPrimary"
              borderColor="border-buttonPrimary"
              radius="rounded-[5px]"
            />
            <CustomButton
              title="Set as Default"
              backgrounColor="bg-white"
              width="w-full"
              height="h-[40px]"
              textStyle="font-inter font-bold text-[16px] leading-[16px] text-secondaryColor"
              borderColor="border-secondaryColor"
              radius="rounded-[5px]"
            />
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default AddNewBank;
