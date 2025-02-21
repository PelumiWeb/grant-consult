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

const EditBio = (props: Props) => {
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
        <h3>Edit Bio</h3>
        <p className="py-8">
          You can tell us about your achievements, years of experience, skills,
          industry or awards
        </p>

        <LabelInput
          value=""
          placeholder="Alice is an experienced grant consultant with over 20 years in securing funding for NGOs, startups, and corporate organizations. Specializes in grant writing, application strategies, and proposal development. With a track record of successful awards and a deep understanding of funding landscapes, she helps clients navigate complex grant requirements to maximize funding opportunities. 

Experienced grant consultant specializing in education, healthcare, and social services. Over 10 years in the industry with a proven track record of securing and managing grants for NGOs and corporate entities. Committed to empowering organizations to achieve sustainable funding solutions."
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

export default EditBio;
