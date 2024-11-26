"use client";
import CustomButton from "@/app/components/CustomButton";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler } from "react";
import CustomModal from "./Modal";
import ConsultantComponent from "../consultant/component/ConsultantComponent";
import ConsultantComponentModal from "./consultantComponentModal";
import { Progress, Flex } from "antd";
import { PlusOutlined, StarOutlined } from "@ant-design/icons";
import CustomModalComponent from "./CustomModalComponent";
import { useAppDispatch } from "../../../lib/hooks";
import { openModal } from "../../../lib/features/Modal/modalSlice";
import { modalName } from "../utils/ModalTypes";

type Props = {};
type imageProps = {
  image: string;
  name: string;
  title: string;
};

const Experts = (props: Props) => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    dispatch(
      openModal({
        open: true,
        modalType: modalName.consultantModal,
      })
    );
    console.log("check the experts");
  };
  const ImageContainer = (data: imageProps) => {
    return (
      <div className="grid place-items-center mr-2 my-2" onClick={handleClick}>
        <div className="w-[100px] sm:w-[120px] md:w-[170px] lg:w-[220px] 2lg:w-[250px] xl:w-[300px]">
          <img src={data.image} className="object-contain w-full h-full" />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="text-center text-[10px] md:text-[15px] leading-3 md:leading-6  lg:text-[24px] lg:leading-9 xl:leading-10">
            {data.name}
          </h3>
          <p className=" text-textColor text-[5px] md:text-[10px] leading-3 md:leading-6 lg:text-[14px] lg:leading-9  xl:leading-[20px] text-center ">
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
        <p className="text-[#6E6E6E] text-center w-full lg:w-[60%] px-4 lg:px-0 py-4">
          Lorem ipsum dolor sit amet consectetur. Diam augue dui elit fermentum
          sed. Elit urna ut leo dignissim enim cursus porttitor mattis. Lorem
          ipsum dolor sit amet consectetur. Diam augue dui elit fermentum sed.
          Elit urna ut leo dignissim enim cursus porttitor mattis. Lorem ipsum
          dolor sit amet consectetur. Diam{" "}
        </p>
      </div>
      <div className="flex items-center justify-center  w-[100%] ">
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
    </div>
  );
};

export default Experts;
