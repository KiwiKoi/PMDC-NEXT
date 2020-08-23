import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";
export default function Home() {
  return (
    <div>
      <Head>
        <title>PMDC</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Landing />
    </div>
  );
}
