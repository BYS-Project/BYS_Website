"use client";

import { useContext } from "react";
import { P1, P4 } from "../text/Paragraphs";
import MenuContext from "@/contexts/MenuContext";

export function HomepageMenu() {
  const { theme } = useContext(MenuContext);
  return (
    <div
      className={`${
        theme
          ? "text-greyBackground bg-heroBackground"
          : "text-heroBackground bg-greyBackground"
      } fixed z-10 top-0 left-0 py-4 px-8 grid grid-cols-3 gap-8 w-full transition-all duration-150 ease-in`}
    >
      <div className="flex items-center justify-start gap-4">
        <P1 className="font-bold uppercase bg-transparent">BYS Project</P1>
      </div>
      <div className="flex gap-12 items-center justify-center  w-full">
        <P4 className="uppercase">Dashboard</P4>
        <P4 className="uppercase">Learn</P4>
        <P4 className="uppercase">About</P4>
      </div>
      <div className="flex items-center justify-end">
        <P4
          className={`uppercase ${
            theme
              ? "text-heroBackground bg-greyBackground"
              : "text-greyBackground bg-heroBackground"
          } rounded-full px-4 py-2 font-bold transition-all duration-150 ease-in`}
        >
          Book a Demo
        </P4>
      </div>
    </div>
  );
}
export function DashboardMenu() {
  return <div></div>;
}
