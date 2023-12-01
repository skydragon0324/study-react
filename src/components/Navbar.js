import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import staff from "../images/person.jpg";


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
  const pathname = window.location.pathname;
  const path = pathname.split("/")[1];
  const [activeTab, setActiveTab] = useState(path);

  return (
    <div className="flex flex-row text-white bg-transparent justify-center">
      <div className="flex-none bg-transparent static md:mr-12 mr-1 items-center mt-2">
        <Link to={"/"}>
          <img className="md:w-12 w-6 rounded-full" src={staff} />
        </Link>
      </div>
      <div className="flex">
        <div className="flex list-none md:space-x-12 items-center hover:cursor-pointer">
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
  );
};

export default SiteNavbar;
