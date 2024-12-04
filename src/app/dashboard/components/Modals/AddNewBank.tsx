import CustomButton from "@/app/components/CustomButton";
import LabelInput from "@/app/components/LabelInput";
import CustomModal from "@/app/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { closeModal, openModal } from "../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/utils/ModalTypes";

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
      <div className="w-[80%] h-full">
        <h3>Add New Bank Details</h3>
        <div className="flex justify-between items-start ">
          <div>
            <LabelInput required label="Account Name" placeholder="" value="" />
            <LabelInput
              required
              label="Account Number"
              placeholder=""
              value=""
            />
            <LabelInput required label="Bank Name" placeholder="" value="" />
          </div>
          <div className="mt-12">
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

        <div className="w-full flex justify-between mt-8">
          <CustomButton
            width="w-[150px]"
            height="h-[60px]"
            backgrounColor="bg-primary"
            title="Save"
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.successModal,
                  modalContent: "Bank details updated successfully",
                })
              );
            }}
          />
          {/* <button>
            <p className="text-buttonPrimary underline font-semibold">Add New Account</p>
          </button> */}
        </div>
      </div>
    </CustomModal>
  );
};

export default AddNewBank;
