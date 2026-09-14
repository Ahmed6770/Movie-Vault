import MovieCard from "./MovieCard";

type MoviesPageProps = {
  title?: string;
  movies: any;
};

function MoviesPage({ title, movies }: MoviesPageProps) {
  return (
    <main className="max-w-[1500px] mx-auto px-4 md:px-12 py-8">
      {title && (
        <h1 className="text-xl md:text-2xl font-bold text-white mb-6">
          {title}
        </h1>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {movies?.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}

export default MoviesPage;
