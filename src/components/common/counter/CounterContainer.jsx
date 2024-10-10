import React, { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ addOn, stock, totalAdded }) => {
  const [contador, setContador] = useState(totalAdded);
  const [disabledSumar, setDisabledSumar] = useState(false);
  const [disabledRestar, setDisabledRestar] = useState(true);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
      setDisabledRestar(false);
    }
    if (contador + 1 === stock) {
      setDisabledSumar(true);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
      setDisabledSumar(false);
    }
    if (contador - 1 === 1) {
      setDisabledRestar(true);
    }
  };

  let childProps = {
    contador,
    sumar,
    restar,
    addOn,
    disabledSumar,
    disabledRestar,
  };

  return <Counter {...childProps} />;
};
export default CounterContainer;
