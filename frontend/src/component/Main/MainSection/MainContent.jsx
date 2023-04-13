import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import hero from "../../../assets/HeroImage.png";
import "../main.css"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


export default function MainContent() {
  return (
    <div  style={{paddingTop:"120px"}}>
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
              It’s important to assess your interest and aptitude, and match up with the understanding of the requirements of the career. If you choose a stream merely based on your interests and do not possess the right skills and abilities, it may cause a problem in the future. 
              </Typography>
            </CardContent>
            <CardActions style={{display: "flex", alignItems: "center" , justifyContent : "center"}}>
            <Link to='after10th'><Button variant="contained">Explore</Button></Link>
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
              ‘What after 12th ?’ is the common question among the generation of
          students studying in 12th standard. Every year the questions hit lakhs
          of students in India and abroad. The confusion prevails among them
          concerning career prospects, job opportunities.
              </Typography>
            </CardContent>
            <CardActions style={{display: "flex", alignItems: "center" , justifyContent : "center"}}>
            <Link to='after12th'><Button variant="contained">Explore</Button></Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs="12" sm="12" md="4" lg="3">
          <Card variant="outlined" className="card-items">
            <CardContent>
              <Typography sx={{ fontSize: "30px", fontWeight: "bold", padding:"10px" }}>
                MBA 
              </Typography>
              <Typography sx={{ fontSize: "16px",textAlign:"justify", margin:"10px" }}>
              A Master of Business Administration (MBA; also Master in Business Administration) is a postgraduate degree focused on business administration. The core courses in an MBA program cover various areas of business administration such as accounting, applied statistics.
              </Typography>
            </CardContent>
            <CardActions style={{display: "flex", alignItems: "center" , justifyContent : "center"}}>
            <Link to='mba'><Button variant="contained">Explore</Button></Link>
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
              Engineering is a discipline dedicated to problem solving. Our built environment and infrastructure, the devices we use to communicate, the processes that manufacture our medicines, have all been designed, assembled or managed by an engineer.
          </Typography>
            </CardContent>
            <CardActions style={{display: "flex", alignItems: "center" , justifyContent : "center"}}>
              <Link to='engineering'><Button variant="contained">Explore</Button></Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
