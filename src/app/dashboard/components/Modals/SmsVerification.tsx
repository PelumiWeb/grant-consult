import CustomButton from "@/app/components/CustomButton";
import LabelInput from "@/app/components/LabelInput";
import CustomModal from "@/app/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import {
  closeModal,
  openModal,
} from "../../../../../lib/features/Modal/modalSlice";
import { Input, QRCode } from "antd";
import { OTPProps } from "antd/es/input/OTP";
import { modalName } from "@/app/utils/ModalTypes";
import { CopyToClipboard } from "react-copy-to-clipboard";

type Props = {};

const SmsVerification = (props: Props) => {
  const open = useAppSelector((state) => state.modal.open);
  const dispatch = useAppDispatch();
  const [codeSent, setCodeSent] = React.useState(false);
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
      width="850px"
      height="">
      <div className="w-full h-full">
        <div className="flex cursor-pointer items-center" 
        onClick={() => {
            if(codeSent) { 
                setCodeSent(false)
            } else {
                 dispatch(
                   openModal({
                     open: true,
                     modalType: modalName.twoStepVerification,
                     modalContent: "Authentication added successfully",
                   })
                 );
            }
        }}
        >
          <img src="/goBack.svg" alt="" />
          <p className="ml-1 text-sm">Back</p>
        </div>

        {!codeSent ? (
          <div className="px-8">
            <div className=" mt-4">
              <p className="font-semibold text-[24px] leading-[32px] text-primary">
                Two-step Verification
              </p>
              <div className="mt-4">
                <p className="text-textColor font-semibold text-[16px] leading-[18px]">
                  Add a phone number for SMS verification
                </p>
                <p className="text-textcolor font-normal text-sm mt-4">
                  A verification code will be sent to this number
                </p>
              </div>
            </div>

            <LabelInput placeholder="US +1 349505009 567" value="" />
            <LabelInput
              placeholder="Password"
              value=""
              label="Enter your GrantsConsult Password"
            />
          </div>
        ) : (
          <div className="
          px-8">
            <div className="mt-4">
              <p className="font-semibold text-[24px] leading-[32px] text-primary -ml-2">
                Two-step Verification
              </p>
              <div className="mt-4">
                <p className="text-textColor font-semibold text-[16px] leading-[18px]">
                  Enter the 6 digit verification code sent to this number
                </p>
                <p className="text-textcolor font-semibold text-sm mt-4">
                  US +1 349505009 567
                </p>
              </div>
            </div>

            <LabelInput placeholder="Enter 6 digits" value="" />

            <button>
              <p className="text-secondaryColor">Trouble with code</p>
            </button>
          </div>
        )}

        <p className="text-textColor w-full px-8">
          Your phone number helps us keep your account secure by adding an
          additional layer of verification
        </p>

        <div className=" mt-8 px-8">
          <CustomButton
            onClick={() => {
              if (!codeSent) {
                setCodeSent(true);
              } else {
                dispatch(
                  openModal({
                    open: true,
                    modalType: modalName.successModal,
                    modalContent: "Authentication added successfully",
                  })
                );
              }
            }}
            width="w-[150px]"
            height="h-[40px]"
            title={!codeSent ? "Send Code" : "Verify"}
            textStyle="uppercase text-white font-semibold"
            backgrounColor="bg-primary"
          />
        </div>
      </div>
    </CustomModal>
  );
};

export default SmsVerification;
