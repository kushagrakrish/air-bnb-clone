import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import React from "react";
import "../components/SearchResult.css";
import StarIcon from "@mui/icons-material/Star";

const SearchResult = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className='searchResult'>
      <img src={img} alt='' />
      <FavoriteBorderRoundedIcon className='searchResult_heart' />
      <div className='searchResult_info'>
        <div className='searchResult_infoTop'>
          <p>{location}</p>
          <h3>{title}</h3>
          <p>___</p>
          <p>{description}</p>
        </div>
        <div className='searchResult_infoBottom'>
          <div className='searchresult_stars'>
            <StarIcon className='searchResult_star' />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className='searchResult_price'>
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
