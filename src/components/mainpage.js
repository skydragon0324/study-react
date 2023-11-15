import React, { useState } from "react";
import staff from "../images/person.jpg";

const MainPage = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <div className="w-full justify-evenly flex bg-black items-center h-24">
        <div className="text-white text-4xl">React Router Tutorial</div>
        <div className=" flex space-x-2 text-white text-3xl items-center">
          <img src={staff} className="w-8 rounded-lg" />
          <div>Jade Tomas | 29.5K views</div>
        </div>
      </div>
      <div className="mt-12 container flex justify-evenly mx-auto p-6 h-48 text-2xl  bg-black">
        <div className="text-white pt-6">
          <p className="font-bold mb-6">Take part in our annual survey</p>
          <p>
            CodinGame needs you to help the world understand what it meams to
            work in tech today
          </p>
        </div>
        <div className=" bg-yellow-400 m-12 text-black p-2 text-2xl">
          <button className="font-bold">SHARE YOUR EXPERIENCE</button>
        </div>
      </div>
      <div className="mt-12 container justify-evenly mx-auto h-48 text-2xl bg-white">
        <div className="text-3xl text-yellow-400 border-b-2 border-b-black">
          <p className="p-6">React Router Tutorial</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
