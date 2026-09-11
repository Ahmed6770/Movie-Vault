type MovieDetailsInfoProps = {
  movieDetails: {
    release_date: string;
    runtime: number;
    spoken_languages: { english_name: string }[];
    origin_country: string[];
  };
};

function MovieDetailsInfo({ movieDetails }: MovieDetailsInfoProps) {
  const movieInfo = {
    release_date: movieDetails.release_date || "-",
    duration: movieDetails.runtime ? `${movieDetails.runtime} min` : "-",
    language: movieDetails.spoken_languages?.[0]?.english_name || "-",
    country: movieDetails.origin_country?.[0] || "-",
  };

  return (
    <div className="py-6 border-b border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-6">
      <div>
        <span className="block text-xs text-slate-400 mb-1">Release Date</span>
        <span className="text-sm font-medium text-slate-200">
          {movieInfo.release_date}
        </span>
      </div>

      <div>
        <span className="block text-xs text-slate-400 mb-1">Duration</span>
        <span className="text-sm font-medium text-slate-200">
          {movieInfo.duration}
        </span>
      </div>

      <div>
        <span className="block text-xs text-slate-400 mb-1">Language</span>
        <span className="text-sm font-medium text-slate-200">
          {movieInfo.language}
        </span>
      </div>

      <div>
        <span className="block text-xs text-slate-400 mb-1">Country</span>
        <span className="text-sm font-medium text-slate-200">
          {movieInfo.country}
        </span>
      </div>
    </div>
  );
}

export default MovieDetailsInfo;
