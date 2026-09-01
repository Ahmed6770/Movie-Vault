import { NavLink } from "react-router-dom";
import posterImg from "../../../assets/poster.png";

const dotStyle = "w-2 h-2 rounded-full bg-slate-600/80 hover:bg-slate-400 cursor-pointer";

function DiscoverHero() {
  return (
    <section className="relative w-full h-[420px] sm:h-[480px] rounded-2xl md:rounded-3xl
     overflow-hidden border border-slate-800/60 mb-8">
      {/* Background poster image */}
      <img
        className="w-full h-full object-cover object-center"
        src={posterImg}
        alt="Dune: Part Two"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06070a] via-[#06070a]/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-transparent opacity-90"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-center items-start max-w-xl">
        <span className="text-xs font-bold tracking-widest text-violet-400 uppercase mb-2">
          TRENDING NOW
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3 tracking-wide">
          Dune: Part Two
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
          Paul Atreides unites with Chani and the Fremen while seeking revenge
          against the conspirators who destroyed his family.
        </p>

        {/* Watch details button */}
        <NavLink className="bg-violet-600 hover:bg-violet-700 text-white font-medium text-sm px-6 py-2.5 rounded-xl"
          to="/movie/1"
        >
          Watch Details
        </NavLink>

        {/* Dots */}
        <div className="flex items-center gap-2 mt-6">
          <span className="w-6 h-2 rounded-full bg-violet-600"></span>
          <span className={dotStyle}></span>
          <span className={dotStyle}></span>
          <span className={dotStyle}></span>
        </div>
      </div>
    </section>
  );
}

export default DiscoverHero;
