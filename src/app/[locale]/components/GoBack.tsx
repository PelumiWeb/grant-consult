import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
};

const GoBack = (props: Props) => {
  const router = useRouter();

  return (
    <button
      className="flex items-center justify-start mr-8"
      onClick={() => router.back()}>
      <div className="w-[16px] h-[16px] relative">
        <Image src={"/goBackNew.svg"} alt="" fill />
      </div>
      <p className=" font-mono font-medium text-[16px] leading-[18px] text-primary ml-2 ">
        Back
      </p>
    </button>
  );
};

export default GoBack;
