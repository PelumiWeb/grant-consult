"use client";
import Image from "next/image";
import RenderContents from "./components/RenderContent";
import { useAppSelector } from "../../../lib/hooks";

export default function Home() {
  const modal = useAppSelector((state) => state.modal);
  console.log(modal, "from dashboard--------------------");

  return (
    <div className="w-[80%] h-full">
      <RenderContents />
    </div>
  );
}
