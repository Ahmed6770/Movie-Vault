import MovieCard from "../../../components/shared/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type SimilarMoviesProps = {
  movies: {
    id: number;
    title: string;
    poster_path: string;
    vote_average?: number;
    release_date: string;
  }[];
};

function SimilarMovies({ movies }: SimilarMoviesProps) {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="py-6">
      <h3 className="text-base md:text-lg font-bold text-white mb-4">
        Similar Movies
      </h3>

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
    </div>
  );
}

export default SimilarMovies;
