import MoviesPage from "../../components/shared/MoviesPage";
import VaultHero from "../../components/shared/VaultHero";
import EmptyList from "../../components/shared/EmptyList";
import watchlistImg from "../../assets/watchlist.png";
import { useContext } from "react";
import { LibraryContext } from "../../context/LibraryContext";
import { Bookmark } from "lucide-react";

function WatchlistPage() {
  const { watchlist, handleWatchlist } = useContext(LibraryContext)!;

  return (
    <div>
      {watchlist.length === 0 ? (
        <EmptyList title="watchlist" />
      ) : (
        <>
          <VaultHero
            title="Watchlist"
            subtitle="Movies you want to watch. Your next great story is waiting."
            heroImg={watchlistImg}
            count={watchlist.length}
          />
          <MoviesPage
            movies={watchlist}
            btn={(movie) => (
              <button className="cursor-pointer absolute top-2 right-2 p-1.5 rounded-md bg-black text-slate-300 hover:text-amber-400 z-10"
                onClick={() => handleWatchlist(movie)}
              >
                <Bookmark className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </button>
            )}
          />
        </>
      )}
    </div>
  );
}

export default WatchlistPage;
