import React from "react";
import { Image } from "antd";
import HeroPage from "./components/HeroPage";
import ServicePage from "./components/ServicePage";
import Grants from "./components/Grants";
import Experts from "./components/Experts";
import Subscription from "./components/Subscription";
import Testimonial from "./components/Testimonial";
import GrantFunder from "./components/GrantFunder";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="bg-backgroundColor">
      <HeroPage />
      <ServicePage />
      <Grants />
      <Experts />
      <Subscription />
      <Testimonial />
      <GrantFunder />
    </div>
  );
};

export default Home;
