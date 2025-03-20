"use client";
import React, { Dispatch, SetStateAction } from "react";
import DashboardHeader from "../components/DashboardHeader";
import CustomButton from "@/app/[locale]/components/CustomButton";
import LabelInput from "@/app/[locale]/components/LabelInput";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { openModal } from "../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";
import RenderModals from "@/app/[locale]/components/RenderModals";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import DashboardfilterOptions from "../components/DashboardfilterOptions";
import CustomTable from "../components/CustomTable";
import MobileCustomTable from "../../components/MobileCustomTable";
import { DatePicker } from "antd";

type Props = {
  //   setActiveScreen: Dispatch<SetStateAction<undefined>>;
};

const dataSource = [
  {
    key: "1",
    Title: "Community Development",
    datePosted: "Oct 15, 2024",
    status: "Active",
    views: "152",
    action: "Edit",
    Action: "Delete",
    performaceTracking: "View Performance",
  },

  {
    key: "2",
    Title: "Education for All",
    datePosted: "Oct 22, 2024",
    status: "Active",
    views: "84",
    action: "Edit",
    Action: "Delete",
    performaceTracking: "View Performance",
  },

  {
    key: "3",
    Title: "Clean Water Initiative",
    datePosted: "Oct 18, 2024",
    status: "Active",
    views: "179",
    action: "Edit",
    Action: "Delete",
    performaceTracking: "View Performance",
  },
  {
    key: "4",
    Title: "Empowerment Program  ",
    datePosted: "Oct 31, 2024",
    status: "Active",
    views: "245",
    action: "Edit",
    Action: "Delete",
    performaceTracking: "View Performance",
  },
  {
    key: "5",
    Title: "Renewable Energy Initiative",
    datePosted: "Oct 19, 2024",
    status: "Active",
    views: "567",
    action: "Edit",
    Action: "Delete",
    performaceTracking: "View Performance",
  },
  {
    key: "6",
    Title: "Small Business Startup Grants",
    datePosted: "Oct 25, 2024",
    status: "Active",
    views: "345",
    action: "Edit",
    Action: "Delete",
    performaceTracking: "View Performance",
  },
  {
    key: "7",
    Title: "Agricultural Funding Program",
    datePosted: "Oct 23, 2024",
    status: "Expired",
    views: "234",
    action: "Edit",
    Action: "Delete",
    performaceTracking: "View Performance",
  },
  {
    key: "8",
    Title: "Urban Development Initiative",
    datePosted: "Oct 18, 2024",
    status: "Expired",
    views: "500",
    action: "Edit",
    Action: "Delete",
    performaceTracking: "View Performance",
  },
  {
    key: "9",
    Title: "International Scholarship Fund",
    datePosted: "Oct 17, 2024",
    status: "Expired",
    views: "900",
    action: "Edit",
    Action: "Delete",
    performaceTracking: "View Performance",
  },
];

const dataSourceSaveGrant = [
  {
    key: "1",
    Title: "Community Development",
    datePosted: "Oct 15, 2024",
    status: "Active",
    action: "Edit Draft",

    Action: "Delete",
  },

  {
    key: "2",
    Title: "Education for All",
    datePosted: "Oct 22, 2024",
    action: "Edit Draft",
    status: "Active",
    Action: "Delete",
  },
];

