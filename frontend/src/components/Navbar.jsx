import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessagesSquare,  Moon,  Sun,  User } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const {theme,setTheme} = useThemeStore();

  const toggleTheme = () => {
    setTheme(theme === "black" ? "light" : "black");
  };

  return (
    <header data-theme={theme}
    className=" border-b border-base-300 fixed w-full top-0 z-40 
  backdrop-blur-lg bg-base-100/80"
  >
    <div className="container px-4 h-14">
      <div className="flex items-center w-screen  justify-between h-full">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
            <div className="size-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <MessagesSquare className="w-5 h-5 text-amber-500" />
            </div>
            <h1 className="text-lg font-bold">ChatOn</h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center mr-10 gap-2">
        <button
      onClick={toggleTheme}
      className="flex items-center gap-3 px-5 py-2 rounded-full transition-all
                 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200
                 hover:bg-gray-300 dark:hover:bg-gray-700 shadow-md"
    >
      {/* Rotating Icon */}
      <span
        className={`transform transition-transform duration-500 ${
          theme === "light" ? "rotate-0" : "rotate-180"
        }`}
      >
        {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </span>

      {/* Fade-in Text */}
      <span
        className="hidden sm:inline font-medium transition-opacity duration-500"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </span>
    </button>

          {authUser && (
            <>
              <Link to="/profile" className="btn btn-sm rounded-xl gap-2">
                <User className="size-5" />
                <span className="hidden  sm:inline">Profile</span>
              </Link>

              <button className="flex gap-2 items-center" onClick={logout}>
                <LogOut className="size-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  </header>
);
};
export default Navbar;
