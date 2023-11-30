import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(apiURL) {
  const [resp, setResp] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(apiURL)
      .then((resp) => setResp(resp.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { resp, error, loading };
}