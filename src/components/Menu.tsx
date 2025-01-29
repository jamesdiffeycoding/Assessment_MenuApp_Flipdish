"use client";

import sampleMenu from "../sampleMenu.json";
import OrderBtn from "./OrderBtn";
import Accordian from "./Accordian";
import BtnBar from "@/components/BtnBar";

export default function Menus() {
  return (
    <div className="w-[90%] max-w-[1200px]">
      <BtnBar />
      <Accordian />
      <OrderBtn />
    </div>
  );
}
