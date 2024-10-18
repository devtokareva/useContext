import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export const NestedComponent: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const textStyles = {
    color: theme === "light" ? "#000000" : "#ffffff",
    border: `1px solid ${theme === "light" ? "#dddddd" : "#555555"}`,
    padding: "10px",
    borderRadius: "5px",
  };

  return (
    <p style={textStyles}>Это вложенный компонент с использованием темы</p>
  );
};
