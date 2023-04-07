import axios from "axios";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, Grid } from "@mui/material";
import { EngineeringCollages } from "./components/Engineering/EngineeringCollages";
import DrawerComp from "./components/Header/DrawerComp";
import DrawerAppBar from "./components/Header/header";
import { SideBar } from "./components/Header/Sidebar";
import { useState, useEffect } from "react";
import Givedata from "./components/try/Givedata";
import GetInfromation from "./components/ResumeBuilder/GetInformation";
function App() {
  return (
    <>
     
    {/* <DrawerAppBar/> */}
    <GetInfromation/>
    </>
  );
}

export default App;
