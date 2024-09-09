import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { searchMovieApi } from "../api";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const searchMovie = async () => {
    const searchResults = await searchMovieApi(search);
    navigate("/filmes", { state: { searchResults } });
  };

  return (
    <div className="searchbar relative flex items-center">
      <input
        className="rounded-[20px] bg-BgContainerColor text-white outline-none px-[30px] py-[3px] w-[500px] h-[30px]"
        type="text"
        placeholder="Pesquise um filme"
        value={search}
        onChange={handleSearch}
      />
      <Search
        onClick={searchMovie}
        className="cursor-pointer absolute right-3"
        color="#ffffff"
      />
    </div>
  );
}
