"use client";

import Image from "next/image";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SubscriptionCard from "../components/SubscriptionCard";
import GrantFunder from "../components/GrantFunder";
import Faq from "../subscription/components.tsx/Faq";
import ConsultantComponent from "./component/ConsultantComponent";
import FilterComponent from "../components/FilterComponent";
import { Pagination } from "antd";
import RenderModals from "../components/RenderModals";
import LabelInput from "../components/LabelInput";

export default function Home() {
  return (
    <div className="w-full ">
      <div className="px-4 lg:px-16">
        <div className="w-full pt-8">
          <p className="text-secondaryColor font-semibold text-[36px] leading-[42px] text-center ">
            Our Consultants
          </p>

          <p className="py-4 text-textColor text-[16px] leading-[20px] text-center">
            Connect with grant consultants and advisors with expertise across
            various domains.
          </p>

          <FilterComponent
            // options={[
            //   {
            //     placeholder: "Years of experience",
            //   },
            //   {
            //     placeholder: "Location",
            //   },
            //   { placeholder: "Specialty" },
            // ]}
            backgroundColor="bg-white"
            search="search">
            <LabelInput
              width="w-[305px]"
              placeholder="Years of experience"
              // label="Grant Category"
              height="h-[47px]"
              value=""
              select
              my="my-2"
              mr="md:mr-2"
            />
            <LabelInput
              width="w-[305px]"
              placeholder="Location"
              // label="Grant Category"
              height="h-[47px]"
              value=""
              select
              my="my-2"
              mr="md:mr-2"
            />
            <LabelInput
              width="w-[305px]"
              placeholder="Specialty"
              // label="Grant Category"
              height="h-[47px]"
              value=""
              select
              my="my-2"
              mr="md:mr-2"
            />
          </FilterComponent>
          <div className=" w-full flex items-center justify-center flex-wrap ">
            {[...Array(25)].map((data) => (
              <div key={data}>
                <ConsultantComponent showButton={false} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-16">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
      <div className="bg-white my-8">
        <GrantFunder />
      </div>

      <RenderModals />
    </div>
  );
}
