import Footer from "./Footer";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <Link href="/">
          <h1>Hacker News</h1>
        </Link>
      </header>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
