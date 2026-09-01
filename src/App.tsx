import { Routes, Route } from 'react-router-dom'
import DiscoverPage from './pages/discover/DiscoverPage'
import SearchPage from './pages/search/SearchPage'
import MovieDetailsPage from './pages/movieDetails/MovieDetailsPage'
import WatchlistPage from './pages/watchlist/WatchlistPage'
import WatchedPage from './pages/watched/WatchedPage'
import FavoritesPage from './pages/favorites/FavoritesPage'
import LibraryPage from './pages/library/LibraryPage'
import NotFoundPage from './pages/notFound/NotFoundPage'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DiscoverPage />} />
        <Route path="discover" element={<DiscoverPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="movie/:id" element={<MovieDetailsPage />} />
        <Route path="watchlist" element={<WatchlistPage />} />
        <Route path="watched" element={<WatchedPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="library" element={<LibraryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
