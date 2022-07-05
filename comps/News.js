import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import NewsCard from "./NewsCard";

const News = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  const handlePageChange = (e) => {
    setCurrentPage(e.selected);
    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const { data } = await axios.get("http://hn.algolia.com/api/v1/search?", {
        params: { page: currentPage, query: query },
      });
      const { hits, nbPages } = data;
      setArticles(hits);
      setIsLoading(false);
      setPageCount(nbPages);
    };
    getData();
  }, [currentPage, query]);

  return (
    <>
      <div className="search">
        <label>Search</label>
        <form onSubmit={handleSubmit}>
          <div className="search-bar">
            <input type="text" onChange={(e) => setInput(e.target.value)} />
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
        <ReactPaginate
          nextLabel=">>"
          previousLabel="<<"
          breakLabel="..."
          forcePage={currentPage}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          onPageChange={handlePageChange}
          className="paginate"
          activeClassName="active-page"
          previousClassName="previous-page"
          nextClassName="next-page"
        />
      </div>
    </>
  );
};

export default News;
