import { Star, Plus, Heart, Play, Check } from "lucide-react";
import { useContext } from "react";
import { LibraryContext } from "../../../context/LibraryContext";
import type { Movie } from "../../../types/movie";

type TVDetailsHeroProps = {
  tvDetails: Movie;
};

function TVDetailsHero({ tvDetails }: TVDetailsHeroProps) {
  const { watchlist, watched, favorites, handleWatchlist, handleWatched, handleFavorites } = useContext(LibraryContext)!;

  if (!tvDetails) return null;

  const isWatchlist = watchlist.some((item) => item.id === tvDetails.id);
  const isWatched = watched.some((item) => item.id === tvDetails.id);
  const isFavorites = favorites.some((item) => item.id === tvDetails.id);

  return (
    <div className="relative w-full md:min-h-[500px] flex flex-col md:justify-center">
      {/* Backdrop poster */}
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <img className="w-full h-full object-cover object-top"
          src={`https://image.tmdb.org/t/p/original${tvDetails.backdrop_path || tvDetails.poster_path}`}
          alt={tvDetails.name}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090a10] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a10] to-transparent" />
      </div>

      {/* Mobile poster */}
      <div className="md:hidden relative -mx-4 h-64 sm:h-72 overflow-hidden mb-4">
        <img className="w-full h-full object-cover object-top"
          src={`https://image.tmdb.org/t/p/original${tvDetails.backdrop_path || tvDetails.poster_path}`}
          alt={tvDetails.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a10] to-transparent" />
      </div>

      {/* Movie Info */}
      <div className="relative z-10 max-w-2xl space-y-3.5 md:space-y-4">
        <h1 className="text-2xl md:text-5xl font-bold text-white">
          {tvDetails.name}
        </h1>

        <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-400 font-medium">
          <span>{tvDetails.first_air_date ? tvDetails.first_air_date.split("-")[0] : ""}</span>
          <span>•</span>
          <span>{tvDetails.number_of_seasons} Seasons</span>
        </div>

        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="font-bold text-white text-sm">
            {tvDetails.vote_average ? tvDetails.vote_average.toFixed(1) : "0.0"}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {tvDetails.genres?.map((genre) => (
            <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs text-slate-300"
              key={genre.id}
            >
              {genre.name}
            </span>
          ))}
        </div>

        <p className="text-slate-300 text-xs md:text-sm max-w-xl">
          {tvDetails.overview}
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-3 pt-2">
          {/* Add to Watchlist btn */}
          <button
            className="cursor-pointer w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600
              hover:bg-blue-700 text-white px-7 py-3 rounded-xl text-sm font-semibold transition-colors"
            onClick={() => handleWatchlist(tvDetails)}
          >
            {isWatchlist ? (
              <Check className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 fill-white" />
            )}
            <span>
              {isWatchlist ? "Added to Watchlist" : "Add to Watchlist"}
            </span>
          </button>

          {/* Mark as Watched btn */}
          <div className="grid grid-cols-2 md:flex gap-3 w-full md:w-auto">
            <button className="cursor-pointer flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800
              border border-slate-800 text-slate-200 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors"
              onClick={() => handleWatched(tvDetails)}
            >
              {isWatched ? (
                <Check className="w-4 h-4" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
              <span>{isWatched ? "Added to Watched" : "Mark as Watched"}</span>
            </button>

            {/* Add to Favorite btn */}
            <button className="cursor-pointer flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800
              border border-slate-800 text-slate-200 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors"
              onClick={() => handleFavorites(tvDetails)}
            >
              <Heart className={`w-4 h-4 ${isFavorites ? "fill-red-500 text-red-500" : ""}`}
              />
              <span>
                {isFavorites ? "Added to Favorites" : "Add to Favorites"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TVDetailsHero;
