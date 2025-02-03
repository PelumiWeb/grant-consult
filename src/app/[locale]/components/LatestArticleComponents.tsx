import React from "react";
import useHandleNavigation from "../utils/HandleNavigation";
import Image from "next/image";

type Props = {};

type ArticleData = {
  image: string;
  title: string;
  headline: string;
  content: string;
  authorImage: string;
  authorName: string;
  dateCreated: string;
  navigationRoute?: string;
};

const LatestArticleComponent = (data: ArticleData) => {
  const handleNavigation = useHandleNavigation();
  return (
    <div className="shadow-article-shadow bg-white rounded-[5px] full h-[220px] m-2 flex items-center justify-between  lg:p-4 ">
      {/* image */}

      <div className="w-[226px] h-[130px] ">
        <Image
          src={data.image}
          alt=""
          width={226}
          height={130}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="ml-8">
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

          <div className=" w-full flex justify-between items-center h-[40px] mt-6">
            {/* Left */}
            <div className="w-full flex items-center">
              {/* <img src={data.authorImage} alt="" /> */}
              <div className="relative w-[50px] h-[50px] ">
                <Image src={data.authorImage} fill alt="" />
              </div>
              <div className="ml-2">
                <p className="text-primary leading-[10px] lg:leading-[14px]  text-[8px] lg:text-[12px] font-semibold">
                  {data.authorName}
                </p>
                <p className="font-normal text-[9px] lg:text-[10px] leading-[10px] lg:leading-[13px] text-textColor">
                  {data.dateCreated}
                </p>
              </div>
            </div>
            {/* right */}
            <button
              className="flex items-center w-[150px]"
              onClick={() => handleNavigation("/articles/1")}>
              <p className="font-semibold text-[10px] lg:text-[14px] leading-[10px] lg:leading-[14px] text-secondaryColor">
                Read More
              </p>
              <img src="/arrowRight.svg" alt="" />
            </button>
          </div>
        </div>
        {/* user */}
      </div>
    </div>
  );
};

export default LatestArticleComponent;
