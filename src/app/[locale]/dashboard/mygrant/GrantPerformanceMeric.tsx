import React, { Dispatch, SetStateAction } from "react";
import DashboardHeader from "../components/DashboardHeader";
import CustomTable from "../components/CustomTable";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import CustomButton from "@/app/[locale]/components/CustomButton";
import { Pagination } from "antd";
import GrantPieChart from "./components/GrantPieChart";
import GrantBarChart from "./components/GrantBarChart";
import GrantAreaChart from "./components/GrantAreaChart";

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
      className="bg-backgroundColor  w-full p-2 md:p-8 overflow-scroll h-full md:h-screen scroll-smooth overflow-y-auto no-scrollbar"
      ref={scrollContainerRef}>
      <DashboardHeader />

      {/* <div className="flex items-center w-full md:w-[480px] mt-8">
        <p className="text-textColor"> Dashboard </p>
        <p className="text-textColor mx-3">{">>"}</p>
        <p className="text-textColor">My Grants </p>
        <p className="text-textColor mx-3">{">>"}</p>
        <p className="text-textColor">Performance Metrics </p>
      </div> */}

      <div className="flex justify-between items-center py-4">
        <div className="bg-grantColor shadow-headline-shadow w-full p-2 rounded-[5px]">
          <h4 className="font-semibold text-[20px] leading-[26px] text-white">
            Community Development Grant - Performance Metrics
          </h4>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center flex-row">
        {cardData.map((data) => (
          <div className="w-[158px] h-[150px] rounded-[5px] bg-white shadow-graphchart p-4 flex flex-col items-center justify-between m-2  ">
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

      <div className="flex justify-center lg:justify-between items-center lg:items-start w-full md:mt-8  flex-col md:flex-row  ">
        <div className="w-full">
          <h4 className="font-semibold text-[20px] leading-[26px] text-left text-primary my-4">
            Engagement By Audience Type
          </h4>
          <div className="w-full lg:w-[470px] h-[370px] rounded-[5px] bg-white shadow-chart-grant flex flex-col justify-between p-4 relative">
            <GrantPieChart />
            <div className="flex items-center justify-between absolute bottom-[2%] left-[5%] md:left-[17%] space-x-4">
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

        <div className="w-full">
          <h4 className="font-semibold text-[20px] leading-[26px] text-left text-primary my-4">
            Views By Location
          </h4>
          <div className=" w-full  lg:w-[470px] h-[370px] rounded-[5px] bg-white shadow-chart-grant flex flex-col justify-center p-4">
            <GrantBarChart />
          </div>
        </div>
      </div>
      <div className="w-full">
        <h4 className="font-semibold text-[20px] leading-[26px] text-left text-primary my-8">
          Engagement Overtime
        </h4>
        <div className="w-full shadow-chart-grant h-[431px] bg-white rounded-[5px] mt-2  py-8 px-4">
          <GrantAreaChart />
        </div>
      </div>

      <div className="flex items-center justify-center lg:items-start lg:justify-between  bg-white shadow-chart-grant mt-8 w-full p-8 flex-col lg:flex-row">
        <div className="w-full lg:w-[370px]">
          <h4 className="font-semibold text-[20px] leading-[26px] text-left text-primary my-8">
            Summary/Key Metrics
          </h4>
          <div className="h-full bg-white border-[0.5px] border-borderColor p-4 w-full">
            <p className="font-mono font-semibold text-[14px] leading-[30.8px] text-textColor">
              Grant Status:
              <span className="font-normal ml-2">Active</span>
            </p>

            <p className="font-mono font-semibold text-[14px] leading-[30.8px] text-textColor">
              Posted Date:
              <span className="font-normal ml-2">October 15, 2024</span>
            </p>

            <div className="mt-4">
              <p className="font-mono font-semibold text-[14px] leading-[30px] text-newPrimaryTextColor ">
                Engagement Metrics:
              </p>
              <p className="font-mono font-semibold text-[14px] leading-[30.8px] text-textColor">
                Total Views:
                <span className="font-normal ml-2">152</span>
              </p>
            </div>
            <div className="mt-4">
              <p className="font-mono font-semibold text-[14px] leading-[30px] text-newPrimaryTextColor ">
                Views by Audience:
              </p>
              <p className="font-mono font-semibold text-[14px] leading-[30.8px] text-textColor">
                Individuals:
                <span className="font-normal ml-2">65 views (43%)</span>
              </p>
              <p className="font-mono font-semibold text-[14px] leading-[30.8px] text-textColor">
                INGOs:
                <span className="font-normal ml-2">45 views (30%)</span>
              </p>
              <p className="font-mono font-semibold text-[14px] leading-[30.8px] text-textColor">
                Corporate Bodies:
                <span className="font-normal ml-2">42 views (27%)</span>
              </p>
            </div>
            <div className="mt-4">
              <p className="font-mono font-semibold text-[14px] leading-[30px] text-newPrimaryTextColor ">
                Views by Location:
              </p>
              <p className="font-mono font-semibold text-[14px] leading-[30.8px] text-textColor">
                Lagos:
                <span className="font-normal ml-2">60 views (39%)</span>
              </p>
              <p className="font-mono font-semibold text-[14px] leading-[30.8px] text-textColor">
                Abuja:
                <span className="font-normal ml-2">40 views (26%)</span>
              </p>
              <p className="font-mono font-semibold text-[14px] leading-[30.8px] text-textColor">
                Kaduna:
                <span className="font-normal ml-2">30 views (20%)</span>
              </p>
              <p className="font-mono font-semibold text-[14px] leading-[30.8px] text-textColor">
                Others:
                <span className="font-normal ml-2">22 views (15%)</span>
              </p>
            </div>

            <div className="mt-32">
              <p className="font-mono font-semibold text-[14px] leading-[30px] text-newPrimaryTextColor ">
                Engagement Over Time:
              </p>
              <p className="font-mono font-semibold text-[14px] leading-[30.8px] text-textColor">
                Highest daily views:
                <span className="font-normal ml-2">
                  30 views (Oct 18, 2024)
                </span>
              </p>
              <p className="font-mono font-normal text-[14px] leading-[30.8px] text-textColor">
                Declining trend after Week 2.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-[20px] leading-[26px] text-left text-primary my-8">
            Suggestions for Improvement
          </h4>
          <div className="w-full lg:w-[446px] h-full lg:h-[330px] bg-white border-[0.5px] border-borderColor p-4">
            <p className="font-mono font-semibold text-[14px] leading-[30px] text-newPrimaryTextColor ">
              Optimize Grant Description and Tags:
            </p>

            <p className="font-normal text-[14px] leading-[30px] font-mono text-textColor mt-4">
              Review and enhance the grant description to include keywords
              frequently searched by users. Additionally, utilize specific and
              popular tags (e.g., "community support," "development projects")
              to ensure the grant appears in more filtered searches.
            </p>
          </div>

          <div className="mt-8">
            <CustomButton
              title="Download Report"
              IconLeft="/download-new.svg"
              textStyle="font-inter font-semibold text-[16px] leading-[16px] text-center text-secondaryColor"
              borderColor="border-secondaryColor"
              height="h-[40px]"
              width="w-full md:w-[220px]"
              backgrounColor="bg-white"
              radius="rounded-[5px]"
            />
          </div>
        </div>
      </div>

      <div
        className="flex items-center cursor-pointer ml-4 my-8"
        onClick={() => {
          dispatch(
            setActiveRoute({
              ...dashboardRoute,
              mygrant: dashboardRouteName.myGrants,
            })
          );
        }}>
        <img src="/arrowLeft.svg" alt="" />
        <p className="text-secondaryColor ml-2">Go back</p>
      </div>
    </div>
  );
};

export default GrantPerformance;
