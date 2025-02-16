"use client";
import { title } from "process";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { useDispatch } from "react-redux";
import useHandleNavigation from "../../utils/HandleNavigation";

type Props = {};
type serviceDataProps = {
  id: number;
  image: string;
  title: string;
  content: string;
  gradient: string;
};

const serviceData = [
  {
    id: 1,
    image: "/serviceCardIcon.svg",
    title: "Consultation & Advisory",
    content:
      "We assist in reviewing eligibility criteria and guidelines, offering expert consultation and strategy development. Our insights, knowledge, and advice help you craft strong project proposals and submit qualified applications.",
    gradient: "bg-service-card-1",
  },
  {
    id: 2,

    image: "/serviceCardIcon2.svg",
    title: "Grant Writing Assistance",
    content:
      "Streamline your grant, scholarship, and proposal applications with GrantsConsult. Whether you're new to grants, overwhelmed by the process, or stuck in endless revisions, our expert grant writers are here to help—so you can focus on what matters most.",
    gradient: "bg-service-card-2",
  },
  {
    id: 3,
    image: "/serviceCardIcon3.svg",
    title: "Grant Research and Identification",
    content:
      "Unsure which grant fits your project? We’ll match your needs with opportunities from our extensive database, providing tailored research and a personalized dashboard to manage your grants seamlessly.",
    gradient: "bg-service-card-3",
  },
  {
    id: 4,

    image: "/serviceCardIcon4.svg",
    title: "Proposal Review and Feedback",
    content:
      "Winning grants requires precision, time, and resources. Our proposal review service refines your application for a professional finish, boosting its success rate. We’ll evaluate your documents, fix errors, address gaps, and provide a grant review kit to strengthen your submission.",
    gradient: "bg-service-card-4",
  },
  {
    id: 5,

    image: "/serviceCardIcon5.svg",
    title: "Training & Workshops",
    content:
      "Boost your team's expertise with our tailored training programs in grant management. Our sessions cover key areas like coaching, sourcing, writing, documentation, and proposal strategies, equipping your organization to excel in securing opportunities.",
    gradient: "bg-service-card-5",
  },
  {
    id: 6,

    image: "/serviceCardIcon.svg",
    title: "Scholarships",
    content:
      "GrantsConsult curates funding opportunities for scholarships, research, internships, professional training, fellowships, and awards. This service empowers students, researchers, and educators to secure the financial support needed to achieve their academic and career aspirations.",
    gradient: "bg-service-card-6",
  },
];

const Card = (data: any) => {
  return (
    <div className="w-full md:w-[400px] flex items-center justify-center h-[138px]">
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

const ServiceCard = (data: serviceDataProps) => {
  const handleNavigation = useHandleNavigation();
  return (
    <button
      onClick={() => handleNavigation("/consultant/request")}
      className={` w-full md:w-[400px] h-[300px] rounded-[10px] shadow-service-shadow ${data.gradient} p-4 m-4`}>
      <div className="flex items-center py-2">
        <img src={data.image} alt="" />
        <p className="font-bold text-[16px] leading-[18px] text-black ml-6">
          {data.title}
        </p>
      </div>
      <div className="flex flex-1 justify-center items-center h-[200px]">
        <p className="font-normal font-mono text-[16px] leading-[25px] text-left ">
          {data.content}
        </p>
      </div>
    </button>
  );
};
const page = (props: Props) => {
  const handleNavigation = useHandleNavigation();

  return (
    <div className="bg-white">
      <div className="flex flex-col justify-between items-center py-8 mb-12">
        <h2 className="font-semibold text-[26px] md:text-[46px] leading-[55px] text-secondaryColor mb-8">
          Our Services
        </h2>

        <p className="font-medium text-textColor text-[16px] leading-[25px] text-center w-[90%]  md:w-[70%]">
          Applying for grants can be complex, but we’re here to simplify the
          process. With customized advice, professional writing, and expert
          consultation. Our team is dedicated to helping you secure the funding
          you need. 
        </p>
      </div>

      <div className="p-4  xl:p-16 flex items-center justify-center lg:justify-between flex-wrap">
        {serviceData.map((data) => (
          <ServiceCard key={data.id} {...data} />
        ))}
      </div>

      <div className="p-4 md:p-16 flex justify-between items-center flex-col md:flex-row">
        {[
          {
            name: "500+",
            text: "Successful Grants",
          },
          {
            name: "98%",
            text: "Client Satisfaction",
          },
          {
            name: "$50M+",
            text: "Funding Secured",
          },
          {
            name: "1000+",
            text: "Clients Served",
          },
        ].map((data) => (
          <Card {...data} />
        ))}
      </div>

      <div className="bg-secondaryColor w-full flex flex-col justify-around items-center py-8 mt-8 mb-32">
        <p className="text-center font-mono font-bold text-[24px] leading-[36px] text-white mb-4">
          Ready to Get Started?
        </p>

        <CustomButton
          title="Request Consultation"
          textStyle="font-bold text-[16px] leading-[16px] text-secondaryColor"
          backgrounColor="bg-white"
          width="w-[250px]"
          height="h-[60px]"
          radius="rounded-[5px]"
          onClick={() => handleNavigation("/consultant/request")}
        />
      </div>
    </div>
  );
};

export default page;
