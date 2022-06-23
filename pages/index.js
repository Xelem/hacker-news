import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import News from "../comps/News";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [baseUrl, setBaseUrl] = useState(
    "https://hn.algolia.com/api/v1/search_by_date?tags=front_page"
  );

  return (
    <div>
      <Head>
        <title>Hacker News | Search</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className="search">
        <label>Search</label>
        <div className="search-bar">
          <input type="text" />
          <button>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <select>
          <option value="Date">Date</option>
          <option value="Popularity">Popularity</option>
        </select>
      </div>
      <div className="content">
        <News />
      </div>
    </div>
  );
}
