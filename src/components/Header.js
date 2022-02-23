import React from "react";
import "../components/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header_icon'
          src='https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg'
          alt=''
        />
      </Link>

      <div className='header_center'>
        <input type='text' />
        <SearchIcon />
      </div>
      <div className='header_right'>
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
