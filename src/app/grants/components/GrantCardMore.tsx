import CustomButton from "@/app/components/CustomButton";
import React from "react";

type Props = {};
// border-bottom: 0.5px solid #6E6E6E80
const GrantCardMore = (props: Props) => {
  return (
    <div className=" h-full">
      {/* Up */}
      <div className="flex items-start justify-between py-8 w-[900px] bg-white my-4 px-4">
        <div className="w-[320px] h-[307px] flex items-center justify-center rounded-[15px]">
          <img src="/GrantsImage.svg" className="w-full object-contain " />
        </div>
        <div>
          <h4 className="text-primary mx-2">
            Aspire Coronation Trust (ACT) Foundation Grant 2024
          </h4>
          <div className="flex items-center m-2">
            <p className="text-[#1E1E1E]">Date Posted</p>
            <p className="text-borderColor ml-4">October 24, 2024</p>
          </div>
          <div className="flex items-center m-2">
            <p className="text-[#1E1E1E]">Deadline</p>
            <p className="text-borderColor ml-4">December 1st, 2024</p>
          </div>
          <div className="flex items-center m-2">
            <p className="text-[#1E1E1E]">Location</p>
            <p className="text-borderColor ml-4">AMERICA</p>
          </div>
          <div className="flex items-center m-2">
            <p className="text-[#1E1E1E]">Category</p>
            <p className="text-borderColor ml-4">Agriculture</p>
          </div>
          <div className="flex items-center m-2">
            <p className="text-[#1E1E1E]">Grant Size</p>
            <p className="text-borderColor ml-4">$100,000 to $500,000</p>
          </div>
          <div className="flex items-center m-2">
            <p className="text-[#1E1E1E]">Donor Agency</p>
            <p className="text-borderColor ml-4">
              United States African Development Foundation
            </p>
          </div>
          <div className="flex items-center m-2">
            <p className="text-[#1E1E1E]">Reference URL</p>
            <p className="text-borderColor ml-4 hover:underline text-secondaryColor">
              hhtps://www.exampleofgrants.com
            </p>
          </div>
          <div className="flex w-full items-center justify-between m-2 mt-4">
            <div className="w-[155px] h-[40px] border flex items-center justify-between border-secondaryColor bg-white py-1 rounded-[5px] pl-2">
              <img src="/googleCalendar.svg" />
              <p className="text-secondaryColor text-center text-sm">
                Add to Google Calendar
              </p>
            </div>
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
      {/* Down */}
      <div className="w-[90%] px-4">
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
        <div className="bg-white pt-8 flex justify-between items-center">
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
      </div>
    </div>
  );
};

export default GrantCardMore;
