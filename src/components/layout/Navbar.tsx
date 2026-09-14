import { NavLink, useNavigate } from "react-router-dom";
import { Search, CircleUser, ChevronDown, Home, Library } from "lucide-react";
import Logo from "../../assets/logo.png";
import { useState } from "react";

function Navbar() {
  const [searchValue, setSearchValue] = useState("")
  const navigate = useNavigate()

  function handleEnter(e: string) {
    if (e === "Enter") {
      navigate(`/search?query=${searchValue}`);
      setSearchValue("")
    }
  }

  const navLinks = [
    { name: "Discover", to: "/discover", icon: Home },
    { name: "Search", to: "/search", icon: Search },
    { name: "My Library", to: "/library", icon: Library },
    { name: "Profile", to: "/profile", icon: CircleUser },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `py-1 border-b-2 transition-colors ${ isActive
        ? "text-blue-500 border-blue-500 font-semibold"
        : "text-slate-400 hover:text-slate-200 border-transparent"
    }`;

  return (
    <nav>
      <header className="w-full bg-[#090a10] border-b border-slate-800 text-white sticky top-0 z-40">
        <div className="flex items-center justify-between px-6 py-3 gap-6">
          {/* Logo & Links */}
          <div className="flex items-center gap-8">
            <NavLink to="/" className="flex items-center gap-2">
              <img src={Logo} alt="Movie Vault" className="h-8 w-auto" />
              <span className="font-bold text-lg text-slate-100">
                MOVIE <span className="text-blue-500">VAULT</span>
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
            <input className="w-full bg-[#12131f] text-xs md:text-sm text-slate-300 placeholder-slate-500 pl-9 md:pl-10 pr-4 py-1.5 md:py-2 rounded-xl border border-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
              type="text" placeholder="Search movies..."
              value={searchValue}
              onChange={(e)=> setSearchValue(e.target.value)}
              onKeyDown={(e)=> handleEnter(e.key)}
            />
          </div>

          {/* Profile */}
          <div className="hidden md:flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
            <CircleUser className="w-7 h-7 text-blue-500" />
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
                  ? "text-blue-500"
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
