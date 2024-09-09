import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../api";

import { getMovieDetails } from "../api";

import Header from "./header";
import Star from "../assets/rating-star.png";

interface MovieDetailsProps {}

export const MovieDetails: React.FC<MovieDetailsProps> = () => {
  const { id } = useParams<string>();
  const [movie, setMovie] = useState<Movie | null>(null);

  const imageUrlBase = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    async function fetchMovieDetails() {
      const movieId = id ? +id : 0;
      try {
        const response = await getMovieDetails(movieId);
        setMovie(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="w-full h-screen bg-BgContainerColor">
      <Header />
      <div className="w-[calc(100%-160px)] h-auto bg-NavBarBgColor pt-[53px] pb-4 px-[57px] mx-auto mt-8 rounded-[20px]">
        <div className="text-PopularMoviesTextColor font-medium text-2xl mb-7">
          Detalhes do filme:
        </div>
        <div className="max-w-[1182px] max-h-[480px] mb-8 flex pl-[23px] py-[15px] bg-BgContainerColor text-white rounded-[20px]">
          <div className="w-[320px] h-[400px] flex-shrink-0">
            <img
              src={`${imageUrlBase}${movie.poster_path}`}
              alt=""
              className="w-full h-full object-fill rounded-[20px]"
            />
          </div>
          <div className="mx-9 flex flex-col gap-5">
            <h1 className="text-4xl font-semibold">{movie.title}</h1>
            <h2 className="font-medium text-2xl">Sinopse:</h2>
            <p className="text-justify text-base font-normal">
              {movie.overview}
            </p>
            <span className="text-PopularMoviesTextColor items-center gap-8 flex text-2xl font-normal">
              {movie.vote_average.toFixed(1)}
              <img className="w-[25px] h-6" src={Star} alt="" />
            </span>
            <span className="text-xl font-normal">
              Data de lançamento:{" "}
              {new Date(movie.release_date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
