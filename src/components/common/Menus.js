"use client";

import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { P1, P2, P4 } from "../text/Paragraphs";
import MenuContext from "@/contexts/MenuContext";
import Link from "next/link";

// This won't be client side. Timer sent to frontend as well as other data. Maybe ISR

export function HomepageMenu() {
  const ref = useRef(null);
  const [hamburger, setHamburger] = useState(false);
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
      } fixed z-20 top-0 left-0 py-1 sm:py-4 px-[5%] sm:px-[5%] grid grid-cols-3 gap-8 w-full transition-all duration-150 ease-out text-center`}
    >
      <Link href="./" className="flex items-center justify-start gap-4">
        <P1 className="font-bold bg-transparent">BYS Labs</P1>
      </Link>
      <div className="invisible sm:visible flex flex-row gap-12 items-center justify-center w-full transition-all duration-[500ms] ease-in">
        <Link href="/sto">
          <P4>STO</P4>
        </Link>
        <Link target="_blank" href="https://bys-project.github.io/mvp/">
          <P4>MVP</P4>
        </Link>
        <Link target="_blank" href="https://gitbook.com">
          <P4>Learn</P4>
        </Link>
        <Link href="/about">
          <P4>About</P4>
        </Link>
      </div>
      <div className="flex items-center justify-end">
        <div className="invisible sm:visible transition-all duration-[500ms] ease-in">
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
        <div
          onClick={() => setHamburger(!hamburger)}
          className="relative z-10 visible opacity-[1] sm:opacity-[0] sm:hidden transition-all duration-[500ms] ease-in"
        >
          <div className="flex flex-col gap-2">
            <div
              className={`w-12 h-1 rounded-xl ${
                hamburger ? "bg-black" : "bg-white"
              } transition-all duration-[500ms] ease-in`}
            />
            <div
              className={`w-12 h-1 rounded-xl ${
                hamburger ? "bg-black" : "bg-white"
              } transition-all duration-[500ms] ease-in`}
            />
            <div
              className={`w-12 h-1 rounded-xl ${
                hamburger ? "bg-black" : "bg-white"
              } transition-all duration-[500ms] ease-in`}
            />
          </div>
        </div>
      </div>
      <div
        className={`absolute w-[50vw] h-screen top-0 left-0 ${
          hamburger
            ? "translate-x-[50vw] visible"
            : "translate-x-[100vw] invisible"
        } bg-grey transition-all duration-[500ms] ease-in border-l-4 border-solid border-black`}
      >
        <div className="w-full h-full flex flex-col justify-center items-center text-blue font-extrabold gap-5">
          <Link href="/sto">
            <P1>STO</P1>
          </Link>
          <Link target="_blank" href="https://bys-project.github.io/mvp/">
            <P1>MVP</P1>
          </Link>
          <Link target="_blank" href="https://gitbook.com">
            <P1>Learn</P1>
          </Link>
          <Link href="/about">
            <P1>About</P1>
          </Link>
          <P2
            className={`${"text-blue bg-grey border-2 border-solid border-blue rounded-full"} rounded-full px-4 py-2 font-bold transition-all duration-150 ease-out`}
          >
            Book a Demo
          </P2>
        </div>
      </div>
    </div>
  );
}
export function DashboardMenu() {
  return <div></div>;
}
