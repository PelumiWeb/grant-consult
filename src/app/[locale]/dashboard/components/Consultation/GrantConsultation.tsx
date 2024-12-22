"use client";
import React, { Dispatch, SetStateAction } from "react";
import DashboardHeader from "../DashboardHeader";
import CustomButton from "@/app/[locale]/components/CustomButton";
import LabelInput from "@/app/[locale]/components/LabelInput";
import GrantCard from "@/app/[locale]/grants/components/GrantCard";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import { openModal } from "../../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/[locale]/utils/ModalTypes";
import RenderModals from "@/app/[locale]/components/RenderModals";
import { setIsScrolled } from "../../../../../../lib/features/Scrolled/Scrolled";
import { setActiveRoute } from "../../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/[locale]/utils/dashboardRouteType";
import DashboardfilterOptions from "../DashboardfilterOptions";
import CustomTable from "../CustomTable";

type Props = {
  //   setActiveScreen: Dispatch<SetStateAction<undefined>>;
};

const dataSource = [
  {
    key: "1",
    consultationType: "Education Grant Proposal Review",
    consultant: "Alice Brooklyn",
    date: "Jul 14, 2024",
    status: "Ongoing",
    action: "View Details",
  },

  {
    key: "2",
    consultationType: "Climate Change Advocacy Workshop",
    consultant: "John Doe",
    date: "June 20, 2024",
    status: "Completed",
    action: "View Details",
  },
  {
    key: "3",
    consultationType: "Renewable Energy Project Advisory",
    consultant: "Sarah Smith",
    date: "July 29, 2024",
    status: "upcoming",
    action: "View Details",
  },
  {
    key: "4",
    consultationType: "Community Health Outreach Grant",
    consultant: "Peterson Brooklyn",
    date: "May 25, 2024",
    status: "Completed",
    action: "View Details",
  },
  {
    key: "5",
    consultationType: "Digital Literacy Training Funding",
    consultant: "Jane White",
    date: "August 3, 2024",
    status: "Ongoing",
    action: "View Details",
  },
  {
    key: "6",
    consultationType: "Youth Empowerment Scholarship Plan",
    consultant: "Jane Carter",
    date: "July 1, 2024",
    status: "Upcoming",
    action: "View Details",
  },
  {
    key: "7",
    consultationType: "Agricultural Research Proposal",
    consultant: "Sarah Miller",
    date: "June 15, 2024",
    status: "Oncoming",
    action: "View Details",
  },
  {
    key: "8",
    consultationType: "Arts and Culture Festival Funding",
    consultant: "Peter Smith",
    date: "August 20, 2024",
    status: "Completed",
    action: "View Details",
  },
];

const GrantConsultation = (props: Props) => {
  const dispatch = useAppDispatch();
  const dashboardRoutes = useAppSelector((state) => state.dashboard);

  const columns = [
    {
      title: "Consultation Type",
      dataIndex: "consultationType",
      render: (item: string) => (
        <p className="w-[344px] font-semibold text-[14px] leading-[22px] text-grantBlack">
          {item}
        </p>
      ),
    },
    {
      title: "Consultant",
      dataIndex: "consultant",
      render: (item: string) => (
        <p className="font-semibold text-[14px] leading-[22px] text-grantBlack">
          {item}
        </p>
      ),
    },
    {
      title: "Date initiated",
      dataIndex: "date",
      render: (item: string) => (
        <p className="font-semibold text-[14px] leading-[22px] text-grantBlack w-[140px]">
          {item}
        </p>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (item: string) => {
        const textColor = (item: any) => {
          if (item === "Ongoing") {
            return "text-secondaryColor";
          } else if (item === "Completed") {
            return "text-buttonPrimary";
          } else {
            return "text-[#FF9500]";
          }
          console.log(textColor);
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
          className="underline text-textColor cursor-pointer text-[14px] leading-[21.98px] font-semibold">
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
      className="bg-backgroundColor  w-full p-8 overflow-scroll h-screen scroll-smooth overflow-y-auto no-scrollbar"
      ref={scrollContainerRef}>
      <DashboardHeader />
      <div className="flex items-center w-[580px] mt-8">
        <p className="text-textColor"> Dashboard </p>
        <p className="text-textColor mx-3">{">>"}</p>
        <p className="text-textColor">Consultation </p>
      </div>
      <div className="flex justify-between items-center py-4">
        <h3 className="text-secondaryColor text-[24px] font-semibold leading-[36.24px] ">
          Consultation Summary
        </h3>
        <div className="flex justify-between ">
          <div className="mr-4">
            <CustomButton
              width="w-[170.21px]"
              height="h-[35px]"
              title="Available Grants"
              radius="rounded-[5px]"
              textStyle="text-backgroundColor leading-[17px] text-[12px] font-semibold"
            />
          </div>

          <CustomButton
            width="w-[200.21px]"
            height="h-[30px]"
            title="Request for consultant"
            radius="rounded-[5px]"
            backgrounColor="bg-transparent"
            borderColor="border-buttonPrimary"
            textStyle="text-[#6E6E6EB2] font-semibold text-[12px] leading-[17px] "
            borderWidth="border-[2px]"
          />
        </div>
      </div>
      <div className="flex justify-between items-center my-4">
        <div className="w-[250px] h-[77.64px] bg-white border-[0.5px] border-borderColor shadow-genera-user-shdow-card grid place-items-center">
          <div className="flex justify-between items-center">
            <p className="text-errorColor font-bold text-[16px] leading-[18.88px] font-mono">
              Total Consultation:{" "}
              <span className="text-errorColor ml-2 font-bold text-[16px] leading-[18.88px]">
                12
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="w-[250px] h-[77.64px] bg-white border-[0.5px] border-borderColor shadow-genera-user-shdow-card grid place-items-center">
          <div className="flex justify-between items-center">
            <p className="text-secondaryColor font-bold text-[16px] leading-[18.88px] font-mono">
              Ongoing:{" "}
              <span className="text-secondaryColor ml-2 font-bold text-[16px] leading-[18.88px]">
                3
              </span>{" "}
            </p>
          </div>
        </div>

        <div className="w-[250px] h-[77.64px] bg-white border-[0.5px] border-borderColor shadow-genera-user-shdow-card grid place-items-center">
          <div className="flex justify-between items-center">
            <p className="text-[#FF9500] font-bold text-[16px] leading-[18.88px] font-mono">
              Upcoming:{" "}
              <span className="text-[#FF9500] ml-2 font-bold text-[16px] leading-[18.88px]">
                2
              </span>{" "}
            </p>
          </div>
        </div>

        <div className="w-[250px] h-[77.64px] bg-white border-[0.5px] border-borderColor shadow-genera-user-shdow-card grid place-items-center">
          <div className="flex justify-between items-center">
            <p className="text-secondaryColor font-bold text-[16px] leading-[18.88px] font-mono">
              Completed:{" "}
              <span className="text-secondaryColor ml-2 font-bold text-[16px] leading-[18.88px]">
                7
              </span>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-secondaryColor text-[24px] font-semibold leading-[36.24px] ">
          Consultation History
        </h3>

        <DashboardfilterOptions />
      </div>
      <CustomTable columns={columns} dataSource={dataSource} />

      <RenderModals />
    </div>
  );
};

export default GrantConsultation;
