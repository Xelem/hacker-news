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
            <Link href={`/news/${news.objectID}`} key={news.objectID}>
              <div className="news-card">
                <Image
                  className="image"
                  src={news.title ? "/story.png" : "/comment.png"}
                  alt="Plain white image"
                  width="150"
                  height="100"
                ></Image>
                <div className="info">
                  <p>
                    {news.title || `${news.comment_text.slice(0, 40)}...`}-{" "}
                    <i>{news.author}</i>
                  </p>
                  <p>
                    Created at: {news.created_at.split("T")[0]} ||{" "}
                    {news.created_at.split("T")[1].slice(0, -5)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div className="see-more">
        {newsList && <p className="view-more">View more...</p>}
      </div>
    </>
  );
};

export default News;
