import { createContext } from "react";

import React from "react";

const ColorModeContext = createContext();
export default ColorModeContext;

export function ColorModeProvider({ children, setColorMode }) {
  const toggleColorMode = () =>
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  return (
    <ColorModeContext.Provider value={toggleColorMode}>
      {children}
    </ColorModeContext.Provider>
  );
}
