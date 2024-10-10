import { createContext, useState } from "react";
import logo from "/logoPanaderia.svg";
import logoSecondary from "/logoPanaderiaSecondary.svg";
import kannel from "../../public/kanelbullarImg.png";
import kannelSecondary from "../../public/kanellbullarImgSecondary.png";

export const LogoContext = createContext();

export const LogoContextProvider = ({ children }) => {
  const [currentLogo, setCurrentLogo] = useState(logo);
  const [currentKannel, setCurrentKannel] = useState(kannel);

  const toggleLogo = (isChecked) => {
    setCurrentLogo(isChecked ? logoSecondary : logo);
    setCurrentKannel(isChecked ? kannel : kannelSecondary);
  };

  return (
    <LogoContext.Provider value={{ currentLogo, currentKannel, toggleLogo }}>
      {children}
    </LogoContext.Provider>
  );
};
