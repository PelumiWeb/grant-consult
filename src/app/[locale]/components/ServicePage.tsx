import React from "react";
import CustomButton from "./CustomButton";
import ServiceComponent from "./ServiceComponent";
import { useTranslations } from "next-intl";
import useHandleNavigation from "../utils/HandleNavigation";

type Props = {};

const ServicePage = (props: Props) => {
  const t = useTranslations("Homepage");
  const handleNavigation = useHandleNavigation();

  return (
    <div className="w-full flex items-start justify-between   h-full relative py-8 lg:py-16 pb-8 px-4 md:px-8  lg:pt-32  flex-wrap bg-service-bg">
      <div className="w-full lg:w-[25%] 2lg:w-[30%] ">
        <h1 className="text-center lg:text-left mb-4 text-[20px] leading-[26px] lg:leading-[54px] md:text-[36px] font-semibold">
          {t("Service.service")}
        </h1>
        <h3 className="text-primary text-[14px] md:text-[16px] leading-[23px] md:leading-[35px] font-normal md:font-medium w-full lg:w-[360px] text-center md:text-left mt-8 md:mt-16 md:mb-32 font-mono">
          {t("Service.content")}
        </h3>

        <div className="hidden md:block">
          <CustomButton
            onClick={() => handleNavigation("/consultant/request")}
            title="Schedule a Consultation"
            backgrounColor="bg-secondaryColor"
            width="w-[245px]"
            height="h-[53px]"
            radius="rounded-[5px]"
            textStyle="font-bold text-white leading-[18px] text-[16px] text-backgroundColor font-mono"
          />
        </div>
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

      <div className="block md:hidden mt-8 w-full">
        <CustomButton
          onClick={() => handleNavigation("/consultant/request")}
          title="Schedule a Consultation"
          backgrounColor="bg-secondaryColor"
          width="w-full md:w-[245px]"
          height="h-[53px]"
          radius="rounded-[5px]"
          textStyle="font-bold text-white leading-[18px] text-[16px] text-backgroundColor font-mono"
        />
      </div>
    </div>
  );
};

export default ServicePage;
