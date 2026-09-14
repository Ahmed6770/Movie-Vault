import { useSearchParams } from "react-router-dom";
import MoviesPage from "../../components/shared/MoviesPage";
import useSearch from "../../hooks/useSearch";
import NoResults from "./components/NoResults";
function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const result = useSearch(query);
  const movies = result.data as any || [];
  
  if (result.isLoading) return null;
  return (
    <>
    {movies.length > 0 ? (
      <MoviesPage movies={movies} />
    ) : (
      <NoResults query={query} />
    )}
    </>
  )
}

export default SearchPage;
