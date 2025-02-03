import RenderModals from "@/app/[locale]/components/RenderModals";
import React from "react";
import DashboardHeader from "../../components/DashboardHeader";
import { setIsScrolled } from "../../../../../../lib/features/Scrolled/Scrolled";
import { useAppDispatch } from "../../../../../../lib/hooks";
import ConsultantComponent from "@/app/[locale]/consultant/component/ConsultantComponent";

type Props = {};
type filterDataProps = string[];

const filterData: filterDataProps = [
  "Grants",
  "Consultants (4)",
  "Featured Articles (3)",
  "Training Videos (4)",
  "Courses (3)",
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

const FavouritesConsultant = (props: Props) => {
  const [activeFilter, setActiveFilter] = React.useState(filterData[0]);
  const dispatch = useAppDispatch();

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
  return (
    <div
      className="bg-backgroundColor  w-full p-8 overflow-scroll h-screen scroll-smooth mt-8"
      ref={scrollContainerRef}>
      <DashboardHeader />
      <div>
        <div className="flex items-center justify-center md:justify-between w-full md:w-[580px] mt-8 flex-col md:flex-row">
          <p className="text-textColor"> Dashboard </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p className="text-textColor">My Favourites </p>
          <p className="text-textColor mx-3">{">>"}</p>
          <p>Featured Article</p>
        </div>

        <div className="bg-white p-8 w-full min-h-screen">
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

            <div className=" w-full flex items-center justify-between flex-wrap ">
              {[...Array(4)].map((data) => (
                <div key={data}>
                  <ConsultantComponent
                  margin="m-4" showButton={false} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <RenderModals />
    </div>
  );
};

export default FavouritesConsultant;
