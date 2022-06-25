const Details = () => {
  return (
    <div className="news-details">
      <div className="title">
        <h1>&quot;Steve Jobs has passed away&#34;</h1>
        <div className="details">
          <p>
            <i>-By Mooray</i>
          </p>
          <p>
            <i>400 points</i>
          </p>
          <p>
            <i>Created At: 2006-10-09</i>
          </p>
        </div>
      </div>
      <div className="comments">
        <h3>Comments</h3>
        <div className="comment-card">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            accusantium delectus possimus error quaerat ab modi repellat, rerum
            dignissimos. Non deleniti nostrum exercitationem sapiente cumque ea
            commodi dolorum velit quibusdam dolore nam quam magnam dolores
            corrupti impedit, est fugit iusto.
          </p>
          <div className="comment-details">
            <p>
              <i>-By Jonny</i>
            </p>
            <p>
              <i>10 points</i>
            </p>
            <p>
              <i>Created At: 2006-10-09</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
