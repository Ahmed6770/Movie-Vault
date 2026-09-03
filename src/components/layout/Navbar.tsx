import { NavLink } from "react-router-dom";
import { Search, Bell, CircleUser, ChevronDown } from "lucide-react";
import Logo from "../../assets/logo.png";

function Navbar() {
  return (
    <header className="w-full bg-[#07080e] border-b border-slate-900 text-white">
      <div className="flex items-center justify-between px-6 md:px-8 py-3.5 gap-4 md:gap-8">
        <div className="flex items-center gap-8 md:gap-12">
          {/* Logo */}
          <NavLink className="flex items-center gap-2.5" to="/">
            <img className="h-8 w-auto object-contain"
              src={Logo}
              alt="Movie Vault Logo"
            />
            <span className="font-bold text-base md:text-lg tracking-wider text-slate-100">
              MOVIE <span className="text-violet-400">VAULT</span>
            </span>
          </NavLink>

          {/* Nav Links */}
          <nav className="flex items-center gap-6 text-sm font-medium">
            <NavLink className={({ isActive }) =>
                `py-1 border-b-2 transition-colors ${
                  isActive
                    ? "text-violet-400 border-violet-500 font-semibold"
                    : "text-slate-400 hover:text-slate-200 border-transparent"
                }`
              }
              to="/discover"
            >
              Discover
            </NavLink>

            <NavLink className={({ isActive }) =>
                `py-1 border-b-2 transition-colors ${
                  isActive
                    ? "text-violet-400 border-violet-500 font-semibold"
                    : "text-slate-400 hover:text-slate-200 border-transparent"
                }`
              }
              to="/library"
            >
              My Library
            </NavLink>
          </nav>
        </div>

        {/* Search bar */}
        <div className="relative flex-1 max-w-md mx-2 md:mx-6">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input className="w-full bg-[#0e101a] text-sm text-slate-300 placeholder-slate-500 pl-10
           pr-4 py-2 rounded-xl border border-slate-800 focus:outline-none focus:border-violet-500/80 transition-colors"
            type="text"
            placeholder="Search movies..."
          />
        </div>

        {/* Notification bell & profile */}
        <div className="flex items-center gap-4 md:gap-5">
          <button className="relative text-slate-400 hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-900/60 transition-colors">
            <Bell className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
            <CircleUser className="w-7 h-7 text-violet-400/90" />
            <span className="hidden sm:inline font-medium text-slate-300">
              Ahmed
            </span>
            <ChevronDown className="w-4 h-4 text-slate-500 hidden sm:inline" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
