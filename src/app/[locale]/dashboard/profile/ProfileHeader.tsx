import React from "react";
import { useDispatch } from "react-redux";
import {
  openModal,
  selectModal,
} from "../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";

type Props = {};

const ProfileHeader = (props: Props) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  return (
    <div className="relative w-full h-[545px] md:h-[454px] flex flex-col mt-16 ">
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
        <img src="/profileImage.svg" className="absolute top-16 left-8" />
        <div className="flex w-full justify-between items-start md:items-center absolute bottom-12 flex-col md:flex-row px-4 md:px-0">
          <div className="ml-0 md:ml-8 mt-4 md:mt-0">
            <h4 className="font-mono my-2 text-[24px] leading-[36px]">
              {user?.fullName}
            </h4>
            {/* <p className="text-base text-textColor font-semibold my-1">
              Grant Consultant | NGO Advisor
            </p> */}
            <div className="flex items-center">
              <p className="font-semibold text-[16px] leading-[19px] mr-1 text-textColor">
                Headline:
              </p>
              <p className="font-semibold text-[16px] leading-[19px]">----</p>
            </div>
            <div className="flex items-center ">
              <p className="my-1 mr-1">Years of experience</p>
              <p>---</p>
            </div>
            <div className="flex items-center ">
              <div className="w-[15px] h-[18px]">
                <img
                  src="/locationIcon.svg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="ml-2 text-secondaryColor">--- --- --- ---</p>
            </div>
            {/* <p className="text-secondaryColor my-1">New york, USA</p> */}
          </div>
          <div className="md:mr-20 md:-mt-8">
            <h4 className="font-mono my-2">Contact Information</h4>
            <div className="flex items-center my-1">
              <img src="/email.svg" alt="" />
              <p className="ml-2 text-secondaryColor ">{user?.email}</p>
            </div>
            <div className="flex items-center my-1">
              <img src="/callImage.svg" alt="" />
              {/* <p className="ml-2 text-secondaryColor ">+31 890 783 456</p> */}
              <p className="ml-2 text-secondaryColor ">--- --- --- ---</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
