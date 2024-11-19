"use client"
import React from "react";

type Props = {
  image: string;
  imageTitle: string;
  active: boolean;
  setActive?: (value: string) => string;
};

const TabsComponent = ({ image, imageTitle, active, setActive }: Props) => {
  return (
    <div
      className={`w-[224px] cursor-pointer h-[51px] rounded-[5px] flex items-center ${
        active && "bg-secondaryColor"
      } my-4 mr-5`}
      onClick={() => setActive}>
      <img src={image} />
      <p className="font-semibold leading-[19px] items-center text-[16px] uppercase text-white mx-4 font-mono">
        {imageTitle}
      </p>
    </div>
  );
};

export default TabsComponent;
