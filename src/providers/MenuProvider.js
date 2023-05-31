"use client";

import MenuContext from "@/contexts/MenuContext";
import { useState } from "react";

export default function MenuProvider({ children }) {
  const [theme, setTheme] = useState(true);
  const [menuHeight, setMenuHeight] = useState(0);
  return (
    <MenuContext.Provider
      value={{ theme, setTheme, menuHeight, setMenuHeight }}
    >
      {children}
    </MenuContext.Provider>
  );
}
