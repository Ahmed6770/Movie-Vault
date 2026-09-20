import type { Movie } from "../types/movie";
import { useMovies } from "./useMovies";
import { searchMovies } from "../services/api";

function useSearch(query: string) {
  const searchedMovies = useMovies<Movie[]>(`search-${query}`, () => searchMovies(query),
  );
  return searchedMovies;
}

export default useSearch;
