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

  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { label: "HOME", value: "home", link:'/home'},
    { label: "ABOUT", value: "about", link:'/about' },
    { label: "EXPERIENCE", value: "experience", link:'/experience' },
    { label: "RESUME", value: "resume", link:'/resume' },
    { label: "SERVICES", value: "service", link:'/service' },
    { label: "SKILLS", value: "skill", link:'/skill' },
    { label: "PROJECS", value: "project", link:'/project' },
    { label: "CONTACT", value: "contact", link:'/contact' },
  ];

  return (
    <AppBar position="static">
      <Toolbar className="text-white bg-gray-600">
        <div className="flex flex-row">
          <div className="flex-none ml-48 mr-12">
            <Link to={"/"}>
              <img className="w-6 rounded-xl" src={staff} />
            </Link>
          </div>
          <div className="flex-1 justify-center space-x-2 font-bold">
            <div className="flex  list-none space-x-12 items-center hover:cursor-pointer">
              {tabs && tabs.map((tab) => {
                console.log("tab", tab);
                <li
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={clsx("hover:bg-blue-300", "p-2", "rounded-md", {
                    "bg-gray-800": activeTab == tab.value,
                  })}
                >sjflsjdflk
                  <Link to={tab.link}>{tab.label}</Link>
                </li>;
              })}
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SiteNavbar;
