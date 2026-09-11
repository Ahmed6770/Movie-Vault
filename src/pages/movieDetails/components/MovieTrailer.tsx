
function MovieTrailer({ trailer }: { trailer?: string } ) {
  if (!trailer?.length) return null;

  return (
    <div className="py-8 max-w-4xl mx-auto">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
        Trailer
      </h3>

      <div className="w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-black">
        <iframe className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailer}`}
        />
      </div>
    </div>
  );
}

export default MovieTrailer;
