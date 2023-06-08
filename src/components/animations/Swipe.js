"use client";

import { useEffect, useRef } from "react";

export default function Swipe({ className, style, text }) {
  const ref = useRef(null);
  const childrenRef = useRef(null);
  useEffect(() => {
    while (childrenRef.current.offsetWidth < ref.current.offsetWidth) {}
  }, []);
  return (
    <div style={style} className="w-full h-max">
      <div ref={ref} className={`${className} w-full h-max`}>
        <div ref={childrenRef}>{text}</div>
      </div>
    </div>
  );
}
