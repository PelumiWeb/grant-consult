"use client";

import { Input, Pagination } from "antd";
import React from "react";
import LabelInput from "../components/LabelInput";
import { title } from "process";
import CustomButton from "../components/CustomButton";
import useHandleNavigation from "../utils/HandleNavigation";
import LatestArticleComponent from "../components/LatestArticleComponents";
import ArticleComponent from "../components/ArticleComponent";

type Props = {};

type filterDataProps = string[];

const filterData: filterDataProps = [
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
      className={`w-full sm:w-[200px] h-[40px] rounded-[5px] p-2 border  m-4  mx-2 ${
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

const latestArticleData = [
  {
    image: "/latestArticle1.svg",
    title: "Resources",
    headline: "Essential tools for Modern Grant Writers",
    content:
      "Discover the latest software and resources that can streamline your grant writing process...",
    authorImage: "/articleImage.svg",
    authorName: "Genevieve Aningo ",
    dateCreated: "December 31st, 2024",
  },
  {
    image: "/latestArticle2.svg",
    title: "Tips & Tricks",
    headline: "Time Management Strategies for Grant Writers",
    content:
      "Learn how to effectively manage multiple grant applications and meet deadlines...",
    authorImage: "/articleImage.svg",
    authorName: "Genevieve Aningo ",
    dateCreated: "December 31st, 2024",
  },
];

const page = (props: Props) => {
  const [activeFilter, setActiveFilter] = React.useState(filterData[0]);

  const handleNavigation = useHandleNavigation();

  // const LatestArticleComponent = (data: ArticleData) => {
  //   return (
  //     <div className="shadow-article-shadow bg-white rounded-[5px] full h-[220px] m-2 flex items-center justify-between p-4">
  //       {/* image */}

  //       <div className="w-[226px] h-[130px] ">
  //         <img src={data.image} className="w-full h-full object-cover" alt="" />
  //       </div>
  //       <div className="ml-8">
  //         {/* content */}
  //         <div>
  //           <p className="font-semibold text-secondaryColor text-[12px] leading-[18px] my-1">
  //             {data.title}
  //           </p>
  //           <p className="text-primary font-semibold text-[15px] leading-[22px] my-2">
  //             {data.headline}
  //           </p>

  //           <p className="font-normal text-[14px] leading-[22px] text-textColor my-2">
  //             {data.content}
  //           </p>

  //           <div className="flex justify-between items-center h-[40px] mt-6">
  //             {/* Left */}
  //             <div className="flex items-center">
  //               <img src={data.authorImage} alt="" />
  //               <div className="ml-2">
  //                 <p className="text-primary leading-[14px] text-[12px] font-semibold">
  //                   {data.authorName}
  //                 </p>
  //                 <p className="font-normal text-[10px] leading-[13px] text-textColor">
  //                   {data.dateCreated}
  //                 </p>
  //               </div>
  //             </div>
  //             {/* right */}
  //             <button
  //               className="flex items-center "
  //               onClick={() => handleNavigation("/articles/1")}>
  //               <p className="font-semibold text-[14px] leading-[14px] text-secondaryColor">
  //                 Read More
  //               </p>
  //               <img src="/arrowRight.svg" alt="" />
  //             </button>
  //           </div>
  //         </div>
  //         {/* user */}
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div className="bg-white px-4 md:px-16">
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
        <div className="w-full flex justify-between items-center flex-wrap">
          <div className="w-full lg:w-[70%] flex justify-between flex-wrap lg:flex-nowrap">
            {filterData.map((data: string) => (
              <FilterOptions
                text={data}
                active={activeFilter === data}
                setActive={setActiveFilter}
              />
            ))}
            {/* {FilterOptions()} */}
          </div>
          <div className="w-full lg:w-[25%]">
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

      <div className="mt-4">
        <div className="flex items-center justify-center  lg:justify-between flex-wrap">
          {articleData.map((data: ArticleData) => (
            <ArticleComponent {...data} />
          ))}
        </div>

        <div>
          <h4 className="text-secondaryColor m-2 my-4">Latest Articles</h4>
          <div className="w-full flex justify-between items-start flex-wrap">
            <div className="flex flex-col justify-between w-full md:w-[55%] lg:w-[65%]">
              {latestArticleData.map((data: ArticleData) => (
                <LatestArticleComponent {...data} />
              ))}
              <div className="mt-8">
                <Pagination defaultCurrent={1} total={500} />
              </div>
            </div>

            <div className="w-full md:w-[40%] lg:w-[30%]">
              <div className="shadow-article-shadow w-full rounded-[5px] bg-[#FFFFFF] h-[150px] p-4 my-4">
                <p className="text-primary font-semibold text-[14px] leading-[21px]">
                  Popular Tags
                </p>
                <div className="w-full flex justify-between flex-wrap">
                  {[
                    "Grant Writings",
                    "Education",
                    "Healthcare",
                    "Research",
                    "Nonprofit",
                    "Tips",
                    "Success Stories",
                  ].map((data) => (
                    <button className="bg-backgroundColor p-1 m-1  rounded-[5px]">
                      <p className="font-normal text-[12px] leading-[18px]">
                        {data}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="shadow-article-shadow w-full rounded-[5px] bg-[#FFFFFF] h-full p-4 my-4">
                <p className="text-primary font-semibold text-[14px] leading-[21px]">
                  Newsletter
                </p>

                <p className="font-normal text-[12px] leading-[18px]">
                  Stay updated with the latest grant writing tips and resources
                </p>

                <LabelInput
                  placeholder="Enter your email"
                  value=""
                  height="h-[36px]"
                  width="w-full"
                />
                <CustomButton
                  title="Subscribe"
                  textStyle="text-white font-semibold text-[14px] leading-[21px] text-center"
                  height="h-[22px]"
                  width="w-full"
                  backgrounColor="bg-secondaryColor"
                />
              </div>

              <div className="shadow-article-shadow w-full rounded-[5px] bg-[#FFFFFF] h-full p-4 my-4">
                <p className="text-primary font-semibold text-[14px] leading-[21px]">
                  Newsletter
                </p>

                <div className="my-4">
                  <p className="text-[12px] leading-[18px] font-semibold text-textColor">
                    10 Common Grant Writing Mistakes to Avoid
                  </p>
                  <p className="text-[12px] font-normal leading-[18px] text-textColor">
                    3 min read
                  </p>
                </div>
                <div className="my-4">
                  <p className="text-[12px] leading-[18px] font-semibold text-textColor">
                    Grant Budget Planning Guide
                  </p>
                  <p className="text-[12px] font-normal leading-[18px] text-textColor">
                    5 min read
                  </p>
                </div>
                <div className="my-4">
                  <p className="text-[12px] leading-[18px] font-semibold text-textColor">
                    Building Strong Grant Partnerships
                  </p>
                  <p className="text-[12px] font-normal leading-[18px] text-textColor">
                    6 min read
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
