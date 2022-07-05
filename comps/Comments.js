import Link from "next/link";
import CommentCard from "./CommentCard";

const Comments = ({ item }) => {
  return (
    <>
      <div className="title">
        <Link href={item.url}>
          <h1>&quot;{item.title}&#34;</h1>
        </Link>
        <div className="details">
          <p>
            <i>-By {item.author}</i>
          </p>
          <p>
            <i>{item.points} points</i>
          </p>
          <p>
            <i>
              Created At: {item.created_at.split("T")[0]} ||{" "}
              {item.created_at.split("T")[1].slice(0, -5)}
            </i>
          </p>
        </div>
      </div>
      <div className="comments">
        <h3>Comments</h3>
        {console.log(item)}
        {item.children.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </>
  );
};

export default Comments;
