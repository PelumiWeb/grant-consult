import React from "react";
import CustomButton from "./CustomButton";
import ServiceComponent from "./ServiceComponent";
import { useTranslations } from "next-intl";

type Props = {};

const ServicePage = (props: Props) => {
  const t = useTranslations("Homepage");

  return (
    <div className="w-full flex items-start justify-between   h-full relative py-8 lg:py-16 pb-8 px-8 lg:px-16 bg-white flex-wrap">
      <div className="w-full lg:w-[25%] 2lg:w-[30%]">
        <h1 className="text-center lg:text-left mb-2 lg:mb-8 text-[20px] leading-[26px] lg:leading-[30px] md:text-[45px] font-semibold">
          {t("Service.service")}
        </h1>
        <h3 className="text-textColor text-[11px] md:text-[16px] leading-[23px] md:leading-[35px] font-normal md:font-medium lg:mt-20">
          {t("Service.content")}
        </h3>
      </div>
      <div className="mt-32 lg:mt-16 grid place-items-center w-full lg:w-[60%] ">
        <div className=" flex items-center">
          {[
            {
              id: 1,
              image: "/service1.svg",
              content: t("Service.card1"),
              url: "",
            },
            {
              id: 2,
              image: "/service2.svg",
              content: t("Service.card2"),
              margin: true,
              serviceTwo: true,
              url: "/grant-guidelines",
            },
            {
              id: 3,
              image: "/service3.svg",
              content: t("Service.card3"),
            },
          ].map((data) => (
            <ServiceComponent data={data} key={data.id} />
          ))}
        </div>
        <div className=" flex items-center ">
          {[
            {
              id: 4,
              image: "/service4.svg",
              content: t("Service.card4"),
            },
            ,
            {
              id: 5,
              image: "/service5.svg",
              content: t("Service.card5"),
              margin: true,
            },
            ,
            {
              id: 6,
              image: "/service6.svg",
              content: t("Service.card6"),
            },
            ,
          ].map((data: any) => (
            <ServiceComponent data={data} key={data?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
