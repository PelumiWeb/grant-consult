import React from "react";
import CustomButton from "./CustomButton";
import ServiceComponent from "./ServiceComponent";
import { useTranslations } from "next-intl";

type Props = {};

const ServicePage = (props: Props) => {
  const t = useTranslations("Homepage");

  return (
    <div className="w-full flex items-start justify-between   h-full relative py-16 pb-8 px-8 lg:px-16 bg-white flex-wrap">
      <div className="w-full lg:w-[25%] 2lg:w-[30%]">
        <h1 className="text-center lg:text-left mb-8 text-2xl lg:text-3xl">
          {t("Service.service")}
        </h1>
        <h3 className="text-textColor text-base lg:text-xl 2lg:text-2xl">
          {t("Service.content")}
        </h3>

        {/* <h3 className="mt-4 text-textColor text-base lg:text-xl 2lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur. Ac sollicitudin potenti arcu
          iaculis. Est mauris nisl adipiscing interdum.
        </h3> */}
      </div>
      <div className="mt-32 lg:mt-16 grid place-items-center w-full lg:w-[60%] ">
        <div className=" flex items-center">
          {[
            {
              id: 1,
              image: "/service1.svg",
              content: t("Service.card1"),
            },
            {
              id: 2,
              image: "/service2.svg",
              content: t("Service.card2"),
              margin: true,
              serviceTwo: true,
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
        <div className="70% flex items-center ">
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
