import Image from "next/image";
import RenderContents from "./components/RenderContent";

export default function Home() {

  return (
    <div className="w-[80%] h-full">
      <RenderContents />
    </div>
  );
}
