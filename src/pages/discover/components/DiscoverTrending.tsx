import MovieCard from "../../../components/shared/MovieCard";

function DiscoverTrending() {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">
          Trending Movies
        </h2>
        <button
          className="cursor-pointer text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
}

export default DiscoverTrending;
