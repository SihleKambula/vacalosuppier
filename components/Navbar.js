import Link from "next/link";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src='/Logo.jpg' width={70} height={50} />
      </div>
      <ul className={styles.navlinks}>
        <li className={styles.links}>
          <Link href='#about'>About</Link>
        </li>
        <li className={styles.links}>
          <Link href='#products'>Products</Link>
        </li>
        <li className={styles.links}>
          <Link href='#quote'>Quote</Link>
        </li>
        <li className={styles.links}>
          <Link href='#contact'>Contact</Link>
        </li>
      </ul>
      <div className={styles.icons}>
        <a
          href='https://www.facebook.com/Vacalo-Suppliers-108134568635678'
          target='_blank'
          rel='noreferrer'
        >
          <FacebookIcon sx={{ color: "gray", fontSize: 30 }} />
        </a>

        <a href='https://wa.me/+27676857743' target='_blank' rel='noreferrer'>
          <WhatsAppIcon sx={{ color: "gray", fontSize: 30 }} />
        </a>
      </div>
    </nav>
  );
}
