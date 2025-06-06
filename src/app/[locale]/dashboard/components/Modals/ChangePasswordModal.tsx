import CustomButton from "@/app/[locale]/components/CustomButton";
import LabelInput from "@/app/[locale]/components/LabelInput";
import CustomModal from "@/app/[locale]/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import {
  closeModal,
  openModal,
} from "../../../../../../lib/features/Modal/modalSlice";

import { Checkbox } from "antd";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";

type Props = {};

const ChangePassword = (props: Props) => {
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
      <div className="w-full h-full">
        <h3>Change Password</h3>

        <div>
          <LabelInput
            width="w-[600px]"
            height="h-[55px]"
            required
            label="Type Your Current Password"
            value=""
            placeholder="Password must be at least 8 characters"
          />
          <LabelInput
            width="w-[600px]"
            height="h-[55px]"
            required
            label="Type Your New Password"
            value=""
            placeholder="Password must be at least 8 characters"
          />
          <LabelInput
            width="w-[600px]"
            height="h-[55px]"
            required
            label="Confirm Your New Password"
            value=""
            placeholder="Password must be at least 8 characters"
          />
        </div>
        <div className="flex items-center py-4 md:py-2">
          <Checkbox />
          <p className="text-[12px] font-medium leading-[17px] ml-2">
            Require all devices to sign in with new password
          </p>
        </div>
        <div className="w-full md:w-[90%] flex justify-between flex-col md:flex-row">
          <CustomButton
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.successModal,
                  modalContent: "Password Saved Successfully",
                })
              );
            }}
            title="Save"
            width="w-full md:w-[120px]"
            height="h-[60px]"
            backgrounColor="bg-primary"
            textStyle="text-white"
          />
          <button>
            <p className="hidden md:block text-secondaryColor font-semibold text-[16px] leading-[16px] underline">
              Forgot Password?
            </p>
          </button>
          <div className="mt-4 block md:hidden">
            <CustomButton
              onClick={() => {
                dispatch(
                  openModal({
                    open: true,
                    modalType: modalName.successModal,
                    modalContent: "Password Saved Successfully",
                  })
                );
              }}
              title="Forgot Password"
              width="w-full md:w-[120px]"
              height="h-[60px]"
              backgrounColor="bg-white"
              textStyle="text-secondaryColor font-semibold"
              borderColor="border-secondaryColor"
              borderWidth="border"
            />
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default ChangePassword;
