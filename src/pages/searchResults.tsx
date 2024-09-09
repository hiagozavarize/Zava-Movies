import { useLocation } from "react-router-dom";

import Header from "../components/header";

import { MovieCard } from "../components/listOfFoundMovies";
import { Movie } from "../api";

export default function SearchResults() {
  const location = useLocation();
  const searchResults = location.state?.searchResults;

  if (!searchResults) {
    return <div>Nenhum resultado encontrado</div>;
  }

  return (
    <div className="w-full h-full bg-BgContainerColor">
      <Header />
      <div className="w-[calc(100%-160px)] h-auto bg-NavBarBgColor pt-[53px] pb-4 px-[57px] mx-auto mt-8 rounded-[20px]">
        <div className="text-PopularMoviesTextColor font-medium text-2xl mb-7">
          Resultado da busca:
        </div>
        <div className="w-full grid grid-cols-1 gap-5">
          {searchResults.map((movie: Movie, index: number) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
