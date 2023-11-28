import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import staff from "../images/person.jpg";
import { Typography, TextField } from "@mui/material";
import SearchAppBar from "./search-box";
import clsx from "clsx";

const SiteNavbar = () => {
  const [inputText, setInputText] = useState("");
  const inputHandler = (data) => {
    setInputText(data);
  };

  const pathname = window.location.pathname;
  const path = pathname.split("/")[1];
  const [activeTab, setActiveTab] = useState(path);

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

  return (
    <AppBar position="static">
      <Toolbar className="text-white bg-gray-600">
        <div className="flex flex-row">
          <div className="flex-none ml-48 mr-12 items-center">
            <Link to={"/"}>
              <img className="w-16 rounded-xl" src={staff} />
            </Link>
          </div>
          <div className="flex">
            <div className="flex list-none space-x-12 items-center hover:cursor-pointer">
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
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SiteNavbar;
