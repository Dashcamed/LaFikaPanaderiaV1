import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../configFirebase";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { cart, getTotalAmount, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let total = getTotalAmount();
    const order = {
      buyer: user,
      items: cart,
      total: total,
    };
    //guardar la orden en firebase
    let refCollection = collection(db, "orders");
    addDoc(refCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });

    order.items.forEach((element) => {
      updateDoc(doc(db, "products", element.id), {
        stock: element.stock - element.quantity,
      });
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  {
    if (isLoading) {
      return <h2>cargando...</h2>;
    }
  }

  return (
    <div className="h-dvh">
      {orderId ? (
        <h1>Gracias por tu compra, tu orden es: {orderId}</h1>
      ) : (
        <div className="h-dvh">
          <h1>Proceso de compra</h1>
          <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                placeholder="Nombre"
                onChange={handleChange}
                name="name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                placeholder="Teléfono"
                onChange={handleChange}
                name="phone"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
              />
            </label>
            <button className="btn btn-primary">Comprar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
