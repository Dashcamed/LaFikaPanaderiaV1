import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListComponents/itemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greetings="Bienvenido a la Fika..." />
    </div>
  );
}

export default App;
