"use client";

import Image from "next/image";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SubscriptionCard from "../components/SubscriptionCard";
import GrantFunder from "../components/GrantFunder";
import Faq from "../subscription/components.tsx/Faq";
import InputComponent from "./component/InputComponent";
import ConsultantComponent from "./component/ConsultantComponent";
import FilterComponent from "../components/FilterComponent";
import { Pagination } from "antd";

export default function Home() {
  return (
    <div className="w-full px-16">
      <div className="w-full pt-8">
        <p className="text-secondaryColor font-semibold text-[36px] leading-[42px] text-center ">
          Our Consultants
        </p>

        <p className="py-4 text-textColor text-[16px] leading-[20px] text-center">
          Connect with grant consultants and advisors with expertise across
          various domains.
        </p>

        <FilterComponent backgroundColor="bg-white" />
        <div className=" w-full flex items-center justify-center flex-wrap ">
          {[...Array(25)].map((data) => (
            <div key={data}>
              <ConsultantComponent />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-16">
        <Pagination defaultCurrent={1} total={50} />
      </div>
      <GrantFunder />
    </div>
  );
}
