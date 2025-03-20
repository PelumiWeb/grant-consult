"use client";

import Image from "next/image";
import React from "react";
import CustomInput from "../../components/CustomInput";
import { Checkbox } from "antd";
import CustomButton from "../../components/CustomButton";

import { useAppDispatch,  } from "../../../../../lib/hooks";
import useHandleNavigation from "../../utils/HandleNavigation";
type Props = {};
type UserType = { name: string; id: number; url: string }[];
type User = any;
// type SignupData = {
//   usertype: string;
//   fullName: string;
//   phoneNumber?: string;
//   email: string;
//   country?: string;
//   expertise?: string;
//   password: string;
//   confirmPassword: string;
// };

const Signup = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleNavigation = useHandleNavigation();
  const userType: UserType = [
    {
      name: "(NGO, corporate, Individual)",
      id: 1,
      url: "/auth/signup/general",
    },
    { name: "Consultant", id: 2, url: "/auth/" },
    { name: "Grantor(Donor)", id: 3, url: "/auth/" },
  ]; //
  const [url, seturl] = React.useState(userType[0].url);

  //       email: "john.doe@example.com",
  //       usertype: "GENERAL_USER",
  //       password: "Javascript20",
  //       confirmPassword: "Javascript20",
  //     });

  //     console.log(res, "Here is the response from");
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="relative h-full md::h-screen px-4">
      <h2 className="w-full py-6  pl-4 text-base lg:text-3xl">Sign up</h2>
      {/*  */}
      <div>
        <div className="h-full flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full -mt-[20%] md:-mt-[0]">
          <h3 className="w-full pl-8 text-base lg:text-2xl">
            Select User Type
          </h3>

          <div className="flex  w-full px-8 justify-between items-center pt-4">
            {userType?.map((data) => (
              <div
                key={data.id}
                onClick={() => seturl(data.url)}
                className={`flex h-[179px] sm:h-[220px] lg:h-[300px] w-[119px] sm:w-[170px] lg:w-[200px] rounded-[10px] border m-[2px]  lg:m-0 border-borderColor hover:shadow-custom-green justify-center ${
                  data.url === url &&
                  "border-secondaryColor shadow-custom-green "
                } hover:border-secondaryColor  cursor-pointer`}>
                <p
                  key={data.id}
                  className=" text-center text-[10px] lg:text-lg mt-[20%] ">
                  {data.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-[30%]  md:bottom-[10%] w-full flex items-center justify-center">
          <CustomButton
            onClick={() => handleNavigation(url)}
            title="Continue"
            width="w-[262px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Signup;
