const CommentCard = (comment) => {
  if (!comment.comment.text) return null;
  const commentText = comment.comment.text
    .replace("<p>", " ")
    .replace("</p>", " ")
    .replace("<a>", " ")
    .replace("</a>", " ")
    .replace("&#x2F;", " ")
    .replace("<a href=", " ")
    .replace("rel=", " ")
    .replace(">", " ")
    .replace("nofollow", " ")
    .replace('"', "")
    .replace("&quot;", " ")
    .replace("=", "")
    .replace("https:", "")
    .replace("www.", "www. ")
    .replace(".com", " .com ")
    .replace("_", " _ ")
    .replace("&amp;", " ")
    .replace(".", " . ")
    .replace("%", " ")
    .replace("/", " / ");

  return (
    <div className="comment-card">
      <p>{commentText}</p>
      <div className="comment-details">
        <p>
          <i>-By {comment.comment.author}</i>
        </p>
        <p>
          <i>
            Created At: {comment.comment.created_at.split("T")[0]} ||{" "}
            {comment.comment.created_at.split("T")[1].slice(0, -5)}
          </i>
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
