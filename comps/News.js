import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";

const News = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const { data } = await axios.get("http://hn.algolia.com/api/v1/search?");
      const { hits, nbPages } = data;
      setArticles(hits);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      <div className="search">
        <label>Search</label>
        <form>
          <div className="search-bar">
            <input type="text" />
            <button>
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </form>
        <div className="news">
          {isLoading && <div>Loading...</div>}
          {articles &&
            articles.map((article) => (
              <NewsCard key={article.objectID} article={article} />
            ))}
        </div>
      </div>
      <div className="content"></div>
    </>
  );
};

export default News;
