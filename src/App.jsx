import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListComponents/ItemListContainer";
import Navbar from "./components/layouts/navbar/Navbar";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import Page404 from "./components/pages/404/Page404";
import Footer from "./components/layouts/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
