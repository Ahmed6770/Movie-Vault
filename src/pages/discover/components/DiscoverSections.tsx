import MovieRow from "../../../components/shared/MovieRow";
import { useMovies } from "../../../hooks/useMovies";
import {
  getTrendingAll,
  getPopular,
  getPopularTV,
  getTopRated,
  getTopRatedTV,
  getNowPlaying,
  getUpcoming,
  getAction,
  getComedy,
  getHorror,
  getRomance,
  getTVAnimation,
  getTVSciFi,
  getTVCrime,
  getTVDrama,
  getTVAction,
} from "../../../services/api";

function DiscoverSections() {
  /* Fetch movie & TV categories */
  const trendingAllQuery = useMovies("trendingAll", getTrendingAll);
  const popularTVQuery = useMovies("popularTV", getPopularTV);
  const popularQuery = useMovies("popular", getPopular);
  const topRatedTVQuery = useMovies("topRatedTV", getTopRatedTV);
  const topRatedQuery = useMovies("topRated", getTopRated);
  const tvSciFiQuery = useMovies("tvSciFi", getTVSciFi);
  const actionQuery = useMovies("action", getAction);
  const tvCrimeQuery = useMovies("tvCrime", getTVCrime);
  const comedyQuery = useMovies("comedy", getComedy);
  const tvAnimationQuery = useMovies("tvAnimation", getTVAnimation);
  const tvDramaQuery = useMovies("tvDrama", getTVDrama);
  const horrorQuery = useMovies("horror", getHorror);
  const tvActionQuery = useMovies("tvAction", getTVAction);
  const romanceQuery = useMovies("romance", getRomance);
  const nowPlayingQuery = useMovies("nowPlaying", getNowPlaying);
  const upcomingQuery = useMovies("upcoming", getUpcoming);

  /* Movie & TV Rows Render */
  return (
    <div className="px-4 md:px-8 flex flex-col gap-2">
      <MovieRow title="Trending Now" movies={trendingAllQuery.data} to="/movies" />
      <MovieRow title="Popular TV Shows" movies={popularTVQuery.data} to="/tv" />
      <MovieRow title="Blockbuster Movies" movies={popularQuery.data} to="/movies" />
      <MovieRow title="Critically Acclaimed Series" movies={topRatedTVQuery.data} to="/tv" />
      <MovieRow title="Top Rated Movies" movies={topRatedQuery.data} to="/movies" />
      <MovieRow title="Sci-Fi & Fantasy Series" movies={tvSciFiQuery.data} to="/tv" />
      <MovieRow title="Action & Thrillers" movies={actionQuery.data} to="/movies" />
      <MovieRow title="Crime & Mystery Series" movies={tvCrimeQuery.data} to="/tv" />
      <MovieRow title="Comedy Hits" movies={comedyQuery.data} to="/movies" />
      <MovieRow title="Animation & Anime Series" movies={tvAnimationQuery.data} to="/tv" />
      <MovieRow title="Compelling TV Dramas" movies={tvDramaQuery.data} to="/tv" />
      <MovieRow title="Action & Adventure Series" movies={tvActionQuery.data} to="/tv" />
      <MovieRow title="Horror & Suspense" movies={horrorQuery.data} to="/movies" />
      <MovieRow title="Romantic Favorites" movies={romanceQuery.data} to="/movies" />
      <MovieRow title="Now Playing in Theaters" movies={nowPlayingQuery.data} to="/movies" />
      <MovieRow title="Upcoming Releases" movies={upcomingQuery.data} to="/movies" />
    </div>
  );
}

export default DiscoverSections;

