import React from "react";
import { useAppDispatch } from "../../../../../lib/hooks";
import { openModal } from "../../../../../lib/features/Modal/modalSlice";

type Props = {
    children: React.ReactNode
    title: string,
    modalType?: string
    notEditable?: boolean;
};

const ContentComponent = (props: Props) => {
  const dispatch = useAppDispatch()
  return (
    <div className="w-full p-8 bg-white my-8">
      {/* Header */}
      <div className="w-full flex items-center justify-between">
        <h3>{props.title}</h3>
       {!props.notEditable && <div className="bg-backgroundColor rounded-full  w-[40px] h-[40px] flex items-center justify-center cursor-pointer" onClick={() => dispatch(openModal({
          open:true,
          modalType: props?.modalType
        })) }>
          <img src="/edit.svg" alt="" />
        </div>}
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default ContentComponent;
