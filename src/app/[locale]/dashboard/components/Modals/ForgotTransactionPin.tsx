import CustomButton from "@/app/[locale]/components/CustomButton";
import LabelInput from "@/app/[locale]/components/LabelInput";
import CustomModal from "@/app/[locale]/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import {
  closeModal,
  openModal,
} from "../../../../../../lib/features/Modal/modalSlice";
import { Input } from "antd";
import { OTPProps } from "antd/es/input/OTP";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";

type Props = {};

const ForgotTransactionPin = (props: Props) => {
  const open = useAppSelector((state) => state.modal.open);
  const dispatch = useAppDispatch();
  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
  };

  const sharedProps: OTPProps = {
    onChange,
  };
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
      width="800px"
      height="">
      <div className="w-full h-full">
        <h3>Forgot Transaction PIN</h3>

        <p
          className="text-sm
        text-textColor mt-6 md:mt-8">
          Don’t worry, we will send you a reset link
        </p>

        <div className="mb-4 md:mb-16">
          <LabelInput
            required
            placeholder=""
            value=""
            label="Enter your email address"
            width="w-[600px]"
            height="h-[60px]"
          />
        </div>

        <CustomButton
          onClick={() => {
            dispatch(
              openModal({
                open: true,
                modalType: modalName.setTransactionsModal,
              })
            );
          }}
          width="w-full md:w-[150px]"
          height="h-[60px]"
          title="reset my pin"
          textStyle="uppercase text-white font-semibold "
          backgrounColor="bg-primary"
        />
      </div>
    </CustomModal>
  );
};

export default ForgotTransactionPin;
