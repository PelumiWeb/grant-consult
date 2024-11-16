import CustomButton from "@/app/components/CustomButton";
import React from "react";

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
  return (
    <div
      className={`relative w-[234px] h-[424px] rounded-[10px]  ${
        backgroundColor && backgroundColor
      } shadow-grant-service-card  p-2`}>
      {/* Image */}
      <div className="h-[30%]">
        <div className="flex w-full items-center justify-center">
          {images?.map((image) => (
            <div className="h-[100px]">
              <img src={image} className="object-contain w-full h-full" />
            </div>
          ))}
        </div>
        {/* serviceType */}
        <p className="font-semibold text-textColor text-[16px] leading-[28px] text-center mt-4">
          {title}-{" "}
          <span className="font-semibold text-textColor text-[16px] leading-[28px] text-center">
            {price}
          </span>
        </p>
      </div>
      {/* lists */}
      <ul className="list-disc px-8 mt-8">
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
          width="w-full"
          height="h-[40px]"
          title="Subscribe Now"
          backgrounColor={buttonBackground}
        />
      </div>
    </div>
  );
};

export default GrantService;
