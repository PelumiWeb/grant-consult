import React from "react";
import ContentComponent from "../ContentComponent";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";

type Props = {};

const Availability = (props: Props) => {
  return (
    <ContentComponent title="Availability" modalType={modalName.EditAvailable}>
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
    </ContentComponent>
  );
};

export default Availability;
