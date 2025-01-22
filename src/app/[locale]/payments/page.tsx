"use client";

import Image from "next/image";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SubscriptionCard from "../components/SubscriptionCard";
import GrantFunder from "../components/GrantFunder";
import { ArrowLeftOutlined, CreditCardFilled } from "@ant-design/icons";
import { Checkbox, Input, Select, Space, Tooltip } from "antd";

export default function Home() {
  return (
    <div className="w-full">
      {/*  */}
      <div className="flex  lg:flex-row justify-center lg:justify-between items-start w-full  flex-wrap px-4">
        {/* left */}
        <div className="w-full lg:w-[45%] mt-16 ">
          <div className="bg-white p-8 rounded-[10px]">
            <h3 className="text-buttonPrimary text-">Complete Your Payment</h3>
            <p className="text-secondaryTextColor">
              Finalize your subscription and unlock full access to all grant
              opportunities and consultant services
            </p>
          </div>

          <div className="bg-white px-8 mt-4 h-full lg:h-[600px] py-10 rounded-[10px]">
            <h3 className="">Order Summary</h3>
            <p className="text-secondaryTextColor font-bold text-[16px] leading-[19px] mt-4">
              Customer's Details
            </p>

            <div className="flex items-center my-2 ">
              <p className="text-secondaryTextColor font-bold text-[16px] mr-2">
                Name:
              </p>
              <p className="text-secondaryTextColor text-[16px]">
                Adams Benson
              </p>
            </div>
            <div className="flex items-center my-2 ">
              <p className="text-secondaryTextColor font-bold text-[16px] mr-2">
                Phone:
              </p>
              <p className="text-secondaryTextColor text-[16px]">
                +2348199012348
              </p>
            </div>
            <div className="flex items-center my-2 ">
              <p className="text-secondaryTextColor font-bold text-[16px] mr-2">
                Email:
              </p>
              <p className="text-secondaryTextColor text-[16px]">
                Jondoe@gmail.com
              </p>
            </div>
            <p className="text-secondaryTextColor font-bold text-[16px] leading-[19px] my-2 ">
              Subscription Plan Details
            </p>
            <div className="flex items-center my-2 ">
              <p className="text-secondaryTextColor font-bold text-[16px] mr-2">
                Plan Selected:
              </p>
              <p className="text-secondaryColor text-[16px]">Basic</p>
            </div>
            <div className=" my-2 ">
              <p className=" text-secondaryTextColor font-bold text-[16px] mr-2">
                Plan Benefits:
              </p>
              <p className=" w-[50%] text-secondaryTextColor text-[14px] leading-[23px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                illo tempora unde ex nulla fuga odit cumque commodi rem, tempore
                iure iusto alias sapiente veniam animi sed delectus ut
                obcaecati.
              </p>
            </div>
            <div className="flex items-center my-2 ">
              <p className="text-secondaryTextColor font-bold text-[16px] mr-2">
                Plan Price:
              </p>
              <p className="text-red-500 text-[16px]">$50</p>
            </div>
            <div className="flex items-center my-2  ">
              <p className="text-secondaryTextColor font-bold text-[16px] mr-2">
                Discount:
              </p>
              <p className="text-red-500 text-[16px]"></p>
            </div>
            <div className="flex items-center ">
              <p className="text-secondaryTextColor font-bold text-[16px] mr-2">
                Total:
              </p>
              <p className="text-red-500 text-[16px]">$50</p>
            </div>
            <div className="flex items-center mt-12 cursor-pointer">
              <ArrowLeftOutlined style={{ fontSize: "16px", color: "#08c" }} />
              <p className="text-secondaryColor ml-4 ">Change Plan</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-[45%]">
          <div className="w-full bg-white px-4 lg:px-16 mt-16">
            <h3 className="text-primary py-4">Payment Method</h3>
            <CustomButton
              width="w-full lg:w-[432px]"
              height="h-[50px]"
              title="PayPal"
              backgrounColor="bg-secondaryColor"
            />
            <div className="flex items-center justify-between w-full lg:w-[430px] my-4">
              <div className="w-full lg:w-[111px] h-[1px] bg-borderColor" />
              <p className="font-poppins text-secondaryTextColor text-center w-[250px] text-sm ">
                Or Pay Another Way
              </p>
              <div className="w-full lg:w-[111px] h-[1px] bg-borderColor" />
            </div>
            <div>
              <div className="border bg-white border-secondaryColor rounded-[10px] w-full lg:w-[431px] h-[51px] flex items-center justify-center my-4">
                <img src="/credit-card.svg" />
                <p className="text-secondaryColor text-center leading-[23px] ml-1">
                  Card
                </p>
              </div>
            </div>
            {/* Card Information */}
            <div>
              <p className="text-textColor py-1">Card information</p>
              <div className="w-full lg:w-[430px]  rounded-[10px] border border-borderColor ">
                {/* Top */}
                <div className="flex items-center border-b border-b-borderColor justify-between py-1 ">
                  <Input
                    type="card"
                    className="border-none focus:outline-none w-[90%] 
                  focus:border-none
                  active:border-none
                  "
                    placeholder="0000 0000 0000 0000"
                  />
                  <div className="flex items-center justify-around w-[150px]">
                    <img src="/card-visa.png" />
                    <img src="/card-master.svg" />
                    <img src="/card-pay.svg" />
                  </div>
                </div>
                {/* bottom */}
                <div className="flex items-center h-[40px]">
                  <Input
                    className="border-none focus:outline-none w-[90%] 
                  focus:border-none
                  active:border-none
                  h-full
                  "
                    placeholder="MM/YY"
                  />
                  <Input
                    className="border-r-none focus:outline-none w-[90%] 
                  focus:border-r-none
                  active:border-r-none
                  h-full
                  border-b-none
                  border-t-none

                  "
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>

            {/* Card holder name */}
            <div className="w-full lg:w-[430px] py-2">
              <p className="text-textColor py-1">Cardholder Name</p>
              <Input placeholder="Full Name on card" className="py-4" />
            </div>
            <div className="w-full lg:w-[430px] py-2">
              <p className="text-textColor py-1"> Country or Region</p>
              <Input placeholder="Nigeria" className="py-4" />
            </div>

            <div className="flex items-center p-4 ">
              <Checkbox style={{ fontSize: "22px", color: "#08c" }} />
              <p className="text-secondaryColor pl-4">
                Securely save my card details for Next time
              </p>
            </div>
            {/* Button */}

            <div>
              <CustomButton title="Complete Payment" width="w-full lg:w-[431px]" />
            </div>

            <p className="text-borderColor text-center leading-[23px] py-4 w-full lg:w-[431px]">
              By confirming your subscription, you allow Grantsconsult to charge
              you for future payments in accordance with their terms. You can
              always cancel your subscription.{" "}
            </p>

            <div className="py-4 flex justify-center items-center w-full lg:w-[431px]">
              <p className="text-textColor font-poppins font-normal text-[10px] leading-[17px]">
                Powered by Flutterwave{" "}
              </p>
              <div className="w-[2px] h-[33px] bg-borderColor  ml-2" />
              <p className="font-poppins underline leading-[16px] text-[10px]  ml-2 ">
                Terms
              </p>
              <p className="font-poppins underline leading-[16px] text-[10px] ml-2">
                Condition
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <Faq /> */}
      <GrantFunder />
    </div>
  );
}
