import React from "react";
import DashboardHeader from "../components/DashboardHeader";

import CustomTable from "../components/CustomTable";
import CustomButton from "@/app/[locale]/components/CustomButton";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import {
  selectDashboardRoute,
  setActiveRoute,
} from "../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import CustomInput from "@/app/[locale]/components/CustomInput";

import { openModal } from "../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";
import WalletFilterPption from "./components/WalletFilterOptions";
import MobileCustomTable from "../../components/MobileCustomTable";

type Props = {};

const dataSource = [
  {
    key: "1",
    Date: "2024-10-15",
    ServiceRendered: "Grant Proposal Review",
    Client: "GreenEarth NGO",
    AmountEarned: "350",
    Status: "Completed",
  },

  {
    key: "2",
    Date: "2024-10-18",
    ServiceRendered: "Grant Writing Consultation",
    Client: "FutureCorp Ltd.",
    AmountEarned: "500",
    Status: "Completed",
  },
  {
    key: "3",
    Date: "2024-10-20",
    ServiceRendered: "Grant Research Assistance",
    Client: "EduCare Initiative",
    AmountEarned: "700",
    Status: "Pending Payment",
  },
  {
    key: "4",
    Date: "2024-10-22",
    ServiceRendered: "Strategy Session",
    Client: "UnityBridge Org.",
    AmountEarned: "250",
    Status: "Completed",
  },
  {
    key: "5",
    Date: "2024-10-25",
    ServiceRendered: "Application Submission",
    Client: "SolarAid Society",
    AmountEarned: "600",
    Status: "Completed",
  },
  {
    key: "6",
    Date: "2024-10-27",
    ServiceRendered: "Follow-up Session",
    Client: "HealthPlus NGO	",
    AmountEarned: "150",
    Status: "Pending Payment",
  },
  {
    key: "7",
    Date: "2024-10-29",
    ServiceRendered: "Proposal Editing",
    Client: "Artisan Org",
    AmountEarned: "300",
    Status: "Completed",
  },
];

