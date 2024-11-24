"use client";

import Image from "next/image";
import React from "react";
import CustomInput from "../../components/CustomInput";
import { Checkbox } from "antd";
import CustomButton from "../../components/CustomButton";
import GeneralSignup from "./components/GeneralUser";
import Consultant from "./components/Consultant";
import Grantor from "./components/Grantor";
type Props = {};
type UserType = { name: string; id: number }[];

const Signup = (props: Props) => {
  const userType: UserType = [
    { name: "(NGO, corporate, Individual)", id: 1 },
    { name: "Consultant", id: 2 },
    { name: "Grantor(Donor)", id: 3 },
  ];
  const [activeUser, setActiveUser] = React.useState<string>(userType[0].name);
  const [userTypeSelected, setUserTypeSelected] =
    React.useState<boolean>(false);
  const renderComponents = (userTypeSelected: boolean, name: string) => {
    if (!userTypeSelected) {
      return (
        <div className="relative h-screen px-4">
          <h2 className="w-full py-6  pl-4">Sign up</h2>
          {/*  */}
          <div>
            <div className="h-full flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
              <h3 className="w-full ml-16 ">Select User Type</h3>

              <div className="flex  w-full px-8 justify-between items-center pt-4">
                {userType?.map((data) => (
                  <div
                    key={data.id}
                    onClick={() => setActiveUser(data.name)}
                    className={`flex h-[300px] w-[200px] rounded-[10px] border  border-borderColor hover:shadow-custom-green justify-center ${
                      activeUser === data.name &&
                      "border-secondaryColor shadow-custom-green "
                    } hover:border-secondaryColor  cursor-pointer`}>
                    <p key={data.id} className=" text-center mt-[20%] ">
                      {data.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-[10%] w-full flex items-center justify-center">
              <CustomButton
                onClick={() => setUserTypeSelected(true)}
                title="Continue"
                width="w-[262px]"
              />
            </div>
          </div>
        </div>
      );
    } else if (userTypeSelected && name === "(NGO, corporate, Individual)") {
      return <GeneralSignup />;
    } else if (userTypeSelected && name === "Consultant") {
      return <Consultant />;
    } else {
      return <Grantor />;
    }
  };
  return renderComponents(userTypeSelected, activeUser);
};
export default Signup;
