"use client";
import React from "react";
import DashboardHeader from "../DashboardHeader";
import ProfileHeader from "./ProfileHeader";
import Bio from "./components/Bio";
import Expertise from "./components/Expertise";
import Availability from "./components/Availability";
import Experience from "./components/Experience";
import Education from "./components/Education";
import SecuredGrant from "./components/SecuredGrant";
import UploadProfile from "./components/Upload";
import References from "./components/References";
import RenderModals from "../../../components/RenderModals";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../../../lib/hooks";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
type Props = {};

const Profile = (props: Props) => {
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
 w-full p-8 overflow-scroll h-screen scroll-smooth overflow-y-auto no-scrollbar`}
      ref={scrollContainerRef}>
      <DashboardHeader />
      <div className="">
        <ProfileHeader />
        <Bio />
        <Expertise />
        {/* <Availability /> */}
        <Experience />
        <Education />
        <SecuredGrant />
        <UploadProfile />
        <References />
      </div>
      <RenderModals />
    </div>
  );
};

export default Profile;
