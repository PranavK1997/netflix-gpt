import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BACKGROUND_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <img
          src={BACKGROUND_IMG}
          alt="background-img"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
