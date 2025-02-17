"use client"
import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardfilterOptions from "../components/DashboardfilterOptions";
import CustomTable from "../components/CustomTable";
import CustomButton from "@/app/[locale]/components/CustomButton";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import { Collapse } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
const { Panel } = Collapse;

type Props = {};

const HelpSupport = (props: Props) => {
  const dispatch = useAppDispatch();

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop; // Get the scroll position
      console.log("Scroll Top:", scrollTop); // Debugging scroll value
      dispatch(setIsScrolled(scrollTop > 50));
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="bg-backgroundColor  w-full p-2 md:p-8 overflow-scroll h-screen scroll-smooth overflow-y-auto no-scrollbar"
      ref={scrollContainerRef}>
      <DashboardHeader />
      <div>
        {/* <div className="flex items-center w-[280px] mt-8">
          <p className="text-textColor"> Dashboard </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p className="text-textColor">Help & Support </p>
        </div> */}

        <h2 className="text-secondaryColor text-center w-full text-[36px] leading-[42px] py-4">
          How can we help you today?
        </h2>

        <div className="w-full flex justify-center lg:justify-between items-center px-8 lg:px-16 flex-wrap lg:flex-nowrap">
          <img src="/contactt.svg" alt="" />
          <img src="/dev.svg" alt="" />
          <img src="/blog.svg" alt="" />
        </div>

        <div className="mt-8 flex flex-col-reverse lg:flex-row items-start">
          {/* Left */}
          <div className="w-full md:w-[35%]">
            <div className="mt-4 w-full">
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
            <div className="mt-8 w-full">
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
            <div className="mt-8 bg-qa-background shadow-qa-shadow w-[300px] h-[395px] rounded-[25px]">
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
          <div className="w-full md:w-[65%]">
            <div className="bg-white px-8 py-4">
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
            <div className="bg-white px-8 py-4">
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

export default HelpSupport;
