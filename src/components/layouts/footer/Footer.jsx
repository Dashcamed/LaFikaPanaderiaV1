import React from "react";
import instagram from "/logoInstagram.svg";
import whatsapp from "/logoWhatsapp.svg";
import googleMaps from "/logoGoogleMaps.svg";
import { LogoContext } from "../../../context/LogoContext";
import { useContext } from "react";

const Footer = () => {
  const { currentLogo } = useContext(LogoContext);
  return (
    <footer className="footer footer-center bg-base-300 p-10">
      <aside>
        <img src={currentLogo} alt="logoPanaderia" className="w-20" />
        <p className="font-bold text-base-content">La Fika Panaderia</p>
        <p className="text-base-content">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <button className="btn btn-ghost p-0">
            <a
              href="https://www.instagram.com/lafikapanaderia/"
              target="_blank"
            >
              <img src={instagram} alt="Instagram" />
            </a>
          </button>
          <button className="btn btn-ghost p-0">
            <a>
              <img src={whatsapp} alt="Instagram" />
            </a>
          </button>
          <button className="btn btn-ghost p-0">
            <a href="https://maps.app.goo.gl/ZU6hasX8Jg968aWu7" target="blank">
              <img src={googleMaps} alt="Instagram" />
            </a>
          </button>
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
