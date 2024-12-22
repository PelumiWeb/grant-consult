import React from "react";
import ContentComponent from "../ContentComponent";
import { modalName } from "@/app/[locale]/utils/ModalTypes";

type Props = {};

const References = (props: Props) => {
  return (
    <ContentComponent title="References" modalType={modalName.References}>
      <div>
        <div className="border-[.5px] border-borderColor p-4 mt-8">
          <p className="font-medium">
            Name: <span className="font-normal">John D. Miller</span>
          </p>
          <p className="font-medium">
            Title: <span className="font-normal">Directot of Operations</span>
          </p>
          <p className="font-medium">
            Organization:{" "}
            <span className="font-normal">Global Aid Network (GAIN)</span>
          </p>
          <p className="font-medium">
            Email:{" "}
            <span className="font-normal text-secondaryColor">
              john.miller@gaingroup.
            </span>
          </p>
          <p className="font-medium">
            Phone:{" "}
            <span className="font-normal text-secondaryColor">
              +1 212-555-0173
            </span>
          </p>
          <p className="font-medium">
            Relationship:
            <span className="font-normal text-secondaryColor">
              Former Supervisor
            </span>
          </p>
        </div>
        <div className="border-[.5px] border-borderColor p-4 mt-8">
          <p className="font-medium">
            Name: <span className="font-normal">Susan K. Reynolds</span>
          </p>
          <p className="font-medium">
            Title: <span className="font-normal"> Executive Director</span>
          </p>
          <p className="font-medium">
            Organization:{" "}
            <span className="font-normal">Health for All Foundation</span>
          </p>
          <p className="font-medium">
            Email:{" "}
            <span className="font-normal text-secondaryColor">
              susan.reynolds@hfa.org
            </span>
          </p>
          <p className="font-medium">
            Phone:{" "}
            <span className="font-normal text-secondaryColor">
              +1 323-555-0423
            </span>
          </p>
          <p className="font-medium">
            Relationship:{" "}
            <span className="font-normal ">Professional Collaborator</span>
          </p>
        </div>
      </div>
    </ContentComponent>
  );
};

export default References;
