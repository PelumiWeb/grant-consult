import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardfilterOptions from "../components/DashboardfilterOptions";
import CustomTable from "../components/CustomTable";
import CustomButton from "@/app/[locale]/components/CustomButton";
import { setIsScrolled } from "../../../../../lib/features/Scrolled/Scrolled";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { setActiveRoute } from "../../../../../lib/features/DashboardRoutes/dashboardSlice";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";
import CustomInput from "@/app/[locale]/components/CustomInput";
import WalletFilterPption from "./components/WalletFilterOptions";

type Props = {};

const dataSource = [
  {
    key: "1",
    Date: "2024-10-15",
    Type: "Payment",
    AmountCredited: "350",
    Source: "10% commission from Educational Grant Project paid by Client ABC.",
  },

  {
    key: "2",
    Date: "2024-10-18",
    Type: "Withdrawal",
    AmountCredited: "- 200",
    Source: "Withdrawal to Account (Bank: Access Bank, Account ending 1234).",
  },
  {
    key: "3",
    Date: "2024-10-22",
    Type: "Payment",
    AmountCredited: "500",
    Source: "8% commission from Health Initiative paid by Client XYZ",
  },
  {
    key: "4",
    Date: "2024-10-22",
    Type: "Payment",
    AmountCredited: "350",
    Source:
      "12% commission from Community Development Grant paid by Client DEF.",
  },
  {
    key: "5",
    Date: "2024-10-25",
    Type: "Withdrawal",
    AmountCredited: "-100",
    Source: "Withdrawal to Account (Bank: GTBank, Account ending 5678)",
  },
  {
    key: "6",
    Date: "2024-10-27",
    Type: "Payment",
    AmountCredited: "800",
    Source: "10% commission from SME Funding Program paid by Client LMN.",
  },
  {
    key: "7",
    Date: "2024-10-30",
    Type: "Payment",
    AmountCredited: "1000",
    Source: "9% commission from Climate Action Grant paid by Client OPQ.",
  },
  {
    key: "8",
    Date: "2024-11-01",
    Type: "Payment",
    AmountCredited: "500",
    Source: "11% commission from Youth Empowerment Grant paid by Client RST.",
  },
  {
    key: "9",
    Date: "2024-11-02",
    Type: "Payment",
    AmountCredited: "1000",
    Source:
      "10% commission from Agricultural Support Program paid by Client UVW.",
  },
  {
    key: "10",
    Date: "2024-11-03",
    Type: "Withdraw",
    AmountCredited: "-700",
    Source: "Withdrawal to Account (Bank: Zenith Bank, Account ending 9012).",
  },
];

const WalletHistory = (props: Props) => {
  const dispatch = useAppDispatch();
  const dashboardRoutes = useAppSelector((state) => state.dashboard);

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const columns = [
    {
      title: "Date",
      dataIndex: "Date",
      render: (item: string) => (
        <p className="font-semibold text-[14px] leading-[22px] text-grantBlack w-[197px]">
          {item}
        </p>
      ),
    },
    {
      title: "Type",
      dataIndex: "Type",
      render: (item: string) => (
        <p
          className={`font-semibold text-[14px] w-[168px] leading-[22px] ${
            item === "Payment" ? "text-buttonPrimary" : "text-errorColor"
          }`}>
          {item}
        </p>
      ),
    },
    {
      title: "Amount Credited ($)",
      dataIndex: "AmountCredited",
      render: (item: string) => (
        <p
          className={`font-semibold text-[14px] leading-[22px] w-[233px] text-center ${
            item.split("").includes("-")
              ? "text-errorColor"
              : "text-buttonPrimary"
          }`}>
          {item}
        </p>
      ),
    },
    {
      title: "Source",
      dataIndex: "Source",
      render: (item: string) => (
        <p className="font-semibold text-[14px] leading-[22px] w-[455px] text-grantBlack">
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
      <div>
        {/* <div className="flex items-center w-[380px] mt-8">
          <p className="text-textColor"> Dashboard </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p className="text-textColor">Wallet </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p className="text-textColor">Transaction History </p>
        </div> */}
        <div className="flex flex-col mb-6 mt-8">
          <h2 className="text-secondaryColor text-center">
            Transaction History
          </h2>
        </div>
        <div></div>

        <WalletFilterPption />
      </div>
      <CustomTable columns={columns} dataSource={dataSource} />

      <div
        className="flex items-center mt-16 ml-4 cursor-pointer"
        onClick={() => {
          dispatch(
            setActiveRoute({
              ...dashboardRoutes,
              wallet: dashboardRouteName.wallet,
            })
          );
        }}>
        <img src="/arrowLeft.svg" alt="" />
        <p className="text-secondaryColor ml-2">Return to Dashboard</p>
      </div>
    </div>
  );
};

export default WalletHistory;
