import { Table } from "antd";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
};

const CustomTable = (props: Props) => {
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
          className="underline text-dashboardActionColor cursor-pointer text-[12px] leading-[21px]">
          View Details
        </p>
      ),
    },
  ];

  return (
    <Table
    bordered
      scroll={{ x: true }}
      className="mt-4"
      dataSource={dataSource}
      columns={columns}
    />
  );
};

export default CustomTable;
