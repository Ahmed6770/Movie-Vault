const categories = ["Popular", "Trending", "Top Rated", "Now Playing", "Upcoming", 
  "Action", "Comedy", "Animation", "Sci-Fi", "Horror", "Drama", "Romance", "Thriller", "Adventure"];

type MoviesHeroProps = {
  selected: string;
  onSelect: (category: string) => void;
};

function MoviesHero({ selected, onSelect }: MoviesHeroProps) {
  return (
    <div className="max-w-[1500px] mx-auto px-4 md:px-12 pt-6 flex items-center justify-between">
      <h1 className="text-2xl md:text-3xl font-bold text-white">Movies</h1>

      <select className="bg-[#12131f] text-white text-xs md:text-sm font-medium border border-slate-800
        rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 cursor-pointer"
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat} className="bg-[#12131f] text-white">
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MoviesHero;
