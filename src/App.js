import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import SiteNavbar from "./components/Navbar";
import MainPage from "./components/pages/mainpage";
import Experience from "./components/pages/experience";
import Resume from "./components/pages/Resume";

function App() {
  return (
    <div className="bg-black">
      <Router>
        <SiteNavbar />
        <Routes>
          <Route path="/" exact Component={MainPage} />
          <Route path="/home" exact Component={Home} />
          <Route path="/about" exact Component={About} />
          <Route path="/resume" exact Component={Resume} />
          <Route path="/experience" exact Component={Experience} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
