import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import styles from "../styles/Quote.module.css";
export default function Quote() {
  return (
    <>
      <h1>Get A Quote</h1>
      <div className={styles.container}>
        <Grid container>
          <Grid item md={6} className={styles.form}>
            <div>
              <TextField id='outlined-required' label='Full Name' />
            </div>
            <br />
            <div>
              <TextField id='outlined-required' label='Email' />
            </div>
            <br />
            <div>
              <TextField id='outlined-required' label='Comment' />
            </div>

            <Button>Submit</Button>
          </Grid>
          <Grid item md={6}>
            <Image src='/images/quote.jpg' width={600} height={400} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
