import { ChevronLeft, ChevronRight } from "lucide-react";

const btnClass="flex items-center gap-1 px-4 py-2 text-sm font-medium bg-zinc-900 border border-zinc-800 text-slate-300 rounded-lg hover:bg-zinc-800 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"

type MoviesPaginationProps = {
  page: number;
  onPageChange: (newPage: number) => void;
};

function MoviesPagination({ page, onPageChange }: MoviesPaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4 py-10">
      <button className={btnClass}
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </button>

      <span className="text-sm font-medium text-slate-400">
        Page <strong className="text-white">{page}
        </strong> of <strong className="text-white">500</strong>
      </span>

      <button className={btnClass}
        onClick={() => onPageChange(page + 1)}
        disabled={page >= 500}
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export default MoviesPagination;
