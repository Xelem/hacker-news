import Head from "next/head";
import News from "../comps/News";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hacker News | Search</title>
      </Head>
      <News />
    </div>
  );
}
