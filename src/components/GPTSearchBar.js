import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          className="flex-grow px-4 py-3 text-lg rounded-lg bg-white/90 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder={language[langKey].gptSearchPlaceholder}
        />
        <button className="px-6 py-3 bg-red-700 text-white text-lg font-semibold rounded-lg hover:bg-red-800 transition duration-300 shadow-md">
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
