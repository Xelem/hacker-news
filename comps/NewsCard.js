import Link from "next/link";
import { useContext } from "react";
import { IDContext } from "./contexts/IDContext";

const NewsCard = ({ article }) => {
  const { id, setID } = useContext(IDContext);
  console.log(id);

  const setObjectID = (e) => {
    setID(article.objectID);
  };

  if (!article.title) return null;
  return (
    <Link href={`/news/${article.objectID}`}>
      <div className="news-card" onClick={setObjectID}>
        <div className="info">
          <p>
            {article.title}
            <i> - {article.author}</i>
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
