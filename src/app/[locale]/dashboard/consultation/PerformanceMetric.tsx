"use client";
import React, { Dispatch, SetStateAction } from "react";
import DashboardHeader from "../components/DashboardHeader";
import CustomButton from "@/app/[locale]/components/CustomButton";
import LabelInput from "@/app/[locale]/components/LabelInput";
import GrantCard from "@/app/[locale]/grants/components/GrantCard";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { openModal } from "../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";
import RenderModals from "@/app/[locale]/components/RenderModals";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import dynamic from "next/dynamic";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import BarchartComponent from "@/app/[locale]/components/BarChart";
import PieChartComponent from "@/app/[locale]/components/PieChart";
import { DatePicker } from "antd";
// import  BarChart  from "@/app/components/BarChart";
type Props = {
  //   setActiveScreen: Dispatch<SetStateAction<undefined>>;
};

type HeaderChartProps = {
  data: {
    id: number;
    text: string;
    image: string;
    number: string;
    textColor: string;
  };
};

const Chartdata = [
  {
    id: 1,
    text: "Total Consultation Completed",
    image: "/chart1.svg",
    number: "120",
    textColor: "text-[#27AE60]",
  },
  {
    id: 2,
    text: "Average Rating",
    image: "/chart4.svg",
    number: "4.8",
    textColor: "text-[#FF9500]",
  },
  {
    id: 3,
    text: "Revenue Earned",
    image: "/chart2.svg",
    number: "$5,200",
    textColor: "text-[#1F4E79]",
  },
  {
    id: 4,
    text: "Pending Consultations",
    image: "/chart3.svg",
    number: "10",
    textColor: "text-[#329DFD]",
  },
];

