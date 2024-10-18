import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainContent } from "./MainContent/MainContent";
import { ThemeProvider } from "./ThemeProvider/ThemeProvider";
import { AboutPage } from "./AboutPage/AboutPage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
