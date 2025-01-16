"use client";

import CustomButton from "@/app/[locale]/components/CustomButton";
import CustomInput from "@/app/[locale]/components/CustomInput";
import { Button, Input, Dropdown, MenuProps } from "antd";
import Image from "next/image";
import React, { ChangeEvent } from "react";
import { useRouter, useParams, usePathname } from "next/navigation";
import LabelInput from "./LabelInput";
import { useDispatch } from "react-redux";
import { getLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import useHandleNavigation from "../utils/HandleNavigation";
import { useAppSelector } from "../../../../lib/hooks";
import { logout } from "../../../../lib/features/User/userSlice";

// import { getLocale } from "next-intl";

type Props = { locale?: string };
// type Tabsprops = {
//   name: string;
//   id: number;
//   options: any[];
//   locale: string
// };

const Header = ({}: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const locale = useLocale();
  const { user } = useAppSelector((state) => state.user);
  // console.log(user);

  console.log("current server", locale);
  const handleNavigation = useHandleNavigation();

  // const {} = useParams()

  const HandleLanguageChange = (value: string | string[]) => {
    const path = pathname.split("/").slice(2).join("/");
    const newPath = `${value}/${path}`;
    router.push(newPath);
  };

  const tabs = [
    { name: "Home", id: 1, url: `/${locale}` },
    {
      name: "Grants",
      id: 2,
      options: [
        {
          key: "1",
          label: (
            <a
              rel="noopener noreferrer"
              onClick={() => handleNavigation("/grants")}
              // href=""
            >
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                Grants For NGO
              </p>
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              // target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleNavigation("/grants")}>
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                Grants for Individuals
              </p>
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
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                Grants for Organizations
              </p>
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
              onClick={() => handleNavigation("/grant-application")}>
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                Grants Application
              </p>
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
                handleNavigation(`/consultant/become`);
              }}>
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                Become a consultant
              </p>
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="/consultant/request"
              onClick={() => handleNavigation("/consultant/request")}>
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                Request a consultant
              </p>
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
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                FAQ About Consultation
              </p>
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
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                Testimonial from consultations
              </p>
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              rel="noopener noreferrer"
              onClick={() => handleNavigation("/consultant")}>
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                Our Consultants Profile
              </p>
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
              onClick={() => handleNavigation("/subscription")}>
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                Subscription Plans
              </p>
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              // target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleNavigation("/service")}>
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                Grants Writing Plans
              </p>
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
              onClick={() => handleNavigation("/articles")}>
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                Blog/Articles
              </p>
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
              onClick={() => handleNavigation("/grant-guidelines")}>
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                Grants Writing Guides
              </p>
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
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                Templates & Tools
              </p>
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
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                Webinars and Workshops
              </p>
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
              onClick={() => handleNavigation("/faq")}>
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                Frequently Asked Questions
              </p>
            </a>
          ),
        },
      ],
    },
    {
      name: "Our Services",

      id: 7,
      url: "/service/services",

      // options: [
      //   {
      //     key: "1",
      //     label: (
      //       <a
      //         target="_blank"
      //         rel="noopener noreferrer"
      //         // href="https://www.antgroup.com"
      //       >
      //         Grant Writing Assistance
      //       </a>
      //     ),
      //   },
      //   {
      //     key: "2",
      //     label: (
      //       <a
      //         target="_blank"
      //         rel="noopener noreferrer"
      //         // href="https://www.luohanacademy.com"
      //       >
      //         Grant Research & Identification
      //       </a>
      //     ),
      //   },
      //   {
      //     key: "3",
      //     label: (
      //       <a
      //         target="_blank"
      //         rel="noopener noreferrer"
      //         // href="https://www.luohanacademy.com"
      //       >
      //         Proposal reviews & Feedback
      //       </a>
      //     ),
      //   },
      //   {
      //     key: "4",
      //     label: (
      //       <a
      //         target="_blank"
      //         rel="noopener noreferrer"
      //         // href="https://www.luohanacademy.com"
      //       >
      //         Training & Worshops
      //       </a>
      //     ),
      //   },
      //   {
      //     key: "5",
      //     label: (
      //       <a
      //         target="_blank"
      //         rel="noopener noreferrer"
      //         // href="https://www.luohanacademy.com"
      //       >
      //         Consultation & Advisory
      //       </a>
      //     ),
      //   },
      //   {
      //     key: "6",
      //     label: (
      //       <a
      //         target="_blank"
      //         rel="noopener noreferrer"
      //         // href="https://www.luohanacademy.com"
      //       >
      //         Scholarships
      //       </a>
      //     ),
      //   },
      // ],
    },
    {
      name: "Grantors",
      id: 3,
      options: [
        {
          key: "1",
          label: (
            <a onClick={() => handleNavigation(`/grants/become`)}>
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                Become a Grantor/Donor
              </p>
            </a>
          ),
        },
        // {
        //   key: "2",
        //   label: (
        //     <a
        //       target="_blank"
        //       rel="noopener noreferrer"
        //       // href="https://www.aliyun.com"
        //     >
        //       Benefits of Partnering with us
        //     </a>
        //   ),
        // },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.aliyun.com"
              onClick={() => handleNavigation("/grants/list")}>
              <p className="text-primaryBlack font-semibold text-[13px] text-left">
                List a grant
              </p>
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
        <div className="cursor-pointer" onClick={() => handleNavigation(`/`)}>
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
          {!user ? (
            <div className="flex items-center justify-center 2lg:justify-between w-full lg:w-[450px]">
              <div className="block lg:hidden">
                <img src="/hamburger.svg" alt="" />
              </div>
              <div className="mr-2 hidden lg:block">
                <CustomButton
                  onClick={() => handleNavigation("/auth/login")}
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
                  onClick={() => handleNavigation(`/auth/login`)}
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
                  onClick={() => {
                    handleNavigation(`/grants/become`);
                  }}
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
            <div>
              <div className="block lg:hidden">
                <img src="/hamburger.svg" alt="" />
              </div>

              <div className=" hidden lg:flex items-center cursor-pointer">
                <Dropdown
                  overlayClassName="w-[100px]"
                  menu={{
                    items: [
                      {
                        key: "1",
                        label: (
                          <a
                            // target="_blank"
                            rel="noopener noreferrer"
                            // href="/auth/signup"
                            onClick={() => {
                              handleNavigation(`/dashboard/favourites`);
                            }}>
                            <p className="text-primaryBlack font-semibold text-[13px] text-center">
                              My Favourites
                            </p>
                          </a>
                        ),
                      },
                      {
                        key: "2",
                        label: (
                          <a
                            // target="_blank"
                            rel="noopener noreferrer"
                            // href="/auth/signup"
                            onClick={() => {
                              handleNavigation(`/dashboard/profile`);
                            }}>
                            <p className="text-primaryBlack font-semibold text-[13px] text-center">
                              Update Profile
                            </p>
                          </a>
                        ),
                      },
                      {
                        key: "3",
                        label: (
                          <a
                            // target="_blank"
                            rel="noopener noreferrer"
                            // href="/auth/signup"
                            onClick={() => {
                              handleNavigation(`/dashboard/settings`);
                            }}>
                            <p className="text-primaryBlack font-semibold  text-[13px] text-center">
                              My Account Settings
                            </p>
                          </a>
                        ),
                      },
                      {
                        key: "4",
                        label: (
                          <a
                            // target="_blank"
                            rel="noopener noreferrer"
                            // href="/auth/signup"
                            onClick={() => {
                              handleNavigation(`/dashboard/help`);
                            }}>
                            <p className="text-primaryBlack font-semibold  text-[13px] text-center">
                              Help & Support
                            </p>
                          </a>
                        ),
                      },
                      {
                        key: "5",
                        label: (
                          <a
                            // target="_blank"
                            rel="noopener noreferrer"
                            // href="/auth/signup"
                            onClick={() => {
                              // handleNavigation(`/consultant/become`);
                              dispatch(logout());
                            }}>
                            <p className="text-primaryBlack font-semibold text-[13px] text-center">
                              Logout
                            </p>
                          </a>
                        ),
                      },
                    ],
                  }}
                  placement="bottom">
                  <div className="flex items-center cursor-pointer">
                    <Image
                      className=""
                      src="/avatargrant.svg"
                      alt="Grant Logo"
                      width={40}
                      height={40}
                    />

                    <p className="text-primary font-semibold mx-4">
                      {user.fullName}{" "}
                    </p>

                    <Image
                      className=""
                      src="/dropdowngrant.svg"
                      alt="Grant Logo"
                      width={8}
                      height={5}
                    />
                  </div>
                </Dropdown>

                <div className="ml-4">
                  <CustomButton
                    width="w-[167px]"
                    height="h-[40px]"
                    title="Subscribe now"
                  />
                </div>
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
                    <p className="uppercase text-white mr-2 cursor-pointer hover:text-secondaryColor text-sm lg:text-base font-medium">
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
                  onClick={() => handleNavigation(url)}
                  key={id}
                  className="flex items-center ">
                  <p className="uppercase text-white mr-2 cursor-pointer hover:text-secondaryColor text-[16px] leading-[18px] font-medium">
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
            handleChange={(e: any) => HandleLanguageChange(e)}
            width="w-[123px]"
            select
            placeholder="English"
            height="h-[40px]"
            value={locale}
            options={[
              {
                value: "en",
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
                value: "de",
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
                value: "pt",
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
                value: "fr",
                label: (
                  <div className="flex items-center w-full">
                    <Image
                      src={"/France (FR).svg"}
                      className="mr-1"
                      alt="Grant Logo"
                      width={20}
                      height={20}
                    />
                    <p className="font-normal text-[14px]">France</p>
                  </div>
                ),
              },
              {
                value: "zh",
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
