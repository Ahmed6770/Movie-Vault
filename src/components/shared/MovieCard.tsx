import { Star, Heart } from "lucide-react";
import posterFallback from "../../assets/poster.png";

type MovieCardProps = {
  movie: {
    id: number;
    title: string;
    poster_path?: string;
    vote_average?: number;
    release_date?: string;
  };
}

function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : posterFallback;

  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "0.0";
  const year = movie.release_date ? movie.release_date.split("-")[0] : "—";

  return (
    <div className="group cursor-pointer flex flex-col w-full">
      <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden mb-2 bg-slate-900">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={posterUrl}
          alt={movie.title}
          loading="lazy"
        />

        <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/70 px-2 py-0.5 rounded-md text-xs font-bold text-white">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span>{rating}</span>
        </div>

        <button
          className="absolute top-2 right-2 p-1.5 rounded-md bg-black/70 text-slate-300 hover:text-rose-500 hover:bg-black/90"
          title="Add to Favorites"
        >
          <Heart className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex flex-col">
        <h3 className="font-semibold text-xs sm:text-sm text-white truncate group-hover:text-violet-400 transition-colors">
          {movie.title}
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">
          {year}</p>
      </div>
    </div>
  );
}

export default MovieCard;