"use client";

import MenuContext from "@/contexts/MenuContext";
import ScrollContext from "@/contexts/ScrollContext";
import { useContext, useEffect, useRef } from "react";

export default function Section({
  children,
  className,
  top,
  style,
  active,
  themes,
}) {
  const ref = useRef(null);
  const { scroll } = useContext(ScrollContext);
  const { theme, setTheme, menuHeight, setMenuHeight } =
    useContext(MenuContext);
  useEffect(() => {
    if (active) {
      const y = ref.current.getBoundingClientRect().y;
      if (y >= ref.current.offsetHeight * -1 && y <= menuHeight) {
        if (top) {
          if (y === 0) {
            setTheme(themes[0]);
          } else {
            setTheme(themes[1]);
          }
        } else {
          if (y <= menuHeight) {
            themes.length > 1 && setTheme(themes[0]);
          } else if (y >= menuHeight) {
            themes.length > 1 && setTheme(themes[1]);
          }
        }
      }
    }
  }, [active, menuHeight, scroll, setTheme, themes, top]);
  return (
    <div ref={ref} className={`${className}`} style={style}>
      {children}
    </div>
  );
}
