"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function TranslateOnScroll({ children }) {
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
  );
}
