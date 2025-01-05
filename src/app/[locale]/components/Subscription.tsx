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
  const t = useTranslations("Homepage");
  return (
    <div className="w-full h-full px-16  py-16">
      <h1 className="text-lg md:text-2xl text-center mb-16">
        {t("Subscription.title")}
      </h1>
      <div className="flex items-center justify-center 2lg:justify-between w-full flex-wrap">
        <SubscriptionCard
          price={"$0"}
          plan="Free Trial"
          bgColor="bg-secondaryColor"
          image="/subscription.svg"
          list={[
            "Limited access to grant listings ",
            "Basic educational materials",
            "Email notification of new grants opportunities",
          ]}
        />
        <SubscriptionCard
          price={"$10"}
          plan="WEEKLY"
          textColor="text-[#B632FD]"
          bgColor="bg-weekly"
          image="/subscription2.svg"
          list={[
            "Full access to all grant listings and a personalized dashboard. ",
            "Tailored grant opportunities matched to your profile.",
            "Invitations to webinars/workshops.",
            "Grant writing templates and tools..",
            "Invitations to webinars/workshops.",
            "Priority email support.",
          ]}
        />
        <SubscriptionCard
          price={"$25"}
          image="/subscription3.svg"
          plan="MONTHLY"
          textColor="text-[#B6B6B6]"
          list={[
            "Full access to all grant listings and a personalized dashboard. ",
            "Tailored grant opportunities matched to your profile.",
            "1 free monthly consultation.",
            "Weekly newsletter updates.",
            "Invitations to webinars/workshops.",
            "Downloadable templates, checklists, and sample proposals",
            "Priority email support.",
          ]}
        />
        <SubscriptionCard
          price={"$65"}
          bgColor="bg-quaterly"
          image="/subscription4.svg"
          plan="QUARTERLY"
          textColor="text-[#B6B6B6]"
          list={[
            "All benefits of the Monthly Plan, plus:",
            "3 free consultation sessions per quarter.",
            "Dedicated account manager for inquiries and support.",
          ]}
        />
        <SubscriptionCard
          price={"$150"}
          bgColor="bg-yearly"
          image="/subscription5.svg"
          plan="YEARLY"
          textColor="text-[#F9C03B]"
          list={[
            "All benefits of the Monthly Plan, plus:",
            "12 free consultation sessions per year",
            "VIP priority support with direct hotline access.",
          ]}
        />
      </div>
    </div>
  );
};

export default Subscription;
