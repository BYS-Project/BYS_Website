"use client";

import ScrollContext from "@/contexts/ScrollContext";
import { useEffect, useRef, useState } from "react";

export default function ScrollProvider({ children }) {
  const [scroll, setScroll] = useState();
  const isThrottled = useRef(false);
  function handleScroll() {
    setScroll(window.scrollY);
  }
  function throttle(fn, delay) {
    let timeoutId;
    return function (...args) {
      if (isThrottled.current) {
        return;
      }
      fn(...args);
      isThrottled.current = true;
      timeoutId = setTimeout(() => {
        isThrottled.current = false;
      }, delay);
    };
  }
  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 15));
    return () =>
      window.removeEventListener("scroll", throttle(handleScroll, 15));
  }, []);
  return (
    <ScrollContext.Provider value={{ scroll }}>
      {children}
    </ScrollContext.Provider>
  );
}
