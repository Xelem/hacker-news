import Link from "next/link";

const NewsCard = ({ article }) => {
  if (!article.title) return null;
  return (
    <Link href={`/news/${article.objectID}`}>
      <div className="news-card">
        <div className="info">
          <p>
            {article.title}
            <i>{article.author}</i>
          </p>
          <p>
            Created at: {article.created_at.split("T")[0]} ||{" "}
            {article.created_at.split("T")[1].slice(0, -5)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
