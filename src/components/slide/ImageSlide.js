import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import Slider from 'react-slick';

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
          <p>
            <b>
              I' m <span className="text-yellow-400 text-7xl">Jade Tomas</span>
            </b>
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
          <p>
            <b>
              I' m a
              <span className="text-yellow-400 text-7xl">Web Developer</span>
            </b>
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };




  return (
    <div className="bg-black overflow-hidden h-[800px] relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="flex justify-evenly">
              <div className="text-white flex pt-[200px] text-center pl-[200px]">
                <h1 className="font-sans text-5xl">{slide.text}</h1>
              </div>
              <div className="ml-[-100px]">
                <img
                  src={slide.image}
                  alt={`Slide ${index}`}
                  className="mx-auto opacity-100 w-[40%]"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center absolute top-[300px] text-white">
        <IconButton onClick={() => {}} className="">
          <ArrowBack />
        </IconButton>
        <IconButton onClick={() => {}}>
          <ArrowForward />
        </IconButton>
      </div>
    </div>
  );
};

export default ImageSlider;
