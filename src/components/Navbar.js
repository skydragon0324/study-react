import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import staff from "../images/person.jpg";
import { Typography, TextField } from "@mui/material";
import SearchAppBar from "./search-box";
import clsx from "clsx";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";;

const tabs = [
  { label: "HOME", value: "home", link: "/home" },
  { label: "ABOUT", value: "about", link: "/about" },
  { label: "EXPERIENCE", value: "experience", link: "/experience" },
  { label: "RESUME", value: "resume", link: "/resume" },
  { label: "SERVICES", value: "service", link: "/service" },
  { label: "SKILLS", value: "skill", link: "/skill" },
  { label: "PROJECS", value: "project", link: "/project" },
  { label: "CONTACT", value: "contact", link: "/contact" },
];

const SiteNavbar = () => {
  const CarouselMenu = () => {
    const setting = {
      dots: false,
      nextIcon: <ArrowForwardIosOutlinedIcon />,
      prevIcon: <ArrowBackIosNewOutlinedIcon />,
      autoPlay: false,
      navButtonsAlwaysVisible: true,
      animation: "slide",
      navButtonsProps: {
        style: {
          backgroundColor: "transparent",
        },
      },
      navButtonsWrapperProps: {
        style: {
          top: "unset",
        },
      },
    };

    return (
      <Carousel {...setting} className="h-10 text-white">
        {tabs.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="flex justify-center items-center text-center w-full"
            onClick={() => setActiveTab(item.value)}
          >
            <div className="text-white text-center">{item.label}</div>
          </Link>
        ))}
      </Carousel>
    );
  };

  const [inputText, setInputText] = useState("");
  const inputHandler = (data) => {
    setInputText(data);
  };

  const pathname = window.location.pathname;
  const path = pathname.split("/")[1];
  const [activeTab, setActiveTab] = useState(path);

  return (
    <div className="flex flex-row text-white">
      <div className="flex-none bg-transparent static md:ml-48 md:mr-12 items-center">
        <Link to={"/"}>
          <img className="w-12 rounded-xl" src={staff} />
        </Link>
      </div>
      <div className="md:flex hidden">
        <div className="md:flex list-none space-x-12 items-center hover:cursor-pointer">
          {tabs &&
            tabs.map((tab) => (
              <Link to={tab.link}>
                <li
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={clsx("hover:bg-blue-300", "p-2", "rounded-md", {
                    "bg-gray-800": activeTab == tab.value,
                  })}
                >
                  {tab.label}
                </li>
              </Link>
            ))}
        </div>
      </div>
      <div className="md:hidden flex justify-center items-center text-center">
        <CarouselMenu />
      </div>
    </div>
  );
};

export default SiteNavbar;
