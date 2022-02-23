import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Banner.css";
import Search from "./Search";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='banner'>
      <div className='banner__search'>
        {showSearch && <Search />}
        <Button
          variant='outlined'
          className='banner__searchButton'
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className='banner_info'>
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getway to uncover hidden gems near you.
        </h5>
        <Button variant='outlined' onClick={() => navigate("search")}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;
