import React from "react";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import styles from "../styles/Landing.module.css";
export default function Landing() {
  return (
    <div className={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Image
            style={{ borderRadius: "10px" }}
            src='/images/about_us2.jpg'
            width={700}
            height={500}
          />
        </Grid>

        <Grid item xs={12} md={5}>
          <h1 style={{ fontSize: "2.5rem" }}>
            Meeting your printing needs is our tradition
          </h1>
          <p style={{ fontSize: "1.2rem" }}>
            We listen to your unique printing needs to make sure that we meet
            and exceed your present and future expectations, while saving you
            time and money.
          </p>
          <Link href='/'>
            <button
              style={{
                padding: "10px 10px",
                border: "none",
                backgroundColor: "blue",
                color: "white",
                borderRadius: "5px",
                fontSize: "1.2rem",
                marginTop: "10px",
              }}
            >
              Get A Quote
            </button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
