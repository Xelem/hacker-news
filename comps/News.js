import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const News = () => {
  const baseUrl = "http://hn.algolia.com/api/v1/";

  return (
    <>
      <div className="news">
        <div className="news-card">
          <Image
            className="image"
            src="/white.jpeg"
            alt="Plain white image"
            width="300"
            height="200"
          ></Image>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            amet soluta ducimus, dolorum sint tempora?
          </p>
          <div className="info">
            <Link href="/news/:id">
              <button>Read more</button>
            </Link>
            <p>5 mins ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
