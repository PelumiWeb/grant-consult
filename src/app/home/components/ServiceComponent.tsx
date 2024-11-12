import React from "react";

type Props = {
  id: number;
  image?: string;
  content?: string;
  margin?: boolean;
  serviceTwo?: boolean;
};

const ServiceComponent = ({ data }: { data: Props }) => {
  return (
    <div
      className={`flex items-center justify-center border ${
        data.serviceTwo && "shadow-card mb-16"
      }  ${
        data.serviceTwo ? "border-none" : "border-secondaryColor"
      }  rounded-[20px] h-[251px] w-[231px] m-4 ' ${
        data.margin ? "-mt-32 " : "mt-0"
      }`}>
      <div className="w-[50%] flex flex-col items-center justify-center">
        <img src={data.image} />
        <p
          className={`font-thin text-center ${
            data.serviceTwo ? "text-[#27AE60]" : "text-primary"
          }`}>
          {data.content}
        </p>
      </div>
    </div>
  );
};

export default ServiceComponent;
