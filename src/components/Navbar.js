import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import staff from "../images/person.jpg";
import { Typography, TextField } from "@mui/material";
import SearchAppBar from './search-box';

const SiteNavbar = () => {
  const [inputText, setInputText] = useState("");
  const inputHandler = (data) => {
    setInputText(data);
  };
  return (
    <AppBar position="static">
      <Toolbar className=" text-white bg-gray-600">
        <div className="flex justify-betwween w-full">
          <div className="flex-1 flex flex-row space-x-2 font-bold">
            <img className="w-6" src={staff} />
            <div className="flex list-none space-x-6 items-center hover:cursor-pointer">
              <li>Event</li>
              <li>SOLO</li>
              <li>Multi</li>
              <li>community</li>
            </div>
          </div>
          <div className="flex-1">
            {/* <div className="search items-center">
              <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                // fullWidth
                label="Search"
              />
            </div> */}
            <SearchAppBar />
          </div>
          <div className="flex float-right ml-96 mr-0">
            <ul className="flex list-none hover:cursor-pointer items-center space-x-3">
              <li className="bg-gray-200 text-white px-8 py-2">LOG IN</li>
              <li className="text-gray-400 bg-yellow-300 px-8 py-2">SIGN UP</li>
            </ul>
          </div>
        </div>
        {/* <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/about" color="inherit">
          About
        </Button>
        <Button component={Link} to="/gallery" color="inherit">
          Resume
        </Button>
        <Button component={Link} to="/gallery" color="inherit">
          Services
        </Button>
        <Button component={Link} to="/gallery" color="inherit">
          Skills
        </Button>
        <Button component={Link} to="/gallery" color="inherit">
          Projects
        </Button>
        <Button component={Link} to="/gallery" color="inherit">
          My Blog
        </Button>
        <Button component={Link} to="/gallery" color="inherit">
          Contact
        </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default SiteNavbar;
