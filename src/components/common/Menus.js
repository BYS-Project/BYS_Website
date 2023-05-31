"use client";

import { useCallback, useContext, useEffect, useRef } from "react";
import { P1, P4 } from "../text/Paragraphs";
import MenuContext from "@/contexts/MenuContext";

export function HomepageMenu() {
  const ref = useRef(null);
  const { theme, setTheme, menuHeight, setMenuHeight } =
    useContext(MenuContext);
  const handleResize = useCallback(() => {
    setMenuHeight(ref.current.offsetHeight);
  }, [setMenuHeight]);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  return (
    <div
      ref={ref}
      className={`${
        theme === "grey"
          ? "text-grey bg-blue"
          : theme === "blue"
          ? "text-blue bg-grey"
          : "text-grey bg-transparent"
      } fixed z-10 top-0 left-0 py-1 sm:py-4 px-2 sm:px-8 grid grid-cols-3 gap-8 w-full transition-all duration-150 ease-out text-center`}
    >
      <div className="flex items-center justify-start gap-4">
        <P1 className="font-bold bg-transparent">BYS Labs</P1>
      </div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-12 items-center justify-center  w-full">
        <P4 className="">Dashboard</P4>
        <P4 className="">Learn</P4>
        <P4 className="">About</P4>
      </div>
      <div className="flex items-center justify-end">
        <P4
          className={`${
            theme === "grey"
              ? "text-blue bg-grey"
              : theme === "blue"
              ? "text-grey bg-blue"
              : ""
          } rounded-full px-4 py-2 font-bold transition-all duration-150 ease-out`}
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
