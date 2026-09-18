import { useState, useEffect } from "react";
import SharedMoviesPage from "../../components/shared/MoviesPage";
import { useMovies } from "../../hooks/useMovies";
import TVHero from "./components/TVHero";
import MoviesPagination from "../movies/components/MoviesPagination";
import {
  getPopularTV,
  getTrendingTV,
  getTopRatedTV,
  getTVAnimation,
  getTVComedy,
  getTVCrime,
  getTVDrama,
  getTVSciFi,
  getTVAction,
  getTVMystery,
} from "../../services/api";

/* TV categories & functions */
const api: any = {
  Popular: getPopularTV,
  Trending: getTrendingTV,
  "Top Rated": getTopRatedTV,
  Animation: getTVAnimation,
  Comedy: getTVComedy,
  Crime: getTVCrime,
  Drama: getTVDrama,
  "Sci-Fi": getTVSciFi,
  Action: getTVAction,
  Mystery: getTVMystery,
};

function TVPage() {
  const [selected, setSelected] = useState("Popular");
  const [page, setPage] = useState(1);

  /* Fetch TV shows by category and page */
  const query = useMovies(`tv-${selected}-${page}`, () =>
    api[selected](page),
  );
  const shows = (query.data as any) || [];

  /* Scroll to top on page or category change */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, selected]);

  function changeCategory(name: string) {
    setSelected(name);
    setPage(1);
  }

  return (
    <div>
      <TVHero selected={selected} onSelect={changeCategory} />
      <SharedMoviesPage movies={shows} />
      <MoviesPagination page={page} onPageChange={setPage} />
    </div>
  );
}

export default TVPage;
