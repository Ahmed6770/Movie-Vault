import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { User } from "lucide-react";

type CastProps = {
  cast?: {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
  }[];
};

function MovieCast({ cast }: CastProps) {
  return (
    <div className="py-6">
      <h3 className="text-base md:text-lg font-bold text-white mb-4">Cast</h3>

      {cast?.length ? (
        <Swiper
          spaceBetween={16}
          slidesPerView={3.5}
          breakpoints={{
            640: { slidesPerView: 5 },
            1024: { slidesPerView: 8 },
          }}
        >
          {cast.map((actor) => (
            <SwiperSlide key={actor.id}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-900 border border-slate-800 mb-2 flex items-center justify-center">
                  {actor.profile_path ? (
                    <img className="bg-white w-full h-full object-contain"
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
                <span className="text-xs text-slate-400 truncate w-full">
                  {actor.character}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xs md:text-sm text-slate-400">Not Available</p>
      )}
    </div>
  );
}

export default MovieCast;
