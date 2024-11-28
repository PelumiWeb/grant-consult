"use client";

import CustomButton from "@/app/components/CustomButton";
import CustomInput from "@/app/components/CustomInput";
import { Button, Input, Dropdown, MenuProps } from "antd";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import LabelInput from "./LabelInput";
import { setUserType } from "../../../lib/features/Signup/SignupSlice";
import { useDispatch } from "react-redux";

type Props = {};
type Tabsprops = {
  name: string;
  id: number;
  options: any[];
};

const Header = ({}: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const tabs = [
    { name: "Home", id: 1, url: "/" },
    {
      name: "Grants",
      id: 2,
      options: [
        {
          key: "1",
          label: (
            <a rel="noopener noreferrer" href="/grants">
              Grants For NGO
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              // target="_blank"
              rel="noopener noreferrer"
              href="/grants">
              Grants for Individuals
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.luohanacademy.com"
            >
              Grants for Organizations
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              className=""
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.luohanacademy.com"
            >
              Grants Application
            </a>
          ),
        },
      ],
    },
    {
      name: "Consultation",
      id: 4,
      options: [
        {
          key: "1",
          label: (
            <a
              // target="_blank"
              rel="noopener noreferrer"
              // href="/auth/signup"
              onClick={() => {
                dispatch(
                  setUserType({
                    userTypeSelected: true,
                    userType: "Consultant",
                  })
                );

                router.push("/auth/signup");
              }}>
              Become a consultant
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/consultant/request">
              Request a consultant
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.luohanacademy.com"
            >
              FAQ About Consultation
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.luohanacademy.com"
            >
              Testimonial from consultations
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              // target="_blank"
              rel="noopener noreferrer"
              href="/dashboard/">
              Our Consultants Profile
            </a>
          ),
        },
      ],
    },
    {
      name: "Pricing",
      id: 5,
      options: [
        {
          key: "1",
          label: (
            <a
              // target="_blank"
              rel="noopener noreferrer"
              href="/subscription">
              Subscription Plans
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              // target="_blank"
              rel="noopener noreferrer"
              href="/service">
              Grants Writing Plans
            </a>
          ),
        },
      ],
    },

    {
      name: "resources",
      id: 6,
      options: [
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.antgroup.com"
            >
              Blog/Articles
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.luohanacademy.com"
            >
              Grants Writing Guides
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.luohanacademy.com"
            >
              Templates & Tools
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.luohanacademy.com"
            >
              Webinars and Workshops
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.luohanacademy.com"
            >
              Frequently Asked Questions
            </a>
          ),
        },
      ],
    },
    {
      name: "Services",
      id: 7,
      options: [
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.antgroup.com"
            >
              Grant Writing Assistance
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.luohanacademy.com"
            >
              Grant Research & Identification
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.luohanacademy.com"
            >
              Proposal reviews & Feedback
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.luohanacademy.com"
            >
              Training & Worshops
            </a>
          ),
        },
        {
          key: "5",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.luohanacademy.com"
            >
              Consultation
            </a>
          ),
        },
      ],
    },
    {
      name: "Grantors",
      id: 3,
      options: [
        {
          key: "1",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="auth/signup">
              Become a Grantor/Donor
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.aliyun.com"
            >
              Benefits of Partnering with us
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.aliyun.com"
            >
              List a grant
            </a>
          ),
        },
      ],
    },

    ,
  ];

  return (
    <div className=" w-full px-4 md:px-0">
      {/* Up */}
      <div className="flex h-[122px] md:px-8 xl:px-16 items-center  justify-between w-full">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src="/grantLogo.svg"
            alt="Grant Logo"
            width={206}
            height={30}
          />
        </div>

        {/* Input */}
        <div className="hidden lg:flex items-center h-[40px] w-[420px] ml-8 2lg:ml-0">
          <Input
            className="w-[80%] h-full rounded-l-[5px] rounded-r-[0px] "
            placeholder="Search Site Content"
          />
          <div className="bg-primary w-[20%] h-full flex items-center justify-center rounded-r-[5px] ">
            <img src="/searchgrant.svg" className="w-[20px]" />
          </div>
        </div>
        {/* Avatar */}

        <div className="flex items-center justify-between">
          {true ? (
            <div className="flex items-center justify-center 2lg:justify-between w-full lg:w-[450px]">
              <div className="block lg:hidden">
                <img src="/hamburger.svg" alt="" />
              </div>
              <div className="mr-2 hidden lg:block">
                <CustomButton
                  onClick={() => router.push("/auth/login")}
                  title="Login"
                  width="w-[92px]"
                  backgrounColor="bg-white"
                  borderColor="border-buttonPrimary"
                  height="h-[40px]"
                  textStyle="text-buttonPrimary font-semibold "
                />
              </div>
              <div className="hidden lg:block">
                <CustomButton
                  onClick={() => router.push("/auth/login")}
                  title="Try 7 days Free"
                  width="w-full"
                  backgrounColor="bg-[#27AE60]"
                  borderColor="border-buttonPrimary"
                  height="h-[40px]"
                  textStyle="text-white font-semibold"
                />
              </div>
              <div className="hidden 2lg:block">
                <CustomButton
                  onClick={() => router.push("/auth/signup")}
                  title="Become a grantor"
                  width="w-full"
                  backgrounColor="bg-secondaryColor"
                  borderColor="border-buttonPrimary"
                  height="h-[40px]"
                  textStyle="text-white font-semibold"
                />
              </div>
            </div>
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
              <div className="ml-4">
                <CustomButton
                  width="w-[167px]"
                  height="h-[40px]"
                  title="Subscribe now"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Down */}
      <div className="grid place-items-center">
        <div className="flex items-center lg:hidden h-[40px] w-full md:px-8 lg:px-0">
          <Input
            className="w-[80%] h-full rounded-l-[5px] rounded-r-[0px] "
            placeholder="Search Site Content"
          />
          <div className="bg-primary w-[20%] h-full flex items-center justify-center rounded-r-[5px] ">
            <img src="/searchgrant.svg" className="hidden  lg:block w-[20px]" />
            <img src="/filterOption.svg" className="block lg:hidden w-[20px]" />
          </div>
        </div>
        <div className="hidden bg-primary w-full lg:flex items-center justify-between py-4 px-16">
          {tabs?.map(({ name, id, options, url }: any) => (
            <div key={id}>
              {options ? (
                <Dropdown menu={{ items: options }} placement="bottom">
                  <div key={id} className="flex items-center ">
                    <p className="uppercase text-white mr-2 cursor-pointer hover:text-secondaryColor text-sm lg:text-base">
                      {name}
                    </p>
                    {options && (
                      <Image
                        className=""
                        src="/dropdownWhite.svg"
                        alt="Grant Logo"
                        width={10}
                        height={10}
                      />
                    )}
                  </div>
                </Dropdown>
              ) : (
                <div
                  onClick={() => router.push(url)}
                  key={id}
                  className="flex items-center ">
                  <p className="uppercase text-white mr-2 cursor-pointer hover:text-secondaryColor text-[16px] leading-[18px]">
                    {name}
                  </p>
                  {options && (
                    <div></div>
                    // <Image
                    //   className=""
                    //   src="/dropdownWhite.svg"
                    //   alt="Grant Logo"
                    //   width={10}
                    //   height={6}
                    // />
                  )}
                </div>
              )}
            </div>
          ))}
          <LabelInput
            width="w-[123px]"
            select
            placeholder="English"
            height="h-[40px]"
            value=""
            options={[
              {
                value: "English",
                label: (
                  <div className="flex items-center w-full">
                    <Image
                      src={"/unitedKingdom.svg"}
                      className="mr-1"
                      alt="Grant Logo"
                      width={20}
                      height={20}
                    />
                    <p className="font-normal text-[14px]">English</p>
                  </div>
                ),
              },
              {
                value: "Germany",
                label: (
                  <div className="flex items-center w-full">
                    <Image
                      src={"/Germany (DE).svg"}
                      className="mr-1"
                      alt="Grant Logo"
                      width={20}
                      height={20}
                    />
                    <p className="font-normal text-[14px]">Germany</p>
                  </div>
                ),
              },
              {
                value: "Portugal",
                label: (
                  <div className="flex items-center w-full">
                    <Image
                      src={"/Portugal (PT).svg"}
                      className="mr-1"
                      alt="Grant Logo"
                      width={20}
                      height={20}
                    />
                    <p className="font-normal text-[14px]">Portugal</p>
                  </div>
                ),
              },
              {
                value: "France",
                label: (
                  <div className="flex items-center w-full">
                    <Image
                      src={"/France (FR).svg"}
                      className="mr-1"
                      alt="Grant Logo"
                      width={20}
                      height={20}
                    />
                    <p className="font-normal text-[14px]">English</p>
                  </div>
                ),
              },
              {
                value: "China",
                label: (
                  <div className="flex items-center w-full">
                    <Image
                      src={"/China (CN).svg"}
                      className="mr-1"
                      alt="Grant Logo"
                      width={20}
                      height={20}
                    />
                    <p className="font-normal text-[14px]">Chinese</p>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
