import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/api";
import { useMovies } from "../../hooks/useMovies";
import MovieDetailsHero from "./components/MovieDetailsHero";
import MovieDetailsInfo from "./components/MovieDetailsInfo";
import MovieTrailer from "./components/MovieTrailer";
import MovieCast from "./components/MovieCast";
import WhereToWatch from "./components/WhereToWatch";
import SimilarMovies from "./components/SimilarMovies";

function MovieDetailsPage() {
  const { id } = useParams();
  const query = useMovies(`movieDetails-${id}`, () =>
    getMovieDetails(id || ""),
  );
  const movie = query.data as any;

  if (!movie) return null;

  const watch = movie["watch/providers"]?.results?.US;
  const providers = watch?.flatrate || watch?.rent || watch?.buy;

  return (
    <div className="max-w-[1500px] mx-auto px-4 md:px-12 pb-24 space-y-8">
      <MovieDetailsHero movieDetails={movie} />
      <MovieDetailsInfo movieDetails={movie} />
      <MovieTrailer trailer={movie.videos?.results?.[0]?.key} />
      <MovieCast cast={movie.credits?.cast} />
      <WhereToWatch providers={providers} />
      <SimilarMovies movies={movie.similar?.results} />
    </div>
  );
}

export default MovieDetailsPage;
