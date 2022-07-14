import axios from "axios";
import Head from "next/head";
import News from "../comps/News";
import { baseURL } from "../utils/constants";

export const getStaticProps = async () => {
  const { data } = await axios.get(baseURL);
  const { hits, nbPages } = data;

  return {
    props: { hits, nbPages },
  };
};

export default function Home({ hits, nbPages }) {
  return (
    <div>
      <Head>
        <title>Hacker News | Search</title>
      </Head>
      <News hits={hits} nbPages={nbPages} />
    </div>
  );
}
