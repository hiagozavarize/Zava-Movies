import React from "react";

import Star from "../assets/rating-star.png";
import { ChevronRight } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { Movie } from "../api";

interface MovieCardProps {
  movie: Movie;
}
export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const imageUrlBase = "https://image.tmdb.org/t/p/w300";
  const navigate = useNavigate();

  return (
    <div className="w-[calc(100%-10px)] py-3 h-[218px] flex rounded-[20px] bg-BgContainerColor">
      <div className="flex justify-center items-center m-5">
        <div className="w-[150px] h-[180px]">
          <img
            src={`${imageUrlBase}${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            className="w-full h-full rounded-[20px]"
          />
        </div>
      </div>
      <div className="text-white ml-4 mt-7">
        <h1 className="font-semibold text-4xl">{movie.title}</h1>
        <div className="flex items-center gap-2 text-PopularMoviesTextColor my-3">
          <span className="text-2xl">{movie.vote_average.toFixed(1)}</span>
          <img src={Star} alt="rating star" />
        </div>
        <span
          onClick={() => navigate(`/movies/${movie.id}`)}
          className="flex underline cursor-pointer"
        >
          Mais detalhes {<ChevronRight />}
        </span>
      </div>
    </div>
  );
};
