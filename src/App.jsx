import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListComponents/ItemListContainer";
import Navbar from "./components/layouts/navbar/Navbar";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import Page404 from "./components/pages/404/Page404";
import Footer from "./components/layouts/footer/Footer";
import { CartContextProvider } from "./context/CartContext";
import { LogoContextProvider } from "./context/logoContext";

function App() {
  return (
    <BrowserRouter>
      <LogoContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route
              path={"/Category/:categoryName"}
              element={<ItemListContainer />}
            />
            <Route
              path={"/ProductDetail/:id"}
              element={<ItemDetailContainer />}
            />
            <Route path={"/Cart"} element={<CartContainer />} />
            <Route path={"*"} element={<Page404 />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </LogoContextProvider>
    </BrowserRouter>
  );
}

export default App;
