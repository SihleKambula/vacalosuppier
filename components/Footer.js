import { Grid } from "@mui/material";
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
      value: "012 456 7891",
      link: "https://wa.me/0740872680",
    },
    {
      icon: <EmailIcon />,
      value: "email.com",
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
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 style={{ fontSize: "3rem" }}>Contact details</h1>
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
      </div>
    </div>
  );
}