const Wallet = (props: Props) => {
  const dispatch = useAppDispatch();
  const dashboardRoute = useAppSelector((state) => state.dashboard);

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const dataSourceMobile = [
    {
      Date: { value: "2024-10-29" },
      "Service Rendered": { value: "Grant Writing Consultation" },
      client: { value: "FutureCorp Ltd." },
      "Amount Earned ($)	": { value: "500" },
      status: { value: "Completed" },
    },
    {
      Date: { value: "2024-10-29" },
      "Service Rendered": { value: "Grant Research Assistance" },
      client: { value: "EduCare Initiative" },
      "Amount Earned ($)	": { value: "700" },
      status: { value: "Pending Payment" },
    },
    {
      Date: { value: "2024-10-29" },
      "Service Rendered": { value: "Strategy Session" },
      client: { value: "UnityBridge Org." },
      "Amount Earned ($)	": { value: "250" },
      status: { value: "Completed" },
    },
    {
      Date: { value: "2024-10-29" },
      "Service Rendered": { value: "Application Submission" },
      client: { value: "SolarAid Society" },
      "Amount Earned ($)	": { value: "600" },
      status: { value: "Completed" },
    },
    {
      Date: { value: "2024-10-29" },
      "Service Rendered": { value: "Follow-up Session" },
      client: { value: "HealthPlus NGO" },
      "Amount Earned ($)	": { value: "150" },
      status: { value: "Pending Payment" },
    },
    {
      Date: { value: "2024-10-29" },
      "Service Rendered": { value: "Proposal Editing" },
      client: { value: "Artisan Org" },
      "Amount Earned ($)	": { value: "300" },
      status: { value: "Completed" },
    },
  ];

  const columns = [
    {
      title: "Date",
      dataIndex: "Date",
      render: (item: string) => (
        <p className="font-semibold text-[14px] leading-[22px] text-grantBlack w-[140px]">
          {item}
        </p>
      ),
    },
    {
      title: "Service Rendered",
      dataIndex: "ServiceRendered",
      render: (item: string) => (
        <p className="font-semibold text-[14px] leading-[22px] text-grantBlack">
          {item}
        </p>
      ),
    },
    {
      title: "Client",
      dataIndex: "Client",
      render: (item: string) => (
        <p className="font-semibold text-[14px] leading-[22px] text-grantBlack w-[140px]">
          {item}
        </p>
      ),
    },
    {
      title: "Amount Earned ($)",
      dataIndex: "AmountEarned",
      render: (item: string) => (
        <p className="font-semibold text-[14px] leading-[22px] text-grantBlack">
          {item}
        </p>
      ),
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (item: string) => (
        <p
          className="font-semibold text-[14px] leading-[22px] text-grantBlack"
          onClick={() => {
            // dispatch(
            //   setActiveRoute({
            //     assignedGrant,
            //     consultation: dashboardRouteName.consultationDetails,
            //   })
            // );
          }}>
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

  return (
    <div
      className="bg-backgroundColor  w-full p-2 md:p-8 overflow-scroll h-screen scroll-smooth"
      ref={scrollContainerRef}>
      <DashboardHeader />
      <div className="w-full h-full bg-white md:bg-backgroundColor mt-4 pt-2 ">
        <div>
          {/* <div className="flex items-center w-[280px] mt-8">
          <p className="text-textColor"> Dashboard </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p className="text-textColor">Wallet </p>
        </div> */}
          <div className="flex flex-col mb-6">
            <h2 className="text-secondaryColor text-left my-2 md:my-4 font-semibold text-[16px] md:text-[36px]  leading-[19px] md:leading-[42px] ">
              Your Wallet
            </h2>
            <p className="text-left font-medium text-[12px] md:text-[16px] leading-[17px] md:leading-[20px] text-textColor">
              Manage your earnings and payouts
            </p>
          </div>
          <div>
            <div className="flex w-full justify-start md:justify-between items-start md:items-center py-4 flex-col md:flex-row">
              <h4 className="text-[16px] leading-[18px] md:text-[20px] md:leading-[26px] font-semibold  mb-2">
                Earnings Summary
              </h4>
              <p
                className="underline text-secondaryColor font-semibold text-[14px] leading-[16px] cursor-pointer"
                onClick={() => {
                  // console.log("What's wrong!!!")
                  dispatch(
                    setActiveRoute({
                      ...dashboardRoute,
                      wallet: dashboardRouteName.walletHistory,
                    })
                  );
                }}>
                View Transaction History
              </p>
            </div>
            <div className="flex justify-center md:justify-between  items-center flex-col md:flex-row">
              <div className="w-full h-full md:h-[130px] bg-white shadow-walletSummary flex flex-col justify-around py-4 px-4 mr-0 md:mr-4 border border-buttonPrimary">
                <p className="text-textColor font-semibold text-[16px] leading-[25px]  ">
                  Total Revenue Earned
                </p>
                <p className="font-semibold text-[28px] leading-[42px] text-secondaryColor">
                  $3,000
                </p>
              </div>
              <div className="w-full h-full md:h-[130px]  py-4 px-4 ml-0 md:ml-4 bg-white  shadow-walletSummary flex  justify-between items-start md:items-center mt-4 md:mt-0 flex-col md:flex-row border border-buttonPrimary">
                <div className=" flex flex-col justify-around h-full mb-4">
                  <p className="text-textColor font-semibold text-[16px] leading-[25px] ">
                    Current Wallet Balance
                  </p>
                  <p className="font-semibold text-[28px] leading-[42px] text-buttonPrimary">
                    $2,300
                  </p>
                </div>
                <CustomButton
                  onClick={() => {
                    dispatch(
                      openModal({
                        open: true,
                        modalType: modalName.withdraFundsModal,
                      })
                    );

                    console.log("View Profile clicked");
                  }}
                  title="Withdraw"
                  width="w-full md:w-[107px]"
                  height="h-[41px]"
                  radius="rounded-[5px]"
                  textStyle="text-white font-semibold text-[17px] leading-[17px]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center pt-4 pb-2 flex-col md:flex-row space-y-2">
            <h4 className="font-semibold text-[16px] leading-[19px] md:text-[20px] md:leading-[26px] text-left  my-4 md:my-0 w-full md:w-[50%]">
              Earnings History
            </h4>
            <CustomButton
              borderWidth="border-[1px]"
              width="w-full md:w-[228px]"
              height="h-[40px]"
              IconLeft="/downloadImage.svg"
              title="Download Summary"
              backgrounColor="bg-white"
              borderColor="border-borderColor"
              textStyle="text-[16px] leading-[16px] font-semibold"
              radius="rounded-[5px]"
            />
          </div>
          <WalletFilterPption />
        </div>
        <CustomTable columns={columns} dataSource={dataSource} />
        <div className="md:mr-4 space-y-4 py-4">
          {dataSourceMobile?.map((data) => (
            <MobileCustomTable data={data} />
          ))}
        </div>

        <div className="py-2 px-4 bg-white w-full h-[150px] border-[0.5px] border-borderColor relative mt-4 md:mt-0">
          <h4 className="text-[20px] leading-[26px] w-[70%] md:w-[100%]">
            Bank Account Management
          </h4>
          <div className="mt-2">
            <p className="font-semibold text-[14px] leading-[22px] text-newPrimaryTextColor">
              Bank Name: Globus Bank{" "}
            </p>
            <p className="font-semibold text-[14px] leading-[22px] text-newPrimaryTextColor">
              Account Number: *******4567
            </p>
            <p className="font-semibold text-[14px] leading-[22px] text-newPrimaryTextColor">
              Account Holder: Alice Brooklyn
            </p>
          </div>
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center absolute top-4 right-4 bg-backgroundColor cursor-pointer">
            <img src="/edit.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
