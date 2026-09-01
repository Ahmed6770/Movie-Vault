import { Star, Heart } from "lucide-react";
import posterImg from "../../assets/poster.png";

function MovieCard() {
  return (
    <div className="group cursor-pointer flex flex-col w-full">
      <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden mb-2 bg-slate-900">
        {/* Movie Poster Image */}
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={posterImg}
          alt="Dune: Part Two"
        />

        {/* Rating Badge */}
        <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/70 px-1.5 sm:px-2 py-0.5
         rounded-md text-[10px] sm:text-xs font-bold text-white">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span>8.7</span>
        </div>

        {/* Favorite btn */}
        <button className="absolute top-2 right-2 p-1.5 rounded-md bg-black/70 text-slate-300 
        hover:text-rose-500 hover:bg-black/90"
          title="Add to Favorites"
        >
          <Heart className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Movie Info */}
      <div className="flex flex-col">
        <h3 className="font-semibold text-xs sm:text-sm text-white truncate group-hover:text-violet-400
         transition-colors">
          Dune: Part Two
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">2024</p>
      </div>
    </div>
  );
}

export default MovieCard;