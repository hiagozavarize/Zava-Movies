import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="searchbar relative flex items-center">
      <input
        className="rounded-[20px] bg-BgContainerColor text-white outline-none px-[30px] py-[3px] w-[500px] h-[30px]"
        type="text"
        placeholder="Pesquise um filme"
      />
      <Search
        onClick={() => {}}
        className="cursor-pointer absolute right-3"
        color="#ffffff"
      />
    </div>
  );
}
