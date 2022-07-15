const CommentCard = (comment) => {
  if (!comment.comment.text) return null;
  const commentText = comment.comment.text
    .replace(/<p>/g, " ")
    .replace("</p>", " ")
    .replace(/<a>/g, " ")
    .replace("</a>", " ")
    .replace(/&#x2F;/g, " ")
    .replace(/<a href=/g, " ")
    .replace(/rel=/g, " ")
    .replace(/>/g, " ")
    .replace(/nofollow/g, " ")
    .replace(/"/g, "")
    .replace(/&quot;/g, " ")
    .replace(/=/g, "")
    .replace(/https:/g, "")
    .replace(/www./g, "www. ")
    .replace(/.com/g, " .com ")
    .replace(/_/g, " _ ")
    .replace(/&amp;/g, " ")
    .replace(/%/g, " ")
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
