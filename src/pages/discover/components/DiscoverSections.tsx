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

  /* Movie Rows Render */
  return (
    <div className="flex flex-col gap-2">
      <MovieRow title="Trending Movies" movies={trendingQuery.data} />
      <MovieRow title="Popular Movies" movies={popularQuery.data} />
      <MovieRow title="Top Rated Movies" movies={topRatedQuery.data} />
      <MovieRow title="Now Playing in Theaters" movies={nowPlayingQuery.data} />
      <MovieRow title="Upcoming Movies" movies={upcomingQuery.data} />
      <MovieRow title="Action & Thrillers" movies={actionQuery.data} />
      <MovieRow title="Comedy Hits" movies={comedyQuery.data} />
      <MovieRow title="Animation & Family" movies={animationQuery.data} />
      <MovieRow title="Sci-Fi & Fantasy" movies={sciFiQuery.data} />
      <MovieRow title="Horror & Mystery" movies={horrorQuery.data} />
    </div>
  );
}

export default DiscoverSections;
