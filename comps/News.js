import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const News = () => {
  const [baseUrl, setBaseUrl] = useState(
    "https://hn.algolia.com/api/v1/search_by_date?tags=front_page"
  );

  const [newsList, setNewsList] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(baseUrl);
      const data = await res.data;

      setNewsList(data.hits);
    };
    getData();
  }, []);

  return (
    <>
      <div className="news">
        {newsList &&
          newsList.map((news) => (
            <div className="news-card" key={news.objectID}>
              <Image
                className="image"
                src="/white.jpeg"
                alt="Plain white image"
                width="300"
                height="200"
              ></Image>
              <p>
                {news.title}- <i>{news.author}</i>
              </p>
              <div className="info">
                <Link href="/news/:id">
                  <button>Read more</button>
                </Link>
                <p>
                  {news.created_at.split("T")[0]} ||{" "}
                  {news.created_at.split("T")[1].slice(0, -5)}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default News;
