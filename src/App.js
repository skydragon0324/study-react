import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import SiteNavbar from "./components/Navbar";
import MainPage from "./components/mainpage";
import Experience from "./components/experience";

function App() {
  return (
    <div>
      <Router>
        <SiteNavbar />
        <Routes>
          <Route path="/" exact Component={MainPage} />
          <Route path="/home" exact Component={Home} />
          <Route path="/about" exact Component={About } />
          <Route path="/experience" exact Component={Experience } />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
