import CustomButton from "@/app/component/CustomButton";
import React from "react";

type Props = {};
type imageProps = {
  image: string;
};

const Experts = (props: Props) => {
  const ImageContainer = (data: imageProps) => {
    return (
      <div className="w-[273px] m-4 h-[400px] rounded-[20px] ">
        <img src={data.image} className="object-contain w-full h-full" />
      </div>
    );
  };

  return (
    <div className="bg-white h-full w-full py-16">
      <h1 className="text-center ">Work with Our Experts</h1>
      <div className="w-full flex items-center justify-center">
        <p className="text-[#6E6E6E] text-center w-[50%] py-4">
          Lorem ipsum dolor sit amet consectetur. Diam augue dui elit fermentum
          sed. Elit urna ut leo dignissim enim cursus porttitor mattis. Lorem
          ipsum dolor sit amet consectetur. Diam augue dui elit fermentum sed.
          Elit urna ut leo dignissim enim cursus porttitor mattis. Lorem ipsum
          dolor sit amet consectetur. Diam{" "}
        </p>
      </div>

      <div className="flex items-center justify-around px-24 ">
        {/* Left */}
        <div className="">
          <ImageContainer image="/expert1.svg" />
        </div>
        {/* Middle */}
        <div className="flex flex-wrap items-center justify-center w-[50%]">
          <ImageContainer image="/expert2.svg" />
          <ImageContainer image="/expert3.svg" />
          <ImageContainer image="/expert4.svg" />
          <ImageContainer image="/expert5.svg" />
        </div>
        {/* right */}
        <div className="">
          <ImageContainer image="/expert6.svg" />
        </div>
      </div>

      <div className="flex items-center justify-center w-full pt-16">
        <CustomButton
          width="w-[325px]"
          height="h-[50px]"
          title="Meet Our Consultant"
        />
      </div>
    </div>
  );
};

export default Experts;
