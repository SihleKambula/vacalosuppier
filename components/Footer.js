import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "../styles/Footer.module.css";
export default function Footer() {
  const socialIcons = [
    {
      icon: <WhatsAppIcon />,
      value: "067 685 7743",
      link: "https://wa.me/+27676857743",
    },
    {
      icon: <EmailIcon />,
      value: "valenciam@vacalosuppliers.co.za",
      link: "mailto:valenciam@vacalosuppliers.co.za",
    },
    {
      icon: <FacebookIcon />,
      value: "vacalosuppier",
      link: "https:facebook.com",
    },
    {
      icon: <InstagramIcon />,
      value: "@vacalosuppier",
      link: "https:instagram.com",
    },
  ];
  return (
    <Container
      maxWidth='xl'
      sx={{ backgroundColor: "#0F243F", color: "#ffffff", mt: 4 }}
      id='contact'
    >
      <Container maxWidth='md'>
        <Typography
          variant='h1'
          sx={{
            fontSize: { xs: "2.8rem", md: "4rem" },
            fontFamily: "Quicksand",
            fontWeight: "700",
          }}
        >
          Contact details
        </Typography>
        <Grid container>
          <Grid item xs={12}>
            {socialIcons.map((icon, index) => (
              <a href={icon.link} key={index} style={{ color: "white" }}>
                <div className={styles.socialIcons}>
                  {icon.icon}
                  <p className={styles.value}>{icon.value}</p>
                </div>
              </a>
            ))}
          </Grid>
        </Grid>
        <p style={{ textAlign: "center", paddingBottom: "10px" }}>
          &copy; Vacalosuppier
        </p>
      </Container>
    </Container>
  );
}
