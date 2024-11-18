import React from "react";
import { Modal } from "antd";

type Props = {
  open: boolean;
  setOpen: () => void;
  children: React.ReactNode;
};

const CustomModal = ({ open, setOpen, children }: Props) => {
  return (
    <Modal
      // title="Modal 1000px width"
      centered
      open={open}
      footer={false}
      onOk={() => setOpen()}
      onCancel={() => setOpen()}
      width={"100%%"}
      height={"100%"}
      //   height={1024}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