const MyGrants = (props: Props) => {
  const dispatch = useAppDispatch();
  const dashboardRoutes = useAppSelector((state) => state.dashboard);

  const columns = [
    {
      title: "Title",
      dataIndex: "Title",
      render: (item: string) => (
        <p className="w-[150px] font-semibold text-[14px] leading-[22px] text-grantBlack">
          {item}
        </p>
      ),
    },
    {
      title: "Date Posted",
      dataIndex: "datePosted",
      render: (item: string) => (
        <p className="font-semibold text-[14px] leading-[22px] text-grantBlack">
          {item}
        </p>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (item: string) => (
        <p className="font-semibold text-[14px] leading-[22px] text-grantBlack w-[100px]">
          {item}
        </p>
      ),
    },
    {
      title: "Views",
      dataIndex: "views",
      render: (item: string) => {
        const textColor = (item: any) => {
          if (item === "Ongoing") {
            return "text-secondaryColor";
          } else if (item === "Completed") {
            return "text-buttonPrimary";
          } else {
            return "text-[#FF9500]";
          }
        };

        return (
          <p
            className={`font-semibold text-[14px] leading-[22px] ${textColor(
              item
            )} w-[100px] capitalize`}>
            {item}
          </p>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (item: string) => (
        <p
          onClick={() => {
            dispatch(
              setActiveRoute({
                ...dashboardRoutes,
                consultation: dashboardRouteName.generalConsultationDetails,
              })
            );
          }}
          className="underline text-buttonPrimary cursor-pointer text-[14px] leading-[21.98px] font-semibold">
          Edit
        </p>
      ),
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (item: string) => (
        <button>
          <p
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.deleteModal,
                })
              );
            }}
            className="underline text-errorColor cursor-pointer text-[14px] leading-[21.98px] font-semibold">
            Delete
          </p>
        </button>
      ),
    },
    {
      title: "Performance Tracking",
      dataIndex: "performaceTracking",
      render: (item: string) => (
        <p
          onClick={() => {
            dispatch(
              setActiveRoute({
                ...dashboardRoutes,
                mygrant: dashboardRouteName.grantPerformanceMetric,
              })
            );
          }}
          className="underline text-secondaryColor cursor-pointer text-[14px] leading-[21.98px] font-semibold">
          View Performance
        </p>
      ),
    },
  ];
  const savedGrantColumns = [
    {
      title: "Title",
      dataIndex: "Title",
      render: (item: string) => (
        <p className=" font-semibold text-[14px] leading-[22px] text-grantBlack">
          {item}
        </p>
      ),
    },
    {
      title: "Last Edited",
      dataIndex: "datePosted",
      render: (item: string) => (
        <p className="font-semibold text-[14px] leading-[22px] text-grantBlack">
          {item}
        </p>
      ),
    },
    {
      title: "Actions",
      dataIndex: "action",
      render: (item: string) => (
        <p
          onClick={() => {
            dispatch(
              setActiveRoute({
                ...dashboardRoutes,
                consultation: dashboardRouteName.generalConsultationDetails,
              })
            );
          }}
          className="underline text-buttonPrimary cursor-pointer text-[14px] leading-[21.98px] font-semibold">
          {item}
        </p>
      ),
    },
    {
      title: "",
      dataIndex: "Action",
      render: (item: string) => (
        <button>
          <p
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.deleteModal,
                })
              );
            }}
            className="underline text-errorColor cursor-pointer text-[14px] leading-[21.98px] font-semibold">
            Delete
          </p>
        </button>
      ),
    },
  ];

  const dataSourceMobile = [
    {
      Title: { value: "Community Development" },
      datePosted: { value: "Oct 15, 2024" },
      status: { value: "Active" },
      views: { value: "152" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  consultation: dashboardRouteName.generalConsultationDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              Edit
            </p>
          </button>
        ),
      },
      Action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.deleteModal,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-errorColor w-[180px] text-right underline">
              Delete
            </p>
          </button>
        ),
      },
      performaceTracking: {
        CustomContent: () => (
          <button
            onClick={() =>
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  mygrant: dashboardRouteName.grantPerformanceMetric,
                })
              )
            }>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-secondaryColor  text-right underline ">
              View Perfomance
            </p>
          </button>
        ),
      },
    },

    {
      Title: { value: "Education for All" },
      datePosted: { value: "Oct 22, 2024" },
      status: { value: "Active" },
      views: { value: "84" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  consultation: dashboardRouteName.generalConsultationDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              Edit
            </p>
          </button>
        ),
      },
      Action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.deleteModal,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-errorColor w-[180px] text-right underline">
              Delete
            </p>
          </button>
        ),
      },
      performaceTracking: {
        CustomContent: () => (
          <button
            onClick={() =>
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  mygrant: dashboardRouteName.grantPerformanceMetric,
                })
              )
            }>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-secondaryColor  text-right underline ">
              View Perfomance
            </p>
          </button>
        ),
      },
    },

    {
      Title: { value: "Clean Water Initiative" },
      datePosted: { value: "Oct 18, 2024" },
      status: { value: "Active" },
      views: { value: "179" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  consultation: dashboardRouteName.generalConsultationDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              Edit
            </p>
          </button>
        ),
      },
      Action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.deleteModal,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-errorColor w-[180px] text-right underline">
              Delete
            </p>
          </button>
        ),
      },
      performaceTracking: {
        CustomContent: () => (
          <button
            onClick={() =>
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  mygrant: dashboardRouteName.grantPerformanceMetric,
                })
              )
            }>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-secondaryColor  text-right underline ">
              View Perfomance
            </p>
          </button>
        ),
      },
    },
    {
      Title: { value: "Empowerment Program" },
      datePosted: { value: "Oct 31, 2024" },
      status: { value: "Active" },
      views: { value: "245" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  consultation: dashboardRouteName.generalConsultationDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              Edit
            </p>
          </button>
        ),
      },
      Action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.deleteModal,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-errorColor w-[180px] text-right underline">
              Delete
            </p>
          </button>
        ),
      },
      performaceTracking: {
        CustomContent: () => (
          <button
            onClick={() =>
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  mygrant: dashboardRouteName.grantPerformanceMetric,
                })
              )
            }>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-secondaryColor  text-right underline ">
              View Perfomance
            </p>
          </button>
        ),
      },
    },
    {
      Title: { value: "Renewable Energy Initiative" },
      datePosted: { value: "Oct 19, 2024" },
      status: { value: "Active" },
      views: { value: "567" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  consultation: dashboardRouteName.generalConsultationDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              Edit
            </p>
          </button>
        ),
      },
      Action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.deleteModal,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-errorColor w-[180px] text-right underline">
              Delete
            </p>
          </button>
        ),
      },
      performaceTracking: {
        CustomContent: () => (
          <button
            onClick={() =>
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  mygrant: dashboardRouteName.grantPerformanceMetric,
                })
              )
            }>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-secondaryColor text-right underline ">
              View Perfomance
            </p>
          </button>
        ),
      },
    },
    {
      Title: { value: "Small Business Startup Grants" },
      datePosted: { value: "Oct 25, 2024" },
      status: { value: "Active" },
      views: { value: "345" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  consultation: dashboardRouteName.generalConsultationDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              Edit
            </p>
          </button>
        ),
      },
      Action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.deleteModal,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-errorColor w-[180px] text-right underline">
              Delete
            </p>
          </button>
        ),
      },
      performaceTracking: {
        CustomContent: () => (
          <button
            onClick={() =>
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  mygrant: dashboardRouteName.grantPerformanceMetric,
                })
              )
            }>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-secondaryColor  text-right underline ">
              View Perfomance
            </p>
          </button>
        ),
      },
    },
    {
      Title: { value: "Agricultural Funding Program" },
      datePosted: { value: "Oct 23, 2024" },
      status: { value: "Expired" },
      views: { value: "234" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  consultation: dashboardRouteName.generalConsultationDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              Edit
            </p>
          </button>
        ),
      },
      Action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.deleteModal,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-errorColor w-[180px] text-right underline">
              Delete
            </p>
          </button>
        ),
      },
      performaceTracking: {
        CustomContent: () => (
          <button
            onClick={() =>
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  mygrant: dashboardRouteName.grantPerformanceMetric,
                })
              )
            }>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-secondaryColor  text-right underline ">
              View Perfomance
            </p>
          </button>
        ),
      },
    },
    {
      Title: { value: "Urban Development Initiative" },
      datePosted: { value: "Oct 18, 2024" },
      status: { value: "Expired" },
      views: { value: "500" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  consultation: dashboardRouteName.generalConsultationDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              Edit
            </p>
          </button>
        ),
      },
      Action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.deleteModal,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-errorColor w-[180px] text-right underline">
              Delete
            </p>
          </button>
        ),
      },
      performaceTracking: {
        CustomContent: () => (
          <button
            onClick={() =>
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  mygrant: dashboardRouteName.grantPerformanceMetric,
                })
              )
            }>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-secondaryColor  text-right underline ">
              View Perfomance
            </p>
          </button>
        ),
      },
    },
    {
      Title: { value: "International Scholarship Fund" },
      datePosted: { value: "Oct 17, 2024" },
      status: { value: "Expired" },
      views: { value: "900" },
      action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  consultation: dashboardRouteName.generalConsultationDetails,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary w-[180px] text-right underline">
              Edit
            </p>
          </button>
        ),
      },
      Action: {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.deleteModal,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-errorColor w-[180px] text-right underline">
              Delete
            </p>
          </button>
        ),
      },
      performaceTracking: {
        CustomContent: () => (
          <button
            onClick={() =>
              dispatch(
                setActiveRoute({
                  ...dashboardRoutes,
                  mygrant: dashboardRouteName.grantPerformanceMetric,
                })
              )
            }>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-secondaryColor  text-right underline ">
              View Perfomance
            </p>
          </button>
        ),
      },
    },
  ];

  const dataSourceSavedGrantMobile = [
    {
      Title: { value: "Community Development" },
      "Last Edited": { value: "Oct 15, 2024" },
      Actions: {
        CustomContent: () => (
          <button>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary  text-right underline">
              Edit Draft
            </p>
          </button>
        ),
      },
      "": {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.deleteModal,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-errorColor  text-right underline">
              Delete
            </p>
          </button>
        ),
      },
    },

    {
      Title: { value: "Community Development" },
      "Last Edited": { value: "Oct 15, 2024" },
      Actions: {
        CustomContent: () => (
          <button>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-buttonPrimary  text-right underline">
              Edit Draft
            </p>
          </button>
        ),
      },

      "": {
        CustomContent: () => (
          <button
            onClick={() => {
              dispatch(
                openModal({
                  open: true,
                  modalType: modalName.deleteModal,
                })
              );
            }}>
            <p className="font-mono font-semibold  text-[14px] leading-[22px] text-errorColor  text-right underline">
              Delete
            </p>
          </button>
        ),
      },
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
      className="bg-backgroundColor  w-full p-6 md:p-8 overflow-scroll h-full md:h-screen scroll-smooth overflow-y-auto no-scrollbar"
      ref={scrollContainerRef}>
      <DashboardHeader />

      <div className="flex justify-between items-center py-4 mt-8 flex-col md:flex-row">
        <div className="h-[60px] flex items-center md:justify-between w-full md:w-[350px]">
          {/* Image */}
          <div className="w-[60px] h-[60px] rounded-full ">
            <img
              src="/usImage.svg"
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          <div className="ml-2">
            <p className="font-mono font-semibold text-[13.2px] leading-[15.58px] text-textColor">
              Welcome!
            </p>
            <p className="font-mono font-semibold text-newPrimaryTextColor text-[14px] leading-[18px]">
              U.S. Agency for International Development (USAID)
            </p>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row w-full md:w-[40%] ">
          <div className="mr-4 w-full my-2">
            <CustomButton
              width="w-full md:w-[170.21px]"
              height="h-[50px] md:h-[35px]"
              title="List a New Grant"
              radius="rounded-[5px]"
              textStyle="text-backgroundColor leading-[25px] text-[16px] font-semibold"
            />
          </div>

          <div className="w-full my-2">
            <CustomButton
              // onClick={() => {
              //   console.log("ypppp")
              //   dispatch(
              //     setActiveRoute({
              //       ...dashboardRoutes,
              //       consultation: dashboardRouteName.generalConsultationDetails,
              //     })
              //   );
              // }}

              onClick={() => {
                dispatch(
                  setActiveRoute({
                    ...dashboardRoutes,
                    mygrant: dashboardRouteName.allGrants,
                  })
                );
              }}
              width="w-full md:w-[200.21px]"
              height="h-[50px] md:h-[30px]"
              title="View all Grant"
              radius="rounded-[5px]"
              backgrounColor="bg-transparent"
              borderColor="border-secondaryColor"
              textStyle="text-secondaryColor font-semibold text-[16px] leading-[25px] "
              borderWidth="border-[2px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center my-4 flex-col md:flex-row">
        <div className="w-full md:w-[250px] h-[77.64px] bg-white border-[0.5px] border-borderColor shadow-genera-user-shdow-card grid place-items-center">
          <div className="flex justify-between items-center">
            <p className="text-errorColor font-bold text-[16px] leading-[18.88px] font-mono">
              Total Grants:{" "}
              <span className="text-errorColor ml-2 font-bold text-[16px] leading-[18.88px]">
                12
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="my-1 md:m-0 w-full md:w-[250px] h-[77.64px] bg-white border-[0.5px] border-borderColor shadow-genera-user-shdow-card grid place-items-center">
          <div className="flex justify-between items-center">
            <p className="text-secondaryColor font-bold text-[16px] leading-[18.88px] font-mono">
              Active Grants:{" "}
              <span className="text-secondaryColor ml-2 font-bold text-[16px] leading-[18.88px]">
                8
              </span>{" "}
            </p>
          </div>
        </div>

        <div className=" my-1 md:m-0  w-full md:w-[250px] h-[77.64px] bg-white border-[0.5px] border-borderColor shadow-genera-user-shdow-card grid place-items-center">
          <div className="flex justify-between items-center">
            <p className="text-[#6E6E6E] font-bold text-[16px] leading-[18.88px] font-mono">
              Expired Grants:{" "}
              <span className="text-[#6E6E6E] ml-2 font-bold text-[16px] leading-[18.88px]">
                4
              </span>{" "}
            </p>
          </div>
        </div>

        <div className="my-1 md:m-0  w-full md:w-[250px] h-[77.64px] bg-white border-[0.5px] border-borderColor shadow-genera-user-shdow-card grid place-items-center">
          <div className="flex justify-between items-center">
            <p className="text-secondaryColor font-bold text-[16px] leading-[18.88px] font-mono">
              Saved Drafts:{" "}
              <span className="text-secondaryColor ml-2 font-bold text-[16px] leading-[18.88px]">
                2
              </span>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-secondaryColor text-[24px] font-semibold leading-[36.24px] ">
          Published Grants History
        </h3>

        <DashboardfilterOptions>
          <div className="w-full md:w-[180px]">
            <LabelInput
              placeholder="Title"
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
            <DatePicker placeholder="Date Range - From" className="w-full" />
          </div>
          <div className="w-full">
            <DatePicker placeholder="To" className="w-full" />
          </div>
          <div className="w-full">
            <LabelInput
              placeholder="Grant Category"
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

      <div className="mt-8">
        <h3 className="text-secondaryColor text-[24px] font-semibold leading-[36.24px] ">
          Saved Grant
        </h3>

        <div className="custom-header ">
          <CustomTable
            columns={savedGrantColumns}
            dataSource={dataSourceSaveGrant}
            bordered={false}
          />
        </div>
        <div className="space-y-4 mt-4">
          {dataSourceSavedGrantMobile.map((data) => (
            <MobileCustomTable data={data} />
          ))}
        </div>
      </div>

      <RenderModals />
    </div>
  );
};

export default MyGrants;
