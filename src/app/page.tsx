"use client";

import React from "react";
import { Image } from "antd";
import HeroPage from "./components/HeroPage";
import ServicePage from "./components/ServicePage";
import Grants from "./components/Grants";
import Experts from "./components/Experts";
import Subscription from "./components/Subscription";
import Testimonial from "./components/Testimonial";
import GrantFunder from "./components/GrantFunder";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAppSelector } from "../../lib/hooks";

type Props = {};

const Home = (props: Props) => {
  const modal = useAppSelector((state) => state.modal);
  

  return (
    <section className="">
      <Header />
      <div className="bg-backgroundColor">
        <HeroPage />
        <ServicePage />
        <Grants />
        <Experts />
        <Subscription />
        <Testimonial />
        <GrantFunder />
      </div>

      <Footer />
    </section>
  );
};

export default Home;
