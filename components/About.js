import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";
export default function About() {
  return (
    <Container maxWidth='lg' sx={{ my: 10 }}>
      <Typography
        variant='h1'
        sx={{
          fontSize: { xs: "2.8rem", md: "4rem" },
          fontFamily: "Quicksand",
          fontWeight: "700",
          my: 4,
        }}
      >
        About us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <p>
            Vacalo Suppliers is a South African printing company that supplies
            barcode scanners, mobile computers, labels and POS printers, line
            and serial impact printers, as well as consumables. Vacalo Suppliers
            is in partnership with well known vendors for RFID, POS and Auto-ID
            hardware and software solutions.
          </p>
          <p>
            Vacalo Suppliers ensures that its customers are supplied with the
            best printing products that are suitable to their needs and putting
            in mind sustainable continued grow and development of every
            customer.
          </p>
          We supply printing solution to both the industrial and office area at
          an affordable price.We distribute a leading range of office equipment
          including Line, Laser, Thermal and dot Matrix printers.
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ width: "100%" }}>
            <Image
              style={{ borderRadius: "15px" }}
              src='/images/about us.jpg'
              width='100%'
              height={60}
              layout='responsive'
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
