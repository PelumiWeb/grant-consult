import CustomButton from "@/app/[locale]/components/CustomButton";
import React from "react";
import { Rate } from "antd";
import { useTranslations } from "next-intl";

type Props = {};

const Testimonial = (props: Props) => {
  const t = useTranslations("Homepage");
  const TestimonalProfile = (data: any) => {
    console.log(data.image, "What ;s up here?");
    return (
      <div className="relative top-8 w-full grid place-items-center">
        <div className="w-[72px] h-[72px] rounded-full border-primaryBlack">
          <img src={data.image} className="w-full h-full  object-contain" />
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <p>Stephen Martins</p>
          <p>CEO Afghanst</p>
        </div>
      </div>
    );
  };
  const TestimonyCard = ({ message }: any) => {
    // console.log('Testimoney data', data);
    return (
      <div className="my-16 xl:my-0 w-[298px] h-[269px] shadow-testimony-card bg-white rounded-[20px] flex flex-col items-center justify-between px-5 ">
        <p className="text-textcolor mt-6 h-[120px] text-center font-normal leading-[20px] text-[16px]">
          {message?.message}
        </p>
        <Rate defaultValue={5} className="mt-12" />
        <TestimonalProfile image={message.image} />
      </div>
    );
  };

  return (
    <div className=" flex items-center md:items-start  justify-between flex-wrap w-full h-full xl:h-[600px] bg-white p-16">
      <div className="w-full lg:w-[50%] mb-8 lg:mb-0 mt-0 md:mt-16">
        <p className="text-primary text-sm md:text-base lg:text-lg xl:text-3xl font-bold">
          {t("Testimonial.title")}
        </p>
        <h4 className=" text-buttonPrimary font-poppins font-semibold text-3xl lg:text-[48px] leading-[54px] ">
          {t("Testimonial.header1")}
        </h4>
        <h4 className="text-primary font-poppins font-semibold text-3xl lg:text-[48px] leading-[54px]">
          {t("Testimonial.header2")}
        </h4>
        <p className="text-primaryBlack  w-full lg:w-[70%] py-2 leading-[20px] font-normal mb-4">
          {t("Testimonial.content")}
        </p>
        <CustomButton
          backgrounColor="bg-secondaryColor"
          width="w-[132px]"
          height="h-[40px]"
          title="Read More"
          textStyle="font-bold text-white font-inter text-[16px] leading-[16px]"
        />
      </div>
      <div className="w-full lg:w-[50%] flex-wrap flex items-center justify-center md:justify-between lg:justify-center 2lg:justify-between">
        {[
          {
            id: 1,
            message: t("Testimonial.card1"),
            image: "/clients.svg",
          },
          {
            id: 2,
            message: t("Testimonial.card2"),
            image: "/Testimonial2.svg",
          },
        ].map((data) => (
          <TestimonyCard message={data} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
