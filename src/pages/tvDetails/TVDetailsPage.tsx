import type { Movie } from "../../types/movie";
import { useParams } from "react-router-dom";
import { getTVDetails, getSimilarTV } from "../../services/api";
import { useMovies } from "../../hooks/useMovies";
import TVDetailsHero from "./components/TVDetailsHero";
import TVDetailsInfo from "./components/TVDetailsInfo";
import MovieTrailer from "../movieDetails/components/MovieTrailer";
import MovieCast from "../movieDetails/components/MovieCast";
import WhereToWatch from "../movieDetails/components/WhereToWatch";
import SimilarMovies from "../movieDetails/components/SimilarMovies";

function TVDetailsPage() {
  const { id } = useParams();
  const query = useMovies(`tvDetails-${id}`, () =>
    getTVDetails(id || ""),
  );
  const similar = useMovies<Movie[]>(`similarTV-${id}`, () =>
    getSimilarTV(id || ""),
  );
  const tv = query.data;
  const similarShows = similar.data || [];

  if (!tv) return null;

  const watch = tv["watch/providers"]?.results?.US;
  const providers = watch?.flatrate || watch?.rent || watch?.buy;

  return (
    <div className="max-w-[1500px] mx-auto px-4 md:px-12 pb-24 space-y-8">
      <TVDetailsHero tvDetails={tv} />
      <TVDetailsInfo tvDetails={tv} />
      <MovieTrailer trailer={tv.videos?.results?.[0]?.key} />
      <MovieCast cast={tv.credits?.cast} />
      <WhereToWatch providers={providers} />
      <SimilarMovies movies={similarShows} />
    </div>
  );
}

export default TVDetailsPage;

