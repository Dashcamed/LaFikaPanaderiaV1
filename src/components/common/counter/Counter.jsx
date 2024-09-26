const Counter = ({ contador, sumar, restar }) => {
  return (
    <div className="flex flex-row items-center">
      <button className="btn btn-warning" onClick={restar}>
        -
      </button>
      <h1 className="text-xl px-3">Cantidad: {contador}</h1>
      <button className="btn btn-success" onClick={sumar}>
        +
      </button>
    </div>
  );
};

export default Counter;
