"use client";
import { Image, Input } from "antd";
import React from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import CustomGrantsLogo from "../customIcon/GrantsLogo";

type Props = {};

function Footer({}: Props) {
  const [option, setOptions] = React.useState(false);
  const [serviceOption, setServiceOption] = React.useState(false);

  return (
    <div className="relative bg-footer   bg-repeat bg-cover bg-bottom bottom-0 mt-8">
      <div className=" h-full w-full bg-repeat bg-cover px-8 py-4  bg-bottom  bg-[#1F1C1CCC]">
        {/* Top */}
        <div className="bg-[#27AE6080] w-full flex items-center justify-between flex-wrap h-[151px] rounded-[10px] px-8">
          <div className="flex flex-col justify-center items-center w-full">
            <h3 className="text-white text-sm lg:text-base text-center font-semibold w-[200px] lg:w-full">
              Stay Updated on the Latest Grants
            </h3>
            <p className="text-white text-[8px] leading-[8px]   lg:leading-[12px] text-center font-normal  w-[200px] lg:w-full">
              Sign up for our newsletter to receive updates on new grants and
              more.
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-[300px] md:w-[400px] lg:w-[628px] flex items-center ">
              <Input
                placeholder="Enter Email Address"
                className="text-sm rounded-l-[10px] rounded-r-none w-[70%] lg:w-[80%] h-[40px] lg:h-[60px] placeholder:text-textColor placeholder:text-md placeholder:leading-[10px]"
              />
              <button className="bg-secondaryGreenColor  h-[40px] lg:h-[60px] w-[30%] lg:w-[20%] flex items-center justify-center rounded-r-[10px]">
                <p className="ml-4 mr-5 text-[10px] leading-[10px] lg:text-base font-mono  text-white text-center  font-semibold">
                  Subscribe
                </p>
              </button>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="hidden lg:flex items-start justify-between w-full mt-8">
          {/* 1 */}
          <div>
            {/* <img
              className="w-[150px] h-full object-cover lg:w-[280px] lg:h-[38px]"
              src="/grantLogo.svg"
              alt="Grant Logo"
            /> */}
            <CustomGrantsLogo />
            <p className="w-[150px] lg:w-[450px] text-white text-[14px] leading-[22px] font-semibold ">
              At GrantsConsult we provide grant and other funding opportunities
              tailored to various niche and backed up with expert consultation
              to guide you through the grant application process. Our
              comprehensive approach is designed to simplify your path to
              success.
            </p>
          </div>
          {/* 2 About Us */}
          <div className="w-full">
            <h3 className="text-white ">Contact</h3>
            <div className="flex items-start">
              <div className="flex items-center w-full">
                <Image src="/location.svg" width={18} height={18} />
                <p className="text-white text-sm font-semibold cursor-pointer ml-4">
                  24 Ekololu Street, Lawason Road, Surulere
                </p>
              </div>
              <div className="flex items-center w-full">
                <Image src="/message.svg" width={18} height={18} />
                <p className="text-white text-sm font-semibold cursor-pointer ml-4">
                  info@grantsconsult.com
                </p>
              </div>

              <div className="flex items-center w-full">
                <Image src="/call.svg" width={18} height={18} />
                <p className="text-white text-sm font-semibold cursor-pointer ml-4">
                  +2349106288373
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
           <p className="hidden lg:block text-white font-thin mt-8">
          Copyright @Grantsconsult 2024
        </p>

          <div className="hidden lg:block">
            <div className="flex justify-between">
              <div className="flex items-center  justify-between space-x-4">
                <Image src="/social1.svg" width={18} height={18} />
                <Image src="/social2.svg" width={18} height={18} />
                <Image src="/social3.svg" width={18} height={18} />
                <Image src="/social4.svg" width={18} height={18} />
              </div>
            </div>
          </div>
        </div>
       
        {/* Bottom Mobile */}
        <div className="block lg:hidden mt-4">
          <div className="w-full flex justify-center items-center">
            {/* <img
              className="w-[150px] h-full object-cover lg:w-[280px] lg:h-[38px]"
              src="/grantLogo.svg"
              alt="Grant Logo"
            /> */}
            <CustomGrantsLogo />
          </div>
          <div className="my-2">
            <p className="text-center font-normal text-[12px] leading-[14px] text-white ">
              At GrantsConsult we provide grant and other funding opportunities
              tailored to various niche and backed up with expert consultation
              to guide you through the grant application process. Our
              comprehensive approach is designed to simplify your path to
              success.
            </p>
          </div>

          <div className="flex items-center w-full justify-center my-4">
            <div className="flex items-center w-[30%] justify-between">
              <Image src="/social1.svg" width={18} height={18} />
              <Image src="/social2.svg" width={18} height={18} />
              <Image src="/social3.svg" width={18} height={18} />
              <Image src="/social4.svg" width={18} height={18} />
            </div>
          </div>
          <div>
            {/* <ul>
              <div className="flex justify-between mb-2">
                <p className="font-semibold text-[13px] leading-[20px] text-white">
                  About Us
                </p>
                <button>
                  {option ? (
                    <DownOutlined
                      style={{ fontSize: 16, color: "white" }}
                      onClick={() => setOptions((prev) => !prev)}
                    />
                  ) : (
                    <UpOutlined
                      style={{ fontSize: 16, color: "white" }}
                      onClick={() => setOptions((prev) => !prev)}
                    />
                  )}
                </button>
              </div>

              {option &&
                ["Our Team", "Portfolio", "FAQ", "Gallery", "News", "Blog"].map(
                  (data) => (
                    <li>
                      <p className="font-normal text-[13px] leading-[15px] text-white my-2">
                        {data}
                      </p>
                    </li>
                  )
                )}
            </ul> */}
            {/* <ul>
              <div className="flex justify-between mb-2">
                <p className="font-semibold text-[13px] leading-[20px] text-white">
                  Services
                </p>
                <button>
                  {option ? (
                    <DownOutlined
                      style={{ fontSize: 16, color: "white" }}
                      onClick={() => setServiceOption((prev) => !prev)}
                    />
                  ) : (
                    <UpOutlined
                      style={{ fontSize: 16, color: "white" }}
                      onClick={() => setServiceOption((prev) => !prev)}
                    />
                  )}
                </button>
              </div>

              {serviceOption &&
                [
                  "Consulting",
                  "Grant Application",
                  "Scholarship",
                  "Training and Workshop",
                  "Grant writing",
                  "Blog",
                ].map((data) => (
                  <li>
                    <p className="font-normal text-[13px] leading-[15px] text-white my-2">
                      {data}
                    </p>
                  </li>
                ))}
            </ul> */}
            <ul>
              <div className="flex justify-between mb-2">
                <p className="font-semibold text-[13px] leading-[20px] text-white">
                  Contact
                </p>
              </div>
              <div>
                <div className="flex items-center my-4">
                  <Image src="/location.svg" width={18} height={18} />
                  <p className="font-normal text-[13px] leading-[15px] text-white  ml-2">
                    24 Ekololu Street, Lawason Road, Surulere
                  </p>
                </div>
                <div className="flex items-center my-4">
                  <Image src="/message.svg" width={18} height={18} />
                  <p className="font-normal text-[13px] leading-[15px] text-white  ml-2">
                    info@grantsconsult.com
                  </p>
                </div>
                <div className="flex items-center my-4">
                  <Image src="/call.svg" width={18} height={18} />
                  <p className="font-normal text-[13px] leading-[15px] text-white  ml-2">
                    +2349106288373
                  </p>
                </div>
              </div>
            </ul>
            <div className="w-full flex justify-center items-center my-8">
              <p className="text-[14px] leading-[12px] text-white ">
                Copyright @Grantsconsult2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
