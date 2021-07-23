import Head from "next/head";
import styles from "../styles/Home.module.css";
import Register from "../comps/Register";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Learnovate || Edtech</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="An Edtech company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Register />
    </div>
  );
}
