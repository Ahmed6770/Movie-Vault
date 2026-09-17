
function MovieTrailer({ trailer }: { trailer?: string } ) {
  return (
    <div className="py-8 max-w-4xl mx-auto">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
        Trailer
      </h3>

      {trailer ? (
        <div className="w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-black">
          <iframe className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailer}`}
          />
        </div>
      ) : (
        <p className="text-xs md:text-sm text-slate-400">Not Available</p>
      )}
    </div>
  );
}

export default MovieTrailer;
