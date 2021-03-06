import React from "react";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import styles from "../styles/Landing.module.css";
import { Box } from "@mui/material";
export default function Landing() {
  return (
    <Container maxWidth='lg' sx={{ my: 4 }} id='/'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Box>
            <Image src='/Logo.jpg' width={200} height={120} />
          </Box>
          <h1 style={{ fontSize: "2.5rem" }}>
            Meeting your printing needs is our tradition
          </h1>
          <p style={{ fontSize: "1.2rem" }}>
            Vacalosuppliers listen to your unique printing needs to make sure
            that we meet and exceed your present and future expectations, while
            saving you time and money.
          </p>
          <Link href='#quote'>
            <button
              style={{
                padding: "10px 10px",
                border: "none",
                backgroundColor: "#0F243F",
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
        <Grid item xs={12} md={7}>
          <Image
            style={{ borderRadius: "10px" }}
            src='/images/about_us2.jpg'
            width={700}
            height={500}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
