const CommentCard = (comment) => {
  if (!comment.comment.text) return null;
  return (
    <div className="comment-card">
      <p>{comment.comment.text}</p>
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
