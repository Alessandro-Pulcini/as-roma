import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AsRomaNavbar from "./components/AsRomaNavbar";
import AsRomaCarousel from "./components/AsRomaCarousel";

function App() {
  return (
    <div className="App">
      <AsRomaNavbar />
      <AsRomaCarousel />
    </div>
  );
}

export default App;
