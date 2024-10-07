const Counter = ({
  contador,
  sumar,
  restar,
  addOn,
  disabledSumar,
  disabledRestar,
}) => {
  return (
    <div className="flex flex-row items-center">
      <button
        className="btn btn-warning"
        onClick={restar}
        disabled={disabledRestar}
      >
        <p className="font-bold text-xl">-</p>
      </button>
      <h2 className="text-xl px-3">Cantidad: {contador}</h2>
      <button
        className="btn btn-success"
        onClick={sumar}
        disabled={disabledSumar}
      >
        <p className="font-bold text-xl">+</p>
      </button>
      <div>
        <button
          className="btn btn-primary ml-2 px-8"
          onClick={() => addOn(contador)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Counter;
