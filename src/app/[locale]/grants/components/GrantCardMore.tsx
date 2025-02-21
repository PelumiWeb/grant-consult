import CustomButton from "@/app/[locale]/components/CustomButton";
import React from "react";
import LatestNews from "../../components/LatestNews";

type Props = {};
// border-bottom: 0.5px solid #6E6E6E80
const GrantCardMore = (props: Props) => {
  return (
    <div className=" h-full ">
      {/* Up */}
      <div className="flex flex-col justify-between lg:justify-start bg-white mb-8 w-full sm:w-[500px] md:w-[600px] lg:w-full ">
        <h4 className=" block lg:hidden mb-4 text-primary mx-0 text-[14px] leading-[15px]  lg:mx-2 lg:text-[16px] lg:leading-[26px]font-semibold mt-8 text-left">
          Aspire Coronation Trust (ACT) Foundation Grant 2024
        </h4>
        <div className="flex items-start justify-between lg:justify-start w-full">
          <div className="w-[70%]  sm:w-[50%] h-[200px] md:w-[252px] md:h-[200px] lg:w-[320px] lg:h-[350px] flex items-center justify-center rounded-[15px] mr-4 -mt-[28px]  sm:-mt-0 lg:-mt-[20px]">
            <img
              src="/GrantsImage.svg"
              className="w-full  object-contain h-full"
            />
          </div>
          <div className="mt-0">
            <h4 className="hidden lg:block text-primary mx-2 text-[20px] mb-4 leading-[23px]">
              Aspire Coronation Trust (ACT) Foundation Grant 2024
            </h4>
            <div>
              <p className="text-[#1E1E1E] text-[10px] sm:text-[12px]  lg:text-[16px] my-0 lg:my-2 font-semibold leading-[20px]">
                Date Posted:
                <span className="text-textColor ml-1  text-[10px] sm:text-[12px]  lg:text-[16px] font-normal">
                  October 24, 2024
                </span>
              </p>
              <p className="text-[#1E1E1E] text-[10px] sm:text-[12px]  lg:text-[16px] my-0 lg:my-2 font-semibold leading-[20px]">
                Deadline:
                <span className="text-textColor ml-1 text-[10px] sm:text-[12px]  lg:text-[16px] font-normal">
                  December 1st, 2024
                </span>
              </p>
              <p className="text-[#1E1E1E] text-[10px] sm:text-[12px] lg:text-[16px] my-0 lg:my-2 font-semibold leading-[20px]">
                Location:
                <span className="text-textColor ml-1 text-[10px] sm:text-[12px]  lg:text-[16px] font-normal">
                  AMERICA
                </span>
              </p>
              <p className="text-[#1E1E1E] text-[10px] sm:text-[12px]  font-semibold my-0 lg:my-2lg:text-[16px] leading-[20px]">
                Category:
                <span className="text-textColor ml-1 text-[10px] sm:text-[12px]  lg:text-[16px] font-normal">
                  Agriculture
                </span>
              </p>
              <p className="text-[#1E1E1E] text-[10px] sm:text-[12px]  lg:text-[16px] my-0 lg:my-2 font-semibold leading-[20px]">
                Grant Size:
                <span className="text-textColor ml-1 text-[10px] sm:text-[12px]  lg:text-[16px] font-normal">
                  $100,000 to $500,000
                </span>
              </p>
              <p className="text-[#1E1E1E] text-[10px] sm:text-[12px]lg:text-[16px] my-0 lg:my-2 font-semibold leading-[20px]">
                Donor Agency:{" "}
                <span className="text-textColor text-[10px] sm:text-[12px] lg:text-[16px] font-normal">
                  United States African Development Foundation
                </span>
              </p>
              <p className="hidden md:block text-[#1E1E1E] leading-15 text-[14px] my-0 lg:my-2 lg:text-[16px] font-semibold">
                Reference URL:
                <span className="hover:underline text-secondaryColor lg:text-[16px] text-[12px]">
                  hhtps://www.exampleofgrants.com
                </span>
              </p>
            </div>

            <div className="hidden lg:flex w-full items-center justify-between my-2 m-2 mt-4">
              <CustomButton
                IconLeft={"/googleCalendar.svg"}
                title="Add to Google Calendar"
                backgrounColor="bg-white"
                height="h-[40px]"
                width="w-[200px]"
                textStyle="text-secondaryColor text-center text-sm"
                borderColor="border-secondaryColor"
              />
              <CustomButton
                IconLeft={"/love.svg"}
                title="Save this grant"
                backgrounColor="bg-buttonPrimary"
                height="h-[40px]"
                width="w-[200px]"
                textStyle="text-white"
              />
              <div>
                <img src="/mesage.svg" />
              </div>
              <div>
                <img src="/question.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-6 block md:hidden">
          <p className=" text-[#1E1E1E] leading-15 text-[12px] my-2 lg:text-[16px] font-semibold text-center mr-2">
            Reference URL:
            <span className="hover:underline text-secondaryColor lg:text-[16px] text-[12px] ml-2">
              hhtps://www.exampleofgrants.com
            </span>
          </p>
        </div>

        <div className="flex lg:hidden  items-center w-[100%] sm:w-[90%] md:w-[80%] justify-between  lg:w-full gap-x-2">
          <CustomButton
            IconLeft={"/love.svg"}
            title="Save this grant"
            backgrounColor="bg-buttonPrimary"
            height="h-[40px]"
            width="w-[140px]"
            textStyle="text-white text-[10px] lg:text-sm font-medium "
            radius="rounded-[3px]"
            padding="p-2"
          />
          <CustomButton
            IconLeft={"/googleCalendar.svg"}
            padding="p-2"
            title="Add to Google Calendar"
            backgrounColor="bg-white"
            height="h-[40px]"
            width="w-[140px]"
            borderColor="border-secondaryColor"
            textStyle="text-secondaryColor text-center text-[10px] lg:text-sm font-medium leading-[12px]"
            radius="rounded-[3px]"
          />

          <div>
            <img src="/mesage.svg" />
          </div>
          <div>
            <img src="/question.svg" />
          </div>
        </div>
      </div>

      {/* Down */}
      <div className="w-full lg:w-[90%] lg:px-4">
        <p className="leading-[40px] w-full text-textColor">
          Lorem ipsum dolor sit amet consectetur. Feugiat nam imperdiet
          consectetur laoreet. Diam elementum urna sit tristique dictumst
          egestas pellentesque. Neque amet adipiscing dolor mauris tincidunt sit
          placerat urna porttitor. Nunc donec adipiscing sollicitudin hac
          pellentesque rutrum enim donec viverra. Arcu nibh quam risus faucibus
          platea faucibus dis mi urna. Leo diam ut eu vitae sed risus feugiat
          in. Enim risus sapien phasellus magna aliquet arcu. Et convallis
          viverra amet morbi. Leo facilisis id dignissim donec. Justo molestie
          nunc nibh rhoncus risus laoreet pellentesque. Odio egestas tristique
          velit. massa lorem nibh amet magna. Eget pellentesque mauris id dui.
          Arcu varius nullam scelerisque enim est lectus. Arcu pellentesque
          ipsum enim in amet praesent vestibulum pellentesque. Eu diam diam
          vitae ut at purus mattis diam. Magna nunc dolor ornare donec. Viverra
          in sit nulla venenatis ultricies. Neque quis adipiscing eget volutpat
          et facilisis rutrum ante metus. Dolor etiam cras lectus felis
          sollicitudin vel. Urna vel id nunc proin auctor. Morbi malesuada
          mollis felis tincidunt massa ut enim consectetur diam. Porta
          consectetur scelerisque auctor blandit sem. Morbi non proin commodo
          non purus vitae et ut. Nunc mi amet nulla tortor iaculis velit.
        </p>
        <p className="py-4 leading-[40px] w-full text-textColor">
          Lorem ipsum dolor sit amet consectetur. Feugiat nam imperdiet
          consectetur laoreet. Diam elementum urna sit tristique dictumst
          egestas pellentesque. Neque amet adipiscing dolor mauris tincidunt sit
          placerat urna porttitor. Nunc donec adipiscing sollicitudin hac
          pellentesque rutrum enim donec viverra. Arcu nibh quam risus faucibus
          platea faucibus dis mi urna. Leo diam ut eu vitae sed risus feugiat
          in. Enim risus sapien phasellus magna aliquet arcu. Et convallis
          viverra amet morbi. Leo facilisis id dignissim donec. Justo molestie
          nunc nibh rhoncus risus laoreet pellentesque. Odio egestas tristique
          velit. massa lorem nibh amet magna. Eget pellentesque mauris id dui.
          Arcu varius nullam scelerisque enim est lectus. Arcu pellentesque
          ipsum enim in amet praesent vestibulum pellentesque. Eu diam diam
          vitae ut at purus mattis diam. Magna nunc dolor ornare donec. Viverra
          in sit nulla venenatis ultricies. Neque quis adipiscing eget volutpat
          et facilisis rutrum ante metus. Dolor etiam cras lectus felis
          sollicitudin vel. Urna vel id nunc proin auctor. Morbi malesuada
          mollis felis tincidunt massa ut enim consectetur diam. Porta
          consectetur scelerisque auctor blandit sem. Morbi non proin commodo
          non purus vitae et ut. Nunc mi amet nulla tortor iaculis velit.
        </p>
        <p className="py-4 leading-[40px] w-full text-textColor">
          Lorem ipsum dolor sit amet consectetur. Feugiat nam imperdiet
          consectetur laoreet. Diam elementum urna sit tristique dictumst
          egestas pellentesque. Neque amet adipiscing dolor mauris tincidunt sit
          placerat urna porttitor. Nunc donec adipiscing sollicitudin hac
          pellentesque rutrum enim donec viverra. Arcu nibh quam risus faucibus
          platea faucibus. dis mi urna. Leo diam ut eu vitae sed risus feugiat
          in. Enim risus sapien phasellus magna aliquet arcu. Et convallis
          viverra amet morbi. Leo facilisis id dignissim donec. Justo molestie
          nunc nibh rhoncus risus laoreet pellentesque. Odio egestas tristique
          velit. massa lorem nibh amet magna. Eget pellentesque mauris id dui.
          Arcu varius nullam scelerisque enim est lectus. Arcu pellentesque
          ipsum enim in amet praesent vestibulum pellentesque. Eu diam diam
          vitae ut at purus mattis diam. Magna nunc dolor ornare donec. Viverra
          in sit nulla venenatis ultricies. Neque quis adipiscing eget volutpat
          et facilisis rutrum ante metus. Dolor etiam cras lectus felis
          sollicitudin vel. Urna vel id nunc proin auctor. Morbi malesuada
          mollis felis tincidunt massa ut enim consectetur diam. Porta
          consectetur scelerisque auctor blandit sem. Morbi non proin commodo
          non purus vitae et ut. Nunc mi amet nulla tortor iaculis velit.
        </p>
        <ul className="list-disc ml-16">
          <li>
            <p className="py-4 leading-[40px] w-full text-textColor">
              Eligibility Lorem ipsum dolor sit amet consectetur. Feugiat nam
              imperdiet consectetur laoreet. Diam elementum urna sit tristique
              dictumst egestas pellentesque. Neque amet adipiscing dolor mauris
              tincidunt sit placerat urna porttitor. Nunc donec adipiscing
              sollicitudin hac pellentesque rutrum enim donec viverra. Arcu nibh
              quam risus faucibus platea faucibus{" "}
            </p>
          </li>
          <li>
            <p className="py-4 leading-[40px] w-full text-textColor">
              Eligibility Lorem ipsum dolor sit amet consectetur. Feugiat nam
              imperdiet consectetur laoreet. Diam elementum urna sit tristique
              dictumst egestas pellentesque. Neque amet adipiscing dolor mauris
              tincidunt sit placerat urna porttitor. Nunc donec adipiscing
              sollicitudin hac pellentesque rutrum enim donec viverra. Arcu nibh
              quam risus faucibus platea faucibus{" "}
            </p>
          </li>

          <li>
            <p className="py-4 leading-[40px] w-full text-textColor">
              {" "}
              dis mi urna. Leo diam ut eu vitae sed risus feugiat in. Enim risus
              sapien phasellus magna aliquet arcu. Et convallis viverra amet
              morbi. Application Lorem ipsum dolor sit amet consectetur. Feugiat
              nam imperdiet consectetur laoreet. Diam elementum urna sit
              tristique dictumst egestas pellentesque. Neque amet adipiscing
              dolor mauris tincidunt sit placerat urna porttitor. Nunc donec
              adipiscing sollicitudin hac pellentesque rutrum enim donec
              viverra.{" "}
            </p>
          </li>
          <li>
            <p className="py-4 leading-[40px] w-full text-textColor">
              {" "}
              Arcu nibh quam risus faucibus platea faucibus dis mi urna. Leo
              diam ut eu vitae sed risus feugiat dis mi urna. Leo diam ut eu
              vitae sed risus feugiat in. Enim risus sapien phasellus magna
              aliquet arcu. Et convallis viverra amet morbi. Application Lorem
              ipsum dolor sit amet consectetur. Feugiat nam imperdiet
              consectetur laoreet. Diam elementum urna sit tristique dictumst
              egestas pellentesque. Neque amet adipiscing dolor mauris tincidunt
              sit placerat urna porttitor. Nunc donec adipiscing sollicitudin
              hac pellentesque rutrum enim donec viverra.{" "}
            </p>
          </li>
        </ul>
        <div className="py-4">
          <h4 className="text-textColor font-semibold">Eligibility</h4>
          <p className="leading-[40px] w-full text-textColor">
            Lorem ipsum dolor sit amet consectetur. Feugiat nam imperdiet
            consectetur laoreet. Diam elementum urna sit tristique dictumst
            egestas pellentesque. Neque amet adipiscing dolor mauris tincidunt
            sit placerat urna porttitor. Nunc donec adipiscing sollicitudin hac
            pellentesque rutrum enim donec viverra. Arcu nibh quam risus
            faucibus platea faucibus dis mi urna. Leo diam ut eu vitae sed risus
            feugiat in. Enim risus sapien phasellus magna aliquet arcu. Et
            convallis viverra amet morbi.
          </p>
        </div>
        <div className="py-4">
          <h4 className="text-textColor font-semibold">Application</h4>
          <p className="leading-[40px] w-full text-textColor">
            Lorem ipsum dolor sit amet consectetur. Feugiat nam imperdiet
            consectetur laoreet. Diam elementum urna sit tristique dictumst
            egestas pellentesque. Neque amet adipiscing dolor mauris tincidunt
            sit placerat urna porttitor. Nunc donec adipiscing sollicitudin hac
            pellentesque rutrum enim donec viverra. Arcu nibh quam risus
            faucibus platea faucibus dis mi urna. Leo diam ut eu vitae sed risus
            feugiat in. Enim risus sapien phasellus magna aliquet arcu. Et
            convallis viverra amet morbi.
          </p>
        </div>

        {/* Application button */}
        <div>
          <p className="text-buttonPrimary font-poppins font-bold hover:underline cursor-pointer">
            Click here to apply.
          </p>
          <p className="text-black font-bold ">
            For more information{" "}
            <span className="text-buttonPrimary cursor-pointer hover:underline">
              , VISIT ACT FOUNDATION GRANT.
            </span>{" "}
          </p>
        </div>
      </div>
      {/* Related News */}
      <div>
        <p className="text-secondaryColor text-center py-2 border-t-borderColor border-b-borderColor border-b border-t mt-4">
          RELATED POST
        </p>
        <div className="bg-white pt-8 flex justify-center lg:justify-between items-center flex-wrap mb-8">
          {[1, 2, 3].map((data) => (
            <div className="w-[250px] h-[310px] rounded-[22px] shadow-related-news-card mt-8">
              <div className="h-[70%] w-full flex items-center justify-center">
                <img src="/relatednews.svg" className="object-contain" />
              </div>
              <p className="w-full text-center text-black">
                Bow Seat Future Blue Youth Council 2025 (up to $25,000)
              </p>
              <p className="text-borderColor font-poppins text-center">
                October 21, 2024
              </p>
            </div>
          ))}
        </div>
        <div className="block lg:hidden px-8">
          <LatestNews />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default GrantCardMore;
