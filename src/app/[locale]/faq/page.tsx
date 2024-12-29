"use client";
import React from "react";
// import DashboardHeader from "../DashboardHeader";
import CustomButton from "@/app/[locale]/components/CustomButton";

import { Collapse } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";
const { Panel } = Collapse;

type Props = {};

const page = (props: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="bg-backgroundColor  w-full py-8  px-4 lg:px-32"
      //   ref={scrollContainerRef}
    >
      {/* <DashboardHeader /> */}
      <div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-secondaryColor text-center w-full text-[36px] leading-[42px] py-4">
            Frequently Asked Questions
          </h2>

          <p className="text-center text-[16px] leading-[25px] text-primaryBlack font-mono w-[80%]">
            Welcome to our FAQ section! Here, you'll find answers to common
            questions about our services, processes, and how we can assist you
            in achieving your goals. If you don't find what you're looking for,
            feel free to reach out—we're here to help!
          </p>
        </div>

        <div className="mt-8 flex items-center lg:items-start  flex-wrap justify-center lg:justify-between">
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
                  header={"What is included in each subscription plan?"}
                  key="1">
                  <div className=" py-8 m-0">
                    <p className="font-poppins leading-[20px] text-[12px]  ml-8">
                      Vivamus sit amet interdum elit. Proin lacinia erat ac
                      velit tempus auctor.
                    </p>
                  </div>
                </Panel>
                <Panel header="How does the 7-day free trial work?" key="2">
                  <p className="font-poppins leading-[20px] text-[12px] ">
                    Vivamus sit amet interdum elit. Proin lacinia erat ac velit
                    tempus auctor.
                  </p>
                </Panel>
                <Panel
                  header="What is included in each subscription plan?"
                  key="3">
                  <p className="font-poppins leading-[20px] text-[12px] ">
                    Vivamus sit amet interdum elit. Proin lacinia erat ac velit
                    tempus auctor.
                  </p>
                </Panel>
                <Panel
                  header="What is included in each subscription plan?"
                  key="3">
                  <p className="font-poppins leading-[20px] text-[12px] ">
                    Vivamus sit amet interdum elit. Proin lacinia erat ac velit
                    tempus auctor.
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
                  header={"What is included in each subscription plan?"}
                  key="1">
                  <div className=" py-8 m-0">
                    <p className="font-poppins leading-[20px] text-[12px]  ">
                      Vivamus sit amet interdum elit. Proin lacinia erat ac
                      velit tempus auctor.
                    </p>
                  </div>
                </Panel>
                <Panel header="How does the 7-day free trial work?" key="2">
                  <p className="font-poppins leading-[20px] text-[12px] ">
                    Vivamus sit amet interdum elit. Proin lacinia erat ac velit
                    tempus auctor.
                  </p>
                </Panel>
                <Panel
                  header="What is included in each subscription plan?"
                  key="3">
                  <p className="font-poppins leading-[20px] text-[12px] ">
                    Vivamus sit amet interdum elit. Proin lacinia erat ac velit
                    tempus auctor.
                  </p>
                </Panel>
                <Panel
                  header="What is included in each subscription plan?"
                  key="3">
                  <p className="font-poppins leading-[20px] text-[12px] ">
                    Vivamus sit amet interdum elit. Proin lacinia erat ac velit
                    tempus auctor.
                  </p>
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
