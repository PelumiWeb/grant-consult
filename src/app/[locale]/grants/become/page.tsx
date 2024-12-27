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

const PartnerCard = (data: any) => {
  return (
    <div className="max-h-[300px] max-w-[320px] flex flex-col items-center justify-around">
      <img src={data.image} alt="" />
      <p className="font-bold text-black font-mono text-center text-[16px] leading-[19px] my-4">
        {data.name}
      </p>
      <p className="text-center font-normal text-[16px] leading-[20px] font-mono text-black ">
        {data.text}
      </p>
    </div>
  );
};

const page = (props: Props) => {
  return (
    <div className="pb-20">
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

      <div className="bg-white flex items-start p-8 justify-between ">
        {[
          {
            name: "Global Leading Platform",
            text: "We are the top web-based platform for grant opportunities globally,trusted by numerous individuals, organisations and governments seeking grant funding",
            image: "/benefits.svg",
          },
          {
            name: "High Visibility and Reach",
            text: "Our platform attracts over 1,000 daily visitors, with a growing community of 500 registered users actively seeking funding opportunities.",
            image: "/benefis2.svg",
          },
          {
            name: "Expert Grant Management",
            text: "We categorize and theme your grants effectively, ensuring they reach the right audience for maximum impact.",
            image: "/benefits3.svg",
          },
          {
            name: "Complementary Services",
            text: "We offer additional services like grant writing assistance, grant research & identification, proposal reviews & feedback, training and workshops and insightful blog posts to further enhance the success of your funding initiatives.",
            image: "/benefits4.svg",
          },
        ].map((data) => (
          <PartnerCard {...data} />
        ))}
      </div>

      <div className="bg-secondaryColor w-full flex flex-col justify-around items-center py-8 mt-8">
        <p className="text-center font-mono font-bold text-[24px] leading-[36px] text-white">
          Ready to Get Started?
        </p>
        <p className="font-normal text-[18px] leading-[28px] text-center text-white my-4">
          Join our platform and connect with potential grantees today
        </p>
        <CustomButton
          title="Sign Up Now"
          textStyle="font-bold text-[16px] leading-[16px] text-secondaryColor"
          backgrounColor="bg-white"
          width="w-[150px]"
          height="h-[40px]"
        />
      </div>
    </div>
  );
};

export default page;
