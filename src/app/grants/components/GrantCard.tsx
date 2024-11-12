import React from "react";

type Props = {
  moreDetails?: boolean;
};
// border-bottom: 0.5px solid #6E6E6E80
const GrantCard = (props: Props) => {
  return (
    <div>
      <div className="flex items-start justify-between py-8 w-[900px] h-[360px] border-[0.5px] border-borderColor bg-white my-4 px-4">
        <div className="w-[320px] h-[307px] flex items-center justify-center rounded-[15px]">
          <img src="/GrantsImage.svg" className="w-full object-contain " />
        </div>
        <div>
          <h4 className="text-primary mx-2">
            Aspire Coronation Trust (ACT) Foundation Grant 2024
          </h4>
          <div className="flex items-center m-2">
            <p className="text-[#1E1E1E]">Date Posted</p>
            <p className="text-borderColor ml-4">October 24, 2024</p>
          </div>
          <div className="flex items-center m-2">
            <p className="text-[#1E1E1E]">Deadline</p>
            <p className="text-borderColor ml-4">December 1st, 2024</p>
          </div>
          <div className="flex items-center m-2">
            <p className="text-[#1E1E1E]">Location</p>
            <p className="text-borderColor ml-4">AMERICA</p>
          </div>
          <div className="flex items-center m-2">
            <p className="text-[#1E1E1E]">Category</p>
            <p className="text-borderColor ml-4">Agriculture</p>
          </div>
          <div className="flex items-center m-2">
            <p className="text-[#1E1E1E]">Grant Size</p>
            <p className="text-borderColor ml-4">$100,000 to $500,000</p>
          </div>
          <div className="flex items-center m-2">
            <p className="text-[#1E1E1E blur">Grant Size</p>
            <p className="text-borderColor ml-4 blur-sm">
              $100,000 to $500,000
            </p>
          </div>
          <p className={`w-[500px] ml-2 ${true ? "blur-none" : "blur-sm"}`}>
            Lorem ipsum dolor sit amet consectetur. Ac odio eu a Vel neque
            ullamcorper in auctor. Urna laoreet bibendum nullam adipiscing
            tellus est posuere dolor sit am
            <span className="ml-2 text-secondaryColor backdrop-blur-0 blur-none">
              Read more...
            </span>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default GrantCard;
