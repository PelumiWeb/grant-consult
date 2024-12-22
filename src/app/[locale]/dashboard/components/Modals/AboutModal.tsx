import CustomButton from "@/app/[locale]/components/CustomButton";
import LabelInput from "@/app/[locale]/components/LabelInput";
import CustomModal from "@/app/[locale]/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import {
  closeModal,
  openModal,
} from "../../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/[locale]/utils/ModalTypes";

type Props = {};

const EditAbout = (props: Props) => {
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
        <h3>Edit About</h3>
        <p className="py-8">
          You can tell us about your achievements, years of experience, skills,
          industry or awards
        </p>

        <LabelInput
          value=""
          placeholder="I am a passionate educator with a strong commitment to promoting access to quality education in underserved communities. With over five years of experience in grassroots advocacy, I have successfully organized literacy programs and mentorship initiatives that have impacted over 500 students. I am eager to collaborate on grant opportunities that align with my mission to bridge educational gaps and empower youth."
          textArea
          height="h-[300px]"
          width="w-[880px]"
        />
        <div className="mt-8">
          <CustomButton
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.successModal,
                  modalContent: "Bio Edited Successfully",
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
        </div>
      </div>
    </CustomModal>
  );
};

export default EditAbout;
