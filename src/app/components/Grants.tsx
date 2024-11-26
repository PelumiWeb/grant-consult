"use client";

import CustomButton from "@/app/components/CustomButton";
import { useRouter } from "next/navigation";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {};

const Grants = (props: Props) => {
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

  const CardComponent = () => {
    return (
      <div className="bg-white pr-4 py-4 shadow-grant-card  mr-6 rounded-[20px] px-4 my-4">
        <div className="flex items-center justify-between w-full py-4">
          <h3 className="text-primary">Category: Agriculture</h3>
          <div className="flex items-center ">
            <img src="/location-grant.svg" />
            <p className="ml-2">Canada</p>
          </div>
        </div>
        <h4 className="w-full font-semibold text-secondaryColor pt-2">
          Excellent Business Grant for Women Owned Businesses 2024
        </h4>
        <p className="w-full leading-[30px] py-4 text-[#000000] font-poppins text-[16px]">
          Lorem ipsum dolor sit amet consectetur. Curabitur pellentesque sed
          sodales mauris ac malesuada. Venenatis fringilla est nec nisl lacus
          quisque scelerisque mauris. Eget orci cursus nunc arcu proin bibendum
          auctor metus feugiat. Tellus pretium turpis fringilla eu duis et.
          Tortor viverra iaculis donec enim nam vestibulum. Nunc congue arcu
          volutpat nec viverra ac vel volutpat.
        </p>
        <div onClick={() => router.push("/grants/1")}>
          <CustomButton
            title="Read More"
            backgrounColor="bg-white"
            borderColor="border-buttonPrimary"
            width="w-[132px]"
            height="h-[40px]"
            textStyle="text-buttonPrimary"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full px-16 py-16 ">
      <div className="flex  items-center justify-between w-full py-4">
        <h1>Featured Grants</h1>
        <h3
          className="text-buttonPrimary cursor-pointer hover:cursor-pointer  "
          onClick={() => router.push("/grants")}>
          View all grants
        </h3>
      </div>
      <div className="bg-secondaryColor w-full pl-8 py-4">
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
          //   itemClass="carousel-item-padding-40-px"
        >
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />

          {/* <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Grants;
