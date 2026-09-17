import { Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LibraryContext } from "../../context/LibraryContext";

type MovieCardProps = {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    vote_average?: number;
    release_date: string;
  };
  btn?: any;
};

function MovieCard({ movie, btn }: MovieCardProps) {
  const { favorites, handleFavorites } = useContext(LibraryContext);
  const isFavorite = favorites?.some((item: { id: number }) => item.id === movie.id);

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "0.0";
  const year = movie.release_date ? movie.release_date.split("-")[0] : "";

  return (
    <div className="group relative flex flex-col w-full">
      <Link className="cursor-pointer flex flex-col w-full"
        to={`/movie/${movie.id}`}
      >
        <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden mb-2 bg-[#12131f]">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src={posterUrl}
            alt={movie.title}
            loading="lazy"
          />

          <div className="absolute top-2 left-2 flex items-center gap-1 bg-black px-2 py-0.5 rounded-md text-xs font-bold text-white">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{rating}</span>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold text-xs md:text-sm text-white truncate group-hover:text-blue-500 transition-colors">
            {movie.title}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">{year}</p>
        </div>
      </Link>
      {/* Change the btn  */}
      {btn ? btn : (
        <button className="cursor-pointer absolute top-2 right-2 p-1.5 rounded-md bg-black text-slate-300 hover:text-rose-500 z-10"
          onClick={() => handleFavorites(movie)}
          title="Add to Favorites"
        >
          <Heart className={`w-3.5 h-3.5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
        </button>
      )}
    </div>
  );
}

export default MovieCard;
