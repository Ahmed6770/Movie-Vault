import { Link } from "react-router-dom";
import notFoundImg from "../../assets/notfound.png";

/* 404 Not Found Page */
function NotFoundPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[75vh] px-6 py-12
      gap-8 md:gap-14 text-center md:text-left">
      <img src={notFoundImg} alt="Page not found" className="w-60 md:w-72 h-auto object-contain" />

      <div>
        <h1 className="text-6xl md:text-8xl font-black text-white">404</h1>
        <h2 className="mt-2 text-xl md:text-2xl font-bold text-white">Page not found</h2>
        <p className="mt-2 text-xs md:text-sm text-slate-400">
          The page you're looking for doesn't exist.
        </p>
        <Link className="mt-6 inline-block rounded-lg bg-blue-600 px-7 py-2.5 text-sm font-semibold
         text-white transition-colors hover:bg-blue-500"
          to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
