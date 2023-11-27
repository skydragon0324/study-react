import React from "react";
import bg_1 from "../../images/bg_1.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex justify-center text-white mt-[60px] h-screen">
      <div className="w-[20%] mr-[100px]">
        <img src={bg_1} alt="bg_1" className="" />
      </div>
      <div className="w-[800px] ml-16">
        <div className="flex items-center justify-center">
          <h1 className="text-7xl">About Me</h1>
        </div>
        <div className="flex justify-start mt-12">
          <p className="font-bold text-2xl">
            Name: <span className="ml-[125px] text-gray-400">Jade Tomas</span>
          </p>
        </div>
        <div className="flex justify-start mt-12">
          <p className="font-bold text-2xl">
            Date of birth:{" "}
            <span className="ml-[40px] text-gray-400">Setemper 27, 1996</span>
          </p>
        </div>
        <div className="flex justify-start mt-12">
          <p className="font-bold text-2xl">
            Address:{" "}
            <span className="ml-[100px] text-gray-400">
              Veturitallinkuja 34, Helsink, Uusimaai, Finland
            </span>
          </p>
        </div>
        <div className="flex justify-start mt-12">
          <p className="font-bold text-2xl">
            Zip code: <span className="ml-[95px] text-gray-400">00520</span>
          </p>
        </div>
        <div className="flex justify-start mt-12">
          <p className="font-bold text-2xl">
            Email:{" "}
            <span className="ml-[130px] text-gray-400">
              jadetomas0927@gmail.com
            </span>
          </p>
        </div>
        <div className="flex justify-start mt-12">
          <p className="font-bold text-2xl">
            Phone:{" "}
            <span className="ml-[120px] text-gray-400">+358-457-398-3818</span>
          </p>
        </div>
        <div className="flex justify-around ml-[-100px] mt-6">
          <p className="font-bold text-3xl text-yellow-300">
            {" "}
            131 <span className="text-white">Projects Completed</span>
          </p>
        </div>
        <div className="flex justify-around ml-[-100px] mt-6">
          <Button variant="contained" className="w-32">
            <Link
              to="https://flowcv.com/resume/ftr0a87usm"
              target="_blank"
              className="text-yellow-300 font-bold"
            >
              Open CV
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;