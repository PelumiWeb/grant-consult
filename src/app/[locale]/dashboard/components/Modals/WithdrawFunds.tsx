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
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";

type Props = {};
type bankDataProps = {
  id: number;
  name: string;
  bankName: string;
  banklogo: string;
}[];

const bankData: bankDataProps = [
  {
    id: 1,
    name: "Alice Brooklyn",
    bankName: "Globus Bank - 6712784567",
    banklogo: "/Bank1.svg",
  },
  {
    id: 2,
    name: "Alice Brooklyn",
    bankName: "Bank of America - 6712784567",
    banklogo: "/Bank2.svg",
  },
];

const WithdrawFunds = (props: Props) => {
  const open = useAppSelector((state) => state.modal.open);
  const dispatch = useAppDispatch();
  const [activeCard, setActiveCard] = React.useState(bankData[0].id);
  // console.log(open)
  const openMmodal = () => {
    if (open) {
      dispatch(closeModal());
    }
  };
  const BankDetails = ({ data }: any) => {
    return (
      <div className="mt-4">
        <div
          onClick={() => setActiveCard(data.id)}
          className={`${
            activeCard === data.id
              ? "border-buttonPrimary"
              : "border-borderColor"
          } border ${
            activeCard === data.id ? "bg-[#F5FFFD]" : "bg-white"
          } flex h-[65px] items-center`}>
          <Checkbox className="rounded-full mr-8 ml-4" />
          {/* Bank type */}
          <img src={data.banklogo} className="w-[40px] h-[30px]" />
          <div className=" ml-8">
            <p className="text-sm font-semibold text-black">{data.name}</p>
            <p className="text-sm font-medium text-textColor">
              {data.bankName}
            </p>
          </div>
        </div>
        <div className="flex w-full self-end mt-4 justify-end">
          <button>
            <p className="text-secondaryColor font-medium mx-4 cursor-pointer">
              Set as Default
            </p>
          </button>
          <button
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.editBankAccount,
                })
              );
            }}>
            <p className="text-buttonPrimary font-medium mx-4">Edit</p>
          </button>
          <button>
            <p className="text-errorColor font-medium ml-4">Remove</p>
          </button>
        </div>
      </div>
    );
  };
  return (
    <CustomModal
      open={open}
      setOpen={() => openMmodal()}
      width="738px"
      height="">
      <div className="w-full h-full">
        <p className="font-extrabold text-[24px] leading-[36px] text-primary">
          Withdraw Funds
        </p>

        <div className="w-[618px] h-[130px] rounded-[5px] border bg-[#FEFAED] border-[#FBC848] flex flex-col justify-around py-4 px-4 mt-8">
          <p className="text-[20px] leading-[26px] text-black">
            Current Wallet Balance
          </p>
          <p className="text-buttonPrimary text-[24px] leading-[37px] font-semibold ">
            $2300
          </p>
        </div>
        <LabelInput
          label="Enter withdrawal Amount"
          placeholder=""
          value=""
          width="w-full"
          height="h-[55px]"
        />

        <h4 className="font-semibold text-[20px] leading-[26px]">
          Saved Bank Accounts
        </h4>

        <div className="flex justify-between w-full">
          <p className="font-medium text-[12px] leading-[17px] text-textColor">
            Select any of the previously saved accounts or add a new one
          </p>
          <button
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.addNewBank,
                })
              );
            }}>
            <p className="text-buttonPrimary ">
              +{" "}
              <span className="underline text-buttonPrimary ">
                {" "}
                Add New Bank
              </span>
            </p>
          </button>
        </div>

        {bankData.map((data) => (
          <BankDetails data={data} />
        ))}
      </div>

      <div className=" mt-4 w-[60%] flex justify-between items-center">
        <CustomButton
          width="w-[200px]"
          height="h-[50px]"
          radius="rounded-[5px]"
          backgrounColor="bg-buttonPrimary"
          title="WITHDRAW FUNDS"
          textStyle="text-white font-semibold "
          onClick={() => {
            dispatch(
              openModal({
                open: true,
                modalType: modalName.pinModal,
              })
            );
          }}
        />
        <CustomButton
          onClick={() => openMmodal()}
          title="CANCEL"
          width="w-[144px]"
          height="h-[50px]"
          radius="rounded-[5px]"
          backgrounColor="bg-borderColor"
          textStyle="text-white font-semibold "
        />
      </div>
    </CustomModal>
  );
};

export default WithdrawFunds;
