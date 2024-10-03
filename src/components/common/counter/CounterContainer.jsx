import React, { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ addOn }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  let childProps = {
    contador,
    sumar,
    restar,
    addOn,
  };

  return <Counter {...childProps} />;
};
export default CounterContainer;
