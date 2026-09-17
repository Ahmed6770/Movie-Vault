import { useState, useEffect } from "react";
import SharedMoviesPage from "../../components/shared/MoviesPage";
import { useMovies } from "../../hooks/useMovies";
import MoviesHero from "./components/MoviesHero";
import MoviesPagination from "./components/MoviesPagination";
import {
  getPopular,
  getTrending,
  getTopRated,
  getNowPlaying,
  getUpcoming,
  getAction,
  getComedy,
  getAnimation,
  getSciFi,
  getHorror,
  getDrama,
  getRomance,
  getThriller,
  getAdventure,
} from "../../services/api";

/* Movie categories & functions */
const api: any = {
  Popular: getPopular,
  Trending: getTrending,
  "Top Rated": getTopRated,
  "Now Playing": getNowPlaying,
  Upcoming: getUpcoming,
  Action: getAction,
  Comedy: getComedy,
  Animation: getAnimation,
  "Sci-Fi": getSciFi,
  Horror: getHorror,
  Drama: getDrama,
  Romance: getRomance,
  Thriller: getThriller,
  Adventure: getAdventure,
};

function MoviesPage() {
  const [selected, setSelected] = useState("Popular");
  const [page, setPage] = useState(1);

  /* Fetch movies by category and page */
  const query = useMovies(`movies-${selected}-${page}`, () =>
    api[selected](page),
  );
  const movies = (query.data as any) || [];

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
      <MoviesHero selected={selected} onSelect={changeCategory} />
      <SharedMoviesPage movies={movies} />
      <MoviesPagination page={page} onPageChange={setPage} />
    </div>
  );
}

export default MoviesPage;
