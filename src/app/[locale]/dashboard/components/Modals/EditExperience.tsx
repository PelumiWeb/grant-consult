import CustomButton from "@/app/[locale]/components/CustomButton";
import LabelInput from "@/app/[locale]/components/LabelInput";
import CustomModal from "@/app/[locale]/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import {
  closeModal,
  openModal,
} from "../../../../../../lib/features/Modal/modalSlice";
import { CalendarOutlined } from "@ant-design/icons";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";

type Props = {};

const EditExprience = (props: Props) => {
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
      <div className="w-full h-full md:px-8">
        <h3>Edit Your Experience</h3>
        <LabelInput
          label="Job Title"
          required
          value="Senior Grant Consultant"
          placeholder=""
          width="w-[600px]"
        />
        <LabelInput
          label="Organisation"
          required
          value="ABC Consulting Group"
          placeholder=""
          width="w-[600px]"
        />
        <div className="w-full md:w-[600px]">
          <p>Employment Dates*</p>
          <div className="flex items-center justify-between w-full flex-col md:flex-row">
            <div className="w-full md:w-[288px]">
              <LabelInput
                label="From"
                value="16-01-2020"
                placeholder=""
                width="w-full"
                righticon={<CalendarOutlined style={{ fontSize: 24 }} />}
              />
            </div>
            <div className="w-full md:w-[288px]">
              <LabelInput
                label="To"
                value="16-01-2020"
                placeholder=""
                width="w-full md:w-[288px]"
                righticon={<CalendarOutlined style={{ fontSize: 24 }} />}
              />
            </div>
          </div>
        </div>
        <LabelInput
          label="Secured Date"
          required
          value="17 -03- 2023"
          placeholder=""
          width="w-[600px]"
        />

        <LabelInput
          label="Relevant Grants and Projects"
          required
          value="Add Relevant Grants and Projects"
          placeholder=""
          width="w-[600px]"
        />
        <LabelInput
          label="Grant Title"
          required
          value="Community Health Grants "
          placeholder=""
          width="w-[600px]"
        />

        <LabelInput
          label="Client or Organisation"
          required
          value="National Health Foundation"
          placeholder="Former supervisor"
          width="w-[600px]"
        />
        <LabelInput
          label="Awarded Date"
          required
          value="17-03-2023"
          placeholder="Former supervisor"
          width="w-[600px]"
        />
        <LabelInput
          label="Role"
          required
          value="Lead Consultant"
          placeholder="Former supervisor"
          width="w-[600px]"
        />

        <LabelInput
          label="Impact Summary*"
          required
          value=""
          placeholder="short description of project outcomes "
          width="w-[600px]"
          height="h-[110px]"
          textArea
        />

        <div className="mt-8 w-[600px] flex items-center justify-between">
          <CustomButton
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.successModal,
                  modalContent: "Experience edited Successfully",
                })
              );
            }}
            width="w-[123px]"
            height="h-[60px]"
            title="Save"
            radius="rounded-[5px]"
            backgrounColor="bg-primary"
            textStyle="font-semibold text-white"
          />
          <p className="underline cursor-pointer font-sembold text-secondaryColor">
            Add New Experience
          </p>
        </div>
      </div>
    </CustomModal>
  );
};

export default EditExprience;
