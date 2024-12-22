import CustomButton from "@/app/[locale]/components/CustomButton";
import LabelInput from "@/app/[locale]/components/LabelInput";
import CustomModal from "@/app/[locale]/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import {
  closeModal,
  openModal,
} from "../../../../../../lib/features/Modal/modalSlice";
import { Checkbox } from "antd";
import { modalName } from "@/app/[locale]/utils/ModalTypes";

type Props = {};

const TwoStepVerfication = (props: Props) => {
  const open = useAppSelector((state) => state.modal.open);
  const dispatch = useAppDispatch();
  const [selectedTab, setSelectedTab] = React.useState<string>("");

  // console.log(open)
  const openMmodal = () => {
    if (open) {
      dispatch(closeModal());
    }
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setSelectedTab(value);
    // console.log("yooo")
  };

  const renderModal = () => {
    if (selectedTab === "SMS VERIFICATION") {
      return modalName.smsVerfifications;
    } else if (selectedTab === "Authentication App") {
      return modalName.qrAuthentication;
    } else {
      return;
    }
  };

  return (
    <CustomModal
      open={open}
      setOpen={() => openMmodal()}
      width="900px"
      height="">
      <div className="w-full h-full">
        <h3 className="font-semibold text-[24px] leading-[36px] text-primary mb-3">
          Two-step Verification
        </h3>
        <p className="text-textColor text-sm">
          Secure your Grantsconsult account with two-step verification
        </p>

        <LabelInput
          width="w-[288px]"
          height="h-[50px]"
          // onChange={handleChange}
          handleChange={handleChange}
          label="Choose your verification method"
          select
          options={[
            { label: "Authentication App", value: "Authentication App" },
            {
              label: "SMS VERIFICATION",
              value: "SMS VERIFICATION",
            },
          ]}
          placeholder=""
          value=""
        />
        <div className="mt-8">
          <CustomButton
            disabled={selectedTab.length < 1}
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: renderModal(),
                })
              );
            }}
            title="Continue"
            textStyle="uppercase font-semibold text-white"
            width="w-[150px]"
            height="h-[60px]"
            backgrounColor="bg-primary"
          />
        </div>

        <p className="mt-4 text-[12px] leading-[17px] font-medium text-textColor">
          Note: You will be signed out on all devices and remove all your
          remembered devices once this feature is turned on
        </p>
      </div>
    </CustomModal>
  );
};

export default TwoStepVerfication;
