const categories = ["Popular", "Trending", "Top Rated", 
  "Animation", "Comedy", "Crime", "Drama", "Sci-Fi", "Action", "Mystery"];

type TVHeroProps = {
  selected: string;
  onSelect: (category: string) => void;
};

function TVHero({ selected, onSelect }: TVHeroProps) {
  return (
    <div className="max-w-[1500px] mx-auto px-4 md:px-12 pt-6 flex items-center justify-between">
      <h1 className="text-2xl md:text-3xl font-bold text-white">TV Shows</h1>

      <select className="bg-[#12131f] text-white text-xs md:text-sm font-medium border border-slate-800
        rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 cursor-pointer"
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
      >
        {categories.map((categorie) => (
          <option key={categorie} value={categorie} className="bg-[#12131f] text-white">
            {categorie}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TVHero;
