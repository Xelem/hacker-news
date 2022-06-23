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
      <div className="search-bar">
        <label>Search</label>
        <input type="text" />
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
