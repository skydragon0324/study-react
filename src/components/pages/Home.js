import React from "react";
import ImageSlider from "../slide/ImageSlide";
import clsx from "clsx";

const Home = (props) => {
  console.log("props::", props);
  return (
    <div className={clsx("mt-12", {
      "h-auto" : props && props.from == "main",
      "h-screen" : props && props.from != "main"
    })}>
      <ImageSlider />
    </div>
  );
};

export default Home;
