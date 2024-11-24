import React from "react";
import CustomButton from "./CustomButton";
import ServiceComponent from "./ServiceComponent";

type Props = {};

const ServicePage = (props: Props) => {
  return (
    <div className="w-full flex items-start justify-between  h-full relative py-16 pb-8 px-16 bg-white flex-wrap">
      <div className=" w-[30%]">
        <h1 className="mb-8">Our Services</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur. Ac sollicitudin potenti arcu
          iaculis. Est mauris nisl adipiscing interdum phasellus potenti
          vulputate nibh. Amet mauris habitant tempor sem vel enim
        </h3>

        <h3 className="mt-4">
          Lorem ipsum dolor sit amet consectetur. Ac sollicitudin potenti arcu
          iaculis. Est mauris nisl adipiscing interdum.
        </h3>
      </div>
      <div className=" mt-16">
        <div className=" flex items-center">
          {[
            {
              id: 1,
              image: "/service1.svg",
              content: "Consultation & Advisory",
            },
            {
              id: 2,
              image: "/service2.svg",
              content: "Consultation & Advisory",
              margin: true,
              serviceTwo: true,
            },
            {
              id: 3,
              image: "/service3.svg",
              content: "Consultation & Advisory",
            },
          ].map((data) => (
            <ServiceComponent data={data} key={data.id} />
          ))}
        </div>
        <div className="70% flex items-center ">
          {[
            {
              id: 4,
              image: "/service4.svg",
              content: "Consultation & Advisory",
            },
            ,
            {
              id: 5,
              image: "/service5.svg",
              content: "Consultation & Advisory",
              margin: true,
            },
            ,
            {
              id: 6,
              image: "/service6.svg",
              content: "Consultation & Advisory",
            },
            ,
          ].map((data: any) => (
            <ServiceComponent data={data} key={data?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
