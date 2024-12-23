"use client";
import CustomButton from "@/app/[locale]/components/CustomButton";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";
import useHandleNavigation from "../../utils/HandleNavigation";

type Props = {
  images: any[];
  backgroundColor: string;
  buttonBackground: string;
  title: string;
  price: string;
};

const GrantService = ({
  images,
  backgroundColor,
  buttonBackground,
  title,
  price,
}: Props) => {
  const router = useRouter();
  const locale = useLocale();
    const handleNavigation = useHandleNavigation();


  return (
    <div
      className={`relative w-[234px] h-[424px] rounded-[10px]  ${
        backgroundColor && backgroundColor
      } shadow-grant-service-card  p-2 m-4 lg:m-0`}>
      {/* Image */}
      <div className="h-[20%]">
        {/* serviceType */}
        <p className="font-semibold text-newPrimaryTextColor text-[16px] leading-[28px] text-center mt-4">
          {title}{" "}
        </p>
        <p className="font-semibold text-textColor text-[16px] leading-[28px] text-center">
          {price}
        </p>
      </div>
      {/* lists */}
      <ul className="list-disc px-8  h-full">
        <li className=" text-[#982B24]">
          <div>
            <p className="font-semibold text-[12px] leading-[24px] text-[#333333]">
              {" "}
              Upfront Fee + 10% of secured grant amount
            </p>
          </div>
        </li>
        <li className=" text-[#982B24]">
          <div>
            <p className="font-semibold text-[12px] leading-[24px] text-[#333333]">
              {" "}
              Grant review planning
            </p>
          </div>
        </li>
        <li className=" text-[#982B24]">
          <div>
            <p className="font-semibold text-[12px] leading-[24px] text-[#333333]">
              {" "}
              Strategy session
            </p>
          </div>
        </li>

        <li className=" text-[#982B24]">
          <div>
            <p className="font-semibold text-[12px] leading-[24px] text-[#333333]">
              {" "}
              Strategy session Up to $25K funding goal
            </p>
          </div>
        </li>

        <li className=" text-[#982B24]">
          <div>
            <p className="font-semibold text-[12px] leading-[24px] text-[#333333]">
              {" "}
              Writing $ Submission
            </p>
          </div>{" "}
          <li className=" text-[#982B24]">
            <div>
              <p className="font-semibold text-[12px] leading-[24px] text-[#333333]">
                {" "}
                Others
              </p>
            </div>
          </li>
        </li>
      </ul>
      <div
        className=" absolute left-4 bottom-3 w-[200px] justify-center items-center 
      ">
        <CustomButton
          onClick={() => handleNavigation(`/payments`)}
          width="w-full"
          height="h-[40px]"
          title="Subscribe Now"
          radius="rounded-[5px]"
          backgrounColor={buttonBackground}
          textStyle="font-semibold text-white "
        />
      </div>
    </div>
  );
};

export default GrantService;
