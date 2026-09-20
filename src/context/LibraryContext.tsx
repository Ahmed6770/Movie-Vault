import { createContext, useEffect, useState } from "react";

import type { Movie } from "../types/movie";

type LibraryContextType = {
  watchlist: Movie[];
  setWatchlist: React.Dispatch<React.SetStateAction<Movie[]>>;
  watched: Movie[];
  setWatched: React.Dispatch<React.SetStateAction<Movie[]>>;
  favorites: Movie[];
  setFavorites: React.Dispatch<React.SetStateAction<Movie[]>>;
  handleWatchlist: (movieDetails: Movie) => void;
  handleWatched: (movieDetails: Movie) => void;
  handleFavorites: (movieDetails: Movie) => void;
};

export const LibraryContext = createContext<LibraryContextType | null>(null);

function LibrayProvider({ children }: { children: React.ReactNode }) {
  // Localstorage with states
  const [watchlist, setWatchlist] = useState<Movie[]>(() =>
    JSON.parse(localStorage.getItem("watchlist") || "[]"),
  );
  const [watched, setWatched] = useState<Movie[]>(() =>
    JSON.parse(localStorage.getItem("watched") || "[]"),
  );
  const [favorites, setFavorites] = useState<Movie[]>(() =>
    JSON.parse(localStorage.getItem("favorites") || "[]"),
  );

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    localStorage.setItem("watched", JSON.stringify(watched));
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [watchlist, watched, favorites]);

  // Add to watchlist
  function handleWatchlist(movieDetails: Movie) {
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
  function handleWatched(movieDetails: Movie) {
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
  function handleFavorites(movieDetails: Movie) {
    const isAdded = favorites.some((item) => item.id === movieDetails.id);
    if (isAdded) {
      setFavorites(favorites.filter((item) => item.id !== movieDetails.id));
    } else {
      setFavorites((prev) => [...prev, movieDetails]);
    }
  }

  return (
    <LibraryContext.Provider value={{ watchlist, setWatchlist, watched, setWatched, favorites, setFavorites, handleWatchlist, handleWatched, handleFavorites }}>
      {children}
    </LibraryContext.Provider>
  );
}

export default LibrayProvider;
