"use client";

import CustomButton from "@/app/components/CustomButton";
import CustomInput from "@/app/components/CustomInput";
import { Button, Input, Dropdown, MenuProps } from "antd";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {};
type Tabsprops = {
  name: string;
  id: number;
  options: any[];
};

const Header = ({}: Props) => {
  const router = useRouter();
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
      name: "Guarantors",
      id: 3,
      options: [
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.antgroup.com"
            >
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
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.antgroup.com"
            >
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
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.luohanacademy.com"
            >
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
      name: "About",
      id: 8,
      options: [
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.antgroup.com"
            >
              Our Mission and Vision
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
              Meet the Team
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
              Contact Information
            </a>
          ),
        },
      ],
    },
    ,
  ];

  return (
    <div className=" w-full">
      {/* Up */}
      <div className="flex h-[122px] px-16 items-center justify-between w-full">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src="/grantLogo.svg"
            alt="Grant Logo"
            width={206}
            height={30}
          />
        </div>

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
              onClick={() => router.push("/auth/login")}
              title="Login"
              width="w-[92px]"
              backgrounColor="bg-white"
              borderColor="border-buttonPrimary"
              height="h-[40px]"
              textStyle="text-buttonPrimary"
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
        {tabs?.map(({ name, id, options, url }: any) => (
          <div key={id}>
            {options ? (
              <Dropdown menu={{ items: options }} placement="bottom">
                <div key={id} className="flex items-center ">
                  <p className="uppercase text-white mr-2 cursor-pointer hover:text-secondaryColor">
                    {name}
                  </p>
                  {options && (
                    <Image
                      className=""
                      src="/dropdownWhite.svg"
                      alt="Grant Logo"
                      width={15}
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
                <p className="uppercase text-white mr-2 cursor-pointer hover:text-secondaryColor">
                  {name}
                </p>
                {options && (
                  <Image
                    className=""
                    src="/dropdownWhite.svg"
                    alt="Grant Logo"
                    width={15}
                    height={10}
                  />
                )}
              </div>
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
