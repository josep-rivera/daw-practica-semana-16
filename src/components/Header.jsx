import { NavLink, Link } from "react-router-dom";
import { FiGrid, FiHome, FiMail } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-600 text-white">
            <FiGrid className="text-lg" />
          </div>
          <span className="font-semibold text-slate-800 text-lg">
            PokeDex Explorer
          </span>
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `inline-flex items-center gap-1 px-3 py-2 rounded-lg border text-xs sm:text-sm transition 
               ${
                 isActive
                   ? "bg-slate-900 text-white border-slate-900"
                   : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
               }`
            }
          >
            <FiHome />
            Home
          </NavLink>

          <NavLink
            to="/entities"
            className={({ isActive }) =>
              `inline-flex items-center gap-1 px-3 py-2 rounded-lg border text-xs sm:text-sm transition 
               ${
                 isActive
                   ? "bg-slate-900 text-white border-slate-900"
                   : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
               }`
            }
          >
            <FiGrid />
            Pokémon
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `inline-flex items-center gap-1 px-3 py-2 rounded-lg border text-xs sm:text-sm transition 
               ${
                 isActive
                   ? "bg-slate-900 text-white border-slate-900"
                   : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
               }`
            }
          >
            <FiMail />
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
