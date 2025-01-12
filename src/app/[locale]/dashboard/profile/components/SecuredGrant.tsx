import React from "react";
import ContentComponent from "../ContentComponent";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";

type Props = {};

const SecuredGrant = (props: Props) => {
  return (
    <ContentComponent title="Secured Grants" modalType={modalName.SecureGrant}>
      <div className="border-borderColor border-[.5px] border-solid p-2  mt-8">
        <ul className="mt-4 list-disc w-[428px] ">
          <p className="font-bold">Community Health Grant</p>
          <li className="ml-6">
            <p>Awarded by: National Health Foundation.</p>
          </li>
          <li className="ml-6">
            {" "}
            <p>Awarded Date: 17- 03 -2023</p>{" "}
          </li>
          <li className="ml-6">
            {" "}
            <p>Role: Lead Consultant</p>
          </li>
          <li className="ml-6">
            <p>
              Impact: Secured $250K to expand health services, benefiting 5,000+
              people.
            </p>
          </li>
        </ul>
      </div>
      <div className="border-borderColor border-[.5px] border-solid p-2  mt-8">
        <ul className="mt-4 list-disc w-[428px] ">
          <p className="font-bold"> Youth Empowerment Grantt</p>
          <li className="ml-6">
            <p>Awarded by: Global Youth Fund.</p>
          </li>
          <li className="ml-6">
            {" "}
            <p>Awarded Date: August 2022</p>{" "}
          </li>
          <li className="ml-6">
            {" "}
            <p>Role: Reviewer & Advisor</p>
          </li>
          <li className="ml-6">
            <p>
              Impact: Directed $100K for vocational training, achieving 70% job
              placements.
            </p>
          </li>
        </ul>
      </div>
      <div className="border-borderColor border-[.5px] border-solid p-2  mt-8">
        <ul className="mt-4 list-disc w-[428px] ">
          <p className="font-normal"> Sustainable Agriculture Grant</p>
          <li className="ml-6">
            <p>Awarded by: Green Earth Foundation..</p>
          </li>
          <li className="ml-6">
            {" "}
            <p>Awarded Date: 06 -12 - 2021</p>{" "}
          </li>
          <li className="ml-6">
            {" "}
            <p>Role: Project Coordinator</p>
          </li>
          <li className="ml-6">
            <p>
              Impact: Led $500K eco-farming project, boosting yields by 15% with
              reduced pesticide use.
            </p>
          </li>
        </ul>
      </div>
    </ContentComponent>
  );
};

export default SecuredGrant;
