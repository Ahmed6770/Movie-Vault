import { LayoutGrid, Eye, Bookmark, Heart } from "lucide-react";
import libraryImg from "../../../assets/library.png";

type LibraryHeroProps = {
  total: number;
  watched: number;
  watchlist: number;
  favorites: number;
};
function LibraryHero({total, watched, watchlist, favorites}: LibraryHeroProps) {
  return (
    <div className="mb-8">
      {/* Header */}
      <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden border border-slate-800 bg-[#12131f] flex items-center justify-between px-6 md:px-12 mb-6">
        <img className="absolute inset-0 w-full h-full object-cover object-center"
          src={libraryImg}
          alt="My Library"
        />

        {/* Title & Subtitle */}
        <div className="relative z-10 max-w-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            My Library
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Your personal movie collection. Keep track, discover, and enjoy.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {/* Total Movies */}
        <div className="bg-[#1e1730] border border-[#352754] rounded-2xl p-4 md:p-5 flex flex-col justify-between h-28">
          <div className="flex items-center justify-between">
            <span className="text-2xl md:text-3xl font-bold text-white">{total}</span>
            <LayoutGrid className="w-5 h-5 text-purple-400" />
          </div>
          <span className="text-xs font-medium text-slate-400">Total Movies</span>
        </div>

        {/* Watched */}
        <div className="bg-[#121e33] border border-[#203456] rounded-2xl p-4 md:p-5 flex flex-col justify-between h-28">
          <div className="flex items-center justify-between">
            <span className="text-2xl md:text-3xl font-bold text-white">{watched}</span>
            <Eye className="w-5 h-5 text-blue-400" />
          </div>
          <span className="text-xs font-medium text-slate-400">Watched</span>
        </div>

        {/* Watchlist */}
        <div className="bg-[#24180e] border border-[#452c17] rounded-2xl p-4 md:p-5 flex flex-col justify-between h-28">
          <div className="flex items-center justify-between">
            <span className="text-2xl md:text-3xl font-bold text-white">{watchlist}</span>
            <Bookmark className="w-5 h-5 text-amber-400" />
          </div>
          <span className="text-xs font-medium text-slate-400">Watchlist</span>
        </div>

        {/* Favorites */}
        <div className="bg-[#241018] border border-[#471d2b] rounded-2xl p-4 md:p-5 flex flex-col justify-between h-28">
          <div className="flex items-center justify-between">
            <span className="text-2xl md:text-3xl font-bold text-white">{favorites}</span>
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
          </div>
          <span className="text-xs font-medium text-slate-400">Favorites</span>
        </div>
      </div>
    </div>
  );
}

export default LibraryHero;
