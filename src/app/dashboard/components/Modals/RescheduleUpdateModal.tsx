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
import { DatePicker, TimePicker } from "antd";

type Props = {};

const RequestUpdateModal = (props: Props) => {
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
      width="1000px"
      height="">
      <div className="w-full h-[588px]">
        <h3>Request to Reschedule Consultation</h3>

        <p className="font-normal text-[14px] leading-[23.24px] text-black w-[60%]">
          If you are unable to attend the scheduled consultation, please select
          a new date and provide a reason for rescheduling.
        </p>

        <LabelInput
          placeholder="Provide a brief reason for requesting this change.
Character limit: 300 characters."
          label="Reason for Rescheduling"
          value=""
          width="w-[510px]"
          height="h-[170px]"
          required
        />

        <div className="my-8">
          <div>
            <p className="text-sm font-normal my-2 flex items-center">
              Proposed Date and Time
              <span className="text-sm font-normal text-errorColor ml-1">
                {" "}
                *
              </span>
            </p>
            <div className="flex items-center w-[62%] justify-between">
              <DatePicker
                className="w-[288px] h-[55px] rouunded-[5px] border-[0.5px] border-borderColor "
                placeholder="DD-MM-YYYY"
              />
              <TimePicker className="w-[288px] h-[55px] rouunded-[5px] border-[0.5px] border-borderColor " />
            </div>
          </div>
        </div>

        <CustomButton
          onClick={() => {
            dispatch(
              openModal({
                open: true,
                modalType: modalName.successModal,
                modalContent:
                  "Your reschedule request has been sent. We will notify you once it's reviewed",
              })
            );
          }}
          width="w-[200px]"
          height="h-[60px]"
          radius="rounded-[5px]"
          backgrounColor="bg-primary"
          title="SUBMIT REQUEST"
          textStyle="font-bold text-[16px] leading-[16px] font-inter text-white"
        />
      </div>
    </CustomModal>
  );
};

export default RequestUpdateModal;
