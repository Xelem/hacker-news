import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(url);
      if (res.status !== 200)
        throw Error("Could not fetch data from that resource");
      const data = await res.data;

      setIsPending(false);
      setError(false);
      setData(data.hits);
    };
    getData();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
