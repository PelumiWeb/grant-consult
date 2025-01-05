"use client";

import CustomButton from "@/app/[locale]/components/CustomButton";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useHandleNavigation from "../utils/HandleNavigation";

type Props = {};

const Grants = (props: Props) => {
  const locale = useLocale();
  const handleNavigation = useHandleNavigation();

  const onChange = (currentSlide: number) => {
    // console.log(currentSlide);
  };

  const router = useRouter();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CardComponent = (data: any) => {
    return (
      <div className="relative bg-white pr-4 py-4 shadow-grant-card  mr-6 rounded-[20px] px-4 my-4 w-full lg:w-[556px] h-[480px]">
        <div className="flex items-center justify-between w-full py-4">
          <h3
            className={`text-[16px] leading-[18px] ${data.bgColor} ${data.textColor} p-2 font-bold rounded-[5px]`}>
            {data.title}
          </h3>
          <div className="flex items-center ">
            {/* <img src="/location-grant.svg" /> */}
            <p className="ml-2">{data.price}</p>
          </div>
        </div>
        <div className="flex flex-col  h-[80%]">
          <h4 className="w-full font-bold text-secondaryColor pt-2 text-base  font-poppins">
            {data.headTitle}
          </h4>
          <p className="w-full leading-[28px] py-4 text-textColor font-poppins text-[15px] font-medium">
            {data.text}
          </p>
          <div onClick={() => handleNavigation(`/grants/1`)} className="-ml-6 absolute bottom-[5px]">
            <CustomButton
              title="Read More"
              backgrounColor="bg-transparent"
              borderColor="border-none"
              width="w-[162px]"
              height="h-[40px]"
              textStyle="text-secondaryColor font-semibold text-[16px] leading-[16px] "
              iconRight="/chevronRight.svg"
              // borderWidth=""
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full px-16 py-16 ">
      <div className="flex  items-center justify-between w-full py-4">
        <h1 className="text-lg lg:text-3xl">Featured Grants</h1>
        <div className="flex items-center">
          <h3
            className="text-secondaryColor cursor-pointer hover:cursor-pointer text-base font-semibold
            "
            onClick={() => handleNavigation(`${locale}/grants`)}>
            View all grants
          </h3>
          <img src="/chevronRight.svg" alt="" />
        </div>
      </div>
      <div className="hidden lg:block bg-[#329DFD66] w-full pl-8 py-4">
        <Carousel
          responsive={responsive}
          //   swipeable={false}
          //   draggable={false}

          showDots={true}
          //   ssr={true} // means to render carousel on server-side.
          //   infinite={true}
          //   autoPlay={true}
          //   autoPlaySpeed={1000}
          //   keyBoardControl={true}
          //   customTransition="all .5"
          //   transitionDuration={500}
          //   containerClass="carousel-container"
          //   removeArrowOnDeviceType={["tablet", "mobile"]}
          // //   deviceType={props.de}
          dotListClass="mt-8"
          itemClass="carousel-item-padding-40-px  flex flex-wrap ">
          {[
            {
              title: "Agriculture",
              price: "$50,000",
              headTitle: "Sustainable Farming Initiative 2024",
              text: "Empowering innovative agricultural practices to foster sustainability and champion environmental conservation. This initiative focuses on enhancing productivity while safeguarding natural resources, promoting eco-friendly farming techniques, and ensuring long-term viability for future generations. ",
              bgColor: "bg-[#DCFCE7]",
              textColor: "text-buttonPrimary",
            },
            {
              title: "Technology",
              price: "$100,000",
              headTitle: "Digital Innovation Fund",
              text: "Enabling organizations to unlock the potential of technology to drive social impact and foster digital transformation. This fund is dedicated to supporting initiatives that utilize innovative digital solutions to solve pressing societal issues, enhance efficiency, and create lasting change.",
              bgColor: "bg-[#DBE9FE]",
              textColor: "text-[#3453B8]",
            },
            {
              title: "Education",
              price: "$200,000",
              headTitle: "Future Leaders Scholarship",
              text: "Fostering educational initiatives that inspire and cultivate the leaders and innovators of tomorrow. We are committed to supporting programs that equip learners with the knowledge, skills, and opportunities needed to excel in an ever-evolving world",
              bgColor: "bg-[#F3E8FF]",
              textColor: "text-[#752EAD]",
            },
          ].map((data: any) => (
            <CardComponent {...data} />
          ))}
          {/* <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p> */}
        </Carousel>
      </div>

      <div className="block lg:hidden bg-[#329DFD66] w-full pl-8 p-8">
        {[
          {
            title: "Agriculture",
            price: "$50,000",
            headTitle: "Sustainable Farming Initiative 2024",
            text: "Empowering innovative agricultural practices to foster sustainability and champion environmental conservation. This initiative focuses on enhancing productivity while safeguarding natural resources, promoting eco-friendly farming techniques, and ensuring long-term viability for future generations. ",
            bgColor: "bg-[#DCFCE7]",
            textColor: "text-buttonPrimary",
          },
          {
            title: "Technology",
            price: "$100,000",
            headTitle: "Digital Innovation Fund",
            text: "Enabling organizations to unlock the potential of technology to drive social impact and foster digital transformation. This fund is dedicated to supporting initiatives that utilize innovative digital solutions to solve pressing societal issues, enhance efficiency, and create lasting change.",
            bgColor: "bg-[#DBE9FE]",
            textColor: "text-[#3453B8]",
          },
          {
            title: "Education",
            price: "$200,000",
            headTitle: "Future Leaders Scholarship",
            text: "Fostering educational initiatives that inspire and cultivate the leaders and innovators of tomorrow. We are committed to supporting programs that equip learners with the knowledge, skills, and opportunities needed to excel in an ever-evolving world",
            bgColor: "bg-[#F3E8FF]",
            textColor: "text-[#752EAD]",
          },
        ].map((data: any) => (
          <CardComponent {...data} />
        ))}
        {/* <CardComponent /> */}
      </div>
    </div>
  );
};

export default Grants;
