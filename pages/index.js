import Head from "next/head";
import News from "../comps/News";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className="search-bar">
        <label>Search</label>
        <input type="text" />
        <select>
          <option value="Date">Date</option>
          <option value="Popularity">Popularity</option>
        </select>
      </div>
      <div className="content">
        <News />
      </div>
    </div>
  );
}
