import { useState } from "react";
import Head from "next/head";
import News from "../comps/News";

export default function Home() {
  const [baseUrl, setBaseUrl] = useState(
    "https://hn.algolia.com/api/v1/search?tags=front_page"
  );
  const [searchParam, setSearchParam] = useState("tags=");
  const [query, setQuery] = useState("front_page");
  const [pageNum, setPageNum] = useState(0);
  const setQueryUrl = () => {
    setBaseUrl(
      `https://hn.algolia.com/api/v1/search?${searchParam}${query}page=${pageNum}`
    );
    console.log(baseUrl);
  };

  return (
    <div>
      <Head>
        <title>Hacker News | Search</title>
      </Head>
      <div className="search">
        <label>Search</label>
        <div className="search-bar">
          <input
            type="text"
            onChange={(e) => {
              setQuery(`${e.target.value}?`);
              setSearchParam("query=");
            }}
          />
          <button onClick={setQueryUrl}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="content">
        <News
          baseUrl={baseUrl}
          pageNum={pageNum}
          setPageNum={setPageNum}
          setQueryUrl={setQueryUrl}
        />
      </div>
    </div>
  );
}
