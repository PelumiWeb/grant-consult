import React from "react";
import ProfileComponent from "../ProfileComponent";
import { modalName } from "@/app/utils/ModalTypes";

type Props = {};

const Availability = (props: Props) => {
  return (
    <ProfileComponent title="Availability" modalType={modalName.EditAvailable}>
      <div className="mt-4">
        <ul className="list-disc">
          <li className="ml-6">
            <p>Monday - Friday: 10:00 AM - 4:00 PM</p>
          </li>
        </ul>
        <ul>
          <li className="ml-6">
            <p>Saturdays: By appointment only</p>
          </li>
        </ul>
      </div>
    </ProfileComponent>
  );
};

export default Availability;
