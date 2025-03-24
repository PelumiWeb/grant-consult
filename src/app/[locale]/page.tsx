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
import { useAppSelector } from "../../../lib/hooks";
import RenderModals from "./components/RenderModals";
import { redirect } from "next/navigation";

type Props = {};
type User = {};

const Home = (props: Props) => {
  const modal = useAppSelector((state) => state.modal);
  // redirect("/en");

  return (
    <div className="">
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
      <RenderModals />
      <Footer />
    </div>
  );
};

export default Home;
