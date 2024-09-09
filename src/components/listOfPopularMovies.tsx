import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { ChevronLeft, ChevronRight } from "lucide-react";

import Star from "../assets/rating-star.png";
import { PaginationButton } from "./paginationButton";

import { getAllPopularMovies } from "../api";
import { Movie } from "../api";

export default function ListOfPopularMovies() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const imageUrlBase = "https://image.tmdb.org/t/p/w500";
  const moviesPerPage = 5;

  // Obter o número da página a partir do parâmetro da URL
  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const response = await getAllPopularMovies();
        const totalMovies = response.length;
        setTotalPages(Math.ceil(totalMovies / moviesPerPage));
        const start = (currentPage - 1) * moviesPerPage;
        const end = start + moviesPerPage;
        setPopularMovies(response.slice(start, end));
      } catch (error) {
        console.error(error);
      }
    }
    fetchPopularMovies();
  }, [currentPage]);

  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setSearchParams({ page: String(page) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      changePage(currentPage + 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-[calc(100%-160px)] h-auto bg-NavBarBgColor pt-[53px] px-[57px] mx-auto mt-8 rounded-[20px]">
      <div className="text-PopularMoviesTextColor ml-7 font-medium text-[24px] mx-auto mb-[23px]">
        <h1>Mais populares</h1>
      </div>
      <div className="w-full grid grid-cols-1 gap-5">
        {popularMovies.map((movie, index) => (
          <div
            key={index}
            className="max-w-[1182px] max-h-[480px] flex border-[0.5px] pl-[23px] py-[15px] border-white  text-white rounded-[20px]"
          >
            <div className="w-[320px] h-auto bg-BgContainerColor rounded-[20px] px-[20px] pt-[20px]">
              <div className="w-[250px] h-[300px] bg-PosterColor flex justify-center items-center rounded-[20px]">
                <img
                  src={`${imageUrlBase}${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                  className="w-full h-full rounded-[20px]"
                />
              </div>
              <div className="mt-3">
                <h3 className="max-w-[250px] font-semibold text-lg truncate">
                  {movie.title}
                </h3>
                <div className="flex items-center gap-2 text-PopularMoviesTextColor my-3">
                  <span>
                    <img src={Star} alt="rating star" />
                  </span>
                  <span>{movie.vote_average.toFixed(1)}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 ml-[77px] mr-[47px]">
              <h1 className="font-semibold text-xl">Sinopse:</h1>
              <p className="text-base font-normal text-justify overflow-auto">
                {movie.overview ? movie.overview : "Sinopse indisponível."}
              </p>
              <span className="text-base font-medium mt-11">
                Data de lançamento:{" "}
                {new Date(movie.release_date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <div className="flex w-[600px] h-[40px] text-white rounded-[20px] items-center bg-PosterColor justify-around gap-4 my-5">
          <div className="flex items-center text-white">
            <ChevronLeft />
            <span className="cursor-pointer" onClick={goToPreviousPage}>
              Anterior
            </span>
          </div>
          <span>|</span>
          <div className="flex items-center justify-center gap-9">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationButton
                key={page}
                page={page}
                currentPage={currentPage}
                onClick={() => changePage(page)}
              />
            ))}
          </div>
          <span className="flex text-center">|</span>
          <div className="flex items-center text-white">
            <span
              className="cursor-pointer flex text-center"
              onClick={goToNextPage}
            >
              Próximo
            </span>
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
