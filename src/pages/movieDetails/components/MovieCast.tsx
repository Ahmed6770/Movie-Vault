import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { User } from "lucide-react";

type castProps = {
  cast: {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
  }[];
};

function MovieCast({ cast }: castProps) {
  if (!cast) return null;

  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base md:text-lg font-bold text-white">Cast</h3>
      </div>

      <Swiper
        spaceBetween={16}
        slidesPerView={3.2}
        breakpoints={{
          640: { slidesPerView: 4.5 },
          768: { slidesPerView: 6.5 },
          1024: { slidesPerView: 8.5 },
        }}
      >
        {cast.map((actor) => (
          <SwiperSlide key={actor.id}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-slate-800
                mb-2 bg-slate-900 flex items-center justify-center"
              >
                {actor.profile_path ? (
                  <img className="w-full h-full object-contain bg-black"
                    src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    alt={actor.name}
                  />
                ) : (
                  <User className="w-8 h-8 text-slate-500" />
                )}
              </div>
              <span className="text-xs md:text-sm font-semibold text-white truncate w-full">
                {actor.name}
              </span>
              <span className="text-xs text-slate-400 truncate w-full mt-0.5">
                {actor.character}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieCast;
