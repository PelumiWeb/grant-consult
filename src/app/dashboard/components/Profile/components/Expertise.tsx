import React from "react";
import ProfileComponent from "../ProfileComponent";
import { modalName } from "@/app/utils/ModalTypes";

type Props = {};

const Expertise = (props: Props) => {
  return (
    <ProfileComponent title="Expertise" modalType={modalName.Expertise}>
      <ul className="mt-4 list-disc">
        <li className="ml-6">
          <p>Grant Writing</p>
        </li>
        <li className="ml-6">
          {" "}
          <p>Project Management</p>{" "}
        </li>
        <li className="ml-6">
          {" "}
          <p>Funding Strategy Development</p>
        </li>
        <li className="ml-6">
          <p>Impact Assessment and Reporting</p>
        </li>
        <li className="ml-6">
          <p>Nonprofit Consulting</p>
        </li>
        <li className="ml-6">
          <p>Stakeholder Management</p>
        </li>
      </ul>
    </ProfileComponent>
  );
};

export default Expertise;
