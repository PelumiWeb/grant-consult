import CustomButton from "@/app/component/CustomButton";
import CustomInput from "@/app/component/CustomInput";
import { Button, Input, Space } from "antd";
import Image from "next/image";
import React from "react";

type Props = {};
type Tabsprops = {
  name: string;
  id: number;
  options: any[];
};

const Header = ({}: Props) => {
  const tabs = [
    { name: "Home", id: 1 },
    { name: "Grants", id: 2, options: ["Options"] },
    { name: "Guarantors", id: 3, options: ["Options"] },
    { name: "Consultation", id: 4, options: ["Options"] },
    { name: "Pricing", id: 5, options: ["Options"] },
    { name: "resources", id: 6, options: ["Options"] },
    { name: "Services", id: 7, options: ["Options"] },
    { name: "About", id: 8, options: ["Options"] },
    ,
  ];

  return (
    <div className=" w-full">
      {/* Up */}
      <div className="flex h-[122px] px-16 items-center justify-between w-full">
        <Image
          className=""
          src="/grantLogo.svg"
          alt="Grant Logo"
          width={206}
          height={30}
        />
        {/* Input */}
        <div className="flex items-center h-[40px] w-[420px]">
          <Input
            className="w-[80%] h-full rounded-r-[0px] "
            placeholder="Search Site Content"
          />
          <div className="bg-primary w-[20%] h-full flex items-center justify-center rounded-r-[10px] ">
            <img src="/searchgrant.svg" className="w-[20px]" />
          </div>
        </div>
        {/* Avatar */}

        <div className="flex items-center">
          {true ? (
            <CustomButton
              title="Login"
              width="w-[92px]"
              backgrounColor="bg-white"
              textColor="text-buttonPrimary"
              borderColor="border-buttonPrimary"
              height="h-[40px]"
            />
          ) : (
            <div className="flex items-center">
              <Image
                className=""
                src="/avatargrant.svg"
                alt="Grant Logo"
                width={40}
                height={40}
              />

              <p className="text-primary mx-4">William Smith </p>

              <Image
                className=""
                src="/dropdowngrant.svg"
                alt="Grant Logo"
                width={8}
                height={5}
              />
            </div>
          )}

          <div className="ml-4">
            <CustomButton
              width="w-[167px]"
              height="h-[40px]"
              title="Subscribe now"
            />
          </div>
        </div>
      </div>

      {/* Down */}
      <div className="bg-primary w-full flex items-center justify-between py-4 px-16">
        {tabs?.map((tab) => (
          <div key={tab?.id} className="flex items-center ">
            <p className="uppercase text-white mr-2 cursor-pointer hover:text-secondaryColor">
              {tab?.name}
            </p>
            {tab?.options && (
              <Image
                className=""
                src="/dropdownWhite.svg"
                alt="Grant Logo"
                width={15}
                height={10}
              />
            )}
          </div>
        ))}
        <div className="rounded-[10px] bg-white flex items-center justify-between w-[123px] p-2 ">
          <Image
            className=""
            src="/unitedKingdom.svg"
            alt="Grant Logo"
            width={24}
            height={24}
          />
          <p>English</p>
          <Image
            className=""
            src="/dropdownBlack.svg"
            alt="Grant Logo"
            width={15}
            height={10}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
