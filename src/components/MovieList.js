import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6">
      <h1 className="text-xl md:text-2xl lg:text-3xl py-4 text-white font-bold">
        {title}
      </h1>
      <div className="overflow-x-auto overflow-y-hidden no-scrollbar">
        <div className="flex gap-4 w-max pr-4">
          {(movies || []).map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
