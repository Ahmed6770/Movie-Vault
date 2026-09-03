import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface MovieRowProps {
  title: string;
  movies?: any;
}

function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <section className="mb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">
          {title}
        </h2>
        <button className="cursor-pointer text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors">
          View All
        </button>
      </div>

      {/* Swiper Slider */}
      <Swiper className="w-full"
        spaceBetween={16}
        slidesPerView={2.3}
        breakpoints={{
          640: { slidesPerView: 3.5, spaceBetween: 16 },
          768: { slidesPerView: 4.5, spaceBetween: 16 },
          1024: { slidesPerView: 6, spaceBetween: 16 },
        }}
      >
        {movies?.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default MovieRow;
