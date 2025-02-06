import Image from "next/image";
import React from "react";

type Props = {};

const Auth = () => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center ">
        <div className="w-[16px] h-[16px] relative">
          <Image src={"/goBackNew.svg"} alt="" fill />
        </div>
        <p className=" font-mono font-medium text-[16px] leading-[18px] text-primary ml-2 ">
          Back
        </p>
      </div>

      <h3 className="font-semibold text-[24px] leading-[36px] text-secondaryColor">Select Your User Type</h3>
    </div>
  );
};

export default Auth;
