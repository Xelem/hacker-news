import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const News = ({ children }) => {
  const [baseUrl, setBaseUrl] = useState(
    "https://hn.algolia.com/api/v1/search_by_date?tags=front_page"
  );

  return (
    <>
      <div className="news">
        {children.map((child) => (
          <div className="news-card" key={child.objectID}>
            <Image
              className="image"
              src="/white.jpeg"
              alt="Plain white image"
              width="300"
              height="200"
            ></Image>
            <p>
              {child.title}- <i>{child.author}</i>
            </p>
            <div className="info">
              <Link href="/news/:id">
                <button>Read more</button>
              </Link>
              <p>
                {child.created_at.split("T")[0]} ||{" "}
                {child.created_at.split("T")[1].slice(0, -5)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
