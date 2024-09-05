import CartWidget from "../../common/cartWidget/CartWidget";
import logo from "../../../../public/LOGOS PANDERÖA FIKA-02.svg";
import ThemeController from "../../common/themeController/ThemeController";
import Button from "../../common/button/Button";

const Navbar = () => {
  return (
    <div data-theme="coffee" className="navbar bg-base-200 justify-between">
      <img src={logo} alt="logo" className="h-20" />
      <ul>
        <li>
          <Button categoria="Panadería" />
          <Button categoria="Pastelería" />
          <Button categoria="Bollería" />
          <Button categoria="Cafetería" />
          <Button categoria="Otros Productos" />
        </li>
      </ul>
      <div>
        <ThemeController />
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
