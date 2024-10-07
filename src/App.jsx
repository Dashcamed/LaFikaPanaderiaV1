import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListComponents/ItemListContainer";
import Navbar from "./components/layouts/navbar/Navbar";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import Page404 from "./components/pages/404/Page404";
import Footer from "./components/layouts/footer/Footer";
import React, { useState, useEffect } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme:light)");

    setIsDarkMode(darkModeQuery.matches);

    const handleThemeChange = (e) => {
      setIsDarkMode(e.matches);
    };

    darkModeQuery.addEventListener("change", handleThemeChange);

    return () => {
      darkModeQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BrowserRouter>
      <Navbar isDarkMode={isDarkMode} onThemeToggle={toggleTheme} />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />}></Route>
        <Route
          path={"/Category/:categoryName"}
          element={<ItemListContainer />}
        ></Route>

        <Route
          path={"/ProductDetail/:id"}
          element={<ItemDetailContainer />}
        ></Route>

        <Route path={"/Cart"} element={<CartContainer />}></Route>

        <Route path={"*"} element={<Page404 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
