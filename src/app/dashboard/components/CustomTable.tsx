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
};

const CustomTable = (props: Props) => {
  return (
    <Table
      bordered
      scroll={{ x: true }}
      className="mt-4"
      dataSource={props.dataSource}
      columns={props.columns}
    />
  );
};

export default CustomTable;
