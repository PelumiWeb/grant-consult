"use client";
import { Dropdown, Input, Select } from "antd";
import Image from "next/image";
import React from "react";
import { useAppSelector } from "../../../../../lib/hooks";
import { useLocale } from "next-intl";
import useHandleNavigation from "../../utils/HandleNavigation";
import { useDispatch } from "react-redux";
import { logout } from "../../../../../lib/features/User/userSlice";

type Props = {
  onChange?: any;
};

const DashboardHeader = (props: Props) => {
  const { isScrolled } = useAppSelector((state) => state.scrolled);
  const locale = useLocale();
  const handleNavigation = useHandleNavigation();
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useDispatch()

  return (
    <div
      className={`${
        isScrolled &&
        "bg-white border-b-borderColor border-b-[.5px] h-[100px] z-30 px-2"
      } flex items-center justify-between sticky -top-10  transition-all`}>
      <div className="w-[40%]" onClick={() => handleNavigation(`/`)}>
        <img src="/grantLogo.svg" />
      </div>

      <div className="w-[60%] flex items-center justify-between">
        {/* Input */}
        <div className="flex items-center h-[40px] w-[234px]">
          <Input
            className="w-[80%] h-full rounded-r-[0px] "
            placeholder="Search Site Content"
          />
          <div className="bg-primary w-[20%] h-full flex items-center justify-center rounded-r-[10px] ">
            <img src="/searchgrant.svg" className="w-[20px]" />
          </div>
        </div>

        {/* Select Language */}

        <Select
          className="w-[100px] h-[40px] rounded-[3.75px] bg-white border-[0.3px] border-borderColor ml-4"
          onChange={props.onChange}
          style={{ background: "white" }}
          defaultValue={"sample"}
          dropdownStyle={{ background: "white" }}
          options={[
            {
              value: "sample",
              label: (
                <div className="flex w-full items-center">
                  <img src="/united-kingdon.svg" />
                  <p className=" text-sm  text-center text-grantBlack uppercase ml-2">
                    {locale}
                  </p>
                </div>
              ),
            },
          ]}
          // defaultValue={"default"}
          placeholder
        />
        <div className="ml-4">
          <img src="/grant-notification.svg" />
        </div>

        <Dropdown
          overlayClassName="w-[100px]"
          menu={{
            items: [
              {
                key: "1",
                label: (
                  <a
                    // target="_blank"
                    rel="noopener noreferrer"
                    // href="/auth/signup"
                    onClick={() => {
                      handleNavigation(`/consultant/become`);
                    }}>
                    <p className="text-primaryBlack font-semibold text-[13px] text-center">
                      My Favourites
                    </p>
                  </a>
                ),
              },
              {
                key: "2",
                label: (
                  <a
                    // target="_blank"
                    rel="noopener noreferrer"
                    // href="/auth/signup"
                    onClick={() => {
                      handleNavigation(`/dashboard/profile`);
                    }}>
                    <p className="text-primaryBlack font-semibold text-[13px] text-center">
                      Update Profile
                    </p>
                  </a>
                ),
              },
              {
                key: "3",
                label: (
                  <a
                    // target="_blank"
                    rel="noopener noreferrer"
                    // href="/auth/signup"
                    onClick={() => {
                      handleNavigation(`/dashboard/settings`);
                    }}>
                    <p className="text-primaryBlack font-semibold  text-[13px] text-center">
                      My Account Settings
                    </p>
                  </a>
                ),
              },
              {
                key: "4",
                label: (
                  <a
                    // target="_blank"
                    rel="noopener noreferrer"
                    // href="/auth/signup"
                    onClick={() => {
                      handleNavigation(`/dashboard/help`);
                    }}>
                    <p className="text-primaryBlack font-semibold  text-[13px] text-center">
                      Help & Support
                    </p>
                  </a>
                ),
              },
              {
                key: "5",
                label: (
                  <a
                    // target="_blank"
                    rel="noopener noreferrer"
                    // href="/auth/signup"
                    onClick={() => {
                      // handleNavigation(`/consultant/become`);
                      dispatch(logout());
                    }}>
                    <p className="text-primaryBlack font-semibold text-[13px] text-center">
                      Logout
                    </p>
                  </a>
                ),
              },
            ],
          }}
          placement="bottom">
          <div className="flex items-center ml-4">
            <Image
              className=""
              src="/avatargrant.svg"
              alt="Grant Logo"
              width={40}
              height={40}
            />

            <p className="text-primary mx-4">{user?.fullName}</p>

            <Image
              className=""
              src="/dropdowngrant.svg"
              alt="Grant Logo"
              width={8}
              height={5}
            />
          </div>
        </Dropdown>

        {/* <div className="w-[75px] h-[30px] rounded-[3.75px] bg-white border-[0.3px] border-borderColor"></div> */}
      </div>
    </div>
  );
};

export default DashboardHeader;
