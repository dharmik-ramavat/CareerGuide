import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import hero from "../../assets/HeroImage.png";
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
        }}
      >
        <img src={hero} alt="Welcome To Carer" />
      </Box>
      <Grid container spacing={5}>
        <Grid item xs="12" sm="12" md="4" lg="3" >
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
                After 10th
              </Typography>
              <Typography sx={{ fontSize: "16px" }}>
                The MBA is the world’s most popular graduate management degree.
                Employers love it and students can’t get enough of it. Thousands
                of ambitious professionals apply to different types of MBA
                programs each year. As a generalist degree, an MBA program gives
                you fundamental management knowledge, meaning you’ll get a
                holistic view of business across areas like marketing, finance,
                and accounting, all while developing those vital soft skills and
                leadership skills. Famous MBA alumni include CEOs of
                multinational companies, successful entrepreneurs, and former
                Presidents. George W. Bush, Michael Bloomberg, Tim Cook, Satya
                Nadella, Sundar Pichai, Sheryl Sandberg – they all have MBAs.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>Explore</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs="12" sm="12" md="4" lg="3">
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
                After 10th
              </Typography>
              <Typography sx={{ fontSize: "16px" }}>
                The MBA is the world’s most popular graduate management degree.
                Employers love it and students can’t get enough of it. Thousands
                of ambitious professionals apply to different types of MBA
                programs each year. As a generalist degree, an MBA program gives
                you fundamental management knowledge, meaning you’ll get a
                holistic view of business across areas like marketing, finance,
                and accounting, all while developing those vital soft skills and
                leadership skills. Famous MBA alumni include CEOs of
                multinational companies, successful entrepreneurs, and former
                Presidents. George W. Bush, Michael Bloomberg, Tim Cook, Satya
                Nadella, Sundar Pichai, Sheryl Sandberg – they all have MBAs.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>Explore</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs="12" sm="12" md="4" lg="3">
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
                After 10th
              </Typography>
              <Typography sx={{ fontSize: "16px" }}>
                The MBA is the world’s most popular graduate management degree.
                Employers love it and students can’t get enough of it. Thousands
                of ambitious professionals apply to different types of MBA
                programs each year. As a generalist degree, an MBA program gives
                you fundamental management knowledge, meaning you’ll get a
                holistic view of business across areas like marketing, finance,
                and accounting, all while developing those vital soft skills and
                leadership skills. Famous MBA alumni include CEOs of
                multinational companies, successful entrepreneurs, and former
                Presidents. George W. Bush, Michael Bloomberg, Tim Cook, Satya
                Nadella, Sundar Pichai, Sheryl Sandberg – they all have MBAs.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>Explore</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
