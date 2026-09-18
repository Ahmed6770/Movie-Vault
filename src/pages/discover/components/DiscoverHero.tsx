import { NavLink } from "react-router-dom";
import { useMovies } from "../../../hooks/useMovies";
import { getTrendingAll } from "../../../services/api";

function DiscoverHero() {
  /* Fetch trending movie & TV data */
  const query = useMovies("trendingAll", getTrendingAll);
  if (!query.data) return null;
  const movie = (query.data as any)[0];
  const isTV = Boolean(movie.name || movie.first_air_date );
  const title = movie.title || movie.name;

  return (
    <div className="px-4 md:px-8">
      {/* Hero Banner */}
      <section className="relative w-full h-[420px] md:h-[600px] rounded-2xl md:rounded-3xl
        overflow-hidden border border-slate-800 mt-4 md:mt-6 mb-8 md:mb-10"
      >
        <img className="w-full h-full object-cover object-top"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={title}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090a10] to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 p-6 md:p-14 flex flex-col justify-center items-start max-w-xl z-10">
          <span className="text-xs font-bold text-blue-500 uppercase mb-2">
            #1 TRENDING NOW
          </span>
          <h1 className="text-2xl md:text-5xl font-extrabold text-white mb-3 line-clamp-2">
            {title}
          </h1>
          <p className="text-xs md:text-base text-slate-300 mb-4 md:mb-6 line-clamp-2 md:line-clamp-3">
            {movie.overview}
          </p>

          <NavLink className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs md:text-sm px-5
              md:px-6 py-2.5 md:py-3 rounded-xl shadow-lg transition-colors"
            to={isTV ? `/tv/${movie.id}` : `/movie/${movie.id}`}
          >
            Watch Details
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default DiscoverHero;
