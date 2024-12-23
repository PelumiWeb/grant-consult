import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  moreDetails?: boolean;
  border?: boolean;
  showMore?: boolean;
};
// border-bottom: 0.5px solid #6E6E6E80
const GrantCard = (props: Props) => {
  const locale = useLocale();

  const router = useRouter();
  return (
    <div className={`flex flex-col justify-between border-[0.5px] ${!props.border && "border-borderColor"}  my-4 px-4  w-full lg:w-[900px] h-[420px] lg:h-[360px] py-4 lg:py-0`}>
      <h4 className=" block lg:hidden text-primary mx-2 text-[16px] leading-[26px] font-semibold">
        Aspire Coronation Trust (ACT) Foundation Grant 2024
      </h4>
      <div className="flex items-center justify-between py-0 bg-white my-4 px-4 w-full h-full cursor-pointer">
        <div className="md:w-[252px] md:h-[200px] lg:w-[320px] lg:h-[350px] flex items-center justify-center rounded-[15px] mr-4">
          <img src="/GrantsImage.svg" className="w-full object-cover " />
        </div>
        <div>
          <h4 className="hidden lg:block text-primary mx-2 text-[20px] leading-[26px] font-semibold">
            Aspire Coronation Trust (ACT) Foundation Grant 2024
          </h4>
          <div className="flex items-center mx-2">
            <p className="text-[#1E1E1E]">Date Posted</p>
            <p className="text-textColor ml-4">October 24, 2024</p>
          </div>
          <div className="flex items-center mx-2">
            <p className="text-[#1E1E1E]">Deadline</p>
            <p className="text-textColor ml-4">December 1st, 2024</p>
          </div>
          <div className="flex items-center mx-2 ">
            <p className="text-[#1E1E1E]">Location</p>
            <p className="text-textColor ml-4">AMERICA</p>
          </div>
          <div className="flex items-center mx-2">
            <p className="text-[#1E1E1E]">Category</p>
            <p className="text-textColor ml-4">Agriculture</p>
          </div>
          <div className="flex items-center mx-2">
            <p className="text-[#1E1E1E]">Grant Size</p>
            <p className="text-textColor ml-4">$100,000 to $500,000</p>
          </div>
          <div className="flex items-center mx-2">
            <p className="text-[#1E1E1E blur">Grant Size</p>
            <p className="text-textColor ml-4 blur-sm">$100,000 to $500,000</p>
          </div>
        {!props?.showMore && <p className={`hidden lg:block w-[500px] ml-2 ${true ? "blur-none" : "blur-sm"}`}>
            Lorem ipsum dolor sit amet consectetur. Ac odio eu a Vel neque
            ullamcorper in auctor. Urna laoreet bibendum nullam adipiscing
            tellus est posuere dolor sit am
            <span
              className="ml-2 text-secondaryColor backdrop-blur-0 blur-none cursor-pointer"
              onClick={() => router.push(`${locale}/grants/1`)}>
              Read more...
            </span>
          </p>}
        </div>
      </div>
      {!props.showMore && <p className={`block lg:hidden w-[500px] ml-2 ${true ? "blur-none" : "blur-sm"}`}>
        Lorem ipsum dolor sit amet consectetur. Ac odio eu a Vel neque
        ullamcorper in auctor. Urna laoreet bibendum nullam adipiscing tellus
        est posuere dolor sit am
        <span
          className="ml-2 text-secondaryColor backdrop-blur-0 blur-none cursor-pointer"
          onClick={() => router.push(`${locale}/grants/1`)}>
          Read more...
        </span>
      </p>}
    </div>
  );
};

export default GrantCard;
