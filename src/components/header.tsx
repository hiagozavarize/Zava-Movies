import { useNavigate } from "react-router-dom";

import logo from "../assets/ZavaMovies 2.png";
import SearchBar from "./searchBar";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="w-full cursor-pointer flex justify-between items-center px-20 h-[60px] bg-NavBarBgColor">
      <img
        onClick={() => {
          navigate("/");
        }}
        src={logo}
        alt="Logo da ZavaMovies"
      />
      <SearchBar />
    </div>
  );
}
