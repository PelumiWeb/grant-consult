"use client";
import Faq from "../subscription/components.tsx/Faq";
import GrantService from "./component/GrantService";
import GrantFunder from "../components/GrantFunder";

export default function Home() {
  return (
    <div className="w-full px-16">
      {/*  */}
      <div className="w-full">
        <div className=" py-16">
          <h1 className="text-center text-primaryBlack leading-[60px] text-[48px]  ">
            Grant Writing Services
          </h1>
          <div className="w-full flex items-center justify-center ">
            <p className="text-center text-textColor w-[70%] mt-8">
              Let our experienced team handle the entire grant process for you,
              from start to finish. All plans include an onboarding call,
              mission-matched grant research, custom grant calendar, grant
              writing and submission
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          <GrantService
            title="BRONZE"
            price="$500"
            backgroundColor="bg-white"
            images={["/bronze.svg"]}
            buttonBackground={"bg-bronze"}
          />
          <GrantService
            title="SILVER"
            price="$1,000"
            backgroundColor="bg-[#ECDFC2]"
            images={["/silver.svg"]}
            buttonBackground={"bg-silver"}
          />
          <GrantService
            title="GOLD"
            price="$1,500"
            backgroundColor="bg-white"
            images={["/gold.svg", "/gold.svg"]}
            buttonBackground={"bg-gold"}
          />
          <GrantService
            title="PLATINUM"
            price="$2,500"
            backgroundColor="bg-[#ECDFC2]"
            images={["/platinum.svg", "/platinum.svg", "/platinum.svg"]}
            buttonBackground={"bg-platinum"}
          />
        </div>

        <div className="w-full py-16 flex flex-col items-center justify-center">
          <p className="my-4">
            For your security, all orders are processed in USD via Stripe or
            PayPal.
          </p>
          <div className="flex items-center justify-between w-[60%] my-4">
            <img src="/card.svg" />
            <img src="/card2.svg" />
            <img src="/card3.svg" />
            <img src="/card4.svg" />
            <img src="/card5.svg" />
            <img src="/card6.svg" />
          </div>

          <p className="my-4">You can cancel your subscription anytime.</p>
        </div>
      </div>
      <Faq />
      <GrantFunder />
    </div>
  );
}
