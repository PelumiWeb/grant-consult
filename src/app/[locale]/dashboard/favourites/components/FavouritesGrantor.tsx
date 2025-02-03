import RenderModals from "@/app/[locale]/components/RenderModals";
import React from "react";
import DashboardHeader from "../../components/DashboardHeader";
import { setIsScrolled } from "../../../../../../lib/features/Scrolled/Scrolled";
import { useAppDispatch } from "../../../../../../lib/hooks";
import DashboardGrantCard from "../../components/DashboardGrantCard";
import LabelInput from "@/app/[locale]/components/LabelInput";

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

const FavouritesGrants = (props: Props) => {
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
      className="bg-backgroundColor  w-full p-8 overflow-scroll h-screen scroll-smooth"
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
        <div>
          <LabelInput
            value=""
            label="Favourite Options"
            placeholder="Grants"
            required
            select
            width="w-full"
            options={[
              { value: "Grants", label: "Grant (4)" },
              { value: "Consultants", label: "Consultants (4)" },
              { value: "Feautured Articles", label: "Feautured Articles (3)" },
              { value: "Training Videos", label: "Training Videos (4)" },
              { value: "Courses", label: "Courses (4)" },
            ]}
          />
        </div>

        <div className="bg-white p-8 w-full">
          <h3>My Favourites</h3>

          <div>
            <div className="hidden w-full lg:flex justify-between">
              {filterData.map((data: string) => (
                <FilterOptions
                  text={data}
                  active={activeFilter === data}
                  setActive={setActiveFilter}
                />
              ))}
            </div>

            <div className="flex flex-wrap justify-between">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => (
                <DashboardGrantCard DoNotshowButton />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Charts */}

      <RenderModals />
    </div>
  );
};

export default FavouritesGrants;
