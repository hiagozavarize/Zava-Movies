import Header from "../components/header";
import ListOfPopularMovies from "../components/listOfPopularMovies";

export default function Home() {
  return (
    <div className="w-full h-full bg-BgContainerColor">
      <Header />
      <ListOfPopularMovies />
    </div>
  );
}
