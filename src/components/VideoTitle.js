import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-12 sm:px-20 absolute text-white bg-gradient-to-r from-black via-transparent to-transparent">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 max-w-2xl">
        {title}
      </h1>
      <p className="text-base sm:text-lg max-w-sm mb-5 leading-relaxed opacity-90">
        {overview}
      </p>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-white text-black py-2.5 px-6 text-base sm:text-lg font-semibold rounded hover:bg-opacity-80 transition">
          <FaPlay />
          Play
        </button>
        <button className="flex items-center gap-2 bg-gray-500 bg-opacity-60 text-white py-2.5 px-6 text-base sm:text-lg font-semibold rounded hover:bg-opacity-80 transition">
          <FaInfoCircle />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
