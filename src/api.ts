import axios from "axios";

// const API_KEY = "5767ec05a7dab6af9b4fc3765edaf180";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const LANGUAGE = "pt-br";

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: LANGUAGE,
  },
});

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export async function getAllPopularMovies() {
  try {
    const response = await api.get("/movie/popular");
    const popularMovies = response.data.results;
    return popularMovies;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieDetails(id: number) {
  try {
    const response = await api.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchMovieApi(query: string) {
  try {
    const response = await api.get("/search/movie", {
      params: {
        query,
      },
    });
    const searchResults = response.data.results;
    return searchResults;
  } catch (error) {
    console.error(error);
  }
}
