const Cart = ({ cart, deleteProductById, totalQuantity, total, clearCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mx-auto my-3">
      <div className="w-80 h-dvh lg:h-dvh lg:w-3/4 overflow-scroll">
        {cart.map((product) => {
          return (
            <div
              key={product.id}
              className="card card-side bg-base-300 mb-4 shadow-xl"
            >
              <figure>
                <img src={product.imageUrl} alt={product.title} />
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
        })}
      </div>
      <div className="my-4 justify-self-center">
        <h2 className="text-2xl font-semibold mb-2">
          Total de productos: {totalQuantity}
        </h2>
        <h2 className="text-2xl font-semibold mb-2">
          Total a pagar: $ {total}
        </h2>
        <button className="btn btn-wide btn-warning" onClick={clearCart}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
