import logo from "../assets/ZavaMovies 2.png";
import SearchBar from "./searchBar";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center px-20 h-[60px] bg-NavBarBgColor">
      <img src={logo} alt="Logo da ZavaMovies" />
      <SearchBar />
    </div>
  );
}
