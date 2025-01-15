"use client";
import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import ProfileHeader from "./ProfileHeader";
import Bio from "./components/Bio";
import Expertise from "./components/Expertise";
import Availability from "./components/Availability";
import Experience from "./components/Experience";
import Education from "./components/Education";
import SecuredGrant from "./components/SecuredGrant";
import UploadProfile from "./components/Upload";
import References from "./components/References";
import RenderModals from "../../components/RenderModals";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../../../lib/hooks";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import ProfileGeneralHeader from "./ProfileGeneralHeader";
import About from "./components/About";
import EditProfile from "./components/EditProfile";
import CustomButton from "@/app/[locale]/components/CustomButton";
import EditOrganization from "./components/EditOrganization";
type Props = {};

const ProfileGrant = (props: Props) => {
  const dispatch = useAppDispatch();
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  React.useCallback(() => {
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

  return (
    <div
      className={`bg-backgroundColor
 w-full p-8 overflow-scroll h-screen scroll-smooth overflow-y-auto no-scrollbar`}
      ref={scrollContainerRef}>
      <DashboardHeader />
      <div className="usaidglobal@gmail.com">
        <ProfileGeneralHeader
          email="usaidglobal@gmail.com"
          phone="+1 234 567 89 0"
          image="/grantImage.svg"
          contactInformation="U.S. Agency for International Development (USAID) ·"
        />
        <About
          title="Mission Statement/Bio"
          content="At U.S Agency for International Development, we are revolutionizing the tech industry by fostering a culture of inclusivity and innovation. Our company specializes in developing cutting-edge software solutions for education and healthcare sectors. With a team of 150 talented professionals, we have delivered impactful projects across 15 countries. We aim to partner with organizations that share our vision of using technology to solve real-world problems."
        />
        <EditOrganization notEditable />
      </div>

      <RenderModals />
    </div>
  );
};

export default ProfileGrant;
