"use client";

import { cloneElement, useCallback, useEffect, useRef, useState } from "react";
import { P2 } from "../text/Paragraphs";
import { H1 } from "../text/Headers";

export function ShowOnRender({ children, className, toText }) {
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    setTrigger(true);
  }, []);
  return (
    <div
      style={{ color: trigger ? toText : "black" }}
      className={`${
        className ? className : ""
      } transition-all duration-150 ease-in-out`}
    >
      {children}
    </div>
  );
}
export function TranslateY({ children, className }) {
  const ref = useRef(null);
  const [trigger, setTrigger] = useState(false);
  const handleScroll = useCallback(() => {
    const distance = ref.current.getBoundingClientRect().top;
    if (distance < window.innerHeight) {
      setTrigger(true);
    }
  }, []);
  useEffect(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <div
      ref={ref}
      className={`${className ? className : ""} ${
        trigger ? "pt-0" : "pt-[100vh]"
      } transition-all duration-300 ease-in-out`}
    >
      {children}
    </div>
  );
}
export function CancelOnHover({ text, dimension, lineColor, className }) {
  {
    /* Does not currently support linear gradient as text color */
  }
  return (
    <div className={`${className ? className : ""} group relative w-min`}>
      <div className="flex">
        {Array.from(text).map((el, i) => {
          if (i % 2 === 0) {
            return dimension ? (
              cloneElement(dimension, {
                key: i,
                className: "relative z-20",
                children: el,
              })
            ) : (
              <span key={i} className="relative z-20">
                {el}
              </span>
            );
          } else {
            return dimension ? (
              cloneElement(dimension, {
                key: i,
                children: el,
              })
            ) : (
              <span key={i}>{el}</span>
            );
          }
        })}
      </div>
      <div
        style={{ backgroundColor: lineColor ? lineColor : "#ce3389" }}
        className="absolute top-[50%] w-0 group-hover:w-full h-[15%] transition-all duration-300 ease-in rounded-xl"
      />
    </div>
  );
}
