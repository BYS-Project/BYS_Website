"use client";

import MenuContext from "@/contexts/MenuContext";
import ScrollContext from "@/contexts/ScrollContext";
import { useContext, useEffect, useRef } from "react";

export default function Section({ children, className, style, active }) {
  const ref = useRef(null);
  const lastTrigger = useRef("hide");
  const { scroll } = useContext(ScrollContext);
  const { theme, setTheme } = useContext(MenuContext);
  useEffect(() => {
    if (active) {
      const y = ref.current.getBoundingClientRect().y;
      if (y <= 0 && lastTrigger.current === "show") {
        setTheme(!theme);
        lastTrigger.current = "hide";
      } else if (y >= 0 && lastTrigger.current === "hide") {
        setTheme(!theme);
        lastTrigger.current = "show";
      }
    }
  }, [active, scroll, setTheme, theme]);
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
