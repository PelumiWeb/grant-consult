import React from "react";

type Props = {};

const LatestNews = (props: Props) => {
  return (
    <div className="w-full md:w-[324px] h-full md:h-[391px] bg-white rounded-[15px] mt-4 border-borderColor border">
      <div className="bg-primaryBlack rounded-tl-[15px] rounded-tr-[15px] p-3">
        <p className="font-poppins text-[15px] leading-[22px] text-white text-center font-semibold">
          LATEST NEWS
        </p>
      </div>
      <div className="mt-4">
        {[1, 2, 3, 4, 5, 6].map((data) => (
          <div className="p-2 w-full border-b-[0.7px] border-b-borderColor ">
            <p className="text-[10px] leading-[17px] text-primaryBlack mx-2">
              Lorem ipsum dolor sit amet consectetur. Quis sit lacus curabitur
              bibendum urna quis aenean sagittis venenatis.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
