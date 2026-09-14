import { SearchX } from "lucide-react";

type NoResultsProps = {
  query: string;
};

function NoResults({ query }: NoResultsProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-4">
      <div className="p-4 rounded-2xl bg-[#12131f] border border-slate-800 text-slate-400 mb-4">
        <SearchX className="w-8 h-8 text-blue-500" />
      </div>

      <h2 className="text-xl font-bold text-white mb-2">
        No movies found
      </h2>

      <p className="text-sm text-slate-400 max-w-sm">
        {query
          ? `We couldn't find any results for "${query}". Try searching for another movie title.`
          : "Try searching for a movie title to get started."}
      </p>
    </div>
  );
}

export default NoResults;

