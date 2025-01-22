import CustomButton from "@/app/[locale]/components/CustomButton";
import LabelInput from "@/app/[locale]/components/LabelInput";
import CustomModal from "@/app/[locale]/components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import { closeModal } from "../../../../../../lib/features/Modal/modalSlice";
import { Flex, Progress } from "antd";
import { PlusOutlined, StarOutlined } from "@ant-design/icons";
import ConsultantComponentModal from "@/app/[locale]/components/consultantComponentModal";

type Props = {};

const ConsultantModal = (props: Props) => {
  const open = useAppSelector((state) => state.modal.open);
  const dispatch = useAppDispatch();
  // console.log(open)
  const openMmodal = () => {
    if (open) {
      dispatch(closeModal());
    }
  };
  return (
    <CustomModal open={open} setOpen={() => openMmodal()} height="h-full">
      <div className="w-full bg-backgroundColor h-full">
        <div className="w-full h-full flex justify-between p-4 items-start flex-wrap  ">
          {/*  */}
          <div className="w-full lg:w-[333px] bg-white p-4 rounded-[10px]">
            {/* Profile */}
            <ConsultantComponentModal showButton />
            {/* Content  */}
            <div>
              <ul className="list-disc">
                <h4 className="text-primary font-semibold  text-[20px] leading-[26px] my-4 font-mono">
                  Expertise
                </h4>
                <div className="ml-8">
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Grant Writting
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Project Management
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Funding Strategy Development
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Impact Assessment and Reporting
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Nonprofit Consulting
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Stakeholder Management
                    </p>
                  </li>
                </div>
              </ul>
              <ul className="list-disc">
                <h4 className="text-primary font-semibold text-[20px] leading-[26px] my-4 font-mono">
                  Education & Certification
                </h4>
                <div className="ml-8">
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Master of Science (MSc) in Nonprofit Management and
                      Philanthropy
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Bachelor of Arts (BA) in Public Administration
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Certified Grant Writer (CGW) - American Grant Writers’
                      Association (Earned 2020)
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Project Management Professional (PMP) - Project Management
                      Institute (PMI) (Earned 2019)
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Nonprofit Consulting
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Stakeholder Management
                    </p>
                  </li>
                </div>
              </ul>
            </div>

            {/* Content  */}
          </div>
          <div className="w-full lg:w-[450px] flex flex-col flex-1 justify-between m-0">
            {/* Bio */}
            <div className="bg-white w-full rounded-[10px] px-4 my-4 py-2  h-full lg:h-[25%] mx-0 lg:mx-4 mb-4">
              <h4 className="text-primary font-semibold text-[20px] leading-[26px] my-4 font-mono">
                Bio
              </h4>
              <p className="font-normal text-[14px] leading-[24px] text-[#333333]">
                Alice is an experienced grant consultant with over 20 years in
                securing funding for NGOs, startups, and corporate
                organizations. Specializes in grant writing, application
                strategies, and proposal development. With a track record of
                successful awards and a deep understanding of funding
                landscapes, she helps clients navigate complex grant
                requirements to maximize funding opportunities.
              </p>
            </div>
            {/* Experience */}
            <div className="bg-white w-full rounded-[10px] px-4 py-1 lg:mx-4 pb-4">
              <h4 className="text-primary font-semibold text-[20px] leading-[26px] my-4 font-mono">
                Experience
              </h4>

              <div>
                <h4 className="font-bold text-[16px] leading-[19px] font-mono">
                  Senior Grant Consultant
                </h4>
                <p className="font-bold text-[13px] leading-[21px] font-mono">
                  ABC consulting Group.
                </p>
                <p className="font-normal text-[14px] leading-[23px] italic font-mono">
                  January 2020 - Present
                </p>
              </div>
              <div className="mt-8">
                <p className="font-semibold text-[14px] leading-[21px] font-mono">
                  Relevant Grants and Projects:
                </p>
                <div className="ml-5 mt-4">
                  <ul className="list-disc">
                    <li>
                      <p className="font-mono text-base font-medium text-secondaryTextColor">
                        Grant title:{" "}
                        <span className="font-normal">
                          community Health Initiative Grant
                        </span>{" "}
                      </p>{" "}
                    </li>
                    <li>
                      <p className="font-mono text-base font-medium  text-secondaryTextColor">
                        Date Awarded:{" "}
                        <span className="font-normal">March 2022</span>{" "}
                      </p>{" "}
                      <li>
                        <p className="font-mono text-base font-medium  text-secondaryTextColor">
                          Role in Project:{" "}
                          <span className="font-normal">Lead Consultant</span>{" "}
                        </p>{" "}
                      </li>
                    </li>
                  </ul>
                  <p className="text-base text-[#333333] font-semibold mt-2">
                    Impact/Results
                  </p>
                  <ul className="list-disc">
                    <li className="my-1">
                      <p className="font-mono text-sm font-normal text-secondaryTextColor">
                        Secured $500,000 in funding to improve health services
                        in undeserved areas
                      </p>{" "}
                    </li>
                    <li>
                      <p className="font-mono text-sm font-normal text-secondaryTextColor">
                        Increased outreach capacity by 40%, directly impacting
                        over 5,000 individuals.
                      </p>{" "}
                    </li>
                  </ul>
                </div>
                {/*  */}
                <div className="ml-5 mt-8">
                  <ul className="list-disc">
                    <li>
                      <p className="font-mono text-base font-medium text-secondaryTextColor">
                        Grant title:{" "}
                        <span className="font-normal">
                          Environmental Sustainability Program Grant
                        </span>{" "}
                      </p>{" "}
                    </li>
                    <li>
                      <p className="font-mono text-base font-medium  text-secondaryTextColor">
                        Date Awarded:{" "}
                        <span className="font-normal">October 2021</span>{" "}
                      </p>{" "}
                      <li>
                        <p className="font-mono text-base font-medium  text-secondaryTextColor">
                          Role in Project:{" "}
                          <span className="font-normal">
                            Application Reviewer
                          </span>{" "}
                        </p>{" "}
                      </li>
                    </li>
                  </ul>
                  <p className="text-base text-[#333333] font-semibold mt-2">
                    Impact/Results
                  </p>
                  <ul className="list-disc">
                    <li className="my-1">
                      <p className="font-mono text-sm font-normal text-secondaryTextColor">
                        Provided guidance on key sustainability metrics
                        improving the program's funding eligibility.
                      </p>{" "}
                    </li>
                    <li>
                      <p className="font-mono text-sm font-normal text-secondaryTextColor">
                        Enhanced project success rate by 30% through detailed
                        proposal refinement and strategic consultation
                      </p>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full lg:ml-8 mt-4 lg:mt-4">
            {/* Grants */}
            <div className="bg-white w-full rounded-[10px] pb-4 mb-4">
              <h4 className="text-buttonPrimary font-semibold text-[20px] leading-[26px] p-4 font-mono">
                Secured Grants
              </h4>

              <div className=" w-[92%] lg:w-[450px] bg-backgroundColor mx-4 py-2 ">
                <p className="font-semibold text-sm font-mono text-buttonPrimary px-2">
                  Community Health Grants
                </p>
                <ul className="list-disc px-8">
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Awarded by: National Health Foundation.
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Awarded Date: 17-03-2023
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Role: Lead Consultant
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Impact: Secured $250k to expand health services benefiting
                      5,000+ people
                    </p>
                  </li>
                </ul>
              </div>
              <div className=" w-[92%] lg:w-[450px] bg-backgroundColor m-4 py-2 ">
                <p className="font-semibold text-sm font-mono text-buttonPrimary px-2">
                  Youth Empowerment Grant
                </p>
                <ul className="list-disc px-8">
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Awarded by: Global Youth Fund.
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Awarded Date: August 2022
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Role: Reviewer & Advisor
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Impact: Directed $100K for vocational training, achieving
                      70% job placements.
                    </p>
                  </li>
                </ul>
              </div>
              <div className=" w-[92%] lg:w-[450px] bg-backgroundColor m-4 py-2 ">
                <p className="font-semibold text-sm font-mono text-buttonPrimary px-2">
                  Sustainable Agriculture Grant{" "}
                </p>
                <ul className="list-disc px-8">
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Awarded by: Green Earth Foundation.
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Awarded Date: 06 -12 - 2021
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Role: Project Coordinator
                    </p>
                  </li>
                  <li>
                    <p className="font-normal text-[14px] leading-[24px] text-[#333333] ">
                      Impact: Led $500K eco-farming project, boosting yields by
                      15% with reduced pesticide use.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* Rating */}
            <div className=" bg-white pl-4 rounded-[10px] w-full lg:w-[500px] py-2">
              <h4 className="text-primary font-semibold text-[20px] leading-[26px] my-4 font-mono">
                Rating & Reviews
              </h4>
              <div className="border-b border-b-borderColor ">
                <h4 className="text-secondaryTextColor font-bold text-[16px] leading-[19px] my-4 font-mono">
                  Average Clients Ratings
                </h4>
                <div className="flex items-start justify-between w-full">
                  <div className="flex items-center w-[50px] justify-between">
                    <p className="text-secondaryTextColor font-bold text-[16px] leading-[19px] my-4 font-mono">
                      5.0
                    </p>
                    <img src="/rating.svg" />
                  </div>
                  <div className="pb-4 mr-4">
                    <div className="flex items-center">
                      <p className="mr-4 font-bold">5</p>
                      <Flex
                        vertical
                        gap="small"
                        className="w-[150px] lg:w-[300px]">
                        <Progress
                          strokeColor="#FFC531"
                          percent={99}
                          strokeLinecap="square"
                        />
                      </Flex>
                    </div>
                    <div className="flex items-center">
                      <p className="mr-4 font-bold">4</p>
                      <Flex
                        vertical
                        gap="small"
                        className="w-[150px] lg:w-[300px]">
                        <Progress
                          strokeColor="#FFC531"
                          percent={50}
                          strokeLinecap="square"
                        />
                      </Flex>
                    </div>
                    <div className="flex items-center">
                      <p className="mr-4 font-bold">3</p>
                      <Flex
                        vertical
                        gap="small"
                        className="w-[150px] lg:w-[300px]">
                        <Progress
                          strokeColor="#FFC531"
                          percent={0}
                          strokeLinecap="square"
                        />
                      </Flex>
                    </div>
                    <div className="flex items-center">
                      <p className="mr-4 font-bold">2</p>
                      <Flex
                        vertical
                        gap="small"
                        className="w-[150px] lg:w-[300px]">
                        <Progress
                          strokeColor="#FFC531"
                          percent={0}
                          strokeLinecap="square"
                        />
                      </Flex>
                    </div>
                    <div className="flex items-center">
                      <p className="mr-4 font-bold">1</p>
                      <Flex
                        vertical
                        gap="small"
                        className="w-[150px] lg:w-[300px]">
                        <Progress
                          strokeColor="#FFC531"
                          percent={0}
                          strokeLinecap="square"
                        />
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              {/* Reviews */}
              <div className="pt-4 pr-4">
                {/* Top */}
                <div className="flex w-full items-center justify-between ">
                  <div>
                    {[1, 2, 3, 4, 5].map((data) => (
                      <StarOutlined
                        style={{ color: "#FBBC05", fontSize: 12 }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center cursor-pointer">
                    <PlusOutlined style={{ color: "#329DFD", fontSize: 20 }} />
                    <p className="text-secondaryColor text-sm font-semibold">
                      Add Review
                    </p>
                  </div>
                </div>
                {/* Bottom */}
                <div>
                  <p className="text-primary">Excellent Service</p>
                  <p className="text-sm">
                    Alice is such a great grant writer, she made my application
                    very seamless and I was awarded $15,000 grant as a result of
                    her expertise
                  </p>
                  {/* Icon component */}
                  <div className="flex items-center my-5">
                    {/* Icon */}
                    <img src="/reviewerAvatar.svg" />
                    <div className="ml-2">
                      <p className="text-sm font-semibold">Madame Johane</p>
                      <p className="text-[#B3B3B3] text-sm ">Nov 11th, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default ConsultantModal;
