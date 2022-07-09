import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import styles from "../styles/Quote.module.css";
export default function Quote() {
  return (
    <>
      <div className={styles.container}>
        <Grid container>
          <Grid item md={6} className={styles.form}>
            <h1 style={{ fontSize: "3rem", color: "white" }}>Get A Quote</h1>
            <div>
              <TextField
                id='outlined-required'
                label='Full Name'
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
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
                fullWidth
              />
            </div>
            <br />
            <Button>Submit</Button>
          </Grid>
          <Grid item md={6}>
            <Image src='/images/quote.jpg' width={600} height={500} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
