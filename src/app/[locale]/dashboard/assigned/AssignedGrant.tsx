import React, { Dispatch, SetStateAction } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardfilterOptions from "../components/DashboardfilterOptions";
import CustomTable from "../components/CustomTable";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import MobileCustomTable from "../../components/MobileCustomTable";
import CustomButton from "../../components/CustomButton";
import LabelInput from "../../components/LabelInput";
import { DatePicker } from "antd";

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
  const dataSourceMobile = [
    {
      "Grant Title": { value: "Clean Water Project" },
      "Assigned Date": { value: "Youth Education Program" },
      "client Name": { value: "Future Leaders Org" },
      dealine: { value: "Nov 10, 2024 (13 days)" },
      status: { value: "In Review 🟡" },
      Category: { value: "Education" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoute,
                  assignedGrant: dashboardRouteName.assignDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              View Details
            </p>
          </button>
        ),
      },
    },
    {
      "Grant Title": { value: "Clean Water Project" },
      "Assigned Date": { value: "Youth Education Program" },
      "client Name": { value: "Future Leaders Org" },
      dealine: { value: "Nov 10, 2024 (13 days)" },
      status: { value: "In Review 🟡" },
      Category: { value: "Education" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoute,
                  assignedGrant: dashboardRouteName.assignDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              View Details
            </p>
          </button>
        ),
      },
    },

    {
      "Grant Title": { value: "Clean Water Project" },
      "Assigned Date": { value: "Youth Education Program" },
      "client Name": { value: "Future Leaders Org" },
      dealine: { value: "Nov 10, 2024 (13 days)" },
      status: { value: "In Review 🟡" },
      Category: { value: "Education" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoute,
                  assignedGrant: dashboardRouteName.assignDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              View Details
            </p>
          </button>
        ),
      },
    },
    {
      "Grant Title": { value: "Clean Water Project" },
      "Assigned Date": { value: "Oct 18, 2024" },
      "client Name": { value: "Aqua Solutions Inc" },
      dealine: { value: "Nov 18, 2024 (13 days)" },
      status: { value: "Urgent🔴" },
      Category: { value: "Environment" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoute,
                  assignedGrant: dashboardRouteName.assignDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              View Details
            </p>
          </button>
        ),
      },
    },
    {
      "Grant Title": { value: "Women Empowerment Program" },
      "Assigned Date": { value: "Oct 21, 2024" },
      "client Name": { value: "EmpowerHer Foundation" },
      dealine: { value: "Nov 18, 2024 (13 days)" },
      status: { value: "Ongoing 🟢" },
      Category: { value: "Social Development" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoute,
                  assignedGrant: dashboardRouteName.assignDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              View Details
            </p>
          </button>
        ),
      },
    },
    {
      "Grant Title": { value: "Small Business Startup Grants " },
      "Assigned Date": { value: "Oct 25, 2024" },
      "client Name": { value: "BizGrowth Partners" },
      dealine: { value: "Nov 20, 2024 (9 days)" },
      status: { value: "In Review 🟡" },
      Category: { value: "Business" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoute,
                  assignedGrant: dashboardRouteName.assignDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              View Details
            </p>
          </button>
        ),
      },
    },
    {
      "Grant Title": { value: "Agricultural Funding Program" },
      "Assigned Date": { value: "Oct 23, 2024" },
      "client Name": { value: "Farmer's Uniion Global" },
      dealine: { value: "Nov 12, 2024 (9 days)" },
      status: { value: "In Review 🟡" },
      Category: { value: "Education" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoute,
                  assignedGrant: dashboardRouteName.assignDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              View Details
            </p>
          </button>
        ),
      },
    },
    {
      "Grant Title": { value: "Urban Development Initiative" },
      "Assigned Date": { value: "Urban Development Initiative" },
      "client Name": { value: "Scholars Netowrk" },
      dealine: { value: "Nov 10, 2024 (7 days)" },
      status: { value: "Ongoing" },
      Category: { value: "Education" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoute,
                  assignedGrant: dashboardRouteName.assignDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              View Details
            </p>
          </button>
        ),
      },
    },
    {
      "Grant Title": { value: "International Scholarship Fund" },
      "Assigned Date": { value: "Oct 30, 2024" },
      "client Name": { value: "Scholars Netowrk" },
      dealine: { value: "Nov 10, 2024 (7 days)" },
      status: { value: "Ongoing" },
      Category: { value: "Education" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoute,
                  assignedGrant: dashboardRouteName.assignDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              View Details
            </p>
          </button>
        ),
      },
    },
  ];
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
          onClick={() => {
            dispatch(
              setActiveRoute({
                ...dashboardRoute,
                assignedGrant: dashboardRouteName.assignDetails,
              })
            );
          }}
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
      className="bg-backgroundColor  w-full p-4 md:p-8 overflow-scroll h-screen scroll-smooth overflow-y-auto no-scrollbar"
      ref={scrollContainerRef}>
      <DashboardHeader />
      <div>
        {/* <div className="flex items-center w-[280px] mt-8">
          <p className="text-textColor"> Dashboard </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p className="text-textColor">Assigned Grants </p>
        </div> */}
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-secondaryColor">Assign Grants</h2>
          <p className="mt-4">
            View all grants assigned to you here including details of deadlines
            and statuses
          </p>
        </div>

        <DashboardfilterOptions>
          {/* <div className="w-full lg:w-[180px] h-[35px]"> */}
          {/* <RangePicker className="w-full" /> */}
          {/* </div> */}

          <div className="w-full">
            <LabelInput
              placeholder="Grant Title"
              width={"w-full"}
              value=""
              height="h-[35px]"
              my="my-1 md:my-4"
              select
            />
          </div>

          <div className="w-full">
            <DatePicker  className="w-full" />
          </div>
          <div className="w-full">
            <LabelInput
              placeholder="Client Name"
              width={"w-full"}
              value=""
              height="h-[35px]"
              my="my-1 md:my-4"
            />
          </div>
          <div className="w-full">
            <LabelInput
              placeholder="Deadline"
              width={"w-full"}
              value=""
              height="h-[35px]"
              my="my-1 md:my-4"
              select
            />
          </div>
          <div className="w-full">
            <LabelInput
              placeholder="Status"
              width={"w-full"}
              value=""
              height="h-[35px]"
              my="my-1 md:my-4"
              select
            />
          </div>
          <div className="w-full">
            <LabelInput
              placeholder="Category"
              width={"w-full"}
              value=""
              height="h-[35px]"
              my="my-1 md:my-4"
              select
            />
          </div>

          <CustomButton
            height="h-[40px] md:h-[35px]"
            width="w-full lg:w-[76px]"
            title="Filter"
            backgrounColor="bg-primary"
            textStyle="font-bold text-[12px] font-mont text-white"
            radius="rounded-[5px]"
            // my="my-1"
          />
          <CustomButton
            height="h-[40px] md:h-[35px]"
            width="w-full lg:w-[76px]"
            title="Reset"
            backgrounColor="bg-white"
            textStyle="font-semibold text-[12px] font-mont text-secondaryColor"
            radius="rounded-[5px]"
            borderColor="border-secondaryColor"
            borderWidth="border"
            // my="my-1"
          />
        </DashboardfilterOptions>
      </div>
      <CustomTable columns={columns} dataSource={dataSource} />
      <div className="space-y-4 mt-4">
        {dataSourceMobile.map((data) => (
          <MobileCustomTable data={data} />
        ))}
      </div>

      <div className="flex items-center cursor-pointer my-4">
        <img src="/arrowLeft.svg" alt="" />
        <p className="text-secondaryColor ml-2">Return to Dashboard</p>
      </div>
    </div>
  );
};

export default AssignedGrant;
