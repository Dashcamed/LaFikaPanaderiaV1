import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../configFirebase";
import { LogoContext } from "../../../context/LogoContext.jsx";
import Loader from "../../common/loader/Loader.jsx";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useAlert } from "../../../context/AlertContext.jsx";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { currentKannel } = useContext(LogoContext);
  const { cart, getTotalAmount, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { showAlert } = useAlert();

  let total = getTotalAmount();

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
      return (
        <div className="flex h-dvh justify-center">
          <p className="text-xl lg:text-2xl text-center">Procesando</p>
          <p className="text-xl lg:text-2xl text-center">
            <Loader />
          </p>
        </div>
      );
    }
  }

  return (
    <div className="h-dvh grid grid-cols-1">
      {orderId ? (
        <div className="justify-center my-2">
          <div className="justify-self-center">
            <Link to="/" className="btn btn-link">
              <img src={currentKannel} alt="logo Kannel" className="h-96" />
            </Link>
          </div>
          <h2 className="text-xl lg:text-2xl text-center my-2">
            Gracias por tu compra:
          </h2>
          <p className="text-xl lg:text-2xl text-center my-2">
            Copia tu orden de compra
          </p>
          <CopyToClipboard text={orderId}>
            <p
              onClick={() => showAlert("Orden Copiada", "success")}
              className="text-center text-xl lg:text-2xl underline hover:cursor-pointer"
            >
              {orderId}
            </p>
          </CopyToClipboard>
        </div>
      ) : (
        <div className="justify-center mx-2 my-2">
          <div className="card bg-base-200 shadow-xl p-2 mx-1">
            <div className="card-title mb-1">
              <h2>Proceso de compra</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <label className="input input-bordered flex items-center gap-2 my-1">
                <input
                  type="text"
                  placeholder="Nombre"
                  onChange={handleChange}
                  name="name"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 my-1">
                <input
                  type="text"
                  placeholder="Teléfono"
                  onChange={handleChange}
                  name="phone"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                />
              </label>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Comprar</button>
              </div>
            </form>
          </div>
          <div className="w-72 h-2/5 lg:w-1/2 overflow-auto mx-auto my-2">
            <h2 className="lg:text-2xl font-semibold text-center mb-3">
              Total de tu compra : {total}
            </h2>
            {cart.map((product) => (
              <div
                key={product.id}
                className="card card-side card-compact bg-base-300 mb-4 shadow-xl"
              >
                <figure>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="lg:w-48"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p className="font-semibold lg:text-xl">
                    Precio: ${product.price}
                  </p>
                  <p className="font-semibold lg:text-xl">
                    Cantidad: {product.quantity}
                  </p>
                  <p className="font-semibold lg:text-xl">
                    Subtotal: ${product.price * product.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
