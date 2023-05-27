import ScrollContext from "@/contexts/ScrollContext";
import { useContext, useEffect, useRef, useState } from "react";

export function OnScroll({ children, coeff }) {
  const parentRef = useRef(null);
  const childrenRef = useRef(null);
  const [delta, setDelta] = useState(0);
  const { scroll } = useContext(ScrollContext);
  const lastScroll = useRef(0);
  const fix = useRef(false);
  useEffect(() => {
    const halfHeight = window.innerHeight / 2;
    const parentY = parentRef.current.getBoundingClientRect().y;
    const distance = halfHeight - parentY;
    const childrenY = childrenRef.current.getBoundingClientRect().y;
    const scrollUp = lastScroll.current - scroll > 0;
    if (!scrollUp) {
      if (parentY > 0) {
        if (childrenY > 0 && !fix.current) {
          setDelta((distance + halfHeight) * -1);
        } else {
          setDelta(delta - childrenY);
          fix.current = true;
        }
      } else {
        setDelta(0);
      }
    } else {
      if (parentY >= window.innerHeight) {
        setDelta(0);
      } else {
        setDelta((distance + halfHeight) * -1);
      }
      fix.current = false;
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
