import { Link } from "react-router-dom";
import emptyImg from "../../assets/emptylist.png";

function EmptyList({title}: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      <img className="w-40 md:w-48 h-auto mb-6 object-contain"
        src={emptyImg}
        alt={title}
      />

      <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
        {`Your ${title} is empty`}
      </h2>
      <p className="text-xs md:text-sm text-slate-400 max-w-sm mb-6">
        {`Movies you add to your ${title} will appear here. Start exploring and add some movies!`}
      </p>

      <Link className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs md:text-sm px-6 py-2.5 rounded-xl transition-colors"
        to="/discover"
      >
        Explore Movies
      </Link>
    </div>
  );
}

export default EmptyList;
