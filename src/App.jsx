import Navbar from "./components/layouts/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListComponents/itemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
