import { Button, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import styles from "../styles/Product.module.css";
export default function Product() {
  const images = [
    "/images/42 gears.png",
    "/images/honeywell.png",
    "/images/printronix.png",
    "/images/star.png",
    "/images/urovo.jpg",
    "/images/bartender.png",
    "/images/compuprint.png",
    "/images/nicelabel.png",
  ];

  const products = [
    {
      name: "42 Gears Software",
      image: "/images/PDC.webp",
      description:
        "42Gears Mobility Management Platform empowers IT teams to secure, monitor, and manage all kinds of endpoint devices from a cloud-based & centralised",
      products: [
        "MOBILE DEVICE MANAGEMENT",
        "VR DEVICE MANAGEMENT",
        "THINGS MANAGEMENT",
      ],
    },
    {
      name: "Honeywell",
      image: "/images/honeywell AIDC.webp",
      description:
        "From light-duty to ultra-rugged models – stationary and portable – to the printer software, media, service, and parts",
      products: [
        "Honeywell CK65 Handheld Computer",
        "Honeywell EDA5 Handheld Computer",
        "Honeywell Dolphin CT60 Handheld Computer",
      ],
    },
    {
      name: "Star",
      image: "/images/honeywell POS.webp",
      description:
        "Star manufactures a diverse range of receipt printers giving Star customers more choicethan ever before together with features that precisely meet individual needs.",
      products: ["Mc-Print3", "SP700", "TSP100"],
    },
    {
      name: "Urovo",
      image: "/images/Urovo.webp",
      description:
        "UROVO provides the most professional POS terminal and other enterprise PDA android device solutions with efficient custom enterprise enabler software.",
      products: [
        "Urovo P8100 Tablet Series",
        "Urovo U2 Wearable Computer",
        "Urovo R7 Series Wireless Ring scanner",
      ],
    },
    {
      name: "Printronix",
      image: "/images/printronix copy.webp",
      description:
        "Rely on us to transform your enterprise with the industry’s most reliable thermal barcode printers.",
      products: ["T8000 Printer", "T6000e Printer", "T4000 Printer"],
    },
    {
      name: "Stationary",
      image: "/images/stationary.jpg",
      description:
        "Please provide me with some copy right for your stationary section",
      products: ["Mc-Print3", "SP700", "TSP100"],
    },
  ];

  const [expanded, setExpanded] = useState(false);
  const [same, setSame] = useState(null);
  const handleExpandClick = (index) => {
    setExpanded(!expanded);
    setSame(index);
  };
  return (
    <Container maxWidth='lg' sx={{ my: 10 }} id='products'>
      <Grid container spacing={4}>
        {images.map((image, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Image
              src={image}
              width={180}
              height={70}
              className={styles.image}
            />
          </Grid>
        ))}
      </Grid>

      <div>
        <Typography
          variant='h1'
          sx={{
            fontSize: { xs: "2.8rem", md: "4rem" },
            fontFamily: "Quicksand",
            fontWeight: "700",
            my: 4,
          }}
        >
          Our Products
        </Typography>
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardMedia
                  component='img'
                  height='250'
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
                <CardActions>
                  <Button
                    variant='contained'
                    sx={{
                      backgroundColor: "#0F243F",
                      hover: { backgroundColor: "red" },
                    }}
                    onClick={() => handleExpandClick(index)}
                  >
                    <Typography variant='p'>View more</Typography>
                  </Button>
                </CardActions>
                <Collapse
                  in={same == index ? expanded : false}
                  timeout='auto'
                  unmountOnExit
                >
                  <CardContent>
                    {product.products.map((prod, index) => (
                      <li key={index}>{prod}</li>
                    ))}
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}
