import React, { useState } from "react";
import { Theme, ThemeContext } from "../ThemeContext/ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}): JSX.Element => {
  const [theme, setTheme] = useState<Theme>("light"); // Состояние для текущей темы

  const toggleTheme = (): void => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
