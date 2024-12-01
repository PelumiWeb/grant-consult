"use client";
import React from "react";

type Props = {
  image: string;
  imageTitle: string;
  active: boolean;
  setActive?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  textColor?: string;
};

const TabsComponent = ({
  image,
  imageTitle,
  active,
  setActive,
  textColor = " text-white",
}: Props) => {
  return (
    <div
      className={`w-[224px] cursor-pointer h-[51px] rounded-[5px] flex items-center ${
        active && "bg-secondaryColor"
      } my-4 mr-5 pl-4 transition-all`}
      onClick={setActive}>
      <img src={image} />
      <p
        className={`font-semibold leading-[19px] items-center ${textColor} text-[16px] uppercase mx-4 font-mono`}>
        {imageTitle}
      </p>
    </div>
  );
};

export default TabsComponent;
