import Head from "next/head";
import About from "../components/About";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

//styling
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Vacalosuppliers</title>
        <meta name='description' content='Made by CreatrSi' />
        <link rel='icon' href='/Logo.jpg' />
      </Head>

      <header>
        <Navbar />
      </header>

      <main className={styles.main}>
        <Landing />
        <Product />
        <About />
      </main>

      <footer></footer>
    </div>
  );
}
