import { createContext, useEffect, useState } from "react";

export const LibraryContext = createContext<any>(null);
type movie = {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  backdrop_path?: string;
  vote_average?: number;
  release_date?: string;
  first_air_date?: string;
  runtime?: number;
  overview: string;
  genres?: { id: number; name: string }[];
  media_type?: string;
};

function LibrayProvider({ children }: { children: React.ReactNode }) {
  // Localstorage with states
  const [watchlist, setWatchlist] = useState<movie[]>(() =>
    JSON.parse(localStorage.getItem("watchlist") || "[]"),
  );
  const [watched, setWatched] = useState<movie[]>(() =>
    JSON.parse(localStorage.getItem("watched") || "[]"),
  );
  const [favorites, setFavorites] = useState<movie[]>(() =>
    JSON.parse(localStorage.getItem("favorites") || "[]"),
  );

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    localStorage.setItem("watched", JSON.stringify(watched));
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [watchlist, watched, favorites]);

  // Add to watchlist
  function handleWatchlist(movieDetails: movie) {
    const isAdded = watchlist.some((item) => item.id === movieDetails.id);
    if (isAdded) {
      setWatchlist(watchlist.filter((item) => item.id !== movieDetails.id));
    } else {
      setWatchlist((prev) => [...prev, movieDetails]);
    }
    // remove from Watched
    setWatched((prev) => prev.filter((item) => item.id !== movieDetails.id));
  }

  // Add to watched
  function handleWatched(movieDetails: movie) {
    const isAdded = watched.some((item) => item.id === movieDetails.id);
    if (isAdded) {
      setWatched(watched.filter((item) => item.id !== movieDetails.id));
    } else {
      setWatched((prev) => [...prev, movieDetails]);
    }
    // remove from Watchlist
    setWatchlist((prev) => prev.filter((item) => item.id !== movieDetails.id));
  }

  // Add to favorites
  function handleFavorites(movieDetails: movie) {
    const isAdded = favorites.some((item) => item.id === movieDetails.id);
    if (isAdded) {
      setFavorites(favorites.filter((item) => item.id !== movieDetails.id));
    } else {
      setFavorites((prev) => [...prev, movieDetails]);
    }
  }

  return (
    <LibraryContext.Provider value={{watchlist, setWatchlist, watched, setWatched, favorites, setFavorites, handleWatchlist, handleWatched, handleFavorites }}>
        {children}
    </LibraryContext.Provider>
  )
}

export default LibrayProvider;
