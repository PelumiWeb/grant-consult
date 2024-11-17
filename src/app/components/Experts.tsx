"use client";
import CustomButton from "@/app/components/CustomButton";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler } from "react";
import CustomModal from "./Modal";

type Props = {};
type imageProps = {
  image: string;
  name: string;
  title: string;
};

const Experts = (props: Props) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false)
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    // console.log("Div clicked!", event);
    setOpen(true)
  };
  const ImageContainer = (data: imageProps) => {
    return (
      <div className="" onClick={handleClick}>
        <div className="w-[273px] m-4 h-[400px] rounded-[20px] ">
          <img src={data.image} className="object-contain w-full h-full" />
        </div>
        <div className="w-full">
          <h3 className="text-center">{data.name}</h3>
          <p className=" text-borderColor text-[14px] leading-[16px] text-center ">
            {data.title}
          </p>
        </div>
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
          <ImageContainer
            name="PAUL SMITH"
            title="Grant Consultant |Individual Advisor"
            image="/expert1.svg"
          />
        </div>
        {/* Middle */}
        <div className="flex flex-wrap items-center justify-center w-[50%]">
          <ImageContainer
            name="ALICE BROOKLYN"
            title="Grant Consultant |Individual Advisor"
            image="/expert2.svg"
          />
          <ImageContainer
            name="BROWN KIGAI"
            title="Grant Consultant |Individual Advisor"
            image="/expert3.svg"
          />
          <ImageContainer
            name="WILLIAM BUTT"
            title="Grant Consultant |Individual Advisor"
            image="/expert4.svg"
          />
          <ImageContainer
            name="JANE DOE"
            title="Grant Consultant |Individual Advisor"
            image="/expert5.svg"
          />
        </div>
        {/* right */}
        <div className="">
          <ImageContainer
            name="JAMES RWANDA"
            title="Grant Consultant |Individual Advisor"
            image="/expert6.svg"
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-full pt-16">
        <CustomButton
          onClick={() => router.push("/consultant")}
          width="w-[325px]"
          height="h-[50px]"
          title="Meet Our Consultant"
        />
      </div>
      <CustomModal open={open} setOpen={handleClick}>
        <div>This is the modal</div>
      </CustomModal>
    </div>
  );
};

export default Experts;
