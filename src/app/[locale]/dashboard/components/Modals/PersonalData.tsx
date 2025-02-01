import CustomButton from "@/app/[locale]/components/CustomButton";
import LabelInput from "@/app/[locale]/components/LabelInput";
import CustomModal from "@/app/[locale]/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import { closeModal } from "../../../../../../lib/features/Modal/modalSlice";

type Props = {};

const PersonalData = (props: Props) => {
  const open = useAppSelector((state) => state.modal.open);
  const dispatch = useAppDispatch();
  // console.log(open)
  const openMmodal = () => {
    if (open) {
      dispatch(closeModal());
    }
  };
  return (
    <CustomModal open={open} setOpen={() => openMmodal()} width="1000px">
      <div className="w-full h-[1233px]">
        <h3>Edit Personal Data</h3>
        <div>
          <LabelInput
            width="w-[600px]"
            label={"First Name"}
            value=""
            required={true}
            placeholder="Enter First Name"
          />
          <LabelInput
            width="w-[600px]"
            label={"Last Name"}
            value=""
            required={true}
            placeholder="Enter Last Name"
          />
          <LabelInput
            width="w-[600px]"
            label={"Additional Name"}
            value=""
            required={true}
            placeholder="Enter Additional Name"
          />
          <LabelInput
            width="w-[600px]"
            label={"Email Address"}
            value=""
            required={true}
            placeholder="Enter First Name"
          />
          <LabelInput
            width="w-[600px]"
            label={"Phone Number"}
            value=""
            required={true}
            placeholder="Phone Number"
          />
          <LabelInput
            width="w-[600px]"
            label={"Country/Region"}
            value=""
            required={true}
            placeholder="Enter First Name"
            select
          />
          <LabelInput
            width="w-[600px]"
            label={"Headline"}
            value=""
            required={true}
            placeholder="Write Headline"
            textArea
            height="h-[110px]"
          />
          <LabelInput
            width="w-[600px]"
            label={"Years of Experience"}
            value=""
            required={true}
            placeholder="Select year of Experience"
            select
          />
          <div className="flex md:items-center flex-col md:flex-row">
            <LabelInput
              width="w-[288px]"
              label={"Birthday"}
              value=""
              required={true}
              placeholder="Select year of Experience"
              select
              mr="mr-24"
            />
            <div className="md:mt-9 md:ml-4">
              <LabelInput
                width="w-[288px]"
                value=""
                // required={true}
                placeholder="Select year of Experience"
                select
              />
            </div>
          </div>
          <div className="mt-8">
            <CustomButton
              width="w-[123px]"
              height="h-[60px]"
              title="Save"
              radius="rounded-[5px]"
              backgrounColor="bg-primary"
              textStyle="font-semibold text-white"
            />
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default PersonalData;
