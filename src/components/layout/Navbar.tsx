import { NavLink } from "react-router-dom";
import { Search, CircleUser, ChevronDown, Home, Library } from "lucide-react";
import Logo from "../../assets/logo.png";

function Navbar() {
  const navLinks = [
    { name: "Discover", to: "/discover", icon: Home },
    { name: "Search", to: "/search", icon: Search },
    { name: "My Library", to: "/library", icon: Library },
    { name: "Profile", to: "/profile", icon: CircleUser },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `py-1 border-b-2 transition-colors ${ isActive
        ? "text-[#703bf7] border-[#703bf7] font-semibold"
        : "text-slate-400 hover:text-slate-200 border-transparent"
    }`;

  return (
    <nav>
      <header className="w-full bg-[#090a10] border-b border-slate-800 text-white sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 md:px-8 py-3 gap-3 md:gap-8">
          {/* Logo */}
          <div className="flex items-center gap-6 md:gap-12">
            <NavLink className="flex items-center gap-2.5" to="/">
              <img className="h-7 md:h-8 w-auto object-contain"
                src={Logo} alt="Movie Vault Logo"
              />
              <span className="font-bold text-base md:text-lg text-slate-100">
                MOVIE <span className="text-[#703bf7]">VAULT</span>
              </span>
            </NavLink>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <NavLink to="/discover" className={linkClass}>
                Discover
              </NavLink>
              <NavLink to="/library" className={linkClass}>
                My Library
              </NavLink>
            </nav>
          </div>

          {/* Search bar */}
          <div className="relative flex-1 max-w-md mx-2 md:mx-6">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input className="w-full bg-[#12131f] text-xs md:text-sm text-slate-300 placeholder-slate-500 pl-9 md:pl-10 pr-4 py-1.5
                md:py-2 rounded-xl border border-slate-800 focus:outline-none focus:border-[#703bf7] transition-colors"
              type="text" placeholder="Search movies..."
            />
          </div>

          {/* Profile */}
          <div className="hidden md:flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
            <CircleUser className="w-7 h-7 text-[#703bf7]" />
            <span className="font-medium text-slate-300">Ahmed</span>
            <ChevronDown className="w-4 h-4 text-slate-500" />
          </div>
        </div>
      </header>

      {/* Mobile btns */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 p-2 md:hidden">
        <div className="bg-[#12131f] border border-slate-800 rounded-t-3xl px-4 py-2.5 flex items-center justify-around shadow-2xl">
          {navLinks.map(({ name, to, icon: Icon }) => (
            <NavLink className={({ isActive }) =>
              `flex flex-col items-center gap-1 transition-colors ${
                isActive
                  ? "text-[#703bf7]"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              key={to} to={to}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium">{name}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </nav>
  );
}

export default Navbar;
