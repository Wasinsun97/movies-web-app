import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MovieFlix</title>
        {/* <link rel="stylesheet" href="" /> */}
      </Head>
      <Header />
      <Nav />
    </div>
  );
}
