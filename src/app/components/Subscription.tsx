import CustomButton from "@/app/components/CustomButton";
import SubscriptionCard from "@/app/components/SubscriptionCard";
import React from "react";

type Props = {};
type Cardprops = {
  image: string;
  price: string;
  bgColor?: string;
  plan?: string;
  textColor?: string;
};

const Subscription = (props: Props) => {
  return (
    <div className="w-full h-full px-16  py-16">
      <h1 className="text-center mb-16">Choose a Subscription Plan</h1>
      <div className="flex items-center justify-between w-full flex-wrap">
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
    </div>
  );
};

export default Subscription;
