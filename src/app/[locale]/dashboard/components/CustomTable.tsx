import { Table } from "antd";
import React, { Dispatch, SetStateAction } from "react";

type ColumsData = {
  key?: string;
  grantTitle?: string;
  assignedDate?: string;
  clientName?: string;
  Deadline?: string;
  Status?: string;
  category?: string;
  action?: string;
  ConsultationTitle?: string;
  DateTime?: string;
  Actions?:string;
};
type DataSourceData = { 
  title: string;
  dataIndex: string;
  render: any;
  }

type Props = {
  dataSource: ColumsData[];
  columns: DataSourceData[];
  bordered?: boolean;
};

const CustomTable = ({dataSource, columns, bordered=true}: Props) => {
  return (
    <Table
      bordered={bordered}
      scroll={{ x: true }}
      className="mt-4 hidden md:block shadow-table-shadow"
      dataSource={dataSource}
      columns={columns}
      
      // headerBg="red"
      
    />
  );
};

export default CustomTable;
