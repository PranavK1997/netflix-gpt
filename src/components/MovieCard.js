import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-32 md:w-40 lg:w-48 flex-shrink-0 hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-48 md:h-56 object-cover rounded-md shadow-md"
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
