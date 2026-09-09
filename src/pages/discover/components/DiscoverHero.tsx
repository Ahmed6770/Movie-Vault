import { NavLink } from "react-router-dom";
import { useMovies } from "../../../hooks/useMovies";
import { getTrending } from "../../../services/api";

function DiscoverHero() {
  /* Fetch trending movie data */
  const query = useMovies("trending", getTrending);
  if (!query.data) return null;
  const movie = (query.data as any)[0];

  return (
    <div className="px-4 md:px-8">
      {/* Hero Banner */}
      <section
        className="relative w-full h-[420px] md:h-[600px] rounded-2xl md:rounded-3xl
        overflow-hidden border border-slate-800 mt-4 md:mt-6 mb-8 md:mb-10"
      >
        <img className="w-full h-full object-cover object-center"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080e] to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 p-6 md:p-14 flex flex-col justify-center items-start max-w-xl z-10">
          <span className="text-xs font-bold text-violet-400 uppercase mb-2">
            #1 TRENDING NOW
          </span>
          <h1 className="text-2xl md:text-5xl font-extrabold text-white mb-3 line-clamp-2">
            {movie.title}
          </h1>
          <p className="text-xs md:text-base text-slate-300 mb-4 md:mb-6 line-clamp-2 md:line-clamp-3">
            {movie.overview}
          </p>

          <NavLink className="bg-violet-600 hover:bg-violet-700 text-white font-medium text-xs md:text-sm px-5
             md:px-6 py-2.5 md:py-3 rounded-xl shadow-lg transition-colors"
            to={`/movie/${movie.id}`}
          >
            Watch Details
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default DiscoverHero;
