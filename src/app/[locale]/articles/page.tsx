"use client";

import { Input } from "antd";
import React from "react";
import LabelInput from "../components/LabelInput";
import { title } from "process";

type Props = {};

const filterData = [
  "All Topics",
  "Tips & Tricks (24)",
  "Resources (18)",
  "Case Studies (12)",
  "Trends (8)",
];

type FilterType = {
  text: string;
  active: boolean;
  setActive: (text: string) => void;
};

type ArticleData = {
  image: string;
  title: string;
  headline: string;
  content: string;
  authorImage: string;
  authorName: string;
  dateCreated: string;
};

const FilterOptions = ({ text, active, setActive }: FilterType) => {
  return (
    <button
      onClick={() => setActive(text)}
      className={`w-full h-[40px] rounded-[5px] p-2 border   mx-2 ${
        active ? "bg-secondaryColor" : "bg-white border-borderColor"
      } flex items-center justify-center`}>
      <p
        className={`text-[14px] ${
          active ? "text-white" : "text-textColor"
        } leading-[14px] text-center`}>
        {text}
      </p>
    </button>
  );
};

const articleData = [
  {
    image: "/article1.svg",
    title: "Tips & Tricks",
    headline:
      "Overcoming Rejection in Grant Writing Applications: Effective Tips to Prepare for the Next Opportunity in 2025",
    content:
      "Grant writing is an art and science, requiring skill, precision, and persistence. Facing rejection can be ...",
    authorImage: "/articleImage.svg",
    authorName: "Genevieve Aningo ",
    dateCreated: "December 31st, 2024",
  },
  {
    image: "/article2.svg",
    title: "Data Insight",
    headline: "How to Enrich Your Grant Application with Data and Research",
    content:
      "Grant applications are more than just requests for funding; they are a showcase of your project’s...",
    authorImage: "/articleImage.svg",
    authorName: "Genevieve Aningo ",
    dateCreated: "December 31st, 2024",
  },
  {
    image: "/article3.svg",
    title: "Case Studies",
    headline: "Success Story: How Organization X Secured $1M Grant",
    content:
      "Learn from a real-world example of how strategic planning and persistence led to grant success...",
    authorImage: "/articleImage.svg",
    authorName: "Genevieve Aningo ",
    dateCreated: "December 31st, 2024",
  },
];

const ArticleComponent = (data: ArticleData) => {
  return (
    <div className="shadow-article-shadow bg-white rounded-[5px] w-[405px] h-[430px] m-2">
      {/* image */}

      <div className="w-full h-[175px] ">
        <img src={data.image} className="w-full h-full object-contain" alt="" />
      </div>
      <div className="p-4">
        {/* content */}
        <div>
          <p className="font-semibold text-secondaryColor text-[12px] leading-[18px] my-1">
            {data.title}
          </p>
          <p className="text-primary font-semibold text-[15px] leading-[22px] my-2">
            {data.headline}
          </p>

          <p className="font-normal text-[14px] leading-[22px] text-textColor my-2">
            {data.content}
          </p>
        </div>
        {/* user */}
        <div className="flex justify-between items-center h-[40px] mt-6">
          {/* Left */}
          <div className="flex items-center">
            <img src={data.authorImage} alt="" />
            <div className="ml-2">
              <p className="text-primary leading-[14px] text-[12px] font-semibold">
                {data.authorName}
              </p>
              <p className="font-normal text-[10px] leading-[13px] text-textColor">
                {data.dateCreated}
              </p>
            </div>
          </div>
          {/* right */}
          <button className="flex items-center ">
            <p className="font-semibold text-[14px] leading-[14px] text-secondaryColor">
              Read More
            </p>
            <img src="/arrowRight.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

const page = (props: Props) => {
  const [activeFilter, setActiveFilter] = React.useState(filterData[0]);
  return (
    <div className="bg-white px-16">
      <div className="flex items-center w-full mt-8 pb-10">
        <p className="text-textColor"> Home </p>
        <p className="text-textColor mx-3">{">>"}</p>
        <p className="text-textColor">Blogs/Articles </p>
      </div>

      <div className="w-full ">
        {/*  */}
        <div className="w-full flex flex-col justify-center items-center py-4">
          <p className="font-semibold text-[24px] leading-[36px] text-center text-secondaryColor">
            Insights and Tips for Grant Writing Success
          </p>
          <p className="text-center text-[14px] leading-[21px] text-secondaryTextColor font-normal">
            Explore expert advice, tips, and resources to enhance your
            grant-writing journey
          </p>
        </div>

        {/* Filter Options */}
        <div className="w-full flex justify-between items-center">
          <div className="w-[70%] flex justify-between">
            {filterData.map((data: string) => (
              <FilterOptions
                text={data}
                active={activeFilter === data}
                setActive={setActiveFilter}
              />
            ))}
            {/* {FilterOptions()} */}
          </div>
          <div className="w-[25%]">
            <LabelInput
              value=""
              placeholder="search articles by topic, keyword, or author..."
              leftIcon={<img src="/searchBlog.svg" />}
              height="h-[40px]"
              width="w-full"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          {articleData.map((data: ArticleData) => (
            <ArticleComponent {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
