import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import SiteNavbar from "./components/Navbar";
import MainPage from "./components/mainpage";

function App() {
  return (
    <div>
      <Router>
        <SiteNavbar />
        <MainPage />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
