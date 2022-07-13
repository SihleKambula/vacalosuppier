import { Button, Typography, Container, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import styles from "../styles/Quote.module.css";
export default function Quote() {
  return (
    <>
      <Container maxWidth='lg' sx={{ mt: 10 }} id='quote'>
        <Grid container>
          <Grid item xs={12} md={6} className={styles.form}>
            <Typography
              variant='h1'
              sx={{
                fontSize: { xs: "2.8rem", md: "4rem" },
                fontFamily: "Quicksand",
                fontWeight: "700",
                color: "white",
                my: 4,
              }}
            >
              Get A Quote
            </Typography>

            <form
              name='contact'
              action='/success'
              method='POST'
              data-netlify='true'
            >
              <div>
                <TextField
                  id='outlined-required'
                  label='Full Name'
                  name='Full Name'
                  variant='filled'
                  sx={{ backgroundColor: "white", borderRadius: "10px" }}
                  fullWidth
                />
              </div>
              <br />
              <div>
                <TextField
                  id='outlined-required'
                  label='Email'
                  name='email'
                  variant='filled'
                  sx={{ backgroundColor: "white", borderRadius: "10px" }}
                  fullWidth
                />
              </div>
              <br />
              <div>
                <TextField
                  id='outlined-required'
                  label='Comment'
                  variant='filled'
                  name='comment'
                  sx={{ backgroundColor: "white", borderRadius: "10px" }}
                  fullWidth
                />
              </div>
              <br />
              <Button type='submit'>Submit</Button>
            </form>
          </Grid>
          <Grid item md={6}>
            <Image src='/images/quote.jpg' width={600} height={500} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
