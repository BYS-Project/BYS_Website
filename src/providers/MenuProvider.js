"use client";

import MenuContext from "@/contexts/MenuContext";
import { useState } from "react";

export default function MenuProvider({ children }) {
  const [theme, setTheme] = useState(true);
  return (
    <MenuContext.Provider value={{ theme, setTheme }}>
      {children}
    </MenuContext.Provider>
  );
}
