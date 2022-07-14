const CommentCard = (comment) => {
  if (!comment.comment.text) return null;
  const commentText = comment.comment.text
    .replaceAll("<p>", " ")
    .replaceAll("</p>", " ")
    .replaceAll("<a>", " ")
    .replaceAll("</a>", " ")
    .replaceAll("&#x2F;", " ")
    .replaceAll("<a href=", " ")
    .replaceAll("rel=", " ")
    .replaceAll(">", " ")
    .replaceAll("nofollow", " ")
    .replaceAll('"', "")
    .replaceAll("&quot;", " ")
    .replaceAll("=", "")
    .replaceAll("https:", "")
    .replaceAll("www.", "www. ")
    .replaceAll(".com", " .com ")
    .replaceAll("_", " _ ")
    .replaceAll("&amp;", " ")
    .replaceAll(".", " . ")
    .replaceAll("%", " ");

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
