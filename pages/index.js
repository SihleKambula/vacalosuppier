import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Quote from "../components/Quote";
import ResponsiveNavbar from "../components/ResponsiveNavbar";

//styling
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Vacalosuppliers</title>
        <meta name='description' content='Made by CreatrSi' />
        <link rel='icon' href='/Logo.jpg' />
        <meta name='keywords' content='supplier, printers, POS' />
      </Head>

      <header>
        {/* <Navbar /> */}
        <ResponsiveNavbar />
      </header>

      <main className={styles.main}>
        <Landing />
        <Product />
        <About />
        <Quote />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
