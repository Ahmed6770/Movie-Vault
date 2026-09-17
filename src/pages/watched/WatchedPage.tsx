import MoviesPage from "../../components/shared/MoviesPage";
import VaultHero from "../../components/shared/VaultHero";
import EmptyList from "../../components/shared/EmptyList";
import watchedImg from "../../assets/watched.png";
import { useContext } from "react";
import { LibraryContext } from "../../context/LibraryContext";
import { Ticket } from "lucide-react";

function WatchedPage() {
  const { watched, handleWatched } = useContext(LibraryContext);

  return (
    <div>
      {watched.length === 0 ? (
        <EmptyList title="watched list" />
      ) : (
        <>
          <VaultHero
            title="Watched"
            subtitle="A record of the stories you've experienced."
            heroImg={watchedImg}
            count={watched.length}
          />
          <MoviesPage
            movies={watched}
            btn={(movie: any) => (
              <button className="cursor-pointer absolute top-2 right-2 p-1.5 rounded-md bg-black text-slate-300 hover:text-blue-400 z-10"
                onClick={() => handleWatched(movie)}
              >
                <Ticket className="w-3.5 h-3.5 fill-blue-500 text-blue-500" />
              </button>
            )}
          />
        </>
      )}
    </div>
  );
}

export default WatchedPage;
