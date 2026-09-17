import MovieRow from "../../../components/shared/MovieRow";
import { useMovies } from "../../../hooks/useMovies";
import {
  getTrending,
  getPopular,
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
} from "../../../services/api";

function DiscoverSections() {
  /* Fetch movie categories */
  const trendingQuery = useMovies("trending", getTrending);
  const popularQuery = useMovies("popular", getPopular);
  const topRatedQuery = useMovies("topRated", getTopRated);
  const nowPlayingQuery = useMovies("nowPlaying", getNowPlaying);
  const upcomingQuery = useMovies("upcoming", getUpcoming);
  const actionQuery = useMovies("action", getAction);
  const comedyQuery = useMovies("comedy", getComedy);
  const animationQuery = useMovies("animation", getAnimation);
  const sciFiQuery = useMovies("sciFi", getSciFi);
  const horrorQuery = useMovies("horror", getHorror);
  const dramaQuery = useMovies("drama", getDrama);
  const romanceQuery = useMovies("romance", getRomance);
  const thrillerQuery = useMovies("thriller", getThriller);
  const adventureQuery = useMovies("adventure", getAdventure);

  /* Movie Rows Render */
  return (
    <div className="px-4 md:px-8 flex flex-col gap-2">
      <MovieRow title="Trending Movies" movies={trendingQuery.data} to="/movies" />
      <MovieRow title="Popular Movies" movies={popularQuery.data} to="/movies" />
      <MovieRow title="Top Rated Movies" movies={topRatedQuery.data} to="/movies" />
      <MovieRow title="Now Playing in Theaters" movies={nowPlayingQuery.data} to="/movies" />
      <MovieRow title="Upcoming Movies" movies={upcomingQuery.data} to="/movies" />
      <MovieRow title="Action & Thrillers" movies={actionQuery.data} to="/movies" />
      <MovieRow title="Comedy Hits" movies={comedyQuery.data} to="/movies" />
      <MovieRow title="Animation & Family" movies={animationQuery.data} to="/movies" />
      <MovieRow title="Sci-Fi & Fantasy" movies={sciFiQuery.data} to="/movies" />
      <MovieRow title="Horror & Mystery" movies={horrorQuery.data} to="/movies" />
      <MovieRow title="Drama Hits" movies={dramaQuery.data} to="/movies" />
      <MovieRow title="Romantic Movies" movies={romanceQuery.data} to="/movies" />
      <MovieRow title="Thrillers" movies={thrillerQuery.data} to="/movies" />
      <MovieRow title="Adventure & Exploration" movies={adventureQuery.data} to="/movies" />
    </div>
  );
}

export default DiscoverSections;

