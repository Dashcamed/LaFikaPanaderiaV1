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
          <Button categoria="Panaderia" />
          <Button categoria="Pasteleria" />
          <Button categoria="Bolleria" />
          <Button categoria="Cafeteria" />
          <Button categoria="Mermeladas" />
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
