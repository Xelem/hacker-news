import axios from "axios";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await axios.get(
    "https://hn.algolia.com/api/v1/search_by_date?tags=front_page"
  );
  const data = await res.data;
  const dataList = data.hits;

  const paths = dataList.map((news) => {
    return {
      params: { id: news.objectID.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await axios.get(
    `http://hn.algolia.com/api/v1/items/${params.id}`
  );

  const data = await res.data;

  return {
    props: data,
  };
};

const Details = (props) => {
  return (
    <div className="news-details">
      <div className="title">
        <Link href={props.url}>
          <h1>&quot;{props.title}&#34;</h1>
        </Link>
        <div className="details">
          <p>
            <i>-By {props.author}</i>
          </p>
          <p>
            <i>{props.points} points</i>
          </p>
          <p>
            <i>
              Created At: {props.created_at.split("T")[0]} ||{" "}
              {props.created_at.split("T")[1].slice(0, -5)}
            </i>
          </p>
        </div>
      </div>
      <div className="comments">
        <h3>Comments</h3>
        {props.children.map((comment) => (
          <div className="comment-card" key={comment.id}>
            <p>{comment.text}</p>
            <div className="comment-details">
              <p>
                <i>-By {comment.author}</i>
              </p>
              <p>
                <i>
                  Created At: {comment.created_at.split("T")[0]} ||{" "}
                  {comment.created_at.split("T")[1].slice(0, -5)}
                </i>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
