import CustomButton from "@/app/components/CustomButton";
import React from "react";
import { Rate } from "antd";

type Props = {};

const Testimonial = (props: Props) => {
  const TestimonalProfile = () => {
    return (
      <div className="relative top-8 w-full grid place-items-center">
        <div className="w-[72px] h-[72px] rounded-full border-primaryBlack">
          <img src="./clients.svg" className="w-full h-full  object-contain" />
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <p>Stephen Martins</p>
          <p>CEO Afghanst</p>
        </div>
      </div>
    );
  };
  const TestimonyCard = () => {
    return (
      <div className="my-16 xl:my-0 w-[298px] h-[269px] shadow-testimony-card bg-white rounded-[20px] flex flex-col items-center justify-between px-5 ">
        <p className="text-primaryBlack mt-12">
          Lorem ipsum dolor sit amet consectetur. Aliquet a eu sapien donec sit
          in eget. Consequat commodo sed eget donec ipsum tortor metus at dui.
        </p>
        <Rate defaultValue={5} className="mt-4" />
        <TestimonalProfile />
      </div>
    );
  };

  return (
    <div className=" flex items-center md:items-start  justify-between flex-wrap w-full h-full xl:h-[600px] bg-white p-16">
      <div className="w-full lg:w-[50%] mb-8 lg:mb-0 mt-0 md:mt-16">
        <p className="text-primary text-sm md:text-base lg:text-lg xl:text-3xl">Our Testimonials</p>
        <h4 className=" text-buttonPrimary font-poppins font-semibold text-3xl lg:text-[48px] leading-[54px] ">
          What Our Clients
        </h4>
        <h4 className="text-primary font-poppins font-semibold text-3xl lg:text-[48px] leading-[54px]">
          Have to Say About Us
        </h4>
        <p className="text-primaryBlack font-poppins w-full lg:w-[70%] py-2 leading-[20px] font-normal mb-4">
          Lorem ipsum dolor sit amet consectetur. Scelerisque sed tincidunt
          felis donec dictumst ipsum. Est egestas euismod tellus tempor quam.
        </p>
        <CustomButton
          backgrounColor="bg-secondaryColor"
          width="w-[132px]"
          height="h-[40px]"
          title="Read More"
        />
      </div>
      <div className="w-full lg:w-[50%] flex-wrap flex items-center justify-center md:justify-between lg:justify-center 2lg:justify-between">
        <TestimonyCard />
        <TestimonyCard />
      </div>
    </div>
  );
};

export default Testimonial;