const PerformanceMetric = (props: Props) => {
  const dispatch = useAppDispatch();
  const dashboardRoute = useAppSelector((state) => state.dashboard);
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

  const HeaderChart = (data: HeaderChartProps) => {
    return (
      <div className="flex flex-col justify-between w-[150px] md:w-[158px] h-[190px] md:h-[210px] bg-white my-4 items-center md:py-2 shadow-graphchart rounded-[5px] m-2 lg:m-0 py-8">
        <div className="w-[40px] h-[40px]">
          <img
            src={data?.data?.image}
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
        <p
          className={`font-semibold leading-[17px] text-[12px] text-center  ${
            data.data.textColor && data.data.textColor
          }`}>
          {data.data.text}
        </p>
        <h4
          className={`font-semibold leading-[26px] text-[20px] text-center  ${
            data.data.textColor && data.data.textColor
          }`}>
          {data.data.number}
        </h4>
      </div>
    );
  };

  return (
    <div
      className="bg-backgroundColor  w-full p-2 md:p-8 overflow-scroll h-full md:h-screen scroll-smooth"
      ref={scrollContainerRef}>
      <DashboardHeader />
      <div>
        {/* <div className="flex items-center w-full lg:w-[580px] mt-8">
          <p className="text-textColor"> Dashboard </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p className="text-textColor">Consultation </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p>Performance Metrics</p>
        </div> */}

        <div>
          {/* Header */}
          <div className="w-full bg-grantColor h-[43px] mt-4">
            <p className="text-white p-2 font-semibold text-[20px] leading-[26px]">
              Performance Metrics
            </p>
          </div>
        </div>
      </div>
      {/* Charts */}
      <div className="flex items-center justify-between flex-col lg:flex-row py-4">
        <div className="flex justify-between w-full lg:w-[65%] flex-wrap md:flex-nowrap">
          {Chartdata.map((data) => (
            <HeaderChart data={data} />
          ))}
        </div>
        <div className="bg-white w-full md:w-[340px] h-[210px] shadow-graphchart px-4 flex flex-col items-center justify-center m-2 lg:m-0">
          <div className="flex items-center justify-between w-full mt-1">
            <p className="font-semibold text-[10px] leading-[13px] w-[100px] text-primary">
              Total Cancelled Consultation
            </p>
            <DatePicker className="w-[100px] h-[30px]" placeholder="Today" />
          </div>
          <div className="flex items-end justify-end">
            <div className="w-full h-[160px]">
              <PieChartComponent />
            </div>
            <div className="flex md:hidden justify-between items-center py-4 w-full">
              <div className="flex items-center">
                <div className="w-[15px] h-[15px] bg-transparent border-[2px] border-errorColor rounded-full" />
                <p className="font-normal text-[10px] leading-[13px] ml-2">
                  Cancelled Order
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[15px] h-[15px] bg-transparent border-[2px]  border-buttonPrimary rounded-full" />
                <p className="font-normal text-[10px] leading-[13px] ml-2">
                  Completed Order
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Overview Bar chart */}
      <div className="h-[500px] w-full bg-white mb-4 py-8">
        <h4 className="font-semibold text-[20px] leading-[26px] md:ml-8 mb-4">
          Performance Overview
        </h4>
        <BarchartComponent />
      </div>
      {/* Key metric and insights */}
      <div className="flex justify-between w-full items-center flex-col md:flex-row">
        <div className="w-full md:w-[520px] h-[170px] rounded-[5px]  bg-white shadow-graphchart p-4 m-2">
          <h4 className="font-semibold text-[20px] leading-[26px]">
            Key Metric
          </h4>
          <p className="leading-[31px] text-[14px] font-semibold">
            Total Completed Consultations: 110
          </p>
          <p className="leading-[31px] text-[14px] font-semibold">
            Pending Consultations: 60
          </p>
          <p className="leading-[31px] text-[14px] font-semibold">
            {" "}
            Declined Consultations: 25{" "}
          </p>
        </div>
        <div className="w-full md:w-[520px] h-[170px] rounded-[5px]  bg-white shadow-graphchart p-4 m-2">
          <h4 className="font-semibold text-[20px] leading-[26px]">Insights</h4>
          <p className="leading-[31px] text-[14px] font-semibold">
            High activity observed in March with a 30% spike.
          </p>
          <p className="leading-[31px] text-[14px] font-semibold">
            April saw a decrease due to fewer consultations.
          </p>
          <p className="leading-[31px] text-[14px]"> </p>
        </div>
      </div>

      {/* Filter Data */}
      <div className="w-full bg-white p-4 shadow-graphchart mt-4">
        <h4 className="font-semibold text-[20px] leading-[26px]">Filters</h4>
        <div className="flex w-full items-center justify-between flex-col lg:flex-row">
          <LabelInput
            select
            placeholder="Select Month"
            value=""
            width="w-full"
            mr="lg:mr-1"
            my="my-2"
          />
          <LabelInput
            select
            value=""
            placeholder="Completion Rate"
            width="w-full"
            mr="lg:mr-1"
            my="my-2"
          />
          <LabelInput
            select
            placeholder="Consultation Type"
            value=""
            width="w-full"
            mr="lg:mr-1"
            my="my-2"
          />
          <CustomButton
            width="w-full md:w-[120px]"
            height=" h-[50px] md:h-[40px]"
            radius="rounded-[5px]"
            backgrounColor="bg-primary"
            title="Apply"
            textStyle="text-white text-[14px] leading-[16px] text-center font-semibold"
          />
        </div>
      </div>
      {/* Return to dashboard */}
      <div
        className="flex items-center mt-8 my-8 ml-4 cursor-pointer"
        onClick={() => {
          dispatch(
            setActiveRoute({
              ...dashboardRoute,
              consultation: dashboardRouteName.consultation,
            })
          );
        }}>
        <img src="/arrowLeft.svg" alt="" />
        <p className="text-secondaryColor ml-2">Go back</p>
      </div>
      <RenderModals />
    </div>
  );
};

export default PerformanceMetric;
