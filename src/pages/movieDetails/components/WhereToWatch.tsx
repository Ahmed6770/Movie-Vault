type WhereToWatchProps = {
  providers?: {
    provider_id: number;
    provider_name: string;
    logo_path: string;
  }[];
};

function WhereToWatch({ providers }: WhereToWatchProps) {
  return (
    <div className="py-6">
      <h3 className="text-base md:text-lg font-bold text-white mb-4">
        Where to Watch
      </h3>

      {providers?.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {providers.map((item) => (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col items-center gap-2"
              key={item.provider_id}
            >
              <img className="w-10 h-10 rounded-xl"
                src={`https://image.tmdb.org/t/p/w92${item.logo_path}`}
                alt={item.provider_name}
              />
              <span className="text-xs font-semibold text-white truncate w-full text-center">
                {item.provider_name}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xs md:text-sm text-slate-400">Not Available</p>
      )}
    </div>
  );
}

export default WhereToWatch;
