import React from "react";
import { Collapse } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
type Props = {};
{
  /* <PlusCircleOutlined />; */
}
// <MinusCircleOutlined />

const text = `Lorem ipsum dolor sit amet consectetur. Eget a eget ut ultrices etiam. Proin et semper nullam nisl condimentum facilisi interdum orci. Convallis nam egestas nibh arcu felis ipsum. Bibendum in vitae bibendum feugiat feugiat.`;

const Faq = (props: Props) => {
  return (
    <div className="py-16 relative left-0 right-0 bg-white m-8 flex w-full items-center justify-around">
      {/* <div className="w-full items-center justify-center">
        <img src="/bg-faq.svg" alt="" />
      </div> */}
      <div className=" w-[50%] flex items-center justify-center">
        <img src="/FAQ.svg" />
      </div>

      <div className="w-[50%] h-[60%] flex flex-col justify-between pr-4">
        <p className="font-poppins text-primary font-bold text-[36px] leading-[42px">
          Frequently Asked Questions
        </p>
        <Collapse
          className="my-8"
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) =>
            !isActive ? (
              <PlusCircleOutlined className="text-blue-500" />
            ) : (
              <MinusCircleOutlined className="text-blue-500" />
            )
          }>
          <Panel header="What is included in each subscription plan?" key="1">
            <p className="font-poppins leading-[20px] text-[12px] ">{text}</p>
          </Panel>
          <Panel header="How does the 7-day free trial work?" key="2">
            <p className="font-poppins leading-[20px] text-[12px] ">{text}</p>
          </Panel>
          <Panel header="What is included in each subscription plan?" key="3">
            <p className="font-poppins leading-[20px] text-[12px] ">{text}</p>
          </Panel>
        </Collapse>
        <p className="text-[12px] font-mono leading-[23px]">
          Have more questions or need more support?{" "}
          <span className="text-secondaryColor cursor-pointer">Click here</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Faq;
