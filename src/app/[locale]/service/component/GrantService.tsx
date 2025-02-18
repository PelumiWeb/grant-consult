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
  list: string[];
};

const GrantService = ({
  images,
  backgroundColor,
  buttonBackground,
  title,
  price,
  list,
}: Props) => {
  const router = useRouter();
  const locale = useLocale();
  const handleNavigation = useHandleNavigation();

  return (
    <div
      className={`relative w-full md:w-[234px] h-full md:h-[456px] rounded-[10px]  ${
        backgroundColor && backgroundColor
      } shadow-grant-service-card  p-2 m-4 lg:m-2`}>
      {/* Image */}
      <div className="h-[15%]">
        {/* serviceType */}
        <p className="font-semibold text-newPrimaryTextColor text-[16px] leading-[24px] text-center mt-4 ">
          {title}{" "}
        </p>
        <p className="font-normal text-textColor text-[14px] leading-[23px] text-center">
          {price}
        </p>
      </div>
      {/* lists */}
      <ul className="list-disc px-8  h-full">
        {list?.map((data: string, index) => {
          return (
            <li className=" text-[#F9C03B]">
              <div>
                <p
                  className={`${
                    index === 0
                      ? "font-extrabold text-newPrimaryTextColor"
                      : "font-semibold text-textColor"
                  } text-[12px] leading-[18px] `}>
                  {" "}
                  {data}
                </p>
              </div>
            </li>
          );
        })}

        {/* <li className=" text-[#982B24]">
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
        </li> */}
      </ul>
      <div
        className=" my-4 md:my-0 md:absolute left-0  bottom-3 w-full flex justify-center items-center 
        px-4
      ">
        <CustomButton
          onClick={() => handleNavigation(`/payments`)}
          width="w-full md:w-[200px]"
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
