import CustomButton from "@/app/[locale]/components/CustomButton";
import SubscriptionCard from "@/app/[locale]/components/SubscriptionCard";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("Homepage")
  return (
    <div className="w-full h-full px-16  py-16">
      <h1 className="text-lg md:text-2xl text-center mb-16">
        {t("Subscription.title")}
      </h1>
      <div className="flex items-center justify-center 2lg:justify-between w-full flex-wrap">
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
