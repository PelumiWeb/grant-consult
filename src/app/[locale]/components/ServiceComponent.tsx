import { useTranslations } from "next-intl";
import React from "react";
import useHandleNavigation from "../utils/HandleNavigation";

type Props = {
  id: number;
  image?: string;
  content?: string;
  margin?: boolean;
  serviceTwo?: boolean;
  url?: any;
};

const ServiceComponent = ({ data }: { data: Props }) => {
  const t = useTranslations("Homepage");
  const handleNavigation = useHandleNavigation();

  return (
    <div
      onClick={() => handleNavigation(data?.url)}
      className={` flex items-center justify-center border-[0.9px] cursor-pointer h-[111px] w-[100px] sm:w-[170px] lg:h-[200px] lg:w-[200px] 2lg:h-[211px] 2lg:w-[201px] bg-white ${
        data.serviceTwo && "shadow-card mb-16"
      }  ${
        data.serviceTwo ? "border-none" : "border-secondaryColor border-[1.5px]"
      }  rounded-[9px] lg:rounded-[20px] ' ${
        data.margin ? " -mt-16 md:-mt-32 " : "mt-0 m-3 lg:m-4 "
      }`}>
      <div className="w-[80%] lg:w-[50%] flex flex-col items-center justify-center">
        <img src={data.image} className="w-[20px] md:w-[50px]" />
        <p
          className={`font-medium text-center text-[10px] leading-[12px] mt-1 lg:text-base ${
            data.serviceTwo ? "text-[#27AE60]" : "text-primary"
          }`}>
          {data.content}
        </p>
      </div>
    </div>
  );
};

export default ServiceComponent;
