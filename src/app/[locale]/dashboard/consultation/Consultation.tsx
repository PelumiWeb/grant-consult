import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardfilterOptions from "../components/DashboardfilterOptions";
import CustomTable from "../components/CustomTable";
import CustomButton from "@/app/[locale]/components/CustomButton";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import MobileCustomTable from "../../components/MobileCustomTable";
import FilterComponent from "../../components/FilterComponent";
import LabelInput from "../../components/LabelInput";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

type Props = {};

const dataSource = [
  {
    key: "1",
    ConsultationTitle: "Strategic Funding Advisory",
    clientName: "John Doe (Doe Inc.)",
    DateTime: "Nov 5, 2024, 2 PM",
    Status: "Upcoming",
    actions: "View Details",
    Actions: "Reschedule",
  },

  {
    key: "2",
    ConsultationTitle: "Grant Proposal Review",
    clientName: "Jane Smith (HealthPro)",
    DateTime: "Nov 7, 2024, 10 AM",
    Status: "In Progress",
    actions: "View Details",
    Actions: "Reschedule",
  },
  {
    key: "3",
    ConsultationTitle: "NGO Capacity Building",
    clientName: "Hope Foundation",
    DateTime: "Nov 3, 2024, 3 PM",
    Status: "Completed",
    Actions: "View Details",
    actions: "",
  },
  {
    key: "4",
    ConsultationTitle: "Mary Adams",
    clientName: "Mary Adams",
    DateTime: "Nov 8, 2024, 11 AM",
    Status: "Upcoming",
    actions: "View Details",
    Actions: "Reschedule",
  },
  {
    key: "5",
    ConsultationTitle: "Impact Assessment Planning",
    clientName: "Green Future Alliance",
    DateTime: "Nov 6, 2024, 4 PM",
    Status: "In Progress",
    actions: "View Details",
    Actions: "Reschedule",
  },
  {
    key: "6",
    ConsultationTitle: "Corporate Social Initiative",
    clientName: "ABC Corporates",
    DateTime: "Nov 2, 2024, 1 PM",
    Status: "Completed",
    actions: "View Details",
    Actions: "",
  },
  {
    key: "7",
    ConsultationTitle: "Grant Reporting Training",
    clientName: "Elena Miller (EduCare)",
    DateTime: "Nov 9, 2024, 5 PM",
    Status: "Upcoming",
    actions: "View Details",
    Actions: "Reschedule",
  },
];

