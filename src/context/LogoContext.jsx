import { createContext, useState } from "react";
import logo from "/logoPanaderia.svg";
import logoSecondary from "/logoPanaderiaSecondary.svg";

export const LogoContext = createContext();

export const LogoContextProvider = ({ children }) => {
  const [currentLogo, setCurrentLogo] = useState(logo);

  const toggleLogo = (isChecked) => {
    setCurrentLogo(isChecked ? logoSecondary : logo);
  };

  return (
    <LogoContext.Provider value={{ currentLogo, toggleLogo }}>
      {children}
    </LogoContext.Provider>
  );
};
