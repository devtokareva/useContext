import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export const AboutPage: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const pageStyles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#333333",
    color: theme === "light" ? "#000000" : "#ffffff",
    padding: "20px",
    height: "100vh",
    width: "100%",
    transition: "all 0.3s ease",
  };

  return (
    <div style={pageStyles}>
      <h1>О нас</h1>
      <p>Это страница "О нас"</p>
    </div>
  );
};
