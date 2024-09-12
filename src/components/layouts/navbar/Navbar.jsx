import CartWidget from "../../common/cartWidget/CartWidget";
import logo from "../../../../public/LOGOS PANDERÖA FIKA-02.svg";
import ThemeController from "../../common/themeController/ThemeController";

const Navbar = () => {
  return (
    <div data-theme="coffee" className="navbar bg-base-200">
      <div className="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <img src={logo} alt="logo" className="h-20" />
      </div>
      <div className="navbar-end">
        <ThemeController />
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
