import React from "react";

type Props = {
    children: React.ReactNode
    title: string
};

const ProfileComponent = (props: Props) => {
  return (
    <div className="w-full p-8 bg-white my-8">
      {/* Header */}
      <div className="w-full flex items-center justify-between">
        <h3>{props.title}</h3>
        <div className="bg-backgroundColor rounded-full  w-[40px] h-[40px] flex items-center justify-center ">
          <img src="/edit.svg" alt="" />
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default ProfileComponent;
