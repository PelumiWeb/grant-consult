"use client";

import Image from "next/image";
import CustomInput from "../component/CustomInput";
import CustomButton from "../component/CustomButton";
import SubscriptionCard from "../component/SubscriptionCard";
import GrantFunder from "../home/components/GrantFunder";

export default function Home() {
  return (
    <div className="w-full">
      {/*  */}
      <div className="flex justify-between w-full">
        {/* left */}
        <div>
          <div>
            <h3 className="text-buttonPrimary">Complete Your Payment</h3>
            <p className="text-borderColor">
              Finalize your subscription and unlock full access to all grant
              opportunities and consultant services
            </p>
          </div>
        </div>

        {/* Right */}
      </div>

      {/* <Faq /> */}
      <GrantFunder />
    </div>
  );
}
