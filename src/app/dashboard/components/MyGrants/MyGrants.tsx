"use client";
import React, { Dispatch, SetStateAction } from "react";
import DashboardHeader from "../DashboardHeader";
import CustomButton from "@/app/components/CustomButton";
import LabelInput from "@/app/components/LabelInput";
import GrantCard from "@/app/grants/components/GrantCard";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { openModal } from "../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/utils/ModalTypes";
import RenderModals from "@/app/components/RenderModals";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/utils/dashboardRouteType";
import DashboardfilterOptions from "../DashboardfilterOptions";
import CustomTable from "../CustomTable";

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

const MyGrants = (props: Props) => {
  const dispatch = useAppDispatch();
  const dashboardRoutes = useAppSelector((state) => state.dashboard);

  const columns = [
    {
      title: "Title",
      dataIndex: "Title",
      render: (item: string) => (
        <p className="w-[344px] font-semibold text-[14px] leading-[22px] text-grantBlack">
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
        <p className="font-semibold text-[14px] leading-[22px] text-grantBlack w-[140px]">
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
            )} w-[140px] capitalize`}>
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
        <p
          onClick={() => {
            dispatch(
              setActiveRoute({
                ...dashboardRoutes,
                consultation: dashboardRouteName.generalConsultationDetails,
              })
            );
          }}
          className="underline text-errorColor cursor-pointer text-[14px] leading-[21.98px] font-semibold">
          Delete
        </p>
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
                consultation: dashboardRouteName.generalConsultationDetails,
              })
            );
          }}
          className="underline text-secondaryColor cursor-pointer text-[14px] leading-[21.98px] font-semibold">
          View Performance 
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
      className="bg-backgroundColor  w-full p-8 overflow-scroll h-screen scroll-smooth overflow-y-auto no-scrollbar"
      ref={scrollContainerRef}>
      <DashboardHeader />

      <div className="flex justify-between items-center py-4 mt-8">
        <div className="h-[60px] flex items-center justify-between w-[350px]">
          {/* Image */}
          <div className="w-[60px] h-[60px] rounded-full ">
            <img
              src="/usImage.svg"
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          <div className="ml-1">
            <p className="font-mono font-semibold text-[13.2px] leading-[15.58px] text-textColor">
              Welcome!
            </p>
            <p className="font-mono font-semibold text-newPrimaryTextColor text-[14px] leading-[18px]">
              U.S. Agency for International Development (USAID)
            </p>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="mr-4">
            <CustomButton
              width="w-[170.21px]"
              height="h-[35px]"
              title="List a New Grant"
              radius="rounded-[5px]"
              textStyle="text-backgroundColor leading-[17px] text-[12px] font-semibold"
            />
          </div>

          <CustomButton
            width="w-[200.21px]"
            height="h-[30px]"
            title="View all Grant"
            radius="rounded-[5px]"
            backgrounColor="bg-transparent"
            borderColor="border-secondaryColor"
            textStyle="text-secondaryColor font-semibold text-[12px] leading-[17px] "
            borderWidth="border-[2px]"
          />
        </div>
      </div>
      <div className="flex justify-between items-center my-4">
        <div className="w-[250px] h-[77.64px] bg-white border-[0.5px] border-borderColor shadow-genera-user-shdow-card grid place-items-center">
          <div className="flex justify-between items-center">
            <p className="text-errorColor font-bold text-[16px] leading-[18.88px] font-mono">
              Total Grants:{" "}
              <span className="text-errorColor ml-2 font-bold text-[16px] leading-[18.88px]">
                12
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="w-[250px] h-[77.64px] bg-white border-[0.5px] border-borderColor shadow-genera-user-shdow-card grid place-items-center">
          <div className="flex justify-between items-center">
            <p className="text-secondaryColor font-bold text-[16px] leading-[18.88px] font-mono">
              Active Grants:{" "}
              <span className="text-secondaryColor ml-2 font-bold text-[16px] leading-[18.88px]">
                8
              </span>{" "}
            </p>
          </div>
        </div>

        <div className="w-[250px] h-[77.64px] bg-white border-[0.5px] border-borderColor shadow-genera-user-shdow-card grid place-items-center">
          <div className="flex justify-between items-center">
            <p className="text-[#6E6E6E] font-bold text-[16px] leading-[18.88px] font-mono">
              Expired Grants:{" "}
              <span className="text-[#6E6E6E] ml-2 font-bold text-[16px] leading-[18.88px]">
                4
              </span>{" "}
            </p>
          </div>
        </div>

        <div className="w-[250px] h-[77.64px] bg-white border-[0.5px] border-borderColor shadow-genera-user-shdow-card grid place-items-center">
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

        <DashboardfilterOptions />
      </div>
      <CustomTable columns={columns} dataSource={dataSource} />

      <RenderModals />
    </div>
  );
};

export default MyGrants;
