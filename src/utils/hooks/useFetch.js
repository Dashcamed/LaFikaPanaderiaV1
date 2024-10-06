import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = axios.get(endpoint);
    getData
      .then((res) => setData(res.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  axios.get(endpoint);

  return { data, error, isLoading };
};
