import { NavLink } from "react-router-dom";
import { useMovies } from "../../../hooks/useMovies";
import { getTrending } from "../../../services/api";

function DiscoverHero() {
  /* Fetch trending movie data */
  const query = useMovies("trending", getTrending);
  if (!query.data) return null;
  const movie = query.data[0];

  return (
    <div className="px-2 sm:px-4">
      <section className="relative w-full h-[500px] sm:h-[560px] md:h-[620px] rounded-2xl md:rounded-3xl overflow-hidden
       border border-slate-800/60 mt-6 mb-10">
        <img className="w-full h-full object-cover object-center"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080e] via-[#07080e]/60 to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 p-6 sm:p-12 md:p-16 flex flex-col justify-center items-start max-w-xl z-10">
          <span className="text-xs font-bold tracking-widest text-violet-400 uppercase mb-2">
            #1 TRENDING NOW
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3 tracking-wide leading-tight">
            {movie.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 line-clamp-3">
            {movie.overview}
          </p>

          <NavLink className="bg-violet-600 hover:bg-violet-700 text-white font-medium text-sm px-6 py-3 rounded-xl
           shadow-lg transition-colors"
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
