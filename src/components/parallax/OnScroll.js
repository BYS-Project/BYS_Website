/*
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
*/

"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function OnScroll({ children, className }) {
  const ref = useRef(null);
  const childRef = useRef(null);
  const updatedTranslate = useRef(0);
  const [translate, setTranslate] = useState(0);
  let maxDistance = useRef(0);
  const handleScroll = useCallback(() => {
    if (childRef && ref) {
      // Without this, a page change would trigger an error - even with the return and remotion of the event listener
      const childDist = childRef.current.getBoundingClientRect().top;
      const parentDistance = ref.current.getBoundingClientRect().top;
      if (parentDistance > maxDistance) {
        maxDistance.current = parentDistance;
      }
      const parentHeight = ref.current.offsetHeight;
      const finalOffset = -maxDistance.current + parentDistance - parentHeight;
      if (childDist > 0) {
        if (-finalOffset < window.screen.height) {
          setTranslate(finalOffset);
          updatedTranslate.current = finalOffset;
        }
      } else {
        const diff = updatedTranslate.current - childDist;
        setTranslate(diff > 0 ? 0 : diff);
        // not updating the diff causes a loss of the div. Updating it makes more problems
      }
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <div className={className}>
      <div ref={ref} className={`relative w-full h-full`}>
        <div
          ref={childRef}
          className="relative top-0 left-0 w-full h-full transition-all duration-150 ease-linear"
          style={{
            transform: `translateY(${translate}px)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
