"use client";

import ScrollContext from "@/contexts/ScrollContext";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

export function OnScroll({ children, coeff }) {
  const { scroll } = useContext(ScrollContext);
  const parsedCoeff = useRef(coeff ? coeff : 1);
  const parentRef = useRef(null);
  const childrenRef = useRef(null);
  const lastScroll = useRef(0);
  const [position, setPosition] = useState("relative");
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const parentY = parentRef.current.getBoundingClientRect().y;
    const childY = childrenRef.current.getBoundingClientRect().y;
    if (scroll > lastScroll.current) {
      if (childY <= 0) {
        if (parentY < 0) {
          setPosition("relative");
        } else {
          setOffset(0);
          setPosition("fixed");
        }
      } else {
        const newOffset = window.innerHeight - parentY;
        setOffset(newOffset * -1 * coeff);
      }
    } else {
      if (parentY >= childrenRef.current.offsetHeight) {
        setPosition("relative");
      }
    }
    lastScroll.current = scroll;
  }, [coeff, scroll]);
  return (
    <div ref={parentRef} className="relative">
      <div
        ref={childrenRef}
        className="top-0 left-0"
        style={{ position: position, transform: `translateY(${offset}px)` }}
      >
        {children}
      </div>
    </div>
  );
}
