import type { Movie } from "../../../types/movie";
import MovieCard from "../../../components/shared/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type SimilarMoviesProps = {
  movies: Movie[];
};

function SimilarMovies({ movies }: SimilarMoviesProps) {
  return (
    <div className="py-6">
      <h3 className="text-base md:text-lg font-bold text-white mb-4">
        Similar Movies
      </h3>

      {movies?.length ? (
        <Swiper
          spaceBetween={16}
          slidesPerView={2.3}
          breakpoints={{
            640: { slidesPerView: 3.5 },
            768: { slidesPerView: 4.5 },
            1024: { slidesPerView: 6 },
          }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xs md:text-sm text-slate-400">Not Available</p>
      )}
    </div>
  );
}

export default SimilarMovies;
