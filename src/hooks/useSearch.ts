import { useMovies } from "./useMovies";
import { searchMovies } from "../services/api";

function useSearch(query: string) {
  const searchedMovies = useMovies(`search-${query}`, () => searchMovies(query),
  );
  return searchedMovies;
}

export default useSearch;
