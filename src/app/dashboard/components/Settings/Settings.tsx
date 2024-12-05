import React from "react";
import DashboardHeader from "../DashboardHeader";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { Switch } from "antd";

type Props = {};
type settingComponentProps = {
  title: string;
  message: string;
  iconPosition: "top" | "bottom" | "none";
  border?: boolean;
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
        className={`w-[516px] py-4 ${
          data.border && "border-b-[0.5px] border-b-borderColor"
        }`}>
        <div className="w-full flex justify-between items-center">
          <p className="font-semibold text-[18px] leading-[40px]">
            {data.title}
          </p>
          {data.iconPosition === "top" && <Switch />}
        </div>

        <div className="w-full flex justify-between items-center">
          <p>{data.message} </p>
          {data.iconPosition === "bottom" && <Switch />}
        </div>
      </div>
    );
  };

  return (
    <div
      className="bg-backgroundColor  w-full p-8 overflow-scroll h-screen scroll-smooth"
      ref={scrollContainerRef}>
      <DashboardHeader />
      <div>Setting</div>

      <div className="w-full bg-white px-4 py-2">
        <h4 className="font-semibold text-[20px] leading-[26px]">
          Notification Settings
        </h4>
        <SettingsComponent
          title="Email Notification"
          message="Receive updates and reminders via Email"
          iconPosition="bottom"
          border
        />
        <SettingsComponent
          title="SMS Notification"
          message="Receive updates and reminders via text messages"
          iconPosition="bottom"
          border
        />
        <SettingsComponent
          title="Push Notification"
          message="Get real-time notifications on the app."
          iconPosition="bottom"
          border
        />
        <SettingsComponent
          title="Weekly Summary Emails"
          message="Get a weekly performance summary."
          iconPosition="bottom"
        />
      </div>
      <div className="bg-white w-full my-4 p-4">
        <h4 className="font-semibold text-[20px] leading-[26px]">
          Availability
        </h4>
        <div className="flex justify-between items-start w-[516px]  mt-4">
          <div>
            <p className="my-2">Monday - Friday: 10:00 AM - 4:00 PM</p>
            <p>Saturdays: By appointment only</p>
          </div>
          <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-backgroundColor">
            <img src="/edit.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="w-full bg-white px-4 py-2">
        <h4 className="font-semibold text-[20px] leading-[26px]">Security</h4>
        <SettingsComponent
          title="Two - Factor Authentication (2FA)"
          message="Setup with options for Authenticator App or SMS verification"
          iconPosition="top"
          border
        />
        <SettingsComponent
          title="Change Password"
          message="Security settings"
          iconPosition="none"
          border
        />
        <SettingsComponent
          title="Push Notification"
          message="Get real-time notifications on the app."
          iconPosition="bottom"
          border
        />
        <SettingsComponent
          title="Weekly Summary Emails"
          message="Get a weekly performance summary."
          iconPosition="bottom"
        />
      </div>
    </div>
  );
};

export default Settings;
