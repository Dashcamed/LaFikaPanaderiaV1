import { LogoContext } from "../../../context/logoContext.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, deleteProductById, totalQuantity, total, clearCart }) => {
  const { currentKannel } = useContext(LogoContext);
  return (
    <div className="flex flex-wrap-reverse mx-auto justify-evenly my-3">
      <div className="w-80 h-dvh lg:h-dvh lg:w-1/2 xl:w-1/2 overflow-scroll align-middle">
        {total > 0 ? (
          cart.map((product) => {
            return (
              <div
                key={product.id}
                className="card card-side bg-base-300 mb-4 shadow-xl"
              >
                <figure>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="h-48 lg:h-60"
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
                    Subtotal: ${product.price * product.quantity}{" "}
                  </p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-warning"
                      onClick={() => deleteProductById(product.id)}
                    >
                      eliminar
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <>
            <Link to="/" className="btn btn-link p-4">
              <img src={currentKannel} alt="logo" />
            </Link>
          </>
        )}
      </div>
      <div className="my-4 justify-self-center">
        {total > 0 && (
          <h2 className="lg:text-2xl font-semibold mb-3 text-center">
            Acciones del carrito
          </h2>
        )}
        {total > 0 && (
          <div>
            <button className="btn btn-success mr-4">Pagar</button>
            <button className="btn btn-warning mb-5" onClick={clearCart}>
              Vaciar Carrito
            </button>
          </div>
        )}
        {totalQuantity > 0 ? (
          <h2 className="lg:text-2xl font-semibold mb-3 text-center">
            Total de productos: {totalQuantity}
          </h2>
        ) : (
          <h2 className="lg:text-2xl font-semibold mb-3 text-center">
            No tienes productos
          </h2>
        )}

        {total > 0 ? (
          <h2 className="lg:text-2xl font-semibold mb-3 text-center">
            Total a pagar: $ {total}
          </h2>
        ) : (
          <h2 className="lg:text-2xl font-semibold mb-3 text-center">
            Toca a Kannel para buscar productos
          </h2>
        )}
        {total > 0 && (
          <h2 className="lg:text-2xl font-semibold text-center">
            Listado de productos
          </h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
