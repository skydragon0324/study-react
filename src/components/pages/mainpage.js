import React, { useState } from "react";
import staff from "../../images/person.jpg";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";

const MainPage = () => {
  return (
    <>
    <Home from="main" />
    <About from="main" />
    <Resume from="main" />
    </>
  );
};

export default MainPage;
