import React from "react";
import { Collapse, Image } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const { Panel } = Collapse;
type Props = {};
{
  /* <PlusCircleOutlined />; */
}
// <MinusCircleOutlined />

const text = `Lorem ipsum dolor sit amet consectetur. Eget a eget ut ultrices etiam. Proin et semper nullam nisl condimentum facilisi interdum orci. Convallis nam egestas nibh arcu felis ipsum. Bibendum in vitae bibendum feugiat feugiat.`;

const Faq = (props: Props) => {
  return (
    <div className="w-full grid place-items-center">
      <div className="py-16 relative left-0 right-0 bg-white m-0  flex-col md:flex-row flex  flex-wrap items-center justify-between  z-0 w-[100%]">
        {/* <div className="w-full items-center justify-center">
        <img src="/bg-faq.svg" alt="" />
      </div> */}
        <div className="hidden md:block bg-faqBrush object-contain bg-no-repeat h-[300px] w-[661px] absolute top-0 left-0 z-1 overflow-hidden" />
        <div className=" hidden md:block bg-faqBrush2 object-contain bg-no-repeat h-[320px] w-[306px] absolute -top-[20%] -right-[6%] z-1 overflow-hidden" />
        <div className="hidden md:block bg-faqBrush3 object-contain bg-no-repeat h-[194px] w-[268px] absolute bottom-[0%] -right-[9%] z-1 overflow-hidden" />

        <div className="w-[40%] lg:w-[50%] flex items-center justify-center relative z-2">
          <img src="/FAQ.svg" />
        </div>

        <div className="w-full lg:w-[50%] h-[60%] flex flex-col justify-between pr-4">
          <p className="w-full text-left font-poppins text-primary font-bold text-[16px] leading-[16px] lg:text-[36px] lg:leading-[42px]">
            Frequently Asked Questions
          </p>
          <Collapse
            className="my-8 w-[535px] border-[0.2px] border-borderColor flex flex-col gap-y-4"
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) =>
              !isActive ? (
                <PlusCircleOutlined className="text-blue-500" />
              ) : (
                <MinusCircleOutlined className="text-blue-500" />
              )
            }>
            <Panel
              header="What is included in each subscription plan?"
              key="1"
              className="my-2">
              <div className="p-4">
                <p className="font-poppins leading-[20px] text-[12px] ">
                  {text}
                </p>
              </div>
            </Panel>
            <Panel header="How does the 7-day free trial work?" key="2">
              <div className="p-4">
                <p className="font-poppins leading-[20px] text-[12px] ">
                  {text}
                </p>
              </div>
            </Panel>
            <Panel header="What is included in each subscription plan?" key="3">
              <div className="p-4">
                <p className="font-poppins leading-[20px] text-[12px] ">
                  {text}
                </p>
              </div>
            </Panel>
          </Collapse>
          <p className="text-[12px] font-mono leading-[23px]">
            Have more questions or need more support?{" "}
            <span className="text-secondaryColor cursor-pointer">
              Click here
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
