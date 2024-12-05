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
import { Checkbox } from "antd";

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
        <div>
          <Checkbox />
          <p className="text-[12px] font-medium leading-[17px]">
            Require all devices to sign in with new password
          </p>
        </div>
        <div>
          <CustomButton
            title="Save"
            width="w-[120px]"
            height="h-[60px]"
            backgrounColor="bg-primary"
            textStyle="text-white"
          />
          <button>
            <p className="text-secondaryColor font-semibold text-[16px] leading-[16px] underline">
              Forgot Password?
            </p>
          </button>
        </div>
      </div>
    </CustomModal>
  );
};

export default ChangePassword;
