import React from "react";
import ContentComponent from "../ContentComponent";
import { modalName } from "@/app/utils/ModalTypes";

type Props = {
  notEditable?: boolean;
};

const About = (props: Props) => {
  return (
    <ContentComponent title="About" modalType={modalName.editAboutModal}>
      <div className="w-full mt-4">
        <p className="mb-4 text-newPrimaryTextColor">
          I am a passionate educator with a strong commitment to promoting
          access to quality education in underserved communities. With over five
          years of experience in grassroots advocacy, I have successfully
          organized literacy programs and mentorship initiatives that have
          impacted over 500 students. I am eager to collaborate on grant
          opportunities that align with my mission to bridge educational gaps
          and empower youth."
        </p>
      </div>
    </ContentComponent>
  );
};

export default About;
