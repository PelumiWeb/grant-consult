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

const EditCardModal = (props: Props) => {
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
      width="700px"
      height="">
      <div className="w-full h-full">
        <div>
          <p className="text-textColor py-2 font-bold text-[16px] leading-[19px]">
            Edit Card Details
          </p>
          <div className="w-[530px] h-[170px]  rounded-[6.11px] border border-borderColor ">
            {/* Top */}
            <div className="flex items-center border-b border-b-borderColor justify-between py-1 ">
              <div className="h-[54.81px] w-full cursor-pointer px-4">
                <input
                  type="text"
                  className="h-full w-full outline-none placeholder:text-textColor placeholder:text-[16px] placeholder:leading-[23.24px] placeholder:font-mono placeholder:ml-2 font-mono text-[16px] leading-[23.24px] font-medium"
                  placeholder="Williams Smith"
                />
              </div>
            </div>

            <div className="h-[50px] w-full cursor-pointer flex border-b border-b-borderColor px-4">
              <input
                type="card"
                className="h-full w-full outline-none placeholder:text-textColor placeholder:text-[16px] placeholder:leading-[23.24px] placeholder:font-mono font-mono text-[16px] leading-[23.24px] font-medium"
                placeholder="0000 0000 0000 0000"
              />
              <div className="flex items-center justify-around w-[150px]">
                <img src="/card-visa.png" />
                <img src="/card-master.svg" />
                <img src="/card-pay.svg" />
              </div>
            </div>

            <div className="h-[50px] w-full cursor-pointer flex px-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="h-full w-[50%] border-r border-r-borderColor outline-none"
              />
              <div className="w-[50%] flex justify-between items-center px-4">
                <input type="text" className="h-full w-full outline-none" />
                <img src="/cardIcon.svg" className="" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <CustomButton
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.successModal,
                  modalContent: "Changes Saved  Successfully ",
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

export default EditCardModal;
