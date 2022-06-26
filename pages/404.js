import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="showcase">
        <h1>404</h1>
        <p>This is not the page you&apos;re looking for.</p>
      </div>
      <div className="redirect">
        <Link href={"/"}>
          <a>
            Go back to the <span>Homepage</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
