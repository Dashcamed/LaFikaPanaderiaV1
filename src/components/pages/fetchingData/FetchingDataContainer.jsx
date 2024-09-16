import { useEffect, useState } from "react";
import FetchingData from "./FetchingData";

import axios from "axios";
import { apiInstance } from "../../../api/axiosInstance";

const FetchingDataContainer = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUsers = apiInstance.get("/users");

    getUsers.then((res) => setUsers(res.data));
  }, []);

  useEffect(() => {
    const getUser = apiInstance.get("/users/4");

    getUser.then((res) => setUser(res.data));
  }, []);

  //   const createUser = (newUser) => {
  //     fetch("https://jsonplaceholder.org/users", {
  //       method: "POST",
  //       body: JSON.stringify(newUser),
  //     });
  //   };

  const createUser = (newUser) => {
    apiInstance.post("/users", newUser);
  };
  //   const deleteUser = (id) => {
  //     fetch(`https://jsonplaceholder.org/users/${id}`, {
  //       method: "DELETE",
  //     });
  //   };
  const deleteUser = (id) => {
    apiInstance.delete(`/users/${id}`);
  };

  const updateUserPut = (newInfo, id) => {
    fetch(`https://jsonplaceholder.org/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(newInfo), // {propiedades antiguas, x:propiedades nuevas}
    });
  };

  const updateUserPatch = (newInfo, id) => {
    fetch(`https://jsonplaceholder.org/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newInfo), // {X:1,Y:"PEPE"}
    });
  };

  const childProps = {
    users,
    createUser,
    deleteUser,
  };

  return <FetchingData {...childProps} />;
};

export default FetchingDataContainer;
