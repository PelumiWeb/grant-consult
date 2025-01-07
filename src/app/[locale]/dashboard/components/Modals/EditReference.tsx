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
        <h3>Edit Your References</h3>
        <LabelInput
          label="Full Name"
          required
          value="John D. Miller "
          placeholder=""
          width="w-[600px]"
        />
        <LabelInput
          label="Title"
          required
          value="Director of Operations "
          placeholder=""
          width="w-[600px]"
        />
        <LabelInput
          label="Organization"
          required
          value="Global Aid Network (GAIN)"
          placeholder=""
          width="w-[600px]"
        />

        <LabelInput
          label="Email"
          required
          value="john.miller@gaingroup.org"
          placeholder=""
          width="w-[600px]"
        />
        <LabelInput
          label="Phone Number"
          required
          value="+1 212-555-0173"
          placeholder=""
          width="w-[600px]"
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
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.successModal,
                  modalContent: "Reference Saved Successfully",
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
            Add New Reference
          </p>
        </div>
      </div>
    </CustomModal>
  );
};

export default EditReference;
