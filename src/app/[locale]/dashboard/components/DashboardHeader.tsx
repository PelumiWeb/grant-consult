import { Input, Select } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useAppSelector } from "../../../../../lib/hooks";

type Props = {
  onChange?: any;
};

const DashboardHeader = (props: Props) => {
  const router = useRouter();
  const { isScrolled } = useAppSelector((state) => state.scrolled);

  return (
    <div
      className={`${
        isScrolled &&
        "bg-white border-b-borderColor border-b-[.5px] h-[100px] z-30 px-2"
      } flex items-center justify-between sticky -top-10  transition-all`}>
      <div className="w-[40%]" onClick={() => router.push("/")}>
        <img src="/grantLogo.svg" />
      </div>

      <div className="w-[60%] flex items-center justify-between">
        {/* Input */}
        <div className="flex items-center h-[40px] w-[234px]">
          <Input
            className="w-[80%] h-full rounded-r-[0px] "
            placeholder="Search Site Content"
          />
          <div className="bg-primary w-[20%] h-full flex items-center justify-center rounded-r-[10px] ">
            <img src="/searchgrant.svg" className="w-[20px]" />
          </div>
        </div>

        {/* Select Language */}

        <Select
          className="w-[100px] h-[40px] rounded-[3.75px] bg-white border-[0.3px] border-borderColor ml-4"
          onChange={props.onChange}
          style={{ background: "white" }}
          defaultValue={"sample"}
          dropdownStyle={{ background: "white" }}
          options={[
            {
              value: "sample",
              label: (
                <div className="flex w-full items-center">
                  <img src="/united-kingdon.svg" />
                  <p className=" text-sm  text-center text-grantBlack uppercase ml-2">
                    EN
                  </p>
                </div>
              ),
            },
          ]}
          // defaultValue={"default"}
          placeholder
        />
        <div className="ml-4">
          <img src="/grant-notification.svg" />
        </div>

        <div className="flex items-center ml-4">
          <Image
            className=""
            src="/avatargrant.svg"
            alt="Grant Logo"
            width={40}
            height={40}
          />

          <p className="text-primary mx-4">Alice brooklyn </p>

          <Image
            className=""
            src="/dropdowngrant.svg"
            alt="Grant Logo"
            width={8}
            height={5}
          />
        </div>
        {/* <div className="w-[75px] h-[30px] rounded-[3.75px] bg-white border-[0.3px] border-borderColor"></div> */}
      </div>
    </div>
  );
};

export default DashboardHeader;
