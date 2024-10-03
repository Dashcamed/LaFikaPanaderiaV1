import React, { useState } from "react";

const Eventos = () => {
  const [nuevoProducto, setNuevoProducto] = useState({
    name: "",
    descripcion: "",
    valueSelect: "",
  });

  const [losAdicionales, setAdicionales] = useState([]);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log("Producto enviado:", nuevoProducto);
    console.log("Adicionales seleccionados:", losAdicionales);
    // Puedes resetear los valores si lo necesitas
    setAdicionales([]);
    setNuevoProducto({
      name: "",
      descripcion: "",
      valueSelect: "",
    });
  };

  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setNuevoProducto({ ...nuevoProducto, [name]: value });
  };

  const adicionales = (evento) => {
    console.log(evento.target.checked);
    const { value, checked } = evento.target;
    if (checked) {
      // Si está marcado, lo añadimos al array
      setAdicionales([...losAdicionales, value]);
    } else {
      // Si se desmarca, lo eliminamos del array
      const arrayFiltrado = losAdicionales.filter(
        (adicional) => adicional !== value
      );
      setAdicionales(arrayFiltrado);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="mx-1.5"
          placeholder="Ingresa tu nombre"
          type="text"
          onChange={handleChange}
          name="name"
          value={nuevoProducto.name} // Para controlar el valor
        />
        <input
          type="text"
          onChange={handleChange}
          name="descripcion"
          value={nuevoProducto.descripcion} // Para controlar el valor
        />
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>

        <select
          onChange={handleChange}
          name="valueSelect"
          value={nuevoProducto.valueSelect}
        >
          <option value="">Selecciona una opción</option>
          <option label="uno" value="uno" />
          <option label="dos" value="dos" />
          <option label="tres" value="tres" />
        </select>

        <div>
          <label htmlFor="semillas">con semillas</label>
          <input
            type="checkbox"
            name="semillas"
            value="con semillas"
            onChange={adicionales}
          />
          <label htmlFor="masaMadre">masa madre</label>
          <input
            type="checkbox"
            name="masaMadre"
            value="masa madre"
            onChange={adicionales}
          />
        </div>
      </form>
    </div>
  );
};

export default Eventos;

// let persona = {
//   nombre: "jorge",
//   edad: 32,
// };

// const mostrarPropiedad = (propiedad) => {
//   console.log(persona[propiedad]);
// };

// mostrarPropiedad("nombre");
// mostrarPropiedad("edad");

//formik y yup react hook form
