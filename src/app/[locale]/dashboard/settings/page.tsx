"use client";

import React, { MouseEvent } from "react";
import DashboardHeader from "../components/DashboardHeader";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { Checkbox, Switch } from "antd";
import { openModal } from "../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";
import RenderModals from "@/app/[locale]/components/RenderModals";

type Props = {};
type settingComponentProps = {
  title?: string;
  message: string;
  iconPosition: "top" | "bottom" | "none";
  border?: boolean;
  edit?: boolean;
  showTitle?: boolean;
  checker?: boolean;

  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
};

const Settings = (props: Props) => {
  const dispatch = useAppDispatch();
  const dashboardRoute = useAppSelector((state) => state.dashboard);

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop; // Get the scroll position
      console.log("Scroll Top:", scrollTop); // Debugging scroll value
      dispatch(setIsScrolled(scrollTop > 50));
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const SettingsComponent = (data: settingComponentProps) => {
    return (
      <div
        onClick={data.onClick}
        className={`w-full md:w-[516px] py-4 flex justify-between items-center ${
          data.border && "border-b-[0.5px] border-b-borderColor "
        }`}>
        <div className="w-full">
          {data?.showTitle && (
            <div className="w-full flex justify-between items-center">
              <p className="font-semibold text-[18px] leading-[28px] md:leading-[40px] text-primary">
                {data.title}
              </p>
              <div className="hidden md:block">
                {data.iconPosition === "top" && <Switch size="default" />}
              </div>
              <div className="block md:hidden">
                {data.iconPosition === "top" && <Switch size="small" />}
              </div>
              {/* {data.iconPosition === "top" && <Switch />} */}
            </div>
          )}

          <div className="w-full flex justify-between items-center">
            <p className="font-semibold text-[14px] leading-[23px] text-textColor">
              {data.message}{" "}
            </p>
            <div className="hidden md:block">
              {data.iconPosition === "bottom" && <Switch size="default" />}
            </div>

            <div className="block md:hidden">
              {data.iconPosition === "bottom" && <Switch size="small" />}
            </div>
          </div>
        </div>

        {/* Edit Icon */}
        {data.edit && (
          <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-backgroundColor">
            <img src="/edit.svg" alt="" />
          </div>
        )}
        {data.checker && <Checkbox />}
      </div>
    );
  };

  return (
    <div
      className="bg-backgroundColor  w-full p-4 md:p-8 overflow-scroll h-full md:h-screen scroll-smooth"
      ref={scrollContainerRef}>
      <DashboardHeader />
      <div className="w-full bg-white px-4 py-4 mt-8">
        <h4 className="font-semibold text-[20px] leading-[26px]">
          Notification Settings
        </h4>
        <SettingsComponent
          title="Email Notification"
          message="Receive updates and reminders via Email"
          iconPosition="bottom"
          border
          showTitle
        />
        <SettingsComponent
          title="SMS Notification"
          message="Receive updates and reminders via text messages"
          iconPosition="bottom"
          border
          showTitle
        />
        <SettingsComponent
          title="Push Notification"
          message="Get real-time notifications on the app."
          iconPosition="bottom"
          border
          showTitle
        />
        <SettingsComponent
          title="Weekly Summary Emails"
          message="Get a weekly performance summary."
          iconPosition="bottom"
          showTitle
        />
      </div>
      <div className="bg-white w-full my-4 p-4">
        <h4 className="font-semibold text-[20px] leading-[26px]">
          Availability
        </h4>
        <div className="flex justify-between items-start w-full lg:w-[516px]  mt-4">
          <div>
            <p className="my-2 text-[14px] leading-[23px] ">
              Monday - Friday: 10:00 AM - 4:00 PM
            </p>
            <p className="my-2 text-[14px] leading-[23px] ">
              Saturdays: By appointment only
            </p>
          </div>
          <div
            className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-backgroundColor 
            cursor-pointer"
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.EditAvailable,
                })
              );
            }}>
            <img src="/edit.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="w-full bg-white px-4 py-2">
        <h4 className="font-semibold text-[20px] leading-[26px] mb-4">
          Security
        </h4>
        <SettingsComponent
          title="Two - Factor Authentication (2FA)"
          message="Setup with options for Authenticator App or SMS verification"
          iconPosition="top"
          border
          showTitle
          onClick={() => {
            dispatch(
              openModal({
                open: true,
                modalType: modalName.twoStepVerification,
              })
            );
          }}
        />
        <SettingsComponent
          title="Change Password"
          message="Security settings"
          iconPosition="none"
          showTitle
          border
          edit
          onClick={() => {
            dispatch(
              openModal({
                open: true,
                modalType: modalName.changePasswordModal,
              })
            );
          }}
        />
        <SettingsComponent
          onClick={() => {
            dispatch(
              openModal({
                open: true,
                modalType: modalName.setTransactionsModal,
              })
            );
          }}
          title="Set Transaction Pin"
          message="Necessary for funds withdrawal"
          iconPosition="none"
          showTitle
          border
          edit
        />
        <SettingsComponent
          title="Forgot Transaction Pin?"
          message="Reset PIN here"
          iconPosition="none"
          showTitle
          onClick={() => {
            dispatch(
              openModal({
                open: true,
                modalType: modalName.forgotTransactionPin,
              })
            );
          }}
          //   border
          edit
        />
      </div>

      <div className="w-full bg-white px-4 py-2 mt-4">
        <h4 className="font-semibold text-[20px] leading-[26px] mb-4">
          Privacy Settings
        </h4>
        <p className="text-primary font-semibold text-[18px] leading-[40px]">
          Manage Your Profile Visibility
        </p>
        <SettingsComponent message="Public" iconPosition="none" checker />
        <SettingsComponent
          message="Visible only to registered users"
          iconPosition="none"
          checker
        />
        <SettingsComponent message="Private" iconPosition="none" checker />
      </div>

      <div className="w-full bg-white px-4 py-2 mt-4">
        <h4 className="font-semibold text-[20px] leading-[26px] mb-4">
          Email Preferences
        </h4>

        <SettingsComponent message="General updates" iconPosition="bottom" />
        <SettingsComponent
          message="New grant assignments"
          iconPosition="bottom"
        />
        <SettingsComponent
          message="Platform announcements."
          iconPosition="bottom"
        />
      </div>

      <div className="w-full bg-white px-4 py-2 mt-4">
        <h4 className="font-semibold text-[20px] leading-[26px] mb-4">
          Accessibility
        </h4>

        <p className="text-primary font-semibold text-[18px] leading-[40px] mt-4">
          Choose the right accessibility profile for you
        </p>

        <SettingsComponent
          message="Visually impaired mode"
          iconPosition="bottom"
        />
        <SettingsComponent
          message="Cognitive Disability Mode"
          iconPosition="bottom"
        />
        <SettingsComponent message="Dark Theme Mode" iconPosition="bottom" />
      </div>

      <div className="w-full bg-white mt-4 p-4">
        <button
          onClick={() => {
            dispatch(
              openModal({
                open: true,
                modalType: modalName.deleteAccountModal,
              })
            );
          }}>
          <h4 className="text-errorColor font-semibold leading-[26px] text-[20px]">
            Deactivate Account
          </h4>
        </button>
      </div>
      <RenderModals />
    </div>
  );
};

export default Settings;
