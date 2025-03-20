"use client";
import React from "react";

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
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import ProfileGeneralHeader from "./ProfileGeneralHeader";
import About from "./components/About";
import EditProfile from "./components/EditProfile";
import SelectUserType from "./components/SelectUserType";
import CustomButton from "@/app/[locale]/components/CustomButton";
import DashboardHeader from "../components/DashboardHeader";
type Props = {};

const ProfileGeneral = (props: Props) => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
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

  return (
    <div
      className={`bg-backgroundColor
 w-full p-2 md:p-8 overflow-scroll h-full md:h-screen scroll-smooth overflow-y-auto no-scrollbar`}
      ref={scrollContainerRef}>
      <DashboardHeader />
      <div className="">
        <ProfileGeneralHeader
          email={user?.email || ""}
          phone="--- --- --- ---"
          image="/generalUser.svg"
          contactInformation="Contact Information"
        />
        <SelectUserType />
        <About
          title="About"
          content=" I am a passionate educator with a strong commitment to promoting
          access to quality education in underserved communities. With over five
          years of experience in grassroots advocacy, I have successfully
          organized literacy programs and mentorship initiatives that have
          impacted over 500 students. I am eager to collaborate on grant
          opportunities that align with my mission to bridge educational gaps
          and empower youth."
        />
        <EditProfile notEditable />
      </div>

      <RenderModals />
    </div>
  );
};

export default ProfileGeneral;
