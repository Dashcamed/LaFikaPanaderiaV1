import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListComponents/ItemListContainer";
import Navbar from "./components/layouts/navbar/Navbar";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";

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

        <Route path={"*"} element={<h2>404 not found</h2>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
