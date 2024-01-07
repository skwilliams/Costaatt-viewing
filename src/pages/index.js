import Head from "next/head";
import Landing from "@/components/HomeComponents/Home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Costaatt | Home </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Landing />
    </div>
  );
}