const Consultation = (props: Props) => {
  const dispatch = useAppDispatch();
  const dashboardRoute = useAppSelector((state) => state.dashboard);

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const columns = [
    {
      title: "Consultation Title",
      dataIndex: "ConsultationTitle",
      render: (item: string) => (
        <p className="font-semibold text-[14px] leading-[22px] text-grantBlack w-[140px]">
          {item}
        </p>
      ),
    },
    {
      title: "Client Name",
      dataIndex: "clientName",
      render: (item: string) => (
        <p className="font-semibold text-[14px] leading-[22px] text-grantBlack">
          {item}
        </p>
      ),
    },
    {
      title: "Date/Time",
      dataIndex: "DateTime",
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
      title: "Actions",
      dataIndex: "actions",
      render: (item: string) => (
        <p
          className="underline text-dashboardActionColor cursor-pointer text-[12px] leading-[21px]"
          onClick={() => {
            dispatch(
              setActiveRoute({
                ...dashboardRoute,
                consultation: dashboardRouteName.consultationDetails,
              })
            );
          }}>
          {item}
        </p>
      ),
    },
    {
      title: "Actions",
      dataIndex: "Actions",
      render: (item: string) => (
        <p className="underline text-dashboardActionColor cursor-pointer text-[12px] leading-[21px]">
          {item}
        </p>
      ),
    },
  ];
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

  const dataSourceMobile = [
    {
      "Consultation Title	": { value: "Strategic Funding Advisory" },
      "Client Name": { value: "Jane Doe (Doe Inc.)" },
      "Date/Time": { value: "Nov 5, 2024, 5 PM" },
      status: { value: "Upcoming" },
      Action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoute,
                  consultation: dashboardRouteName.consultationDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              View Details
            </p>
          </button>
        ),
      },
      Actions: {
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
              Reschedule
            </p>
          </button>
        ),
      },
    },
    {
      "Consultation Title	": { value: "Grant Proposal Review" },
      "Client Name": { value: "Jane Smith (HealthPro)" },
      "Date/Time": { value: "Nov 7, 2024, 5 PM" },
      status: { value: "In Progress" },
      Action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoute,
                  consultation: dashboardRouteName.consultationDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              View Details
            </p>
          </button>
        ),
      },
      Actions: {
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
              Reschedule
            </p>
          </button>
        ),
      },
    },
    {
      "Consultation Title	": { value: "NGO Capacity Building" },
      "Client Name": { value: "Hope Foundation" },
      "Date/Time": { value: "Nov 3, 2024, 5 PM" },
      status: { value: "Completed" },
      Action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoute,
                  consultation: dashboardRouteName.consultationDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              View Details
            </p>
          </button>
        ),
      },
      Actions: {
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
              Reschedule
            </p>
          </button>
        ),
      },
    },
    {
      "Consultation Title	": { value: "Mary Adams" },
      "Client Name": { value: "Mary Adams" },
      "Date/Time": { value: "Nov 8, 2024, 5 PM" },
      status: { value: "Completed" },
      Action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoute,
                  consultation: dashboardRouteName.consultationDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              View Details
            </p>
          </button>
        ),
      },
      Actions: {
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
              Reschedule
            </p>
          </button>
        ),
      },
    },
    {
      "Consultation Title	": { value: "Impact Assessment Planning" },
      "Client Name": { value: "Green Future Alliance" },
      "Date/Time": { value: "Nov 6, 2024, 5 PM" },
      status: { value: "Completed" },
      Action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoute,
                  consultation: dashboardRouteName.consultationDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              View Details
            </p>
          </button>
        ),
      },
      Actions: {
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
              Reschedule
            </p>
          </button>
        ),
      },
    },
    {
      "Consultation Title	": { value: "Corporate Social Initiative" },
      "Client Name": { value: "ABC Corporates" },
      "Date/Time": { value: "Nov 2, 2024, 5 PM" },
      status: { value: "Completed" },
      Action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoute,
                  consultation: dashboardRouteName.consultationDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              View Details
            </p>
          </button>
        ),
      },
      Actions: {
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
              Reschedule
            </p>
          </button>
        ),
      },
    },
    {
      "Consultation Title	": { value: "Grant Reporting Training" },
      "Client Name": { value: "Elena Miller (EduCare" },
      "Date/Time": { value: "Nov 9, 2024, 5 PM" },
      status: { value: "Upcoming" },
      Action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoute,
                  consultation: dashboardRouteName.consultationDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              View Details
            </p>
          </button>
        ),
      },
      Actions: {
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
              Reschedule
            </p>
          </button>
        ),
      },
    },
  ];

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
          <h2 className="text-secondaryColor text-[20px] leading-[26px]">
            Consultation Overview
          </h2>
          <p className="mt-1 md:mt-4 font-medium leading-[17px] text-center text-textColor text-[12px] w-full">
            View all requested consultation here including details of deadlines
            and statuses
          </p>
        </div>
        <DashboardfilterOptions>
          {/* <div className="w-full md:w-[180px]"> */}
          <LabelInput
            placeholder="Status"
            width={"w-full"}
            value=""
            height="h-[35px]"
            my="my-1 md:my-4"
            select
          />
          {/* </div> */}

          {/* <div className="w-full lg:w-[180px] h-[35px]"> */}
          <RangePicker className="w-full" />
          {/* </div> */}

          <div className="w-full lg:w-[180px]">
            <LabelInput
              placeholder="Client Name"
              width={"w-full"}
              value=""
              height="h-[35px]"
              my="my-1 md:my-4"
            />
          </div>

          <CustomButton
            height="h-[35px]"
            width="w-full lg:w-[76px]"
            title="Filter"
            backgrounColor="bg-primary"
            textStyle="font-bold text-[16px] leading-[16px] font-mont text-white font-inter"
            // my="my-1"
          />
          <CustomButton
            height="h-[35px]"
            width="w-full lg:w-[76px]"
            title="Reset"
            backgrounColor="bg-white"
            borderColor="bg-secondaryColor"
            textStyle="text-secondaryColor font-semibold text-[12px] leading-[20px]"
          />
        </DashboardfilterOptions>
      </div>
      <CustomTable columns={columns} dataSource={dataSource} />
      {dataSourceMobile.map((data) => (
        <div className="space-y-4 mt-4">
          <MobileCustomTable data={data} />
        </div>
      ))}
      <div className="bg-white mt-4 py-8">
        <div className="bg-backgroundColor m-4  h-full">
          <div className=" m-4 p-4 h-[110px]">
            <h4 className=" ">Your Upcoming Consultations</h4>
            <p className="text-textColor text-[16px] leading-[20px] text-sm mt-4">
              “You have 3 upcoming consultations this week”{" "}
            </p>
          </div>
          <div className=" m-4 p-4">
            <h4 className="mb-2">Featured Next Consultation</h4>
            {/* Strategic Funding Advisory Client: John Doe (Doe Inc.) Date/Time: Nov
          5, 2024, 2:00 PM Location: Online - Zoom */}
            <p className="text-black font-semibold ">
              Strategic Funding Advisory
            </p>
            <p className="font-semibold text-black text-[16px] leading-[32px]">
              {" "}
              Client:{" "}
              <span className="text-textColor">John Doe (Doe Inc.)</span>
            </p>
            <p className="font-semibold text-black text-[16px] leading-[32px]">
              {" "}
              Date/Time <span className="text-textColor">Nov 5, 2024</span>
            </p>
            <p className="font-semibold text-black text-[16px] leading-[32px]">
              {" "}
              Location <span className="text-textColor">Online Zoom</span>
            </p>
          </div>
          <div className="w-full lg:w-[50%] px-4 lg:px-0 flex items-center justify-center lg:justify-between ml-0 lg:ml-8  py-4 flex-col lg:flex-row">
            <div className="w-full m-2">
              <CustomButton
                width="w-full lg:w-[190px]"
                height="h-[40px]"
                IconLeft="/calendarNew.svg"
                title="View Calendar"
                backgrounColor="bg-buttonPrimary"
                radius="rounded-[5px]"
                textStyle="font-semibold text-white"
              />
            </div>
            <div className="w-full m-2">
              <CustomButton
                width="w-full lg:w-[190px]"
                height="h-[40px]"
                IconLeft="/video.svg"
                title="Join Meeting"
                backgrounColor="bg-secondaryColor"
                radius="rounded-[5px]"
                textStyle="font-semibold text-white"
              />
            </div>
            <div className="w-full m-2">
              <CustomButton
                width="w-full lg:w-[125px]"
                height="h-[40px]"
                title="Reschedule"
                backgrounColor="bg-white"
                textStyle="text-buttonPrimary"
                borderColor="border-buttonPrimary"
                radius="rounded-[5px]"
              />
            </div>
          </div>
          <div className="ml-8 my-4 w-[70%]">
            <h4>Upcoming List Preview</h4>
            <p className="font-semibold text-black text-[16px] leading-[32px] my-2">
              Grant Proposal Review –
              <span className="text-textColor">Nov 7, 2024, 10:00 AM</span>
            </p>

            <p className="font-semibold text-black text-[16px] leading-[32px] my-2">
              Scholarship Writing Support –
              <span className="text-textColor">Nov 8, 2024, 11:00 AM</span>
            </p>
          </div>

          <div className="flex items-center justify-between w-full lg:w-[55%] my-8 ml-0 px-4 lg:px-0 lg:ml-8 flex-col lg:flex-row">
            <div className="w-full m-2">
              <CustomButton
                width="w-full lg:w-[226px]"
                height="h-[40px]"
                title="View All Consultations"
                backgrounColor="bg-buttonPrimary"
                radius="rounded-[5px]"
                textStyle="text-white text-sm lg:text-base font-semibold "
              />
            </div>
            <div className="w-full m-2">
              <CustomButton
                onClick={() => {
                  dispatch(
                    setActiveRoute({
                      ...dashboardRoute,
                      consultation: dashboardRouteName.performanceMetrics,
                    })
                  );
                }}
                width="w-full lg:w-[300px]"
                height="h-[40px]"
                title="View Your Performance Metrics"
                backgrounColor="bg-secondaryColor"
                radius="rounded-[5px]"
                textStyle="text-white text-sm lg:text-base font-semibold "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
