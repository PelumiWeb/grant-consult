"use client";
import React from "react";
import CustomButton from "../components/CustomButton";
import { title } from "process";
import Footer from "../components/Footer";
import { Progress } from "antd";
import useHandleNavigation from "../utils/HandleNavigation";

type Props = {};

type GuidelinesProps = {
  proTip?: boolean;
  proTipList?: string[];
  title: string;
  text: string;
};

type IconProps = {
  icon?: string;
  title?: string;
  id?: number;
  textColor?: string;
  ml?: string;
};

const guidelinesList: IconProps[] = [
  { id: 1, title: "Cover letter", icon: "/guidelines.svg" },
  { id: 2, title: "Executive Summary", icon: "/guidelines2.svg" },
  { id: 3, title: "Statement of Need", icon: "/guidelines3.svg" },
  { id: 4, title: "Objective and Goals", icon: "/guidelines4.svg" },
  { id: 5, title: "Methods & Strategies", icon: "/guidelines5.svg" },
  { id: 6, title: "Execution Plan", icon: "/guidelines6.svg" },
  { id: 7, title: "Budget", icon: "/guidelines7.svg" },
  { id: 8, title: "Organizational Information", icon: "/guidelines8.svg" },
];

const GuidelinesCard = ({
  proTip,
  title,
  text,
  proTipList,
}: GuidelinesProps) => {
  return (
    <div className="w-full  bg-white p-6 my-4 md:m-4 rounded-[5px] ">
      <h4 className="font-semibold text-[20px] leading-[26px] text-primary ">
        {title}
      </h4>

      <p className="text-[16px] leading-[35px] font-mono text-black mt-6">
        {text}
      </p>

      {proTip && (
        <div className="bg-secondarycolor300 p-12 border-l-[8px] border-l-secondaryColor my-4">
          <p className="text-secondaryColor font-semibold font-mono text-[20px] leading-[44px]">
            Pro Tip
          </p>

          <ul className="list-disc text-textColor">
            {proTipList?.map((data) => (
              <li className="ml-8">
                <p className="font-mono font-medium text-[16px] leading-[35px]">
                  {data}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const IconComponent = ({
  id = 1,
  icon,
  title,
  textColor = "text-secondaryColor",
  ml = "ml-0",
}: IconProps) => {
  return (
    <div
      className={` w-[100px] md:w-full  h-[30px] bg-transparent border-none flex items-center my-2 ${ml} `}
      key={id}>
      <img src={icon} alt="" />
      <p
        className={`
                ${textColor} text-[13px] leading-[28px] font-semibold font-mono
                ml-2`}>
        {title}
      </p>
    </div>
  );
};

const page = (props: Props) => {
  const handleNavigation = useHandleNavigation();

  return (
    <div className=" relative w-full p-4 md:p-4  lg:p-16 bg-backgroundColor">
      <div className="  ">
        <div
          className="flex justify-center md:justify-between items-center md:items-start
         flex-col md:flex-row w-full">
          <div className="w-full md:w-[70%] h-full ">
            {/* Grant writing Guiidelines */}
            <div className="w-full h-full bg-white p-6 my-4 md:m-4 rounded-[5px]">
              <p className="text-primary font-semibold font-mono leading-[42px] text-[36px] mb-4">
                Grant Writing Guidelines
              </p>
              <div className="flex items-center mt-2">
                <div className="w-[150px] h-[30px] bg-transparent border-none flex items-center">
                  <img src={"/readingTime.svg"} alt="" />
                  <p
                    className="
                text-[14px] leading-[23px] text-textColor 
                ml-2">
                    {"12 min read"}
                  </p>
                </div>

                <CustomButton
                  IconLeft="/pdf.svg"
                  title="Download PDF"
                  borderWidth="border-[0.9px]"
                  borderColor="border-borderColor"
                  textStyle="text-[14px] leading-[23px] text-textColor leading-[23px] font-semibold"
                  backgrounColor="bg-none"
                  width="w-[180px]"
                  height="h-[30px]"
                  radius="rounded-[5px]"
                />
              </div>
              <div className="w-[90%]">
                <p className="w-full text-[16px] leading-[32px] text-black">
                  Writing a grant proposal is an essential step for individuals,
                  organisations or businesses  to secure funding  to make a
                  difference in one's life, or society at large. We curated this
                  grant writing guide as part of our resource at GrantsConsult
                  in aiding your grant application process.
                </p>
              </div>
            </div>
            <div className="w-full  bg-white p-6 my-4 md:m-4 rounded-[5px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              {guidelinesList.map((guidelines: IconProps) => (
                <IconComponent {...guidelines} />
              ))}
            </div>
            <GuidelinesCard
              title="Cover Letter"
              text="Start with a strong introduction. Briefly introduce yourself or organization, highlight the purpose of the project and specify the funding amount."
              proTip
              proTipList={[
                "Keep it concise - one page maximum",
                "Address to a specific person when possible",
                "Highlight your organization’s credibility",
                "Include contact information",
              ]}
            />
            <GuidelinesCard
              title="Executive Summary"
              text="Think of this as the ('elevator pitch') for your proposal. Give a snapshot of your request and expected outcomes without diving too deep into details."
              proTip
              proTipList={[
                "Problem statement",
                "Solution overview",
                "Funding requirements",
                "Organization’s capacity",
              ]}
            />
            <GuidelinesCard
              title="Statement of Need"
              text="This is where you make your case. Be vulnerable and open up on how the funding will make an impact. Explain the problem your project aims to solve. Use relatable examples or data or anecdotes to illustrate the issue to show why this issue matters and why your project is the solution. Be specific"
            />
            <GuidelinesCard
              title="Objectives and Goals"
              text="Define measurable goals that the project aims to achieve. Describe the positive outcomes expected and how they will address the stated problem. Link these outcomes to the broader benefits for society or the grantee's mission."
            />

            <GuidelinesCard
              title="Methods and Strategy"
              text="Implement the SMART strategy (Specific, Measurable, Achievable, Relevant, and Time-Bound). Provide a detailed plan of action, explaining the specific methods and strategies you will use to address the issue. Describe how you plan to allocate resources and include timelines, team roles and any partnerships that will enhance the project's success."
            />

            <GuidelinesCard
              title="Execution Plan"
              text="Detail how the project will be carried out from start to finish. This section should provide a clear roadmap of the project’s implementation, ensuring funders understand your approach to achieving the stated objectives. Include key milestones, deliverables, assigned responsibilities, and timelines. Highlight any risk management strategies to show you have a well-thought-out plan to handle challenges. By outlining an actionable execution strategy, you demonstrate preparedness and a high likelihood of success."
            />

            <GuidelinesCard
              title="Budget"
              text="Provide a comprehensive budget detailing how funds will be allocated. Use tables or detailed narratives to show how the funding will be utilized to achieve the stated objectives. Make sure your budget ties back to your goals and strategies, it’s all part of telling a cohesive story."
            />

            <GuidelinesCard
              title="Organizational Information"
              text="End with credibility. This is your chance to show why you’re the right fit for the grant. include background information about your organization or, if applicable, yourself. Provide details about team members’ roles, qualifications, and experience. Share the organization’s mission, achievements, and relevant past projects to establish credibility."
            />

            {/* <div></div> */}
          </div>

          <div className="w-full md:w-[25%] h-full">
            <div className="w-full  bg-white p-6 my-4 md:m-4 rounded-[5px] flex flex-col items-start">
              <h4>Resources Toolkit</h4>
              <IconComponent
                id={1}
                title="Sample Cover Letter"
                icon="/pdf.svg"
                textColor="text-textColor"
              />
              <IconComponent
                id={2}
                title="Budget Template"
                icon="/file-excel.svg"
                textColor="text-textColor"
                ml="-ml-1"
              />
              <IconComponent
                id={1}
                title="Proposal Checklist"
                icon="/file-word.svg"
                textColor="text-textColor"
              />
            </div>

            <div className="w-full  bg-white p-6 my-4 md:m-4 rounded-[5px] flex flex-col items-start">
              <h4>Need Professional Help?</h4>
              <p className="font-medium text-[14px] leading-[22px] text-textColor my-4">
                Our expert consultants are here to guide you through the grant
                writing process
              </p>
              <CustomButton
                backgrounColor="bg-secondaryColor"
                textStyle="font-bold text-[16px] leading-[16px] text-white"
                title="Request Consultation"
                onClick={() => handleNavigation("/consultant/request")}
                width="w-full"
                height="h-[30px]"
              />
            </div>

            <div className="w-full  bg-white p-6 my-4 md:m-4 rounded-[5px] flex flex-col items-start">
              <h4 className="mb-8">Success Rate</h4>
              <div>
                <p className="text-[14px] leading-[21px] font-semibold text-textColor -mb-3">
                  Grant Approval Rate
                </p>

                <Progress
                  percent={80}
                  className="text-secondaryColor "
                  size={[250, 5]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
