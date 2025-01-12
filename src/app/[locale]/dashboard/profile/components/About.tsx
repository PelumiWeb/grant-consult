import React from "react";
import ContentComponent from "../ContentComponent";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";

type Props = {
  notEditable?: boolean;
  title: string;
  content: string;
};

const About = (props: Props) => {
  return (
    <ContentComponent title={props.title} modalType={modalName.editAboutModal}>
      <div className="w-full mt-4">
        <p className="mb-4 text-newPrimaryTextColor">{props.content}</p>
      </div>
    </ContentComponent>
  );
};

export default About;
