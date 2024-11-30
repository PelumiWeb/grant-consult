import CustomButton from "@/app/components/CustomButton";
import LabelInput from "@/app/components/LabelInput";
import CustomModal from "@/app/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { closeModal } from "../../../../../lib/features/Modal/modalSlice";
import { DatePicker } from "antd";
import type { TimePickerProps } from "antd";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

type Props = {};

const RescheduleModal = (props: Props) => {
  const open = useAppSelector((state) => state.modal.open);
  const dispatch = useAppDispatch();
  // console.log(open)
  const openMmodal = () => {
    if (open) {
      dispatch(closeModal());
    }
  };

  const onChange: TimePickerProps["onChange"] = (time, timeString) => {
    console.log(time, timeString);
  };
  return (
    <CustomModal
      open={open}
      setOpen={() => openMmodal()}
      width="1000px"
      height="">
      <div className="w-full h-[588px] px-4 ">
        <h3>Request to Reschedule Consultation</h3>
        <p className="py-8 w-[480px]">
          If you are unable to attend the scheduled consultation, please select
          a new date and provide a reason for rescheduling.
        </p>

        <LabelInput
          value=""
          label="Reason for Rescheduling"
          placeholder="Provide a brief reason for requesting this change.
Character limit: 300 characters."
          textArea
          height="h-[170px]"
          width="w-[510px]"
          required
        />

        <div className="w-full">
          <p className="mb-4">
            Proposed Date and Time<span className="text-errorColor">*</span>
          </p>
          <div className="flex items-center">
            <DatePicker className="w-[288px] h-[55px] " />
            <TimePicker
              className="w-[288px] h-[55px] ml-4"
              onChange={onChange}
              defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
            />
          </div>
        </div>

        <div className="mt-8">
          <CustomButton
            width="w-[183px]"
            height="h-[60px]"
            title="Submit Request"
            radius="rounded-[5px]"
            backgrounColor="bg-primary"
            textStyle="font-bold text-white uppercase"
          />
        </div>
      </div>
    </CustomModal>
  );
};

export default RescheduleModal;
