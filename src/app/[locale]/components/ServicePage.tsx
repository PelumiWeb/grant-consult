import React from "react";
import CustomButton from "./CustomButton";
import ServiceComponent from "./ServiceComponent";
import { useTranslations } from "next-intl";

type Props = {};

const ServicePage = (props: Props) => {
  const t = useTranslations("Homepage");

  return (
    <div className="w-full flex items-start justify-between   h-full relative py-8 lg:py-16 pb-8 px-4 md:px-8 lg:px-16 lg:pt-32 bg-white flex-wrap">
      <div className="w-full lg:w-[25%] 2lg:w-[30%] lg:-mt-16">
        <h1 className="text-center lg:text-left mb-4 lg:mb-8 text-[20px] leading-[26px] lg:leading-[30px] md:text-[45px] font-semibold">
          {t("Service.service")}
        </h1>
        <h3 className="text-textColor text-[14px] leading-[23px] md:leading-[35px] font-normal md:font-medium lg:mt-[6.5rem] w-full lg:w-[300px] text-center md:text-left ">
          {t("Service.content")}
        </h3>
      </div>
      <div className="mt-24 lg:mt-16 grid place-items-center w-full lg:w-[60%] ">
        <div className=" flex items-center">
          {[
            {
              id: 1,
              image: "/service1.svg",
              content: t("Service.card1"),
              url: "/service/services",
            },
            {
              id: 2,
              image: "/service2.svg",
              content: t("Service.card2"),
              margin: true,
              serviceTwo: true,
              url: "/service/services",
            },
            {
              id: 3,
              image: "/service3.svg",
              content: t("Service.card3"),
              url: "/service/services",
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
              url: "/service/services",
            },
            ,
            {
              id: 5,
              image: "/service5.svg",
              content: t("Service.card5"),
              margin: true,
              url: "/service/services",
            },
            ,
            {
              id: 6,
              image: "/service6.svg",
              content: t("Service.card6"),
              url: "/service/services",
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
