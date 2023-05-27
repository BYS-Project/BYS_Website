import ScrollContext from "@/contexts/ScrollContext";
import { useContext, useEffect, useRef, useState } from "react";

export function OnScroll({ children, coeff }) {
  const parentRef = useRef(null);
  const childrenRef = useRef(null);
  const [delta, setDelta] = useState(0);
  const { scroll } = useContext(ScrollContext);
  const lastScroll = useRef(0);
  const fix = useRef(false);
  const hide = useRef(false);
  useEffect(() => {
    const parentY = parentRef.current.getBoundingClientRect().y;
    const distance = window.innerHeight / 2 - parentY;
    const childrenY = childrenRef.current.getBoundingClientRect().y;
    const scrollUp = lastScroll.current - scroll > 0;
    if (scrollUp) {
      if (parentY > 0) {
        fix.current = false;
      } else {
        fix.current = true;
      }
      hide.current = false;
    } else {
      if (childrenY < 0 && !hide.current) {
        fix.current = true;
        hide.current = false;
      } else if (parentY <= -1 * parentRef.current.offsetHeight) {
        fix.current = false;
        hide.current = true;
      }
    }
    if (fix.current) {
      setDelta(delta - childrenY);
    } else {
      setDelta(distance * -1 * coeff);
    }
    lastScroll.current = scroll;
  }, [coeff, delta, scroll]);
  return (
    <div ref={parentRef}>
      <div style={{ transform: `translateY(${delta}px)` }} ref={childrenRef}>
        {children}
      </div>
    </div>
  );
}
