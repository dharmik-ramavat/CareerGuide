import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import hero from "../../assets/HeroImage.png";
import "../main.css"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";


export default function MainContent() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
          maxWidth:"1350", maxHeight:"800"
        }}
      >
        <img className="imghero" src={hero} alt="Welcome To Carer" />
      </Box>
      <Grid style={{padding : "30px"}}  container spacing={5}>
        <Grid item xs="12" sm="12" md="4" lg="3" >
          <Card variant="outlined" className="card-items">
            <CardContent>
              <Typography sx={{ fontSize: "30px", fontWeight: "bold" , padding:"10px" }}>
                After 10th
              </Typography>
              <Typography sx={{ fontSize: "16px" , textAlign:"justify", margin:"10px" }}>
                The MBA is the world’s most popular graduate management degree.
                Employers love it and students can’t get enough of it. Thousands
                of ambitious professionals apply to different types of MBA
                programs each year. 
              </Typography>
            </CardContent>
            <CardActions style={{display: "flex", alignItems: "center" , justifyContent : "center"}}>
              <Button variant="contained">Explore</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs="12" sm="12" md="4" lg="3" >
          <Card variant="outlined" className="card-items">
            <CardContent>
              <Typography sx={{ fontSize: "30px", fontWeight: "bold" , padding:"10px" }}>
                After 12th
              </Typography>
              <Typography sx={{ fontSize: "16px", textAlign:"justify", margin:"10px" }}>
                The MBA is the world’s most popular graduate management degree.
                Employers love it and students can’t get enough of it. Thousands
                of ambitious professionals apply to different types of MBA
                programs each year. 
              </Typography>
            </CardContent>
            <CardActions style={{display: "flex", alignItems: "center" , justifyContent : "center"}}>
              <Button variant="contained">Explore</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs="12" sm="12" md="4" lg="3">
          <Card variant="outlined" className="card-items">
            <CardContent>
              <Typography sx={{ fontSize: "30px", fontWeight: "bold", padding:"10px" }}>
                Diploma 
              </Typography>
              <Typography sx={{ fontSize: "16px",textAlign:"justify", margin:"10px" }}>
                The MBA is the world’s most popular graduate management degree.
                Employers love it and students can’t get enough of it. Thousands
                of ambitious professionals apply to different types of MBA
                programs each year. 
              </Typography>
            </CardContent>
            <CardActions style={{display: "flex", alignItems: "center" , justifyContent : "center"}}>
              <Button variant="contained">Explore</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs="12" sm="12" md="4" lg="3">
          <Card variant="outlined" className="card-items">
            <CardContent>
              <Typography sx={{ fontSize: "30px", fontWeight: "bold", padding:"10px" }}>
                Engineering
              </Typography>
              <Typography sx={{ fontSize: "16px" , textAlign:"justify" , margin:"10px" }}>
                The MBA is the world’s most popular graduate management degree.
                Employers love it and students can’t get enough of it. Thousands
                of ambitious professionals apply to different types of MBA
                programs each year. 
              </Typography>
            </CardContent>
            <CardActions style={{display: "flex", alignItems: "center" , justifyContent : "center"}}>
              <Button variant="contained">Explore</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
