"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function TranslateOnScroll({ children }) {
  const ref = useRef(null);
  const [translate, setTranslate] = useState(0);
  const handleScroll = useCallback(() => {
    const distance = ref.current.getBoundingClientRect().top;
    const transVal = ref.current.style.transform
      .replace("translateY(", "")
      .replace("px)", "");
    console.log(distance);
    console.log(transVal);
    setTranslate(0); // Come farlo bellino riprendi da qui
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <div
      ref={ref}
      className={`relative w-full h-full transition-all duration-150 ease-in`}
      style={{ transform: `translateY(${translate}px)` }}
    >
      {children}
    </div>
  );
}
