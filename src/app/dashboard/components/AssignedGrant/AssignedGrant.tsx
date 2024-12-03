import React, { Dispatch, SetStateAction } from "react";
import DashboardHeader from "../DashboardHeader";
import DashboardfilterOptions from "../DashboardfilterOptions";
import CustomTable from "../CustomTable";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/utils/dashboardRouteType";

type Props = {
  // setActiveScreen: Dispatch<SetStateAction<undefined>>;
};

const dataSource = [
  {
    key: "1",
    grantTitle: "Aspire Coronation Trust Foundation Grant",
    assignedDate: "Oct 30, 2024",
    clientName: "Global Outreach NGO",
    Deadline: "December 1, 2024 (13 days)",
    Status: "Ongoing 🟢",
    category: "Health",
    action: "View Details",
  },

  {
    key: "2",
    grantTitle: "Youth Education Program",
    assignedDate: "Oct 22, 2024",
    clientName: "Future Leaders Org",
    Deadline: "Nov 10, 2024 (7 days)",
    Status: "In Review 🟡",
    category: "Education",
    action: "View Details",
  },
  {
    key: "3",
    grantTitle: "Clean Water Project",
    assignedDate: "Oct 18, 2024",
    clientName: "Aqua Solutions Inc",
    Deadline: "Nov 5, 2024 (2 days)",
    Status: "Urgent🔴",
    category: "Environment",
    action: "View Details",
  },
  {
    key: "4",
    grantTitle: "Women Empowerment Program",
    assignedDate: "Oct 21, 2024",
    clientName: "EmpowerHer Foundation",
    Deadline: "NNov 18, 2024 (13 days)",
    Status: "Ongoing 🟢",
    category: "Social Development",
    action: "View Details",
  },
  {
    key: "5",
    grantTitle: "Small Business Startup Grants",
    assignedDate: "Oct 25, 2024",
    clientName: "BizGrowth Partners",
    Deadline: "Nov 20, 2024 (15 days)",
    Status: "In Review 🟡",
    category: "Business",
    action: "View Details",
  },
  {
    key: "6",
    grantTitle: "Agricultural Funding Program",
    assignedDate: "Oct 23, 2024",
    clientName: "Farmers' Union Global",
    Deadline: "Nov 12, 2024 (9 days)",
    Status: "In Review 🟡",
    category: "Agriculture",
    action: "View Details",
  },
  {
    key: "7",
    grantTitle: "Urban Development Initiative",
    assignedDate: "Oct 18, 2024",
    clientName: "CityScape Innovations",
    Deadline: "Nov 4, 2024 (1 day)",
    Status: "Urgent🔴",
    category: "Infrastructure",
    action: "View Details",
  },
  {
    key: "8",
    grantTitle: "International Scholarship Fund",
    assignedDate: "Oct 17, 2024",
    clientName: "Scholars Network",
    Deadline: "Nov 10, 2024 (7 days)",
    Status: "Ongoing 🟢",
    category: "Education",
    action: "View Details",
  },
];

const AssignedGrant = (props: Props) => {
 const dispatch = useAppDispatch();
 const dashboardRoute = useAppSelector((state) => state.dashboard);

const columns = [
  {
    title: "Grant Title",
    dataIndex: "grantTitle",
    render: (item: string) => (
      <p className="font-semibold text-[14px] leading-[22px] text-grantBlack w-[140px]">
        {item}
      </p>
    ),
  },
  {
    title: "Assigned Date",
    dataIndex: "assignedDate",
    render: (item: string) => (
      <p className="font-semibold text-[14px] leading-[22px] text-grantBlack">
        {item}
      </p>
    ),
  },
  {
    title: "Client Name",
    dataIndex: "clientName",
    render: (item: string) => (
      <p className="font-semibold text-[14px] leading-[22px] text-grantBlack w-[140px]">
        {item}
      </p>
    ),
  },
  {
    title: "Deadline",
    dataIndex: "Deadline",
    render: (item: string) => (
      <p className="font-semibold text-[14px] leading-[22px] text-grantBlack w-[140px]">
        {item}
      </p>
    ),
  },
  {
    title: "Status",
    dataIndex: "Status",
    render: (item: string) => (
      <p className="font-semibold text-[14px] leading-[22px] text-grantBlack">
        <p>{item}</p>
        <span className="bg-green w-4 h-4 rounded-full" />
      </p>
    ),
  },
  {
    title: "Category",
    dataIndex: "category",
    render: (item: string) => (
      <p className="font-semibold text-[14px] leading-[22px] text-grantBlack">
        {item}
      </p>
    ),
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (item: string) => (
      <p
        onClick={() => {dispatch(
          setActiveRoute({
            ...dashboardRoute,
            assignedGrant: dashboardRouteName.assignDetails,
          })
        );}}
        className="underline text-dashboardActionColor cursor-pointer text-[12px] leading-[21px]">
        View Details
      </p>
    ),
  },
];

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
      className="bg-backgroundColor  w-full p-8 overflow-scroll h-screen scroll-smooth"
      ref={scrollContainerRef}>
      <DashboardHeader />
      <div>
        <div className="flex items-center w-[280px] mt-8">
          <p className="text-textColor"> Dashboard </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p className="text-textColor">Assigned Grants </p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-secondaryColor">Assign Grants</h2>
          <p className="mt-4">
            View all grants assigned to you here including details of deadlines
            and statuses
          </p>
        </div>
        <DashboardfilterOptions />
      </div>
      <CustomTable columns={columns} dataSource={dataSource} />
      <div className="flex items-center cursor-pointer">
        <img src="/arrowLeft.svg" alt="" />
        <p className="text-secondaryColor ml-2">Return to Dashboard</p>
      </div>
    </div>
  );
};

export default AssignedGrant;
