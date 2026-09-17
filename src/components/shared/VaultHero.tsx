type VaultHeroProps = {
  title: string;
  subtitle: string;
  heroImg: string;
  count: number;
};

function VaultHero({ title, subtitle, heroImg, count }: VaultHeroProps) {
  return (
    <div className="max-w-[1500px] mx-auto px-4 md:px-12 pt-6">
      {/* Banner */}
      <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden border border-slate-800
        bg-[#12131f] flex items-center justify-between px-6 md:px-12"
      >
        <img className="absolute inset-0 w-full h-full object-cover object-center"
          src={heroImg}
          alt={title}
        />

        {/* Title*/}
        <div className="relative z-10 max-w-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">{subtitle}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 pb-2">
        <span className="text-sm font-bold text-slate-300">{count} Movies</span>
      </div>
    </div>
  );
}

export default VaultHero;
