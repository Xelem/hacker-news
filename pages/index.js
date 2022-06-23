import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import News from "../comps/News";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const res = await axios.get(
    "https://hn.algolia.com/api/v1/search_by_date?tags=front_page"
  );
  const data = await res.data;

  return {
    props: { news: data.hits },
  };
};

export default function Home({ news }) {
  const [baseUrl, setBaseUrl] = useState(
    "https://hn.algolia.com/api/v1/search_by_date?tags=front_page"
  );

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get(baseUrl);
  //     const data = await res.data;

  //     console.log(data.hits);
  //   };
  //   getData();
  // }, [baseUrl]);

  return (
    <div>
      <Head>
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
        <News>{news}</News>
      </div>
    </div>
  );
}
