import MoviesPage from "../../components/shared/MoviesPage";
import VaultHero from "../../components/shared/VaultHero";
import EmptyList from "../../components/shared/EmptyList";
import favoritesImg from "../../assets/favorites.png";
import { useContext } from "react";
import { LibraryContext } from "../../context/LibraryContext";

function FavoritesPage() {
  const { favorites } = useContext(LibraryContext)!;

  return (
    <div>
      {favorites.length === 0 ? (
        <EmptyList title="favorites" />
      ) : (
        <>
          <VaultHero
            title="Favorites"
            subtitle="The movies you love, all in one place."
            heroImg={favoritesImg}
            count={favorites.length}
          />
          <MoviesPage movies={favorites} />
        </>
      )}
    </div>
  );
}

export default FavoritesPage;
