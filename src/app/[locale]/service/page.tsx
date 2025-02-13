"use client";
import Faq from "../subscription/components.tsx/Faq";
import GrantService from "./component/GrantService";
import GrantFunder from "../components/GrantFunder";

export default function Home() {
  return (
    <div className="w-full  p-4 lg:px-16">
      {/*  */}
      <div className="w-full">
        <div className=" py-16">
          <h1 className="text-lg text-center text-primaryBlack lg:leading-[60px] lg:text-[48px]  ">
            Grant Writing Services
          </h1>
          <div className="w-full flex items-center justify-center ">
            <p className="texts-sm w-full text-center text-textColor lg:w-[70%] mt-8">
              Let our experienced team handle the entire grant process for you,
              from start to finish. All plans include an onboarding call,
              mission-matched grant research, custom grant calendar, grant
              writing and submission
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-between flex-wrap w-full px-8 md:px-32">
          <GrantService
            list={[
              "$800 Upfront Fee + 10% of Secured Grant Amount",
              "Grant review and advisory",
              "One strategy session",
              "Assistance for up to $50k funding goal",
              "Grant application review and improvement",
              "Application submission assistance",
            ]}
            title="BRONZE"
            price="$500"
            backgroundColor="bg-white"
            images={["/bronze.svg"]}
            buttonBackground={"bg-bronze"}
          />
          <GrantService
            list={[
              "$1,500 Upfront Fee + 10% of Secured Grant Amount",
              "Includes Bronze features, PLUS:",
              "In-depth strategy session",
              "Mission-matched grant research",
              "Support for up to $150k funding goal",
              "Two grant applications written and submitted",
            ]}
            title="SILVER"
            price="$1,000"
            backgroundColor="bg-[#ECDFC2]"
            images={["/silver.svg"]}
            buttonBackground={"bg-silver"}
          />
          <GrantService
            list={[
              "$3,000 Upfront Fee + 5% of Secured Grant Amount",
              "Includes Silver features, PLUS:",
              "Tailored grant application calendar",
              "Dedicated grant writer",
              "Assistance for up to $500k funding goal",
              "Quarterly grant performance review",
            ]}
            title="GOLD"
            price="$1,500"
            backgroundColor="bg-white"
            images={["/gold.svg", "/gold.svg"]}
            buttonBackground={"bg-gold"}
          />
          <GrantService
            list={[
              "$5,000 Upfront Fee + 3% of Secured Grant Amount",
              "Includes Gold features, PLUS:",
              "Custom grant strategy execution",
              "Full-service application management",
              "Post-grant reporting and compliance support",
              "Support for over $500k funding goal",
            ]}
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
          <div className="flex items-center flex-wrap justify-between w-[60%] my-4">
            <img src="/card.svg" className="m-2" />
            <img src="/card2.svg" className="m-2" />
            <img src="/card3.svg" className="m-2" />
            <img src="/card4.svg" className="m-2" />
            <img src="/card5.svg" className="m-2" />
            <img src="/card6.svg" className="m-2" />
          </div>

          <p className="my-4">You can cancel your subscription anytime.</p>
        </div>
      </div>
      <Faq />
      <GrantFunder />
    </div>
  );
}
