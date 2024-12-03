import CustomButton from "@/app/components/CustomButton";
import LabelInput from "@/app/components/LabelInput";
import CustomModal from "@/app/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { closeModal, openModal } from "../../../../../lib/features/Modal/modalSlice";
import { Input } from "antd";
import { OTPProps } from "antd/es/input/OTP";
import { modalName } from "@/app/utils/ModalTypes";

type Props = {};

const PinModal = (props: Props) => {
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
      width="600px"
      height="">
      <div className="w-full h-full">
        <h3>Enter Transaction PIN</h3>

        <p
          className="text-sm
        text-textColor mt-8">
          Please enter the six digit pin that you set for your financial
          transactions
        </p>

        <div className="w-full flex justify-start items-center my-8">
          <Input.OTP
            // className="w-[400px]"
            variant="filled"
            size={"large"}
            length={4}
            style={{fontSize: 20}}
            {...sharedProps}
          />
        </div>

        <CustomButton 
        onClick={() => {
          dispatch(
            openModal({
              open: true,
              modalType: modalName.successModal,
              modalContent: "Withdrawal of $500 to Globus Bank was successful.",
            })
          );
        }}
        width="w-[124px]"
        height="h-[60px]"
        title="confirm"
        textStyle="uppercase text-white "
        backgrounColor="bg-primary"
        />
      </div>
    </CustomModal>
  );
};

export default PinModal;
