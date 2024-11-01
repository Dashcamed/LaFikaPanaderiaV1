import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../configFirebase";
import { LogoContext } from "../../../context/LogoContext.jsx";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useAlert } from "../../../context/AlertContext.jsx";
import LoadingPage from "../loadingPage/LoadingPage.jsx";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { currentKannel } = useContext(LogoContext);
  const { cart, getTotalAmount, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { showAlert } = useAlert();

  let total = getTotalAmount();

  const onSubmit = (data) => {
    setIsLoading(true);

    const order = {
      buyer: data,
      items: cart,
      total: total,
    };

    if (!order.items || order.items.length === 0 || !order.total) {
      showAlert("La orden no tiene artículos o el total es inválido", "error");
      setIsLoading(false);
      return;
    }

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

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="h-dvh grid grid-cols-1">
      {orderId ? (
        <div className="justify-center my-4">
          <div className="justify-self-center">
            <Link to="/" className="btn btn-link">
              <img src={currentKannel} alt="logo Kannel" className="h-96" />
            </Link>
          </div>
          <h2 className="text-xl lg:text-2xl text-center my-2">
            Gracias por tu compra:
          </h2>
          <p className="text-xl lg:text-2xl text-center my-2">
            Has click para copiar tu orden.
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
          <div className="card bg-base-200 shadow-xl lg:w-2/4 xl:w-1/4 p-2 mx-1 justify-self-center">
            <h2 className="card-title mb-1">Proceso de compra</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="input input-bordered flex items-center gap-2 my-1">
                <input
                  type="text"
                  placeholder="Nombre"
                  {...register("name", {
                    required: "El nombre es obligatorio",
                    maxLength: { value: 50, message: "Máximo 50 caracteres" },
                    pattern: {
                      value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/,
                      message: "Solo letras y espacios",
                    },
                  })}
                />
                {errors.name && <span>{errors.name.message}</span>}
              </label>

              <label className="input input-bordered flex items-center gap-2 my-1">
                <input
                  type="tel"
                  placeholder="Teléfono"
                  {...register("phone", {
                    required: "El teléfono es obligatorio",
                    pattern: { value: /^[0-9]+$/, message: "Solo números" },
                  })}
                />
                {errors.phone && <span>{errors.phone.message}</span>}
              </label>

              <label className="input input-bordered flex items-center gap-2 mb-2">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "El email es obligatorio",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Formato de email inválido",
                    },
                  })}
                />
                {errors.email && <span>{errors.email.message}</span>}
              </label>

              <div className="card-actions justify-end">
                <button type="submit" className="btn btn-primary">
                  Comprar
                </button>
              </div>
            </form>
          </div>
          <div className="w-72 h-2/5 lg:w-2/4 xl:w-1/4 overflow-auto mx-auto my-2">
            <h2 className="lg:text-2xl font-semibold text-center mb-3">
              Total de tu compra : ${total}
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
