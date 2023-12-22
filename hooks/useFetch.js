import axios from "axios";
import { useEffect, useState } from "react";
export default function useFetch(apiUrl) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => setResponse(response.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [apiUrl]);
  return { response, error, loading };
}