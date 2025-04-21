import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-6 sm:px-12 absolute text-white bg-gradient-to-r from-black via-transparent to-transparent">
      <h1 className="text-3xl sm:text-5xl font-bold mb-3 max-w-2xl">{title}</h1>
      <p className="text-sm sm:text-lg max-w-xs sm:max-w-md mb-4 leading-relaxed text-gray-200">
        {overview}
      </p>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-white text-black py-2 px-5 text-sm sm:text-base font-semibold rounded hover:bg-opacity-80 transition">
          <FaPlay />
          Play
        </button>
        <button className="flex items-center gap-2 bg-gray-600 bg-opacity-70 text-white py-2 px-5 text-sm sm:text-base font-semibold rounded hover:bg-opacity-70 transition">
          <FaInfoCircle />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
