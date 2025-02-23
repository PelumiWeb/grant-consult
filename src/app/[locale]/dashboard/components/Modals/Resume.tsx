import CustomButton from "@/app/[locale]/components/CustomButton";
import LabelInput from "@/app/[locale]/components/LabelInput";
import CustomModal from "@/app/[locale]/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import { closeModal } from "../../../../../../lib/features/Modal/modalSlice";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";

type Props = {};

const EditResume = (props: Props) => {
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
      <div className="w-full h-full md:h-[524px]">
        <h3>Change Resume Upload</h3>
        <p className="py-8">Upload a new professional resume here.</p>

        <div className="flex items-center mt-8 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-full md:w-[221px] h-[40px] border-[1px] border-borderColor rounded-[5px] md:mr-5"></div>
          {/* <Upload {...props}> */}
          <CustomButton
            width="w-full md:w-[150px]"
            height="h-[40px]"
            backgrounColor="bg-primary"
            title="UPLOAD FILE"
            textStyle="text-white font-semibold "
          />
          {/* </Upload> */}
        </div>

        <div className="mt-8">
          <CustomButton
            width="w-full md:w-[123px]"
            height="h-[60px]"
            title="Save"
            radius="rounded-[5px]"
            backgrounColor="bg-primary"
            textStyle="font-semibold text-white"
          />
        </div>
      </div>
    </CustomModal>
  );
};

export default EditResume;
