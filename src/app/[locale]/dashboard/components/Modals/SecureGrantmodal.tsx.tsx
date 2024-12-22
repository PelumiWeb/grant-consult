import CustomButton from "@/app/[locale]/components/CustomButton";
import LabelInput from "@/app/[locale]/components/LabelInput";
import CustomModal from "@/app/[locale]/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import { closeModal } from "../../../../../../lib/features/Modal/modalSlice";

type Props = {};

const EditReference = (props: Props) => {
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
      <div className="w-full h-full">
        <h3>Edit Secured Grants</h3>
        <LabelInput
          label="Grant Title"
          required
          value="Community Health Grants "
          placeholder=""
          width="w-[600px]"
        />
        <LabelInput
          label="Client or Organisation*"
          required
          value="National Health Foundation "
          placeholder=""
          width="w-[600px]"
        />
        <LabelInput
          label="Secured Date"
          required
          value="17 -03- 2023"
          placeholder=""
          width="w-[600px]"
        />

        <LabelInput
          label="Role"
          required
          value="Lead Consultant"
          placeholder=""
          width="w-[600px]"
        />
        <LabelInput
          label="Impact Summary"
          required
          value=""
          placeholder="short description of project outcomes "
          width="w-[600px]"
          height="h-[110px]"
          textArea
        />

        <LabelInput
          label="Relationship"
          required
          value="+"
          placeholder="Former supervisor"
          width="w-[600px]"
        />

        <div className="mt-8 w-[600px] flex items-center justify-between">
          <CustomButton
            width="w-[123px]"
            height="h-[60px]"
            title="Save"
            radius="rounded-[5px]"
            backgrounColor="bg-primary"
            textStyle="font-semibold text-white"
          />
          <p className="underline cursor-pointer font-sembold text-secondaryColor">
            Add New Awards
          </p>
        </div>
      </div>
    </CustomModal>
  );
};

export default EditReference;
