import { Star, Plus, Heart, Play } from "lucide-react";

type MovieDetailsHeroProps = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average?: number;
  release_date: string;
  runtime?: number;
  overview: string;
  genres?: { id: number; name: string }[];
};

function MovieDetailsHero({
  movieDetails,
}: {
  movieDetails: MovieDetailsHeroProps;
}) {
  if (!movieDetails) return null;

  return (
    <div className="relative w-full md:min-h-[500px] flex flex-col md:justify-center">
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <img className="w-full h-full object-cover object-top"
          src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path || movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090a10] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a10] to-transparent" />
      </div>

      {/* Mobile poster*/}
      <div className="md:hidden relative -mx-4 h-64 sm:h-72 overflow-hidden mb-4">
        <img className="w-full h-full object-cover object-top"
          src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path || movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a10] to-transparent" />
      </div>
      {/* Details */}
      <div className="relative z-10 max-w-2xl space-y-3.5 md:space-y-4">
        <h1 className="text-2xl md:text-5xl font-bold text-white">
          {movieDetails.title}
        </h1>

        <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-400 font-medium">
          <span>{movieDetails.release_date.split("-")[0]}</span>
          <span>•</span>
          <span>{movieDetails.runtime} min</span>
        </div>

        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="font-bold text-white text-sm">
            {movieDetails.vote_average?.toFixed(1)}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {movieDetails.genres?.map((genre) => (
            <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs text-slate-300"
              key={genre.id}
            >
              {genre.name}
            </span>
          ))}
        </div>

        <p className="text-slate-300 text-xs md:text-sm max-w-xl">
          {movieDetails.overview}
        </p>

        {/* Btns */}
        <div className="flex flex-col md:flex-row gap-3 pt-2">
          <button className="cursor-pointer w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700
            text-white px-7 py-3 rounded-xl text-sm font-semibold transition-colors"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Add to Watchlist</span>
          </button>

          <div className="grid grid-cols-2 md:flex gap-3 w-full md:w-auto">
            <button className="cursor-pointer flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border
              border-slate-800 text-slate-200 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Mark as Watched</span>
            </button>

            <button className="cursor-pointer flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border
              border-slate-800 text-slate-200 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors"
            >
              <Heart className="w-4 h-4" />
              <span>Add to Favorite</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsHero;
