import Image from "next/image";
import Link from "next/link";
import useFetch from "./hooks/useFetch";

const News = ({ baseUrl }) => {
  const { data: newsList, isPending, error } = useFetch(baseUrl);

  return (
    <>
      <div className="news">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {newsList &&
          newsList.map((news) => (
            <>
              <div className="news-card" key={news.objectID}>
                <Image
                  className="image"
                  src={news.title ? "/story.png" : "/comment.png"}
                  alt="Plain white image"
                  width="300"
                  height="200"
                ></Image>
                <p>
                  {news.title || `${news.comment_text.slice(0, 40)}...`}-{" "}
                  <i>{news.author}</i>
                </p>
                <div className="info">
                  <Link href={`/news/${news.objectID}`}>
                    <button>Read more</button>
                  </Link>
                  <p>
                    {news.created_at.split("T")[0]} ||{" "}
                    {news.created_at.split("T")[1].slice(0, -5)}
                  </p>
                </div>
              </div>
            </>
          ))}
      </div>
      <div className="see-more">
        {newsList && <p className="view-more">View more...</p>}
      </div>
    </>
  );
};

export default News;
