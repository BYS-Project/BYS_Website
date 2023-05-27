import ScrollContext from "@/contexts/ScrollContext";
import { useContext, useEffect, useRef, useState } from "react";

export function OnScroll({ children, coeff }) {
  const parentRef = useRef(null);
  const childrenRef = useRef(null);
  const [delta, setDelta] = useState(0);
  const { scroll } = useContext(ScrollContext);
  const lastScroll = useRef(0);
  useEffect(() => {
    const parentY = parentRef.current.getBoundingClientRect().y;
    const distance = window.innerHeight / 2 - parentY;
    const childrenY = childrenRef.current.getBoundingClientRect().y;
    const scrollingUp = lastScroll.current < scroll;
    setDelta(distance * -1 * coeff);
    lastScroll.current = scroll;
  }, [coeff, scroll]);
  return (
    <div ref={parentRef}>
      <div style={{ transform: `translateY(${delta}px)` }} ref={childrenRef}>
        {children}
      </div>
    </div>
  );
}
