import Link from "next/link";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
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
        <a href='https://facebook.com' target='_blank'>
          <FacebookIcon sx={{ color: "gray", fontSize: 30 }} />
        </a>

        <a href='https://instagram.com' target='_blank'>
          <InstagramIcon sx={{ color: "gray", fontSize: 30 }} />
        </a>
      </div>
    </nav>
  );
}
