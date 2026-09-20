import LibraryHero from "./components/LibraryHero";
import MovieRow from "../../components/shared/MovieRow";
import EmptyList from "../../components/shared/EmptyList";
import { useContext } from "react";
import { LibraryContext } from "../../context/LibraryContext";
import { Bookmark, Ticket } from "lucide-react";

function LibraryPage() {
  const { watched, watchlist, favorites, handleWatchlist, handleWatched } = useContext(LibraryContext)!;
  const total = watched.length + watchlist.length + favorites.length;

  return (
    <div className="max-w-[1500px] mx-auto px-4 md:px-12 py-8">
      <LibraryHero 
        total={total}
        watched={watched.length}
        watchlist={watchlist.length}
        favorites={favorites.length}
      />
      {total === 0 ? (
        <EmptyList title="library" />
      ) : (
        <div>
          <MovieRow title="Favorites" movies={favorites} to="/favorites" />
          <MovieRow
            title="Upcoming to Watch"
            movies={watchlist}
            to="/watchlist"
            btn={(movie) => (
              <button className="cursor-pointer absolute top-2 right-2 p-1.5 rounded-md bg-black text-slate-300 hover:text-amber-400 z-10"
                onClick={() => handleWatchlist(movie)}
              >
                <Bookmark className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </button>
            )}
          />
          <MovieRow
            title="Recently Watched"
            movies={watched}
            to="/watched"
            btn={(movie) => (
              <button className="cursor-pointer absolute top-2 right-2 p-1.5 rounded-md bg-black text-slate-300 hover:text-blue-400 z-10"
                onClick={() => handleWatched(movie)}
              >
                <Ticket className="w-3.5 h-3.5 fill-blue-500 text-blue-500" />
              </button>
            )}
          />
        </div>
      )}
    </div>
  );
}

export default LibraryPage;