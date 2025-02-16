import { useTranslations } from "next-intl";
import React, { useTransition } from "react";

type Props = {
};

const GrantFunder = (props: Props) => {
  const t = useTranslations("Homepage")
  return (
    <div className=" py-8 lg:py-16 flex flex-col items-center justify-center">
      <h3 className="text-center py-8 font-semibold text-[12px] md:text-[20px] leading-[18px] md:leading-[30px]">
        {t("Grants.content")}
      </h3>
      <div className=" w-[80%] lg:w-[40%] flex items-center justify-center my-2">
        <div className="w-full h-full flex items-center justify-center">
          <img src="/funders.svg" className="mx-4 object-contain" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <img src="/funders1.svg" className="mx-4" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <img src="/funders2.svg" className="mx-4" />
        </div>
      </div>

      <div className="w-[40%] flex items-center justify-center my-2 ">
        <div className="w-full h-full flex items-center justify-center">
          <img src="/funders3.svg" className="mx-4" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <img src="/funders4.svg" className="mx-4" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <img src="/funders5.svg" className="mx-4" />
        </div>
      </div>
    </div>
  );
};

export default GrantFunder;
