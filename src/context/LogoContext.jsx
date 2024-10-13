import { createContext, useState } from "react";
import logo from "/logoPanaderia.svg";
import logoSecondary from "/logoPanaderiaSecondary.svg";
import kannel from "/kanelbullarImg.png";
import kannelSecondary from "/kanellbullarImgSecondary.png";

export const LogoContext = createContext();

export const LogoContextProvider = ({ children }) => {
  const [currentLogo, setCurrentLogo] = useState(logo);
  const [currentKannel, setCurrentKannel] = useState(kannel);

  const toggleLogo = (isChecked) => {
    setCurrentLogo(isChecked ? logoSecondary : logo);
  };

  const toggleKannel = (isChecked) => {
    setCurrentKannel(isChecked ? kannel : kannelSecondary);
  };

  return (
    <LogoContext.Provider
      value={{ currentLogo, currentKannel, toggleLogo, toggleKannel }}
    >
      {children}
    </LogoContext.Provider>
  );
};
