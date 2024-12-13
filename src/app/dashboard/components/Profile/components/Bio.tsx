import React from "react";
import ContentComponent from "../ContentComponent";
import { modalName } from "@/app/utils/ModalTypes";

type Props = {};

const Bio = (props: Props) => {
  return (
    <ContentComponent title="Bio" modalType={modalName.BioData}>
      <div className="w-full mt-4">
        <p className="mb-4 text-newPrimaryTextColor">
          Alice is an experienced grant consultant with over 20 years in
          securing funding for NGOs, startups, and corporate organizations.
          Specializes in grant writing, application strategies, and proposal
          development. With a track record of successful awards and a deep
          understanding of funding landscapes, she helps clients navigate
          complex grant requirements to maximize funding opportunities.
        </p>
        <p className="text-newPrimaryTextColor">
          Experienced grant consultant specializing in education, healthcare,
          and social services. Over 10 years in the industry with a proven track
          record of securing and managing grants for NGOs and corporate
          entities. Committed to empowering organizations to achieve sustainable
          funding solutions.
        </p>
      </div>
    </ContentComponent>
  );
};

export default Bio;
