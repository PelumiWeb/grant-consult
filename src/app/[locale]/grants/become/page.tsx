import React from "react";
import CustomButton from "../../components/CustomButton";

type Props = {};

const Card = (data: any) => {
  console.log(data, "This is data from Card");
  return (
    <div className="w-[400px] flex items-center justify-center bg-white h-[138px]">
      <div>
        <p className="font-semibold font-mono text-[36px] leading-[43px] text-secondaryColor text-center">
          {data.name}
        </p>
        <p className="font-mono text-[14px] font-semibold leading-[22px] text-textColor text-center">
          {data.text}
          {/* Daily Visitors */}
        </p>
      </div>
    </div>
  );
};

const page = (props: Props) => {
  return (
    <div className="bg-backgroundColor">
      <div className="min-h-[421px] bg-becomeGrantImage bg-cover  bg-left md:bg-center bg-no-repeat relative">
        <div className="w-[600px] min-h-[316px] px-16 flex flex-col justify-between absolute top-[15%]">
          <h3 className="font-mono font-bold text-[25px] md:text-[35px] lg:text-[45px] leading-[30px] lg:leading-[60px] text-white">
            {" "}
            Become a Grantor
          </h3>

          <p className="font-semibold text-[16px] leading-[25px] text-white">
            Are you a trustor with funding opportunities? Do you want to ensure
            that the most impactful project ideas receive your grants?
            GrantsConsult is the ideal platform to give your grant(s) the
            visibility it deserves.
          </p>

          <CustomButton
            title="Partner With Us"
            textStyle="font-inter font-semibold text-[16px] leading-[16px] text-white"
            radius="rounded-[5px]"
            backgrounColor="bg-secondaryColor"
            width="w-[190px]"
            height="h-[40px]"
          />
        </div>
      </div>

      <div className="p-16 flex justify-between items-center">
        {[
          {
            name: "1,000+",
            text: "Daily Visitors",
          },
          {
            name: "500+",
            text: "Registered Users",
          },
          {
            name: "Global",
            text: "Platform Reach",
          },
        ].map((data) => (
          <Card {...data} />
        ))}
      </div>

      <h3 className="text-center pb-12">Benefits of Partnering with Us</h3>
    </div>
  );
};

export default page;
