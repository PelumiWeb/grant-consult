import React from "react";
import DashboardHeader from "../DashboardHeader";
import DashboardfilterOptions from "../DashboardfilterOptions";
import CustomTable from "../CustomTable";
import CustomButton from "@/app/[locale]/components/CustomButton";
import { setIsScrolled } from "../../../../../../lib/features/Scrolled/Scrolled";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import {
  selectDashboardRoute,
  setActiveRoute,
} from "../../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import CustomInput from "@/app/[locale]/components/CustomInput";
import WalletFilterPption from "./components/WalletFilterOptions";
import { openModal } from "../../../../../../lib/features/Modal/modalSlice";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";

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
      className="bg-backgroundColor  w-full p-8 overflow-scroll h-screen scroll-smooth"
      ref={scrollContainerRef}>
      <DashboardHeader />
      <div>
        <div className="flex items-center w-[280px] mt-8">
          <p className="text-textColor"> Dashboard </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p className="text-textColor">Wallet </p>
        </div>
        <div className="flex flex-col mb-6">
          <h2 className="text-secondaryColor text-left my-4">Your Wallet</h2>
          <p className="text-left">Manage your earnings and payouts</p>
        </div>
        <div>
          <div className="flex w-full justify-between items-center py-4">
            <h4 className="text-[20px] leading-[26px]">Earnings Summary</h4>
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
          <div className="flex justify-between">
            <div className="w-full h-[130px] bg-white shadow-walletSummary flex flex-col justify-around py-4 px-4 mr-4">
              <p className="text-textColor font-semibold text-[16px] leading-[25px] ">
                Total Revenue Earned
              </p>
              <p className="font-semibold text-[28px] leading-[42px] text-secondaryColor">
                $3,000
              </p>
            </div>
            <div className="w-full h-[130px]  py-4 px-4 ml-4 bg-white  shadow-walletSummary flex  justify-between items-center">
              <div className=" flex flex-col justify-around h-full">
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
                width="w-[107px]"
                height="h-[41px]"
                radius="rounded-[5px]"
                textStyle="text-white font-semibold text-[17px] leading-[17px]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-4 pb-2">
          <h4 className="font-semibold text-[20px] leading-[26px]">
            Earnings History
          </h4>
          <CustomButton
            borderWidth="border-[1px]"
            width="w-[228px]"
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

      <div className="py-2 px-4 bg-white w-full h-[150px] border-[0.5px] border-borderColor relative">
        <h4 className="text-[20px] leading-[26px]">Bank Account Management</h4>
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
  );
};

export default Wallet;
