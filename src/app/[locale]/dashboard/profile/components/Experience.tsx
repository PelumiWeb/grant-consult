import React from "react";
import ContentComponent from "../ContentComponent";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";

type Props = {};

const Experience = (props: Props) => {
  return (
    <ContentComponent title="Experience" modalType={modalName.Experience}>
      <div className="mt-4 w-[405px]">
        <div>
          <p className="font-bold">Senior Grant Consultant </p>
          <p className="font-semibold">ABC Consulting Group</p>
          <p className="font-normal">January 2020 - Present</p>
        </div>
        <ul className="list-disc mt-4">
          <p className="font-bold">Relevant Grants and Projects</p>
          <li className="ml-6">
            <div className="mt-4">
              <p className="font-semibold">
                Grant Title:{" "}
                <span className="font-normal">
                  Community Health Initiative Grant
                </span>
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Date Awarded: <span className="font-normal">March 2022</span>
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Role in Project:{" "}
                <span className="font-normal">Lead Consultant</span>
              </p>
            </div>
          </li>

          <p className="font-bold mt-4 ml-6">Impacts/Results</p>
          <li className="ml-6">
            <p className="font-normal">
              Secured $500,000 in funding to improve health services in
              underserved areas.
            </p>
          </li>
          <li className="ml-6">
            <p className="font-normal">
              Increased outreach capacity by 40%, directly impacting over 5,000
              individuals.
            </p>
          </li>

          <li className="ml-6">
            <div className="mt-4">
              <p className="font-semibold">
                Grant Title:{" "}
                <span className="font-normal">
                  Environmental Sustainability Program Grant
                </span>
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Date Awarded: <span className="font-normal">October 2021</span>
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Role in Project:{" "}
                <span className="font-normal">Application Reviewer</span>
              </p>
            </div>
          </li>

          <p className="font-bold mt-4 ml-6">Impacts/Results</p>
          <li className="ml-6">
            <p className="font-normal">
              Provided guidance on key sustainability metrics, improving the
              program’s funding eligibility.
            </p>
          </li>
          <li className="ml-6">
            <p className="font-normal">
              Enhanced project success rate by 30% through detailed proposal
              refinement and strategic consultation
            </p>
          </li>
        </ul>
      </div>
    </ContentComponent>
  );
};

export default Experience;
