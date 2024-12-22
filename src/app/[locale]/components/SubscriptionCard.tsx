"use client";
import React from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

type Cardprops = {
  image: string;
  price: string;
  bgColor?: string;
  plan?: string;
  textColor?: string;
};

const SubscriptionCard = (data: Cardprops) => {
  const router = useRouter();
  return (
    <div className="  bg-white mt-4 w-[250px] 2lg:w-[200px] m-8 2lg:m-2">
      {/* Card */}
      <div className="relative top-0 left-0  shadow-subscription-card rounded-[8.83px] py-8 w-full ">
        <div className=" absolute top-10 -left-[47px] ">
          <img src={data.image} className="h-[220px] w-[220px] " />
          <p className="absolute top-[37%] left-[50%] text-white font-medium leading-[25px] text-center text-[30px] ">
            {data.price}
          </p>
        </div>
        <p
          className={`font-semibold text-[20px] leading-[24px] text-center ${
            data.textColor ? data?.textColor : "text-secondaryColor"
          } `}>
          {data.plan}
        </p>
        <p className="text-center text-borderColor">7 days</p>
        <ol className="mt-24 px-4">
          {[
            "Lorem ipsum dolor sit amet",
            "Orci egestas ornare pharetra",
            "In in quis malesuada",
            "Mauris amet venenatis",
            "bibendum cursus odio",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
          ].map((data) => (
            <li key={data} className="text-left font-normal my-1 text-[13px] ">
              {data}
            </li>
          ))}
        </ol>
        <div className="w-full flex items-center justify-center mt-4 cursor-pointer">
          <CustomButton
            onClick={() => router.push("/payments")}
            width="w-[170px]"
            height="h-[35px]"
            title="Subscribe Now"
            backgrounColor={data.bgColor ? data.bgColor : "bg-linearGradient"}
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
