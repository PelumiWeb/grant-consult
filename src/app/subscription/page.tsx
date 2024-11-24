"use client";

import Image from "next/image";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SubscriptionCard from "../components/SubscriptionCard";
import Faq from "./components.tsx/Faq";
import GrantFunder from "../components/GrantFunder";

export default function Home() {
  return (
    <div className="w-full px-16 h-full">
      {/*  */}
      <div className="w-full h-full">
        <div className=" py-16">
          <h1 className="text-center text-secondaryColor">
            Choose Your Subscription Plan
          </h1>
          <p className="text-center text-borderColor">
            Find the plan that best suits your needs and unlock full access to
            grant opportunities and expert services.
          </p>
        </div>

        <div className="flex justify-between w-full flex-wrap">
          <SubscriptionCard
            price={"$0"}
            plan="7 days"
            bgColor="bg-secondaryColor"
            image="/subscription.svg"
          />
          <SubscriptionCard
            price={"$50"}
            plan="WEEKLY"
            textColor="text-[#B632FD]"
            bgColor="bg-weekly"
            image="/subscription2.svg"
          />
          <SubscriptionCard
            price={"$100"}
            image="/subscription3.svg"
            plan="MONTHLY"
            textColor="text-[#B6B6B6]"
          />
          <SubscriptionCard
            price={"$300"}
            bgColor="bg-quaterly"
            image="/subscription4.svg"
            plan="QUARTERLY"
            textColor="text-[#B6B6B6]"
          />
          <SubscriptionCard
            price={"$700"}
            bgColor="bg-yearly"
            image="/subscription5.svg"
            plan="YEARLY"
            textColor="text-[#F9C03B]"
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
