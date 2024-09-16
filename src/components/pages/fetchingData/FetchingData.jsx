import React from "react";

const FetchingData = ({ users, createUser, deleteUser }) => {
  return (
    <div>
      {users.map((users) => {
        return <h1 key={users.id}>{users.firstname}</h1>;
      })}

      <button
        className="btn btn-primary"
        onClick={() => {
          createUser({ name: "pepe" });
        }}
      >
        Crear Usuario
      </button>

      <button
        className="btn btn-primary"
        onClick={() => {
          deleteUser(1);
        }}
      >
        Borrar usuario
      </button>
    </div>
  );
};

export default FetchingData;
