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
import { Input } from "antd";
import { OTPProps } from "antd/es/input/OTP";

type Props = {};

const ConfirmTransactionPin = (props: Props) => {
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
      width="738px"
      height="">
      <div className="w-full h-full">
        <h3>Confirm Transaction PIN</h3>

        <div>
          <p className="text-[14px] leading-[24px] font-normal py-4 md:py-8">
            Please enter the six digit pin that will be used for all your
            financial transactions
          </p>
          <div className=" pb-4 md:pb-16 flex justify-center items-center md:block">
            <Input.OTP
              className="w-[200px]"
              variant="filled"
              size={"large"}
              {...sharedProps}
            />
          </div>
        </div>
        <CustomButton
          onClick={() => {
            dispatch(
              openModal({
                open: true,
                modalType: modalName.successModal,
                modalContent: "Transaction PIN was successfully set",
              })
            );
          }}
          title="Confirm"
          backgrounColor="bg-primary"
          width="w-full md:w-[140px]"
          height="h-[60px]"
          textStyle="text-white uppercase font-semibold leading-[16px] text-[16px]"
        />
      </div>
    </CustomModal>
  );
};

export default ConfirmTransactionPin;
