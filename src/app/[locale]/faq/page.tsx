"use client";
import React from "react";
// import DashboardHeader from "../DashboardHeader";
import CustomButton from "@/app/[locale]/components/CustomButton";

import { Collapse } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";
import { useLocale } from "next-intl";
const { Panel } = Collapse;

type Props = {};

const page = (props: Props) => {
  const dispatch = useAppDispatch();
  const locale = useLocale();

  return (
    <div
      className="bg-backgroundColor  w-full py-8  px-4 lg:px-32"
      //   ref={scrollContainerRef}
    >
      {/* <DashboardHeader /> */}
      <div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-secondaryColor text-center w-full text-[20px] md:text-[36px] leading-[26px] lg:leading-[42px] py-4">
            Frequently Asked Questions
          </h2>

          <p className="text-center text-[14px] md:text-[16px] leading-[23px] md:leading-[25px] text-primaryBlack font-mono w-[80%]">
            Welcome to our FAQ section! Here, you'll find answers to common
            questions about our services, processes, and how we can assist you
            in achieving your goals. If you don't find what you're looking for,
            feel free to reach out—we're here to help!
          </p>
        </div>

        <div className="mt-8 flex items-center lg:items-start  flex-wrap justify-center lg:justify-between flex-col-reverse md:flex-row">
          {/* Left */}
          <div className="w-full lg:w-[35%] grid place-items-center">
            <div className="mt-4">
              <p className="text-[20px] leading-[26px] font-extrabold text-primary mb-6">
                Quick Access Links
              </p>

              <p className="text-textColor leading-[21px] text-[16px] font-normal underline my-6">
                Quisque a a ante, at volutpat enim.
              </p>
              <p className="text-textColor leading-[21px] text-[16px] font-normal underline my-6">
                Quisque a a ante, at volutpat enim.
              </p>
              <p className="text-textColor leading-[21px] text-[16px] font-normal underline my-6">
                Quisque a a ante, at volutpat enim.
              </p>
              <p className="text-textColor leading-[21px] text-[16px] font-normal underline my-6">
                Quisque a a ante, at volutpat enim.
              </p>
              <p className="text-textColor leading-[21px] text-[16px] font-normal underline my-6">
                Quisque a a ante, at volutpat enim.
              </p>
              <p className="text-textColor leading-[21px] text-[16px] font-normal underline my-6">
                Quisque a a ante, at volutpat enim.
              </p>
            </div>
            <div className="mt-8">
              <p className="text-[20px] leading-[26px] font-extrabold text-primary mb-6">
                Knowledge Based
              </p>

              <p className="text-textColor leading-[21px] text-[16px] font-normal underline my-6">
                Quisque a a ante, at volutpat enim.
              </p>
              <p className="text-textColor leading-[21px] text-[16px] font-normal underline my-6">
                Quisque a a ante, at volutpat enim.
              </p>
              <p className="text-textColor leading-[21px] text-[16px] font-normal underline my-6">
                Quisque a a ante, at volutpat enim.
              </p>
              <p className="text-textColor leading-[21px] text-[16px] font-normal underline my-6">
                Quisque a a ante, at volutpat enim.
              </p>
              <p className="text-textColor leading-[21px] text-[16px] font-normal underline my-6">
                Quisque a a ante, at volutpat enim.
              </p>
              <p className="text-textColor leading-[21px] text-[16px] font-normal underline my-6">
                Quisque a a ante, at volutpat enim.
              </p>
            </div>
            <div className="mt-8 bg-qa-background shadow-qa-shadow w-[300px] h-[395px] rounded-[25px] mb-16">
              <div className="w-[333px] h-[245px]">
                <img
                  src="/qa-image.svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold text-[21px] leading-[25px] text-[#000000DE] text-center">
                Still no luck? We can help!
              </p>
              <p className="font-semibold text-[15px] leading-[18px] text-textColor text-center">
                Contact us and we’ll get back to you as soon as possible.
              </p>

              <div className="flex items-center justify-center py-4">
                <CustomButton
                  width="w-[250px]"
                  height="h-[42px]"
                  radius="rounded-[33px]"
                  title="CHAT WITH SUPPORT"
                  textStyle="text-white text-[13px] font-semibold leading-[16px] text-center"
                  backgrounColor="bg-secondaryColor"
                />
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-full lg:w-[65%] grid place-items-center">
            <div className="bg-white px-8 py-4 w-full md:w-[550px]">
              <p className="text-[20px] leading-[26px] font-extrabold text-primary mb-6">
                Common Questions
              </p>
              <Collapse
                bordered={false}
                className="my-8"
                defaultActiveKey={["1"]}
                expandIcon={({ isActive }) =>
                  !isActive ? (
                    <PlusCircleOutlined className="text-blue-500" />
                  ) : (
                    <MinusCircleOutlined className="text-blue-500" />
                  )
                }>
                <Panel
                  className=""
                  // header="What is included in each subscription plan?"
                  header={"What type of opportunities exist on GrantConsult?"}
                  key="1">
                  <div className=" m-0">
                    <p className="font-poppins leading-[20px] text-[12px]  ml-8">
                      On GrantConsult, you will find a wide range of
                      opportunities, including grants, scholarships,
                      fellowships, internships, and funding programmes for
                      students, researchers, entrepreneurs and organizations.
                    </p>
                  </div>
                </Panel>
                <Panel
                  header="Are the opportunities available to people from all countries?"
                  key="2">
                  <p className="font-poppins leading-[20px] text-[12px] ">
                    GrantsConsult is a global platform. There are grants from
                    all countries and regions of the world. All you have to do
                    is use the search filter to find opportunities for your
                    country or region.
                  </p>
                </Panel>
                <Panel header="How often is the website updated?" key="3">
                  <p className="font-poppins leading-[20px] text-[12px] ">
                    GrantsConsult platform is updated daily with the most
                    current grants and funding opportunities.
                  </p>
                </Panel>

                <Panel
                  header=" How can I verify the legitimacy of an opportunity?"
                  key="5">
                  <p className="font-poppins leading-[20px] text-[12px] ">
                    We strive to verify all listings before publishing. However,
                    we encourage users to double-check details on the official
                    websites linked to each listing.
                  </p>
                </Panel>
                <Panel
                  header="Are there deadlines for these opportunities?"
                  key="6">
                  <p className="font-poppins leading-[20px] text-[12px] ">
                    Mostly. All deadlines are listed in the description of each
                    opportunity.
                  </p>
                </Panel>
                <Panel
                  header="Is it free to access opportunities on this website?"
                  key="7">
                  <p className="font-poppins leading-[20px] text-[12px] ">
                    Yes, some published opportunities are free. However, you
                    have to be a registered user on GrantsConsult or on a paid
                    subscription to explore details on premium opportunities.
                  </p>
                </Panel>

                <Panel
                  header="Do you charge for applying to scholarships or grants?"
                  key="8">
                  <p className="font-poppins leading-[20px] text-[12px] ">
                    GrantsConsult only charges fees for personalized services
                    such as grant writing, consultation, proposal review and
                    feedback and other. Please bear in mind that some
                    applications may come with an application fee which is not
                    inclusive of GrantsConsult service charge for any service
                    rendered.
                  </p>
                </Panel>
                <Panel header="I missed a deadline. Can I still apply?" key="9">
                  <p className="font-poppins leading-[20px] text-[12px] ">
                    Unfortunately, once a deadline has passed, you cannot apply.
                    We recommend setting up alerts to avoid missing future
                    opportunities.
                  </p>
                </Panel>
                <Panel
                  header="Who can I contact if I have questions about an opportunity? "
                  key="10">
                  <p className="font-poppins leading-[20px] text-[12px] ">
                    Our support team is available to answer your questions.
                    (info@grantsconsult.com, +2349106288373)
                  </p>
                </Panel>
                <Panel
                  header="Can I suggest an opportunity to be listed?"
                  key="11">
                  <p className="font-poppins leading-[20px] text-[12px] ">
                    Yes, we welcome suggestions! You can submit opportunities
                    via our email (info@grantsconsult.com)
                  </p>
                </Panel>
              </Collapse>
            </div>
            <div className="bg-white px-8 py-4 w-full md:w-[550px] mt-6">
              <p className="text-[20px] leading-[26px] font-extrabold text-primary mb-6">
                Technical Questions
              </p>
              <Collapse
                bordered={false}
                className="my-8"
                defaultActiveKey={["1"]}
                expandIcon={({ isActive }) =>
                  !isActive ? (
                    <PlusCircleOutlined className="text-blue-500" />
                  ) : (
                    <MinusCircleOutlined className="text-blue-500" />
                  )
                }>
                <Panel
                  className=""
                  // header="What is included in each subscription plan?"
                  header={"How can I find opportunities that match my profile?"}
                  key="1">
                  <div className=" py-8 m-0">
                    <p className="font-poppins leading-[20px] text-[12px]  ">
                      You can use our filters to search by keyword, funding
                      type, industry, months, country, field of study, etc
                    </p>
                  </div>
                </Panel>
                <Panel
                  header="Do I need to create an account to access opportunities?"
                  key="2">
                  <p className="font-poppins leading-[20px] text-[12px] ">
                    Yes. By creating an account with GrantsConsult you will
                    unlock all available opportunities and the full features of
                    the platform, such as personalised dashboard, saved
                    searches, alerts, newsletters and recommendations
                  </p>
                </Panel>
                <Panel
                  header="Do you assist with the application process?"
                  key="3">
                  <p className="font-poppins leading-[20px] text-[12px] ">
                    That's a big YES! At GrantsConsult we have professional
                    grant consultants who are specialists with the grant
                    application process and other advisory services. Find our
                    packages{" "}
                    <a className="mx-1" href={`subscription`}>
                      here
                    </a>
                    . Additional services include Grant Research &
                    Identification, Proposal Review and Feedback, Training &
                    Workshops
                  </p>
                </Panel>
                <Panel
                  header="I am a Grant Donor, how can I publish my grant or other funding opportunities on GrantsConsult?"
                  key="4">
                  <ul className="list-disc text-black">
                    <p className="font-poppins leading-[20px] text-[12px] ">
                      Follow our quick and easy steps to give your grants the
                      deserved visibility.
                    </p>
                    <li className="ml-6">
                      <p className="font-poppins leading-[20px] text-[12px] ">
                        Register and sign up as a donor grantor
                      </p>
                    </li>
                    <li className="ml-6">
                      <p className="font-poppins leading-[20px] text-[12px] ">
                        List your grants.
                      </p>
                    </li>
                    <li className="ml-6">
                      <p className="font-poppins leading-[20px] text-[12px] ">
                        Your submission will be reviewed and published if it
                        meets the GrantsConsult criteria.
                      </p>
                    </li>
                    <p className="font-poppins leading-[20px] text-[12px] ">
                      Kindly click{" "}
                      <a
                        className="mx-1 text-secondaryColor"
                        href={`grants/become`}>
                        here
                      </a>{" "}
                      to begin.
                    </p>
                  </ul>
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
