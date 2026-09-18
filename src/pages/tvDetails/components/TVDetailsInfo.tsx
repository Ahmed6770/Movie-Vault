type TVDetailsInfoProps = {
  tvDetails: {
    first_air_date: string;
    number_of_seasons?: number;
    spoken_languages: { english_name: string }[];
    origin_country: string[];
  };
};

function TVDetailsInfo({ tvDetails }: TVDetailsInfoProps) {
  const tvInfo = {
    release_date: tvDetails.first_air_date || "-",
    duration: tvDetails.number_of_seasons ? `${tvDetails.number_of_seasons} Seasons` : "-",
    language: tvDetails.spoken_languages?.[0]?.english_name || "-",
    country: tvDetails.origin_country?.[0] || "-",
  };

  return (
    <div className="py-6 border-b border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-6">
      <div>
        <span className="block text-xs text-slate-400 mb-1">Release Date</span>
        <span className="text-sm font-medium text-slate-200">
          {tvInfo.release_date}
        </span>
      </div>

      <div>
        <span className="block text-xs text-slate-400 mb-1">Duration</span>
        <span className="text-sm font-medium text-slate-200">
          {tvInfo.duration}
        </span>
      </div>

      <div>
        <span className="block text-xs text-slate-400 mb-1">Language</span>
        <span className="text-sm font-medium text-slate-200">
          {tvInfo.language}
        </span>
      </div>

      <div>
        <span className="block text-xs text-slate-400 mb-1">Country</span>
        <span className="text-sm font-medium text-slate-200">
          {tvInfo.country}
        </span>
      </div>
    </div>
  );
}

export default TVDetailsInfo;
