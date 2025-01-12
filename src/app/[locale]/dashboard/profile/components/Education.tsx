import React from "react";
import ContentComponent from "../ContentComponent";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";

type Props = {};

const Education = (props: Props) => {
  return (
    <ContentComponent
      title="Education & Certification"
      modalType={modalName.editEducation}>
      <ul className="mt-4 list-disc">
        <li className="ml-6">
          <p>
            Master of Science (MSc) in Nonprofit Management and Philanthropy
          </p>
        </li>
        <li className="ml-6">
          {" "}
          <p>Bachelor of Arts (BA) in Public Administration</p>{" "}
        </li>
        <li className="ml-6">
          {" "}
          <p>
            Certified Grant Writer (CGW) - American Grant Writers’ Association
            (Earned 2020)
          </p>
        </li>
        <li className="ml-6">
          <p>
            Project Management Professional (PMP) - Project Management Institute
            (PMI) (Earned 2019)
          </p>
        </li>
      </ul>
    </ContentComponent>
  );
};

export default Education;
