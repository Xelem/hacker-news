import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import News from "../comps/News";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [searchFilter, setSearchFilter] = useState("search_by_date?");
  const [searchParam, setSearchParam] = useState("tags");
  const [baseUrl, setBaseUrl] = useState(
    "https://hn.algolia.com/api/v1/search_by_date?tags=front_page"
  );
  const [query, setQuery] = useState("front_page");
  const setQueryUrl = () => {
    setBaseUrl(
      `https://hn.algolia.com/api/v1/${searchFilter}${searchParam}=${query}`
    );
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
              setQuery(e.target.value);
              setSearchParam("query");
            }}
          />
          <button onClick={setQueryUrl}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <label className="sort">Sort By:</label>
        <div className="filter">
          <label htmlFor="date">
            Date
            <input
              type="radio"
              name="filter"
              id="date"
              value="date"
              defaultChecked
              onFocus={(e) => {
                setSearchFilter("search_by_date?");
                setQueryUrl();
              }}
            />
          </label>
          <label htmlFor="relevance">
            Relevance
            <input
              type="radio"
              name="filter"
              id="relevance"
              value="relevance"
              onFocus={(e) => {
                setSearchFilter("search?");
                setQueryUrl();
              }}
            />
          </label>
        </div>
      </div>
      <div className="content">
        <News baseUrl={baseUrl} setBaseUrl={setBaseUrl} />
      </div>
    </div>
  );
}
