import React from "react";
import { useDispatch } from "react-redux";
import {
  openModal,
  selectModal,
} from "../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/utils/ModalTypes";
import { useAppDispatch } from "../../../../../lib/hooks";

type Props = {
  image: string;
  contactInformation: string;
  email: string;
  phone: string;
};

const ProfileGeneralHeader = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="relative w-full h-[454px] flex flex-col mt-16 ">
      {/* Top */}
      <div className=" bg-profileHeaderColor h-[40%]">
        <div className="absolute right-4 top-3 bg-white rounded-full  w-[40px] h-[40px] flex items-center justify-center ">
          <img src="/camera.svg" alt="" />
        </div>
        <div
          className="absolute top-[45%] right-4 bg-backgroundColor rounded-full  w-[40px] h-[40px] flex items-center justify-center cursor-pointer "
          onClick={() =>
            dispatch(
              openModal({
                open: true,
                modalType: modalName.personalData,
              })
            )
          }>
          <img src="/edit.svg" alt="" />
        </div>
      </div>
      {/* Bottom */}
      <div className="bg-white h-[60%]">
        <img src={props.image} className="absolute top-16 left-8" />
        <div className="flex w-full justify-between items-center absolute bottom-20 ml-8">
         
          <div className="mr-20 ">
            <h4 className="font-mono my-2">{props.contactInformation}</h4>
            <div className="flex items-center my-1">
              <img src="/email.svg" alt="" />
              <p className="ml-2 text-secondaryColor ">
                {props.email}
               
              </p>
            </div>
            <div className="flex items-center my-1">
              <img src="/callImage.svg" alt="" />
              <p className="ml-2 text-secondaryColor ">
                {props.phone}
                
                
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileGeneralHeader;
