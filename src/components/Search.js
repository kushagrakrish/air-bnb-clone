import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "../components/Search.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PeopleIcon from "@mui/icons-material/People";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleselect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className='search'>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={() => handleselect()}
      />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type='number' />
      <Button onClick={() => navigate("search")}>Search Airbnb</Button>
    </div>
  );
};

export default Search;
