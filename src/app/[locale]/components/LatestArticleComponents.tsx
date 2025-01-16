import React from "react";
import useHandleNavigation from "../utils/HandleNavigation";

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
    <div className="shadow-article-shadow bg-white rounded-[5px] full h-[220px] m-2 flex items-center justify-between p-4">
      {/* image */}

      <div className="w-[226px] h-[130px] ">
        <img src={data.image} className="w-full h-full object-cover" alt="" />
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
            <button
              className="flex items-center "
              onClick={() => handleNavigation("/articles/1")}>
              <p className="font-semibold text-[14px] leading-[14px] text-secondaryColor">
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
