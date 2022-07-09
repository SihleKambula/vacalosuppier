import { Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "../styles/Product.module.css";
export default function Product() {
  const images = [
    "/images/42 gears.png",
    "/images/honeywell.png",
    "/images/printronix.png",
    // "/images/star.png",
    "/images/urovo.jpg",
  ];

  const products = [
    {
      name: "42 Gears Software",
      image: "/images/PDC.webp",
      description:
        "42Gears Mobility Management Platform empowers IT teams to secure, monitor, and manage all kinds of endpoint devices from a cloud-based & centralised",
    },
    {
      name: "Honeywell AIDC",
      image: "/images/honeywell AIDC.webp",
      description:
        "From light-duty to ultra-rugged models – stationary and portable – to the printer software, media, service, and parts",
    },
    {
      name: "Honeywell POS",
      image: "/images/honeywell POS.webp",
      description:
        "Honeywell barcode readers are plug and play with industry-leading scan performance, making even the most difficult-to-read barcodes look good.",
    },
    {
      name: "Urovo",
      image: "/images/Urovo.webp",
      description:
        "UROVO provides the most professional POS terminal and other enterprise PDA android device solutions with efficient custom enterprise enabler software.",
    },
    {
      name: "Printronix",
      image: "/images/printronix copy.webp",
      description:
        "Rely on us to transform your enterprise with the industry’s most reliable thermal barcode printers.",
    },
    {
      name: "Stationary",
      image: "/images/stationary.jpg",
      description:
        "Please provide me with some copy right for your stationary section",
    },
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing={4}>
        {images.map((image, index) => (
          <Grid item md={3} key={index}>
            <Image
              src={image}
              width={200}
              height={70}
              className={styles.image}
            />
          </Grid>
        ))}
      </Grid>

      <div>
        <h1 style={{ fontSize: "3rem" }}>Our Products</h1>
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item md={4}>
              <Card key={index}>
                <CardMedia
                  component='img'
                  height='auto'
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {product.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
