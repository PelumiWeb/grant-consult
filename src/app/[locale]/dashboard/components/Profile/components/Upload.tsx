import React from "react";
import ContentComponent from "../ContentComponent";
import CustomButton from "@/app/[locale]/components/CustomButton";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";

type Props = {};

const UploadProfile = (props: Props) => {
  return (
    <ContentComponent title="Resume Upload" modalType={modalName.Resume}>
      <div>
        <p className="mt-4">Upload your professional resume here</p>

        <div className="flex items-center mt-8">
          <div className="w-[221px] h-[40px] border-[1px] border-borderColor rounded-[5px] mr-5"></div>
          <Upload {...props}>
            <CustomButton
              width="w-[150px]"
              height="h-[40px]"
              backgrounColor="bg-primary"
              title="UPLOAD FILE"
              textStyle="text-white font-semibold "
            />
          </Upload>
        </div>
      </div>
    </ContentComponent>
  );
};

export default UploadProfile;
