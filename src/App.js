import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light-mode");

  return (
    <div className={theme === "light-mode" ? "light-mode" : "dark-mode"}>
      <Header theme={theme} setTheme={setTheme} />
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
