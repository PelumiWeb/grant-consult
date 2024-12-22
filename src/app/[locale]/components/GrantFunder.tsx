import React from "react";

type Props = {};

const GrantFunder = (props: Props) => {
  return (
    <div className="py-32 flex flex-col items-center justify-center">
      <h3 className="text-center py-8">
        Over $1 billion in active grants from funders like:
      </h3>
      <div className="w-[40%] flex items-center justify-center my-2">
        <div className="w-full h-full flex items-center justify-center">
          <img src="/funders.svg" className="mx-4 object-contain" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <img src="/funders1.svg" className="mx-4" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <img src="/funders2.svg" className="mx-4" />
        </div>
      </div>

      <div className="w-[40%] flex items-center justify-center my-2 ">
        <div className="w-full h-full flex items-center justify-center">
          <img src="/funders3.svg" className="mx-4" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <img src="/funders4.svg" className="mx-4" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <img src="/funders5.svg" className="mx-4" />
        </div>
      </div>
    </div>
  );
};

export default GrantFunder;
