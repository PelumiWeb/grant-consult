import CustomButton from "@/app/components/CustomButton";
import LabelInput from "@/app/components/LabelInput";
import CustomModal from "@/app/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { closeModal } from "../../../../../lib/features/Modal/modalSlice";
import { DatePicker } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

type Props = {};

const ExtensiionModal = (props: Props) => {
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
      <div className="w-full h-full px-8">
        <h3>Request Extension for Grant Submission</h3>

        <div className="mt-8">
          <p className="text-black text-sm font-semibold mb-4">
            Current Submission Deadline:{" "}
            <span className="text-textColor">December 1, 2024</span>{" "}
          </p>
          <p className="text-black text-sm font-semibold">
            Status of Extension Requested :
            <span className="text-textColor">None</span>{" "}
          </p>
        </div>

        <div>
          <LabelInput
            width="w-[500px]"
            height="h-[170px]"
            textArea
            value=""
            placeholder="Please provide a detailed explanation for requesting an extension.
Character Limit:300-500 characters"
            label="Reason for Extension"
            required
          />

          <div className="mt-8">
            <p>
              Proposed New Deadline{" "}
              <span className="text-sm font-normal text-errorColor ml-1">
                {" "}
                *
              </span>{" "}
            </p>
            <p className="my-4 text-[10px] leading-[13px] text-textColor">
              Select a date that allows sufficient time for completion
            </p>
            <DatePicker
              placeholder="DD-MM-YYYY"
              className="text-black placeholder:text-black w-[290px] h-[55px]"
              suffixIcon={
                <CalendarOutlined
                  className="text-[#1F4E79]"
                  style={{ fontSize: 20 }}
                /> // Use Tailwind CSS classes
              }
            />
          </div>

          <div className="mt-8">
            <p>
              Supporting Document{" "}
              <span className="text-sm font-normal text-errorColor ml-1">
                {" "}
                *
              </span>{" "}
            </p>
            <p className="my-4 text-[10px] leading-[13px] text-textColor">
              Attach any relevant documents to support your request.
            </p>
            <div className="w-full flex items-center mt-4">
              <div className="w-[221px] h-[40px] mr-4 border border-borderColor"></div>
              <CustomButton
                title="Upload file"
                width="w-[150px]"
                height="h-[40px]"
                backgrounColor="bg-primary"
                textStyle="font-semibold text-white uppercase"
              />
            </div>
          </div>
          <div className="mt-8">
            <LabelInput
              label="Additional Notes (Optional)"
              value=""
              textArea
              placeholder="Add any additional comments or information"
              width="w-[370px]"
              height="h-[110px]"
            />
          </div>
        </div>
        <div className="mt-16">
          <CustomButton
            title="SUBMIT REQUEST"
            textStyle="font-bold text-white"
            backgrounColor="bg-primary"
            width="w-[200px]"
            height="h-[60px]"
          />
        </div>
      </div>
    </CustomModal>
  );
};

export default ExtensiionModal;
