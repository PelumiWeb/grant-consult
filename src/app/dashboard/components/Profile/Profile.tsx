import React from "react";
import DashboardHeader from "../DashboardHeader";
import ProfileHeader from "./ProfileHeader";
import ProfileComponent from "./ProfileComponent";
import CustomButton from "@/app/components/CustomButton";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
type Props = {};

const Profile = (props: Props) => {
  const imageProps: UploadProps = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className="bg-backgroundColor  w-full p-8 overflow-scroll h-screen">
      <DashboardHeader />
      <div className="">
        <ProfileHeader />
        <ProfileComponent title="Bio">
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
              Experienced grant consultant specializing in education,
              healthcare, and social services. Over 10 years in the industry
              with a proven track record of securing and managing grants for
              NGOs and corporate entities. Committed to empowering organizations
              to achieve sustainable funding solutions.
            </p>
          </div>
        </ProfileComponent>
        <ProfileComponent title="Expertise">
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
        <ProfileComponent title="Availability">
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
        <ProfileComponent title="Experience">
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
                    Date Awarded:{" "}
                    <span className="font-normal">March 2022</span>
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
                  Increased outreach capacity by 40%, directly impacting over
                  5,000 individuals.
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
                    Date Awarded:{" "}
                    <span className="font-normal">October 2021</span>
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
        </ProfileComponent>
        <ProfileComponent title="Education & Certification">
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
                Certified Grant Writer (CGW) - American Grant Writers’
                Association (Earned 2020)
              </p>
            </li>
            <li className="ml-6">
              <p>
                Project Management Professional (PMP) - Project Management
                Institute (PMI) (Earned 2019)
              </p>
            </li>
          </ul>
        </ProfileComponent>
        <ProfileComponent title="Secured Grants">
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
                  Impact: Secured $250K to expand health services, benefiting
                  5,000+ people.
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
                  Impact: Directed $100K for vocational training, achieving 70%
                  job placements.
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
                  Impact: Led $500K eco-farming project, boosting yields by 15%
                  with reduced pesticide use.
                </p>
              </li>
            </ul>
          </div>
        </ProfileComponent>
        <ProfileComponent title="Resume Upload">
          <div>
            <p className="mt-4">Upload your professional resume here</p>

            <div className="flex items-center mt-8">
              <div className="w-[221px] h-[40px] border-[1px] border-borderColor rounded-[5px] mr-5"></div>
              <Upload {...props}>
                <CustomButton
                  width="w-[150px]"
                  height="h-[40px]"
                  backgrounColor="bg-primary"
                  title="UPLOAD FILE"
                  textStyle="text-white font-semibold "
                />
              </Upload>
            </div>
          </div>
        </ProfileComponent>
        <ProfileComponent title="References">
          <div>
            <div className="border-[.5px] border-borderColor p-4 mt-8">
              <p className="font-medium">
                Name: <span className="font-normal">John D. Miller</span>
              </p>
              <p className="font-medium">
                Title:{" "}
                <span className="font-normal">Directot of Operations</span>
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
        </ProfileComponent>
      </div>
    </div>
  );
};

export default Profile;
