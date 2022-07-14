import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Comments from "../../comps/Comments";
import { IDContext } from "../../comps/contexts/IDContext";
import { itemURL } from "../../utils/constants";

const Details = () => {
  const { id } = useContext(IDContext);
  const [item, setItem] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const { data } = await axios.get(`${itemURL}${id}`);
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
