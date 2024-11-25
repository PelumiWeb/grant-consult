"use client";
import React from "react";
import DashboardHeader from "../DashboardHeader";
import ProfileHeader from "./ProfileHeader";
import ProfileComponent from "./ProfileComponent";
import CustomButton from "@/app/components/CustomButton";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import Bio from "./components/Bio";
import Expertise from "./components/Expertise";
import Availability from "./components/Availability";
import Experience from "./components/Experience";
import Education from "./components/Education";
import SecuredGrant from "./components/SecuredGrant";
import UploadProfile from "./components/Upload";
import References from "./components/References";
import CustomModal from "@/app/components/Modal";
import LabelInput from "@/app/components/LabelInput";
import RenderModals from "../RenderModals";
type Props = {};

const Profile = (props: Props) => {
  const openModal = () => {};
  const imageProps: UploadProps = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className="bg-backgroundColor  w-full p-8 overflow-scroll h-screen">
      <DashboardHeader />
      <div className="">
        <ProfileHeader />
        <Bio />
        <Expertise />
        <Availability />
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
