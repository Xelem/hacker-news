import axios from "axios";

import { useContext, useEffect, useState } from "react";
import Comments from "../../comps/Comments";
import { IDContext } from "../../comps/contexts/IDContext";

const Details = () => {
  const { id } = useContext(IDContext);
  const [item, setItem] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/items/${id}`
      );
      setItem(data);
      setIsLoading(false);
    };
    getData();
  }, [id]);

  return (
    <div className="news-details">
      {isLoading && <div className="load">Loading...</div>}
      {item && <Comments item={item} />}
    </div>
  );
};

export default Details;
