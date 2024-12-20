import React, { Dispatch, SetStateAction } from "react";
import DashboardHeader from "../DashboardHeader";
import DashboardfilterOptions from "../DashboardfilterOptions";
import CustomTable from "../CustomTable";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/utils/dashboardRouteType";
import CustomButton from "@/app/components/CustomButton";
import { Pagination } from "antd";
import GrantBarChart from "./components/GrantBarChart";

type Props = {
  // setActiveScreen: Dispatch<SetStateAction<undefined>>;
};

type CardProps = {
  header: string;
  text: string;
  color: string;
};

const cardData: CardProps[] = [
  { header: "Status", text: "Active", color: "text-buttonPrimary" },
  { header: "Date Posted", text: "Oct, 15, 2024", color: "text-[#EE60E0]" },
  { header: "Views", text: "152", color: "text-[#7B47E9]" },
  { header: "Interest Level", text: "104 - High", color: "text-[#FE6A35]" },
  {
    header: "Last Viewed",
    text: "Nov 10, 2024 5:55PM",
    color: "text-[#2B72FB]",
  },
  {
    header: "Application",
    text: "External Site",
    color: "text-[#64BDC6]",
  },
];

const GrantPerformance = (props: Props) => {
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

  return (
    <div
      className="bg-backgroundColor  w-full p-8 overflow-scroll h-screen scroll-smooth overflow-y-auto no-scrollbar"
      ref={scrollContainerRef}>
      <DashboardHeader />

      <div className="flex items-center w-[480px] mt-8">
        <p className="text-textColor"> Dashboard </p>
        <p className="text-textColor mx-3">{">>"}</p>
        <p className="text-textColor">My Grants </p>
        <p className="text-textColor mx-3">{">>"}</p>
        <p className="text-textColor">Performance Metrics </p>
      </div>

      <div className="flex justify-between items-center py-4">
        <div className="bg-grantColor shadow-headline-shadow w-full p-2 rounded-[5px]">
          <h4 className="font-semibold text-[20px] leading-[26px] text-white">
            Community Development Grant - Performance Metrics
          </h4>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center">
        {cardData.map((data) => (
          <div className="w-[158px] h-[150px] rounded-[5px] bg-white shadow-graphchart p-4 flex flex-col items-center justify-between ">
            <p
              className={`font-semibold text-[16px] leading-[19px] ${data.color}`}>
              {data.header}
            </p>
            <p
              className={`font-normal text-[14px] leading-[19px] ${data.color} text-center`}>
              {data.text}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-start w-full mt-8">
        <div>
          <h4 className="font-semibold text-[20px] leading-[26px] text-left text-primary my-4">
            Engagement By Audience Type
          </h4>
          <div className="w-[470px] h-[370px] rounded-[5px] bg-white shadow-chart-grant flex flex-col justify-between p-4">
            <GrantBarChart />
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-[12.46px] h-[12.46px] border-[1.36px] rounded-full border-[#EECA34] mr-2" />
                <p className="font-mono font-semibold text-[13.85px] leading-[18.14px]">
                  Individual
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[12.46px] h-[12.46px] border-[1.36px] rounded-full border-[#64BDC6] mr-2" />
                <p className="font-mono font-semibold text-[13.85px] leading-[18.14px]">
                  NGOs
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[12.46px] h-[12.46px] border-[1.36px] rounded-full border-[#2B72FB] mr-2" />
                <p className="font-mono font-semibold text-[13.85px] leading-[18.14px]">
                  Corporate Bodies
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-[20px] leading-[26px] text-left text-primary my-4">
            Views By Location
          </h4>
          <div className="w-[470px] h-[370px] rounded-[5px] bg-white shadow-chart-grant"></div>
        </div>
      </div>

      <div
        className="flex items-center cursor-pointer ml-4"
        onClick={() => {
          dispatch(
            setActiveRoute({
              ...dashboardRoute,
              mygrant: dashboardRouteName.myGrants,
            })
          );
        }}>
        <img src="/arrowLeft.svg" alt="" />
        <p className="text-secondaryColor ml-2">Return to Dashboard</p>
      </div>
    </div>
  );
};

export default GrantPerformance;
