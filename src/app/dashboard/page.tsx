"use client";
import Image from "next/image";
import RenderContents from "./components/RenderContent";
import { useAppSelector } from "../../../lib/hooks";

export default function Home() {
  
  return (
    <div className="w-[80%] h-full">
      <RenderContents />
    </div>
  );
}
