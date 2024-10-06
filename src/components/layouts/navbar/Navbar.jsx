import CartWidget from "../../common/cartWidget/CartWidget";
import logoLight from "/logoPanaderia.svg";
import logoDark from "/logoPanaderiaSecondary.svg";
import ThemeController from "../../common/themeController/ThemeController";
import { Link } from "react-router-dom";
import { categories } from "./categories.js";

const Navbar = ({ isDarkMode, onThemeToggle }) => {
  const logo = isDarkMode ? logoDark : logoLight;

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <details className="font-bold">
              <summary>Menú</summary>
              <ul className="p-2">
                {categories.map(({ title, path }) => (
                  <li key={title}>
                    <Link key={title} to={path} className="btn btn-ghost p-0">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl p-0">
          <img src={logo} alt="" className="w-16" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex z-10">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <details className="font-bold">
              <summary className="text-base">Menú</summary>
              <ul className="p-2 bg-base-200">
                {categories.map(({ title, path }) => (
                  <li key={title}>
                    <Link key={title} to={path} className="btn btn-ghost p-0">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeController
          isDarkMode={isDarkMode}
          onThemeToggle={onThemeToggle}
        />
        <Link to="/Cart">
          <CartWidget />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
