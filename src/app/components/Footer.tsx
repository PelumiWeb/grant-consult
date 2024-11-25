import { Image, Input } from "antd";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="relative bg-footer px-8 mt-16 py-4 bg-repeat bg-cover bg-bottom">
      <div className=" h-full w-full bg-repeat bg-cover bg-bottom  bg-[#1F1C1CCC]">
        {/* Top */}
        <div className="bg-[#27AE6080] w-full flex items-center justify-between h-[151px] rounded-[10px] px-8">
          <div>
            <h3 className="text-white">Stay Updated on the Latest Grants</h3>
            <p className="text-white text-sm leading-[15px] ">
              Sign up for our newsletter to receive updates on new grants and
              more.
            </p>
          </div>
          <div className="w-[628px] flex items-center">
            <Input
              placeholder="Enter Email Address"
              className="text-sm rounded-l-[10px] w-[80%] h-[60px] rounded-r-none "
            />
            <div className="bg-secondaryGreenColor  h-[60px] w-[20%] flex items-center rounded-r-[10px]">
              <p className="ml-8 text-white text-center ">Subscribe</p>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="flex items-start justify-between w-full mt-8">
          {/* 1 */}
          <div>
            <Image
              className=""
              src="/grantLogo.svg"
              alt="Grant Logo"
              width={286}
              height={38}
            />
            <p className="w-[300px] text-white text-sm font-semibold ">
              Lorem ipsum dolor sit amet consectetur. Varius dignissim quam id
              fames. orem ipsum dolor sit amet consectetur. Varius dignissim
              quam id fames. orem ipsum dolor sit amet consectetur. Varius
              dignissim quam id fames. orem ipsum dolor sit amet consectetur.
              Varius dignissim quam id fames
            </p>
            <p className="w-[300px] text-white text-sm font-semibold  mt-4">
              Lorem ipsum dolor sit amet consectetur. Varius dignissim quam id
              fames. orem ipsum dolor sit amet consectetur. Varius dignissim
              quam id fames. orem ipsum dolor sit amet consectetur. Varius
              dignissim quam id fames. orem ipsum dolor sit amet consectetur.
              Varius dignissim quam id fames
            </p>
          </div>
          {/* 2 About Us */}
          <div>
            <div className="h-[300px] flex flex-col justify-between">
              <h3 className="text-white ">About Us</h3>
              <p className="text-white text-sm font-semibold cursor-pointer">
                Our Team
              </p>
              <p className="text-white text-sm font-semibold cursor-pointer">
                Portfolio
              </p>
              <p className="text-white text-sm font-semibold cursor-pointer">
                FAQ
              </p>
              <p className="text-white text-sm font-semibold cursor-pointer">
                Gallery
              </p>
              <p className="text-white text-sm font-semibold cursor-pointer">
                News
              </p>
            </div>
          </div>
          {/* Services */}
          <div>
            <div className="h-[300px] flex flex-col justify-between">
              <h3 className="text-white ">Services</h3>
              <p className="text-white text-sm font-semibold cursor-pointer">
                Consulting
              </p>
              <p className="text-white text-sm font-semibold cursor-pointer">
                Grant Application
              </p>
              <p className="text-white text-sm font-semibold cursor-pointer">
                Scholarship
              </p>
              <p className="text-white text-sm font-semibold cursor-pointer">
                Training & Worship
              </p>
              <p className="text-white text-sm font-semibold cursor-pointer">
                Grant Writing
              </p>
            </div>
          </div>
          {/* Blog */}
          <div>
            <div className="h-[150px] flex flex-col justify-between">
              <h3 className="text-white ">Blog</h3>
              <p className="text-white text-sm font-semibold cursor-pointer">
                Lorem
              </p>
              <p className="text-white text-sm font-semibold cursor-pointer">
                Lorem
              </p>
            </div>
          </div>
          {/* Contact */}
          <div>
            <div className="h-[200px] flex flex-col justify-between">
              <h3 className="text-white ">Contact</h3>
              <div className="flex items-center w-full">
                <Image src="/location.svg" width={18} height={18} />
                <p className="text-white text-sm font-semibold cursor-pointer ml-4">
                  24 Ekololu Street, Lawason Road, Surulere
                </p>
              </div>
              <div className="flex items-center w-full">
                <Image src="/message.svg" width={18} height={18} />
                <p className="text-white text-sm font-semibold cursor-pointer ml-4">
                  Grantconsult@gmail.com
                </p>
              </div>
              <div className="flex items-center w-full">
                <Image src="/call.svg" width={18} height={18} />
                <p className="text-white text-sm font-semibold cursor-pointer ml-4">
                  +2349106288373
                </p>
              </div>
              <div className="flex items-center w-[60%] justify-between">
                <Image src="/social1.svg" width={18} height={18} />
                <Image src="/social2.svg" width={18} height={18} />
                <Image src="/social3.svg" width={18} height={18} />
                <Image src="/social4.svg" width={18} height={18} />
              </div>
            </div>
          </div>
        </div>
        <p className="text-white font-thin mt-8">
          Copyright @Grantsconsult 2024
        </p>
      </div>
    </div>
  );
}

export default Footer;
