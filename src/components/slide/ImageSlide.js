import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../images/bg_1.png";
import slide2 from "../../images/bg_2.png";

const ImageSlider = () => {
  const slides = [
    {
      image: slide2,
      text: (
        <>
          <p className="font-bold">
            I' m{" "}
            <span className="text-yellow-400 text-5xl md:text-7xl">
              Jade Tomas
            </span>
          </p>
          <br />
          <p>
            <b>I live in Finland</b>
          </p>
        </>
      ),
    },
    {
      image: slide1,
      text: (
        <>
          <p className="font-bold">
            I' m a
            <span className="text-yellow-400 md:text-7xl text-5xl">
              Web Developer
            </span>
          </p>
          <br />
          <p>
            <b>I live in Finland</b>
          </p>
        </>
      ),
    },
  ];

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-black overflow-hidden h-[800px] relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="flex md:flex-row flex-col-reverse justify-evenly">
              <div className="text-white flex justify-center md:pt-[200px] mt-[-400px] md:mt-0 text-center md:pl-[200px]">
                <h1 className="font-sans md:text-5xl text-3xl">{slide.text}</h1>
              </div>
              <div className="md:ml-[-100px] flex justify-center text-center">
                <img
                  src={slide.image}
                  alt={`Slide ${index}`}
                  className="md:w-[40%] w-[60%]"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
