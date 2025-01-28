"use client";
import React from "react";
import { setIsScrolled } from "../../../../../../lib/features/Scrolled/Scrolled";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import RenderModals from "@/app/[locale]/components/RenderModals";
import DashboardHeader from "../../components/DashboardHeader";
import ArticleComponent from "@/app/[locale]/components/ArticleComponent";

type Props = {};
type filterDataProps = string[];
type ArticleData = {
  image: string;
  title: string;
  headline: string;
  content: string;
  authorImage: string;
  authorName: string;
  dateCreated: string;
};

const filterData: filterDataProps = [
  "Grants",
  "Consultants (4)",
  "Featured Articles (3)",
  "Training Videos (4)",
  "Courses (3)",
];

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

type FilterType = {
  text: string;
  active: boolean;
  setActive: (text: string) => void;
};

const FilterOptions = ({ text, active, setActive }: FilterType) => {
  return (
    <button
      onClick={() => setActive(text)}
      className={`w-full h-[40px] rounded-[5px] p-2 border my-4 mr-2 ${
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

const FavouritesGeneral = (props: Props) => {
  const dispatch = useAppDispatch();
  const dashboardRoute = useAppSelector((state) => state.dashboard);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop; // Get the scroll position
      console.log("Scroll Top:", scrollTop); // Debugging scroll value
      dispatch(setIsScrolled(scrollTop > 50));
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [activeFilter, setActiveFilter] = React.useState(filterData[0]);

  return (
    <div
      className="bg-backgroundColor  w-full p-8 overflow-scroll h-screen scroll-smooth"
      ref={scrollContainerRef}>
      <DashboardHeader />
      <div>
        <div className="flex items-center w-[580px] mt-8">
          <p className="text-textColor"> Dashboard </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p className="text-textColor">My Favourites </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p>Featured Article</p>
        </div>

        <div className="bg-white p-8 w-full mt-8">
          <h3>My Favourites</h3>

          <div>
            <div className="w-full flex justify-between">
              {filterData.map((data: string) => (
                <FilterOptions
                  text={data}
                  active={activeFilter === data}
                  setActive={setActiveFilter}
                />
              ))}
            </div>
            <div className="w-full">
              <div className="flex items-center justify-center lg:justify-between flex-wrap">
                {articleData.map((data: ArticleData) => (
                  <ArticleComponent {...data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Charts */}

      <RenderModals />
    </div>
  );
};

export default FavouritesGeneral;
