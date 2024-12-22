import React from "react";
import { Modal } from "antd";

type Props = {
  open: boolean;
  setOpen: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
};

const CustomModal = ({
  open,
  setOpen,
  children,
  width = "100%",
  height = "100%",
}: Props) => {
  return (
    <Modal
      // title="Modal 1000px width"
      centered
      open={open}
      footer={false}
      onOk={() => setOpen()}
      onCancel={() => setOpen()}
      width={width}
      height={height}
      
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
