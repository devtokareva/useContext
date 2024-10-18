import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { NestedComponent } from "../NestedComponent/NestedComponent";
import { Link } from "react-router-dom";

export const MainContent: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
      <h1>Текущая тема: {theme === "light" ? "Светлая" : "Тёмная"}</h1>
      <button onClick={toggleTheme}>Переключить тему</button>
      <NestedComponent />
      <nav>
        <Link
          to="/about"
          style={{ color: theme === "light" ? "#000" : "#fff" }}
        >
          О нас
        </Link>
      </nav>
    </div>
  );
};
