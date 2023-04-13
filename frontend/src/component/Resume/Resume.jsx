import React from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Resume() {
  const [inputData, setInputData] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:80/api/resume/getdetail")
      .then((response) => {
        setInputData(response.data);
        // console.log(inputData);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {inputData !== undefined
        ? inputData.map((user) => (
            <Box
              sx={{ display: "flex", flexDirection: "row", marginTop: "40px" }}
            >
              <Box
                sx={{
                  width: 250,
                  height: 1000,
                  backgroundColor: "#0B2447",
                  color: "white",
                  padding: "20px",
                }}
              >
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    backgroundColor: "white",
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={user.image}
                    alt="User"
                  />
                </Box>

                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                  }}
                >
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                    {user.name}
                  </h2>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >
                    <LocationOnIcon style={{ marginRight: "5px" }} />
                    {user.address}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >
                    <CallIcon style={{ marginRight: "5px" }} />
                    {user.mobile}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >
                    <EmailIcon style={{ marginRight: "5px" }} />
                    {user.email}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >
                    <LinkedInIcon style={{ marginRight: "5px" }} />
                    {user.linkedin}
                  </Typography>
                  <Typography sx={{ display: "flex", alignItems: "left" }}>
                    <GitHubIcon style={{ marginRight: "5px" }} />
                    {user.github}
                  </Typography>

                  <h2
                    style={{
                      marginTop: "30px",
                      fontSize: "1.2rem",
                      marginBottom: "10px",
                    }}
                  >
                    Skills
                  </h2>
                  <Typography>{user.skill}</Typography>
                  <h2
                    style={{
                      marginTop: "30px",
                      fontSize: "1.2rem",
                      marginBottom: "10px",
                    }}
                  >
                    References
                  </h2>
                  <Typography>
                    {user.rname1}
                    <br />
                    {user.raddress1}
                    <br />
                    {user.rmobile1}
                    <br />
                    {user.rname2}
                    <br />
                    {user.raddress2}
                    <br />
                    {user.rmobile2}
                    <br />
                  </Typography>
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 500,
                  height: 1000,
                  backgroundColor: "#19376D",
                  color: "white",
                  padding: "20px",
                }}
              >
                <Typography>
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" , display: "flex",
                      alignItems: "left"}}>
                    Career Objective
                  </h2>
                  <Typography sx={{ marginBottom: "20px",display: "flex",
                      alignItems: "left" }}>
                    {user.carrier}
                  </Typography>
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", display: "flex",
                      alignItems: "left" }}>
                    Academic Details
                  </h2>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "20px",
                    }}
                  >
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.degree1}</Typography>
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.colleage1}</Typography>
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.year1}</Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.score1}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "20px",
                    }}
                  >
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.degree2}</Typography>
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.colleage2}</Typography>
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.year2}</Typography>
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.score2}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "20px",
                    }}
                  >
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.degree3}</Typography>
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.colleage3}</Typography>
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.year3}</Typography>
                   <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.score4}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "20px",
                    }}
                  >
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.degree4}</Typography>
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.colleage4}</Typography>
                   <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.year4}</Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.score4}</Typography>
                  </Box>
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" , display: "flex",
                      alignItems: "left" }}>
                    Projects
                  </h2>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "20px",
                    }}
                  >
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.project1}</Typography>
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.project2}</Typography>
                   <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.project3}</Typography>
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.project4}</Typography>
                  </Box>
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "20px",  display: "flex",
                      alignItems: "left"  }}>
                    Certificates
                  </h2>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "20px",
                    }}
                  >
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.certificate1}</Typography>
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.certificate2}</Typography>
                    <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.certificate3}</Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: "5px",
                    }}
                  >{user.certificate4}</Typography>
                  </Box>
                </Typography>
              </Box>
            </Box>
          ))
        : null}
    </div>
  );
}

export default Resume;
